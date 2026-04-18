import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BookingProvider } from './context/BookingContext';
import { AdminProvider } from './context/AdminContext';
import { LazyMotion, domAnimation } from 'motion/react';
const BookingModal = lazy(() => import('./components/BookingModal'));
import { ProtectedAdminRoute } from './components/ProtectedAdminRoute';

// Lazy load all other routes
const About = lazy(() => import('./pages/About'));
const Trek = lazy(() => import('./pages/Trek'));
const Departures = lazy(() => import('./pages/Departures'));
const UltimateGuide = lazy(() => import('./pages/UltimateGuide'));
const Blog = lazy(() => import('./pages/Blog'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

// Admin Pages
const AdminLogin = lazy(() => import('./pages/AdminLogin').then(m => ({ default: m.AdminLogin })));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const DashboardHome = lazy(() => import('./pages/admin/DashboardHome').then(m => ({ default: m.DashboardHome })));
const BookingsManagement = lazy(() => import('./pages/admin/BookingsManagement').then(m => ({ default: m.BookingsManagement })));
const DeparturesManagement = lazy(() => import('./pages/admin/DeparturesManagement').then(m => ({ default: m.DeparturesManagement })));
const ItinerariesManagement = lazy(() => import('./pages/admin/ItinerariesManagement').then(m => ({ default: m.ItinerariesManagement })));
const BlogManagement = lazy(() => import('./pages/admin/BlogManagement').then(m => ({ default: m.BlogManagement })));

// Hubs
const ItinerariesHub = lazy(() => import('./pages/hubs/ItinerariesHub'));
const PlanningHub = lazy(() => import('./pages/hubs/PlanningHub'));
const SafetyHub = lazy(() => import('./pages/hubs/SafetyHub'));
const PlacesHub = lazy(() => import('./pages/hubs/PlacesHub'));

// Treks
const Trek7Days = lazy(() => import('./pages/trek-days/Trek7Days'));
const Trek9Days = lazy(() => import('./pages/trek-days/Trek9Days'));
const Trek12Days = lazy(() => import('./pages/trek-days/Trek12Days'));
const Trek15Days = lazy(() => import('./pages/trek-days/Trek15Days'));
const Trek18Days = lazy(() => import('./pages/trek-days/Trek18Days'));
const Trek20Days = lazy(() => import('./pages/trek-days/Trek20Days'));

// Planning
const CostBreakdown = lazy(() => import('./pages/planning/CostBreakdown'));
const BudgetCalculator = lazy(() => import('./pages/planning/BudgetCalculator'));
const Flights = lazy(() => import('./pages/planning/Flights'));
const FoodWater = lazy(() => import('./pages/planning/FoodWater'));
const Insurance = lazy(() => import('./pages/planning/Insurance'));
const BestTime = lazy(() => import('./pages/BestTime'));
const Gear = lazy(() => import('./pages/Gear'));
const Permits = lazy(() => import('./pages/Permits'));

// Safety
const AltitudeSickness = lazy(() => import('./pages/safety/AltitudeSickness'));
const FirstAid = lazy(() => import('./pages/safety/FirstAid'));
const EmergencyContacts = lazy(() => import('./pages/safety/EmergencyContacts'));

// Places
const NamcheBazaar = lazy(() => import('./pages/places/NamcheBazaar'));
const GokyoVillage = lazy(() => import('./pages/places/GokyoVillage'));
const Lukla = lazy(() => import('./pages/places/Lukla'));
const Phortse = lazy(() => import('./pages/places/Phortse'));
const Machhermo = lazy(() => import('./pages/places/Machhermo'));
const GokyoRi = lazy(() => import('./pages/places/GokyoRi'));

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
        <LazyMotion features={domAnimation} strict>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-grow">
                <Suspense fallback={
                  <div className="min-h-[60vh] flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                }>
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
                    <Route path="/ultimate-guide" element={<UltimateGuide />} />
                    <Route path="/itineraries" element={<ItinerariesHub />} />
                    <Route path="/trek/12-days" element={<Trek12Days />} />
                    <Route path="/trek/7-days" element={<Trek7Days />} />
                    <Route path="/trek/9-days" element={<Trek9Days />} />
                    <Route path="/trek/15-days" element={<Trek15Days />} />
                    <Route path="/trek/18-days" element={<Trek18Days />} />
                    <Route path="/trek/20-days" element={<Trek20Days />} />
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
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="*" element={<div className="flex-grow flex items-center justify-center p-24 text-center"><h1 className="text-4xl font-bold text-stone-900">404 - Route Not Found. If you just saw a white screen, try refreshing the page!</h1></div>} />
                  </Routes>
                </Suspense>
              </div>
              <Footer />
            </div>
            <Suspense fallback={null}>
              <BookingModal />
            </Suspense>
          </Router>
        </LazyMotion>
      </BookingProvider>
    </AdminProvider>
  );
}
