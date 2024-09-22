<template>
  <section id="features" class="features">
    <h2>Key Features</h2>
    <div class="feature-grid">
      <div v-for="feature in features" :key="feature.title" class="feature-card" v-observe-visibility="onVisibilityChange">
        <i :class="feature.icon"></i>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { ObserveVisibility } from 'vue-observe-visibility';

export default {
  name: 'Features',
  directives: {
    ObserveVisibility
  },
  data() {
    return {
      features: [
        {
          icon: 'fas fa-vr-cardboard',
          title: 'AR Overlay',
          description: 'Augmented reality overlay of tumor outlines for precise visualization.'
        },
        {
          icon: 'fas fa-hand-paper',
          title: 'Hand Tracking',
          description: 'Real-time hand tracking and movement analysis for improved control.'
        },
        {
          icon: 'fas fa-microchip',
          title: 'Gyroscope Integration',
          description: 'Integration with Arduino gyroscope for accurate surgical instrument tracking.'
        },
        {
          icon: 'fas fa-user-shield',
          title: 'Secure Access',
          description: 'Facial recognition and RFID security for protected patient data access.'
        },
        {
          icon: 'fas fa-robot',
          title: 'AI Assistant',
          description: 'AI-powered chatbot for real-time recommendations and assistance.'
        },
        {
          icon: 'fas fa-brain',
          title: 'Tumor Classification',
          description: 'Advanced machine learning for accurate tumor classification and detection.'
        }
      ]
    }
  },
  methods: {
    onVisibilityChange(isVisible, entry) {
      if (isVisible) {
        entry.target.classList.add('animate')
      }
    }
  }
}
</script>

<style scoped>
.features {
  padding: 100px 0;
  background-color: #f8f9fa;
}

h2 {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--primary-color);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 0 50px;
}

.feature-card {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.feature-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.feature-card i {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 1rem;
  color: #666;
}
</style>
