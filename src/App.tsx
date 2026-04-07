import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Guide from './pages/Guide';
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
import Itinerary15Days from './pages/itineraries/Itinerary15Days';
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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gokyo-lake-trek" element={<UltimateGuide />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/itineraries" element={<ItinerariesHub />} />
            <Route path="/itineraries/12-days" element={<Itinerary12Days />} />
            <Route path="/itineraries/7-days" element={<Itinerary7Days />} />
            <Route path="/itineraries/15-days" element={<Itinerary15Days />} />
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
            <Route path="/tips" element={<Blog />} />
            <Route path="/tips/:slug" element={<ArticleDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
