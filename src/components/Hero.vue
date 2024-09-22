<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>SurgeVue</h1>
      <p>Neurosurgeries made Safe!</p>
      <a href="#features" class="btn">Learn More</a>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
    <div ref="brainModel" class="brain-model"></div>
  </section>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default {
  name: 'Hero',
  data() {
    return {
      error: null,
      renderer: null,
      scene: null,
      camera: null,
    };
  },
  mounted() {
    this.initThreeJS();
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeDestroy() {
    this.cleanup();
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    initThreeJS() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
      this.$refs.brainModel.appendChild(this.renderer.domElement);

      const loader = new GLTFLoader();
      loader.load(
        '/brain_model.gltf',
        (gltf) => {
          const brain = gltf.scene;
          this.scene.add(brain);
          
          const light = new THREE.PointLight(0xffffff, 1, 100);
          light.position.set(10, 10, 10);
          this.scene.add(light);

          this.camera.position.z = 5;

          this.animate(brain);
        },
        undefined,
        (error) => {
          this.error = 'An error occurred loading the 3D model.';
          console.error('An error occurred loading the 3D model:', error);
        }
      );
    },
    animate(brain) {
      const animate = () => {
        requestAnimationFrame(animate);
        brain.rotation.y += 0.005;
        this.renderer.render(this.scene, this.camera);
      };
      animate();
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    },
    cleanup() {
      if (this.renderer) {
        this.renderer.dispose();
      }
    },
  },
};
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

.hero-content {
  color: white;
  max-width: 50%;
}

h1 {
  font-size: 4rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.brain-model {
  width: 50%;
  height: 100%;
}

.error-message {
  color: red;
  margin-top: 20px;
}
</style>
