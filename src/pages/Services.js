import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';


function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to Our Company</h1>
      <p>Providing the best services for our clients.</p>
      <HeroSection />
      <Gallery /> {/* A galeria será exibida aqui */}
    </motion.div>
  );
}
export default Services;