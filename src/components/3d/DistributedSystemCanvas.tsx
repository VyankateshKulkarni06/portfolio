import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface SystemNodeData {
  id: string;
  name: string;
  category: 'gateway' | 'service' | 'queue' | 'ai' | 'storage' | 'worker';
  position: [number, number, number];
  color: string;
  telemetry: {
    status: string;
    protocol: string;
    metric: string;
    role: string;
  };
}

const NODES_DATA: SystemNodeData[] = [
  {
    id: 'gateway',
    name: 'API Gateway',
    category: 'gateway',
    position: [-3.8, 1.2, 0],
    color: '#38bdf8', // Cyan
    telemetry: {
      status: 'ACTIVE // HEALTHY',
      protocol: 'HTTPS / HTTP/2 Ingress',
      metric: '4,200 req/s • p99: 14ms',
      role: 'Ingress routing & Spring Boot API abstraction layer',
    },
  },
  {
    id: 'service-go',
    name: 'Go Workflow Engine',
    category: 'service',
    position: [-1.4, 2.0, 0.4],
    color: '#00add8', // Go Cyan
    telemetry: {
      status: 'ACTIVE // RUNNING',
      protocol: 'gRPC / Internal Bus',
      metric: '220+ Config Abstractions',
      role: 'Component definitions & distributed workflow execution',
    },
  },
  {
    id: 'event-queue',
    name: 'Event Queue / Stream',
    category: 'queue',
    position: [-0.2, 0.2, -0.2],
    color: '#818cf8', // Indigo
    telemetry: {
      status: 'STREAMING // NOMINAL',
      protocol: 'Kafka / SSE Pipeline',
      metric: '45s Polling (3× Load Cut)',
      role: 'Asynchronous event queue & test execution chaining',
    },
  },
  {
    id: 'worker-pool',
    name: 'Async Workers',
    category: 'worker',
    position: [1.2, 1.8, 0.3],
    color: '#a855f7', // Purple
    telemetry: {
      status: 'PROCESSING // 12 THREADS',
      protocol: 'Pytest Distributed Runner',
      metric: '270+ Automated Cases',
      role: 'Shared infra execution saving ~5-6 min per scenario',
    },
  },
  {
    id: 'ai-pipeline',
    name: 'AI Inference Cluster',
    category: 'ai',
    position: [2.8, 0.4, 0.5],
    color: '#34d399', // Emerald
    telemetry: {
      status: 'INFERENCE // READY',
      protocol: 'MobileNet + YOLO + 8 VLMs',
      metric: '~98% View • ~95% Tooth Acc',
      role: 'Multistage vision classification & SSE progress streaming',
    },
  },
  {
    id: 'storage-tier',
    name: 'Redis Cache & S3',
    category: 'storage',
    position: [1.8, -1.8, -0.4],
    color: '#f59e0b', // Amber
    telemetry: {
      status: 'PERSISTING // ZERO SPIKE',
      protocol: 'S3 Presigned + Redis KV',
      metric: '8 Images + 14 Questions',
      role: 'Decoupled state keys avoiding backend heap exhaustion',
    },
  },
  {
    id: 'agentic-reasoner',
    name: 'Agentic Router',
    category: 'ai',
    position: [-1.8, -1.6, 0.2],
    color: '#38bdf8', // Sky
    telemetry: {
      status: 'REASONING // DUAL-AGENT',
      protocol: 'Cosine Similarity / Top-5',
      metric: '10K+ Legal Corpus Search',
      role: 'Intent analysis & legal precedent vector synthesis',
    },
  },
];

const CONNECTIONS: [string, string][] = [
  ['gateway', 'service-go'],
  ['gateway', 'agentic-reasoner'],
  ['service-go', 'event-queue'],
  ['event-queue', 'worker-pool'],
  ['event-queue', 'storage-tier'],
  ['worker-pool', 'ai-pipeline'],
  ['ai-pipeline', 'storage-tier'],
  ['agentic-reasoner', 'ai-pipeline'],
];

interface DistributedSystemCanvasProps {
  currentSection?: string;
  interactive?: boolean;
}

