import { motion } from 'framer-motion';

export default function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      style={{ opacity: 1, scale: 1 }}
      className={`relative scroll-mt-16 py-16 sm:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}