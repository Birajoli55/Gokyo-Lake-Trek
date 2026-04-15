import { createContext, useContext, useState, ReactNode } from 'react';

interface BookingContextType {
  isOpen: boolean;
  selectedTrek: string | undefined;
  openBooking: (trekName?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrek, setSelectedTrek] = useState<string | undefined>(undefined);

  const openBooking = (trekName?: string) => {
    setSelectedTrek(trekName);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBooking = () => {
    setIsOpen(false);
    setSelectedTrek(undefined);
    document.body.style.overflow = 'unset';
  };

  return (
    <BookingContext.Provider value={{ isOpen, selectedTrek, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
