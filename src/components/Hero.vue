<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>SurgeVue</h1>
      <p>Neurosurgeries made Safe!</p>
      <a href="#features" class="btn">Learn More</a>
    </div>
    <div ref="brainModel" class="brain-model"></div>
  </section>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default {
  name: 'Hero',
  mounted() {
    this.initThreeJS()
  },
  methods: {
    initThreeJS() {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
      this.$refs.brainModel.appendChild(renderer.domElement)

      const loader = new GLTFLoader()
      loader.load(
        '/brain_model.gltf',
        (gltf) => {
          const brain = gltf.scene
          scene.add(brain)
          
          const light = new THREE.PointLight(0xffffff, 1, 100)
          light.position.set(10, 10, 10)
          scene.add(light)

          camera.position.z = 5

          function animate() {
            requestAnimationFrame(animate)
            brain.rotation.y += 0.005
            renderer.render(scene, camera)
          }
          animate()
        },
        undefined,
        (error) => {
          console.error('An error occurred loading the 3D model:', error)
        }
      )
    }
  }
}
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
</style>
