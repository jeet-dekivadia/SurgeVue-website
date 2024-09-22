<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>SurgeVue</h3>
        <p>Neurosurgeries made Safe!</p>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home" aria-label="Go to Home">Home</a></li>
          <li><a href="#features" aria-label="View Features">Features</a></li>
          <li><a href="#about" aria-label="Learn About Us">About</a></li>
          <li><a href="#contact" aria-label="Contact Us">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:info@surgevue.com">info@surgevue.com</a></p>
        <p>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
      </div>
      <div class="footer-section">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook"><i class="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter"><i class="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} SurgeVue. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 50px 0 20px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  margin-bottom: 30px;
  min-width: 200px;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--primary-color);
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  color: #ecf0f1;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: var(--primary-color);
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #34495e;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-section {
    margin-bottom: 30px;
  }
}
</style>
