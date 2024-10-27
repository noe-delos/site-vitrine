// components/Globe3D.tsx
'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Globe3D = () => {
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mountRef.current) return;

		// Setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		mountRef.current.appendChild(renderer.domElement);

		// Create dot geometry for the globe
		const radius = 5;
		const segments = 50;
		const dots: THREE.Mesh[] = [];
		const positions = [];

		// Generate positions for dots
		for (let lat = -90; lat <= 90; lat += 180 / segments) {
			const latRad = (lat * Math.PI) / 180;
			const circumference = Math.cos(Math.abs(latRad)) * 2 * Math.PI * radius;
			const dotsInRing = Math.floor(circumference / 0.5);

			for (let i = 0; i < dotsInRing; i++) {
				const lon = (360 * i) / dotsInRing - 180;
				const lonRad = (lon * Math.PI) / 180;

				const x = radius * Math.cos(latRad) * Math.cos(lonRad);
				const y = radius * Math.sin(latRad);
				const z = radius * Math.cos(latRad) * Math.sin(lonRad);

				positions.push(new THREE.Vector3(x, y, z));
			}
		}

		// Create dots
		const dotGeometry = new THREE.SphereGeometry(0.02, 8, 8);
		const dotMaterial = new THREE.MeshBasicMaterial({
			color: new THREE.Color('#7066CB'),
			transparent: true,
			opacity: 0.8,
		});

		positions.forEach((position) => {
			const dot = new THREE.Mesh(dotGeometry, dotMaterial.clone());
			dot.position.copy(position);
			dots.push(dot);
			scene.add(dot);
		});

		// Add glow effect
		const glowGeometry = new THREE.SphereGeometry(radius * 1.01, 32, 32);
		const glowMaterial = new THREE.ShaderMaterial({
			uniforms: {
				coefficients: { value: new THREE.Vector3(1.0, 1.0, 1.0) },
			},
			vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
			fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
          gl_FragColor = vec4(0.44, 0.4, 0.8, 1.0) * intensity;
        }
      `,
			side: THREE.BackSide,
			blending: THREE.AdditiveBlending,
			transparent: true,
		});

		const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
		scene.add(glowMesh);

		// Add pulsing effect to dots
		const pulseAnimation = () => {
			const time = Date.now() * 0.001;
			dots.forEach((dot, i) => {
				const material = dot.material as THREE.MeshBasicMaterial;
				material.opacity = 0.3 + Math.sin(time + i * 0.1) * 0.2;
			});
		};

		// Camera position
		camera.position.z = 10;

		// Controls
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.05;
		controls.rotateSpeed = 0.5;
		controls.enableZoom = false;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.5;

		// Animation
		const animate = () => {
			requestAnimationFrame(animate);
			controls.update();
			pulseAnimation();
			renderer.render(scene, camera);
		};
		animate();

		// Resize handler
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			mountRef.current?.removeChild(renderer.domElement);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return <div ref={mountRef} className="absolute inset-0" />;
};

export default Globe3D;