export const DistributedSystemCanvas: React.FC<DistributedSystemCanvasProps> = ({
  currentSection = 'hero',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<SystemNodeData>(NODES_DATA[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMode, setActiveMode] = useState<'flow' | 'ai' | 'agentic' | 'topology'>('flow');

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090e, 0.05);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Subtle Ambient and Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2, 20);
    pointLight.position.set(2, 4, 5);
    scene.add(pointLight);

    const accentLight = new THREE.PointLight(0x818cf8, 1.5, 15);
    accentLight.position.set(-3, -2, 4);
    scene.add(accentLight);

    // Group for nodes & connections to apply mouse parallax
    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    // Subtle background grid planes for architectural depth
    const gridHelper = new THREE.GridHelper(16, 20, 0x1e293b, 0x0f172a);
    gridHelper.position.y = -2.8;
    gridHelper.rotation.x = 0.2;
    scene.add(gridHelper);

    // Node Meshes Map
    const nodeMeshes: { [id: string]: THREE.Mesh } = {};
    const nodeOuterRings: { [id: string]: THREE.Mesh } = {};

    NODES_DATA.forEach((node) => {
      // Core geometric node: sleek icosahedron with glass/wireframe aura
      const geometry = new THREE.IcosahedronGeometry(0.36, 1);
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(node.color),
        roughness: 0.2,
        metalness: 0.8,
        emissive: new THREE.Color(node.color),
        emissiveIntensity: 0.35,
        wireframe: false,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...node.position);
      mesh.userData = { id: node.id };
      graphGroup.add(mesh);
      nodeMeshes[node.id] = mesh;

      // Outer wireframe pulse ring
      const ringGeo = new THREE.RingGeometry(0.48, 0.52, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.set(...node.position);
      graphGroup.add(ringMesh);
      nodeOuterRings[node.id] = ringMesh;
    });

    // Connection Lines & Data Packets
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x334155,
      transparent: true,
      opacity: 0.45,
    });

    const packetGeometry = new THREE.SphereGeometry(0.08, 12, 12);
    const packets: {
      mesh: THREE.Mesh;
      start: THREE.Vector3;
      end: THREE.Vector3;
      progress: number;
      speed: number;
    }[] = [];

    CONNECTIONS.forEach(([startId, endId], index) => {
      const startNode = NODES_DATA.find((n) => n.id === startId);
      const endNode = NODES_DATA.find((n) => n.id === endId);
      if (!startNode || !endNode) return;

      const p1 = new THREE.Vector3(...startNode.position);
      const p2 = new THREE.Vector3(...endNode.position);

      // Curve connection for elegance
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      mid.z += (index % 2 === 0 ? 0.3 : -0.3);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const points = curve.getPoints(24);
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      graphGroup.add(line);

      // Data packet traveling along this curve
      const packetMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(startNode.color),
      });
      const packetMesh = new THREE.Mesh(packetGeometry, packetMat);
      graphGroup.add(packetMesh);

      packets.push({
        mesh: packetMesh,
        start: p1,
        end: p2,
        progress: (index * 0.18) % 1,
        speed: 0.003 + (index % 3) * 0.0015,
      });
    });

    // Raycasting for interactive clicks
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handlePointerDown = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseVector.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVector.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(Object.values(nodeMeshes));

      if (intersects.length > 0) {
        const hitId = intersects[0].object.userData.id;
        const found = NODES_DATA.find((n) => n.id === hitId);
        if (found) {
          setSelectedNode(found);
        }
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);

    // Mouse Parallax Lerping
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.5;
      targetRotationX = y * 0.4;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Visibility Observer to pause rendering when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth parallax interpolation
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      graphGroup.rotation.x = currentRotationX;
      graphGroup.rotation.y = currentRotationY + Math.sin(elapsedTime * 0.3) * 0.08;

      // Animate node rotations & pulse rings
      NODES_DATA.forEach((node) => {
        const mesh = nodeMeshes[node.id];
        const ring = nodeOuterRings[node.id];
        if (mesh) {
          mesh.rotation.x = elapsedTime * 0.4;
          mesh.rotation.y = elapsedTime * 0.6;
        }
        if (ring) {
          const scale = 1 + Math.sin(elapsedTime * 2.5 + node.position[0]) * 0.12;
          ring.scale.set(scale, scale, 1);
        }
      });

      // Animate data packets flowing
      packets.forEach((packet) => {
        packet.progress += packet.speed;
        if (packet.progress > 1) {
          packet.progress = 0;
        }
        packet.mesh.position.lerpVectors(packet.start, packet.end, packet.progress);
        const pulse = 0.8 + Math.sin(elapsedTime * 6) * 0.2;
        packet.mesh.scale.set(pulse, pulse, pulse);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full h-[480px] lg:h-[580px] rounded-2xl border border-white/10 bg-[#07090e]/80 overflow-hidden backdrop-blur-md shadow-2xl flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-white/10 bg-[#0a0f1d]/90 z-10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-slate-300 font-semibold tracking-wider">
            DISTRIBUTED SYSTEM TOPOLOGY
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-slate-400">STATE: NOMINAL</span>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-lg border border-white/5">
          {(['flow', 'ai', 'agentic', 'topology'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                activeMode === mode
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {mode.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="relative flex-1 w-full h-full cursor-crosshair">
        {/* Subtle grid and overlay */}
        <div className="absolute inset-0 tech-dots-bg pointer-events-none opacity-40" />

        {/* Ambient watermark & instructions */}
        <div className="absolute bottom-4 left-5 pointer-events-none z-10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
            [Click any node to inspect system telemetry • Drag to orbit]
          </p>
        </div>
      </div>

      {/* Bottom Node Inspector HUD */}
      {selectedNode && (
        <div className="border-t border-white/10 bg-[#090e1a]/95 px-5 py-3 z-10 font-mono transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full shadow-sm"
                style={{ backgroundColor: selectedNode.color }}
              />
              <div>
                <span className="text-sm font-semibold text-white tracking-wide">
                  {selectedNode.name}
                </span>
                <span className="ml-2 text-xs text-slate-400">
                  [{selectedNode.telemetry.protocol}]
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                {selectedNode.telemetry.metric}
              </span>
              <span className="text-emerald-400 hidden md:inline">
                {selectedNode.telemetry.status}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 mt-1.5 font-sans leading-relaxed">
            {selectedNode.telemetry.role}
          </p>
        </div>
      )}
    </div>
  );
};
