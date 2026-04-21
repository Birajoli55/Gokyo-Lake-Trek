import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import BookingForm from './BookingForm';

export default function BookingModal() {
  const { isOpen, closeBooking, selectedTrek } = useBooking();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="absolute inset-0 bg-stone-950/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300, duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass border border-white/20 rounded-[40px] shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeBooking}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-100/50 hover:bg-stone-200 transition-colors z-[110]"
            >
              <X className="w-5 h-5 text-stone-900" />
            </button>

            {/* In-Modal Form Injection */}
            <div className="p-2 sm:p-4">
               <BookingForm defaultTrek={selectedTrek} onCancel={closeBooking} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
