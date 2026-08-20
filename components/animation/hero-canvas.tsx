"use client";

import { useEffect, useRef } from "react";

/**
 * Escena 3D generativa del hero del home (Three.js puro, sin SSR).
 * Un blob de partículas que respira, rota lento y sigue apenas al mouse.
 * Usa el color --primary del tema, así que funciona en claro y oscuro.
 */
export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    import("three").then((THREE) => {
      if (disposed || !mountRef.current) return;

      const width = mount.clientWidth;
      const height = mount.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
      camera.position.z = 5.6;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
      renderer.setSize(width, height);
      mount.appendChild(renderer.domElement);

      const primary = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim();
      const color = new THREE.Color(primary || "#402940");

      const geometry = new THREE.IcosahedronGeometry(1.35, 12);
      const base = geometry.attributes.position.array.slice() as Float32Array;

      const material = new THREE.PointsMaterial({
        color,
        size: 0.018,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
      });
      const points = new THREE.Points(geometry, material);
      points.position.x = 1.4;
      scene.add(points);

      const shell = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.37, 2),
        new THREE.MeshBasicMaterial({
          color,
          wireframe: true,
          transparent: true,
          opacity: 0.07,
        }),
      );
      shell.position.x = 1.4;
      scene.add(shell);

      const pointer = { x: 0, y: 0 };
      const target = { x: 0, y: 0 };

      const onPointerMove = (event: PointerEvent) => {
        target.x = (event.clientX / window.innerWidth - 0.5) * 0.6;
        target.y = (event.clientY / window.innerHeight - 0.5) * 0.6;
      };
      window.addEventListener("pointermove", onPointerMove, { passive: true });

      const onResize = () => {
        if (!mountRef.current) return;
        const w = mountRef.current.clientWidth;
        const h = mountRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      let visible = true;
      const observer = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
        },
        { threshold: 0 },
      );
      observer.observe(mount);

      let frame = 0;
      const clock = new THREE.Clock();
      const position = geometry.attributes.position;

      const render = () => {
        frame = requestAnimationFrame(render);
        if (!visible || document.hidden) return;

        const time = clock.getElapsedTime();

        // Deformación orgánica: el blob "respira".
        for (let i = 0; i < position.count; i += 1) {
          const ix = i * 3;
          const x = base[ix];
          const y = base[ix + 1];
          const z = base[ix + 2];
          const wave =
            Math.sin(x * 1.6 + time * 0.7) * 0.07 +
            Math.sin(y * 2.1 + time * 0.5) * 0.06 +
            Math.sin(z * 1.4 + time * 0.9) * 0.05;
          const scale = 1 + wave;
          position.setXYZ(i, x * scale, y * scale, z * scale);
        }
        position.needsUpdate = true;

        pointer.x += (target.x - pointer.x) * 0.05;
        pointer.y += (target.y - pointer.y) * 0.05;

        points.rotation.y = time * 0.08 + pointer.x;
        points.rotation.x = pointer.y * 0.8;
        shell.rotation.copy(points.rotation);

        renderer.render(scene, camera);
      };
      render();

      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("resize", onResize);
        geometry.dispose();
        material.dispose();
        shell.geometry.dispose();
        (shell.material as { dispose: () => void }).dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      };
    });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

export default HeroCanvas;
