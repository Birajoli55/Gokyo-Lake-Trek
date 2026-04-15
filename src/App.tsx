import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import { BookingProvider } from './context/BookingContext';
import { AdminProvider } from './context/AdminContext';
import BookingModal from './components/BookingModal';
import Trek from './pages/Trek';
import Departures from './pages/Departures';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { DashboardHome } from './pages/admin/DashboardHome';
import { BookingsManagement } from './pages/admin/BookingsManagement';
import { DeparturesManagement } from './pages/admin/DeparturesManagement';
import { ItinerariesManagement } from './pages/admin/ItinerariesManagement';
import { BlogManagement } from './pages/admin/BlogManagement';
import { ProtectedAdminRoute } from './components/ProtectedAdminRoute';
import ItinerariesHub from './pages/hubs/ItinerariesHub';
import PlanningHub from './pages/hubs/PlanningHub';
import UltimateGuide from './pages/UltimateGuide';
import CostBreakdown from './pages/planning/CostBreakdown';
import BudgetCalculator from './pages/planning/BudgetCalculator';
import Flights from './pages/planning/Flights';
import FoodWater from './pages/planning/FoodWater';
import Insurance from './pages/planning/Insurance';
import FirstAid from './pages/safety/FirstAid';
import EmergencyContacts from './pages/safety/EmergencyContacts';
import SafetyHub from './pages/hubs/SafetyHub';
import PlacesHub from './pages/hubs/PlacesHub';
import Itinerary12Days from './pages/itineraries/Itinerary12Days';
import Itinerary7Days from './pages/itineraries/Itinerary7Days';
import Itinerary9Days from './pages/itineraries/Itinerary9Days';
import Itinerary15Days from './pages/itineraries/Itinerary15Days';
import ItineraryGokyoChoLaEBC from './pages/itineraries/ItineraryGokyoChoLaEBC';
import ItineraryGokyoRenjoLa from './pages/itineraries/ItineraryGokyoRenjoLa';
import ItineraryEBC14Days from './pages/itineraries/ItineraryEBC14Days';
import AltitudeSickness from './pages/safety/AltitudeSickness';
import NamcheBazaar from './pages/places/NamcheBazaar';
import GokyoVillage from './pages/places/GokyoVillage';
import Lukla from './pages/places/Lukla';
import Phortse from './pages/places/Phortse';
import Machhermo from './pages/places/Machhermo';
import GokyoRi from './pages/places/GokyoRi';
import Permits from './pages/Permits';
import Gear from './pages/Gear';
import BestTime from './pages/BestTime';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <AdminProvider>
      <BookingProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
              <Routes>
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route 
                  path="/admin/*" 
                  element={
                    <ProtectedAdminRoute>
                      <Routes>
                        <Route element={<AdminDashboard />}>
                          <Route path="dashboard" element={<DashboardHome />} />
                          <Route path="bookings" element={<BookingsManagement />} />
                          <Route path="departures" element={<DeparturesManagement />} />
                          <Route path="itineraries" element={<ItinerariesManagement />} />
                          <Route path="blog" element={<BlogManagement />} />
                        </Route>
                      </Routes>
                    </ProtectedAdminRoute>
                  } 
                />

                {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/trek" element={<Trek />} />
              <Route path="/departures" element={<Departures />} />
              <Route path="/gokyo-lake-trek" element={<UltimateGuide />} />
              <Route path="/itineraries" element={<ItinerariesHub />} />
              <Route path="/itineraries/12-days" element={<Itinerary12Days />} />
              <Route path="/itineraries/7-days" element={<Itinerary7Days />} />
              <Route path="/itineraries/9-days" element={<Itinerary9Days />} />
              <Route path="/itineraries/15-days" element={<Itinerary15Days />} />
              <Route path="/itineraries/ebc-14-days" element={<ItineraryEBC14Days />} />
              <Route path="/itineraries/gokyo-cho-la-ebc" element={<ItineraryGokyoChoLaEBC />} />
              <Route path="/itineraries/gokyo-renjo-la" element={<ItineraryGokyoRenjoLa />} />
              <Route path="/planning" element={<PlanningHub />} />
              <Route path="/planning/permits-fees" element={<Permits />} />
              <Route path="/planning/cost-breakdown" element={<CostBreakdown />} />
              <Route path="/planning/budget-calculator" element={<BudgetCalculator />} />
              <Route path="/planning/best-time-to-visit" element={<BestTime />} />
              <Route path="/planning/flights" element={<Flights />} />
              <Route path="/planning/food-water" element={<FoodWater />} />
              <Route path="/safety" element={<SafetyHub />} />
              <Route path="/safety/altitude-sickness" element={<AltitudeSickness />} />
              <Route path="/safety/travel-insurance" element={<Insurance />} />
              <Route path="/safety/first-aid" element={<FirstAid />} />
              <Route path="/safety/emergency-contacts" element={<EmergencyContacts />} />
              <Route path="/places" element={<PlacesHub />} />
              <Route path="/places/namche-bazaar" element={<NamcheBazaar />} />
              <Route path="/places/gokyo-village" element={<GokyoVillage />} />
              <Route path="/places/lukla" element={<Lukla />} />
              <Route path="/places/phortse" element={<Phortse />} />
              <Route path="/places/machhermo" element={<Machhermo />} />
              <Route path="/places/gokyo-ri" element={<GokyoRi />} />
              <Route path="/gear" element={<Gear />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<ArticleDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div className="flex-grow flex items-center justify-center p-24 text-center"><h1 className="text-4xl font-bold text-stone-900">404 - Route Not Found. If you just saw a white screen, try refreshing the page!</h1></div>} />
            </Routes>
          </div>
          <Footer />
        </div>
        <BookingModal />
      </Router>
    </BookingProvider>
    </AdminProvider>
  );
}
