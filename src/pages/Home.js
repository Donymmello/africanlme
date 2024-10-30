import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to Our Company</h1>
      <p>Providing the best services for our clients.</p>
    </motion.div>
  );
}
export default Home;
