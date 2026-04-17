import { PlanningModule, SafetyTopic, Place, ItineraryCard, TrekStat, Itinerary, GearItem, FAQ, BlogPost, TrustPillar } from './types';
import {
  FileText, DollarSign, Calculator, Calendar, Plane, Utensils, Shield,
  Activity, Heart, Info, MapPin, ShieldCheck, Award, Leaf, Users,
  Lock, Headphones, Mountain, CloudSun
} from 'lucide-react';

export const PLANNING_MODULES = [
  {
    title: 'Permits & Fees',
    icon: FileText,
    desc: 'Everything you need to know about Khumbu and Sagarmatha permits.',
    link: '/planning/permits-fees'
  },
  {
    title: 'Cost Breakdown',
    icon: DollarSign,
    desc: 'Detailed budgeting for flights, food, and accommodation.',
    link: '/planning/cost-breakdown'
  },
  {
    title: 'Budget Calculator',
    icon: Calculator,
    desc: 'Interactive tool to estimate your total trek expenses.',
    link: '/planning/budget-calculator'
  },
  {
    title: 'Best Time to Visit',
    icon: Calendar,
    desc: 'Monthly weather snapshots and visibility guides.',
    link: '/planning/best-time-to-visit'
  },
  {
    title: 'Flights to Lukla',
    icon: Plane,
    desc: 'KTM vs Ramechhap, baggage limits, and delay plans.',
    link: '/planning/flights'
  },
  {
    title: 'Food & Water',
    icon: Utensils,
    desc: 'Menu basics, costs, and water treatment strategies.',
    link: '/planning/food-water'
  },
  {
    title: 'Insurance',
    icon: Shield,
    desc: 'Mandatory coverage for high-altitude trekking.',
    link: '/safety/travel-insurance'
  },
];

export const SAFETY_TOPICS = [
  {
    title: 'Altitude Sickness (AMS)',
    description: 'Learn about Acute Mountain Sickness, symptoms, prevention, and treatment protocols.',
    icon: Activity,
    link: '/safety/altitude-sickness',
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'Travel Insurance',
    description: 'Essential requirements for trekking insurance, including helicopter evacuation coverage.',
    icon: Shield,
    link: '/safety/travel-insurance',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'First Aid & Health',
    description: 'Recommended medical kit, common ailments, and health precautions for the trail.',
    icon: Heart,
    link: '/safety/first-aid',
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Emergency Contacts',
    description: 'Crucial contact numbers for rescue services, hospitals, and local authorities.',
    icon: Info,
    link: '/safety/emergency-contacts',
    color: 'bg-stone-50 text-stone-600'
  }
];

export const PLACES = [
  {
    name: 'Lukla',
    altitude: '2,860m',
    description: 'The gateway to the Everest region, home to Tenzing-Hillary Airport.',
    image: '/lukla.jpg',
    link: '/places/lukla'
  },
  {
    name: 'Namche Bazaar',
    altitude: '3,440m',
    description: 'The Sherpa capital, a vibrant hub with markets, cafes, and museums.',
    image: '/namchebazaar.jpg',
    link: '/places/namche-bazaar'
  },
  {
    name: 'Phortse',
    altitude: '3,810m',
    description: 'A traditional Sherpa village known for its climbing culture and views.',
    image: '/phortse.jpg',
    link: '/places/phortse'
  },
  {
    name: 'Machhermo',
    altitude: '4,470m',
    description: 'A key acclimatization stop on the way to Gokyo, offering stunning views.',
    image: '/machhermo.jpg',
    link: '/places/machhermo'
  },
  {
    name: 'Gokyo Village',
    altitude: '4,750m',
    description: 'A serene lakeside settlement at the foot of Gokyo Ri.',
    image: '/gokyovillage.jpg',
    link: '/places/gokyo-village'
  },
  {
    name: 'Gokyo Ri',
    altitude: '5,357m',
    description: 'The ultimate viewpoint for Everest, Lhotse, Makalu, and Cho Oyu.',
    image: '/gokyori.jpg',
    link: '/places/gokyo-ri'
  }
];

export const ITINERARY_CARDS = [
  {
    days: 7,
    title: 'Shortest Gokyo Trek',
    desc: 'Fast-paced route for experienced trekkers with limited time who are already well-acclimatized.',
    difficulty: 'Challenging',
    difficultyColor: 'bg-rose-100 text-rose-700',
    link: '/trek/7-days',
    highlights: ['Express route', 'No rest days', 'Flight contingency'],
  },
  {
    days: 9,
    title: 'Efficient Gokyo Loop',
    desc: 'Balanced route for those with moderate fitness levels and a tight schedule.',
    difficulty: 'Moderate',
    difficultyColor: 'bg-amber-100 text-amber-700',
    link: '/trek/9-days',
    highlights: ['1 acclimatization day', 'Gokyo Ri summit', 'Ideal for fit beginners'],
    popular: false,
  },
  {
    days: 12,
    title: 'Classic Gokyo Lakes',
    desc: 'The most recommended route with optimal acclimatization and lake exploration.',
    difficulty: 'Moderate',
    difficultyColor: 'bg-emerald-100 text-emerald-700',
    link: '/trek/12-days',
    highlights: ['2 acclimatization days', 'Visit all 5 lakes', 'Gokyo Ri sunrise'],
    popular: true,
  },
  {
    days: 15,
    title: 'Comfortable Gokyo',
    desc: 'Extra rest days, comfortable teahouse stops, and time to soak in every view.',
    difficulty: 'Easy-Moderate',
    difficultyColor: 'bg-sky-100 text-sky-700',
    link: '/trek/15-days',
    highlights: ['3 rest days', 'Cultural village visits', 'Beginner-friendly'],
  },
  {
    days: 18,
    title: 'Gokyo + EBC via Cho La',
    desc: 'The ultimate Everest region double-summit adventure crossing the legendary Cho La Pass.',
    difficulty: 'Strenuous',
    difficultyColor: 'bg-orange-100 text-orange-700',
    link: '/trek/18-days',
    highlights: ['Cho La Pass crossing', 'EBC visit', 'Two iconic summits'],
  },
  {
    days: 20,
    title: 'Gokyo via Renjo La',
    desc: 'A quieter, scenic high-pass route with stunning panoramas over the Gokyo Valley.',
    difficulty: 'Challenging',
    difficultyColor: 'bg-purple-100 text-purple-700',
    link: '/trek/20-days',
    highlights: ['Renjo La Pass 5360m', 'Remote trail', 'Fewest crowds'],
  },
];

export const TREK_STATS = [
  { label: 'Max Elevation', value: '5,357m', sub: 'Gokyo Ri', icon: Mountain },
  { label: 'Duration', value: '12-15 Days', sub: 'Flexible', icon: Calendar },
  { label: 'Difficulty', value: 'Challenging', sub: 'High Altitude', icon: Activity },
  { label: 'Best Season', value: 'Spring/Autumn', sub: 'Clear Skies', icon: CloudSun },
];

export const ITINERARIES = [
  {
    id: 'classic-gokyo',
    name: 'Classic Gokyo Lakes Trek',
    duration: '12 Days',
    difficulty: 'Moderate',
    description: 'The standard route focusing on the pristine blue lakes and the ascent of Gokyo Ri.',
    days: [
      { day: 1, title: 'Fly to Lukla, Trek to Phakding', description: 'Scenic flight and a gentle start along the Dudh Koshi river.', elevation: '2,610m', duration: '3-4 hrs' },
      { day: 2, title: 'Phakding to Namche Bazaar', description: 'The first big climb into the heart of Sherpa country.', elevation: '3,440m', duration: '5-6 hrs' },
      { day: 3, title: 'Acclimatization in Namche', description: 'Hike to Everest View Hotel for the first glimpse of the giant.', elevation: '3,440m', duration: '3-4 hrs' },
      { day: 4, title: 'Namche to Dole', description: 'Ascending through rhododendron forests with views of Ama Dablam.', elevation: '4,110m', duration: '5-6 hrs' },
      { day: 5, title: 'Dole to Machhermo', description: 'Steady climb along the valley with Cho Oyu dominating the horizon.', elevation: '4,470m', duration: '4-5 hrs' },
      { day: 6, title: 'Machhermo to Gokyo', description: 'Reaching the first, second, and third lakes of Gokyo.', elevation: '4,790m', duration: '4-5 hrs' },
      { day: 7, title: 'Gokyo Ri Ascent & Fifth Lake', description: 'Sunrise at Gokyo Ri (5,357m) for a 360-degree Himalayan panorama.', elevation: '5,357m', duration: '6-7 hrs' },
      { day: 8, title: 'Gokyo to Dole', description: 'Beginning the descent back down the valley.', elevation: '4,110m', duration: '5-6 hrs' },
      { day: 9, title: 'Dole to Namche', description: 'Returning to the bustling hub of Namche Bazaar.', elevation: '3,440m', duration: '4-5 hrs' },
      { day: 10, title: 'Namche to Lukla', description: 'The final long day of trekking back to the airstrip.', elevation: '2,840m', duration: '6-7 hrs' },
      { day: 11, title: 'Fly to Kathmandu', description: 'Early morning flight and transfer to hotel.', elevation: '1,400m', duration: '40 min flight' },
      { day: 12, title: 'Departure', description: 'End of an unforgettable journey.', elevation: '-', duration: '-' },
    ]
  }
];

export const GEAR_LIST = [
  {
    category: 'Clothing',
    items: ['Down Jacket (-20°C)', 'Waterproof Shell Jacket', 'Trekking Trousers', 'Thermal Base Layers', 'Fleece Mid-layer', 'Sun Hat & Beanie']
  },
  {
    category: 'Footwear',
    items: ['Sturdy Trekking Boots', 'Camp Shoes/Sandals', 'Woolen Trekking Socks', 'Gaiters (for snow)']
  },
  {
    category: 'Equipment',
    items: ['Sleeping Bag (-20°C)', '40-50L Backpack', 'Trekking Poles', 'Headlamp with extra batteries', 'Water Purification Tablets']
  },
  {
    category: 'Personal',
    items: ['Sunscreen (SPF 50+)', 'Lip Balm', 'Personal First Aid Kit', 'Quick-dry Towel', 'Biodegradable Wet Wipes']
  }
];

export const FAQS = [
  // Common Questions (Highest Frequency)
  {
    category: 'Common',
    question: 'Why choose Gokyo over Everest Base Camp?',
    answer: 'Gokyo offers superior panoramic views (4 of the 14 highest peaks), pristine turquoise lakes, and significantly fewer crowds than the main EBC highway, providing a more serene and authentic experience.'
  },
  {
    category: 'Common',
    question: 'What fitness level is required for trekking in Nepal?',
    answer: 'A moderate to high level of fitness is required. You should be comfortable walking 5-7 hours a day with a light pack. Cardiovascular training and leg strength are key preparations.'
  },
  {
    category: 'Common',
    question: 'What happens if I get altitude sickness?',
    answer: 'Our guides are trained to spot early AMS symptoms. The primary protocol is to stop ascending, hydrate, and if symptoms worsen, descend immediately. Helicopter evacuation is available for emergencies.'
  },

  // Booking
  {
    category: 'Booking',
    question: 'How far in advance should I book my trek?',
    answer: 'We recommend booking 3-6 months in advance, especially for peak seasons (Spring and Autumn), to ensure flight availability to Lukla and the best teahouse accommodations.'
  },
  {
    category: 'Booking',
    question: 'What is your cancellation and refund policy?',
    answer: 'We offer a full refund for cancellations made 30 days prior to departure. Cancellations within 14 days are subject to a 50% fee. We recommend travel insurance to cover unexpected cancellations.'
  },

  // Preparation
  {
    category: 'Preparation',
    question: 'Is there WiFi and electricity on the trail?',
    answer: 'Yes, most teahouses offer WiFi (via AirLink or EverestLink cards) and charging stations for a small fee ($3-$7). Note that reliability decreases as you go higher.'
  },
  {
    category: 'Preparation',
    question: 'How much extra cash should I bring?',
    answer: 'We recommend $25-$40 USD per day for personal expenses like snacks, hot showers, charging, WiFi, and tips for your crew.'
  },

  // Safety
  {
    category: 'Safety',
    question: 'Does my insurance need to cover helicopter rescue?',
    answer: 'Yes, it is mandatory. Your insurance must specifically cover trekking up to 6,000m and include emergency helicopter evacuation.'
  },
  {
    category: 'Safety',
    question: 'Is the water safe to drink?',
    answer: 'We do not recommend drinking tap or stream water. Use water purification tablets, filters, or purchase boiled water at teahouses to stay safe.'
  },

  // Permits
  {
    category: 'Permits',
    question: 'What specific permits are required for Gokyo?',
    answer: 'You need the Khumbu Pasang Lhamu Rural Municipality Permit and the Sagarmatha National Park Entry Permit. We handle all paperwork for our trekkers.'
  },
  {
    category: 'Permits',
    question: 'Do I need a guide for this trek?',
    answer: 'As of 2023, the Nepal government has made it mandatory for solo trekkers to hire a licensed guide in the Everest region for safety and environmental protection.'
  },
  {
    category: 'Permits',
    question: 'What is the luggage limit for the Lukla flight?',
    answer: 'The weight limit is 15kg total per person (10kg for checked bag, 5kg for hand carry). Extra weight can be paid for but is not guaranteed to fly on the same plane.'
  }
];

export const BLOG_POSTS = [
  {
    id: '1',
    slug: 'gokyo-vs-ebc',
    title: '5 Reasons Why Gokyo is Better Than EBC',
    excerpt: 'While Everest Base Camp gets all the fame, the Gokyo Lakes offer a more serene and visually stunning experience...',
    content: `
      <p>While Everest Base Camp (EBC) is undoubtedly the most famous trek in the world, many seasoned trekkers argue that the Gokyo Lakes trek is actually the superior experience. Here are five reasons why you should consider the turquoise lakes over the base camp crowd.</p>
      
      <h3>1. The Views from Gokyo Ri</h3>
      <p>From the summit of Gokyo Ri (5,357m), you can see four of the world's fourteen 8,000m peaks: Mount Everest, Lhotse, Makalu, and Cho Oyu. Many believe this panorama is even more impressive than the one from Kala Patthar near EBC.</p>
      
      <h3>2. The Turquoise Lakes</h3>
      <p>The series of six glacial lakes at Gokyo are among the highest freshwater lakes in the world. Their vibrant turquoise color against the backdrop of snow-capped peaks is a sight you won't find on the EBC trail.</p>
      
      <h3>3. Fewer Crowds</h3>
      <p>The EBC trail can feel like a highway during peak season. Gokyo attracts significantly fewer trekkers, allowing for a more peaceful and authentic Himalayan experience.</p>
      
      <h3>4. The Ngozumpa Glacier</h3>
      <p>Gokyo sits right next to the Ngozumpa Glacier, the largest glacier in the Himalayas. Crossing it is a highlight of the trek and offers a unique perspective on the power of nature.</p>
      
      <h3>5. Better Acclimatization</h3>
      <p>The Gokyo route allows for a more gradual ascent in some sections, and the option to cross the Cho La Pass into the Everest valley provides a fantastic loop that is better for your body than a simple out-and-back trek.</p>
    `,
    date: 'March 15, 2026',
    image: '/gokyovsebc.png',
    author: 'Tenzing Sherpa',
    category: 'Comparison'
  },
  {
    id: '2',
    slug: 'acclimatization-tips',
    title: 'Acclimatization Tips for High Altitude',
    excerpt: 'The secret to a successful trek isn\'t speed, it\'s how well your body adapts to the thinning air...',
    content: `
      <p>Altitude sickness, or Acute Mountain Sickness (AMS), is the biggest challenge for trekkers in the Himalayas. Here is how you can prepare your body and stay safe during your Gokyo Lakes journey.</p>
      
      <h3>1. Walk Slowly (Bistari, Bistari)</h3>
      <p>In Nepali, 'Bistari' means slowly. This should be your mantra. Even if you feel energetic, keep a steady, slow pace to allow your heart and lungs to adjust to the decreasing oxygen levels.</p>
      
      <h3>2. Hydration is Key</h3>
      <p>Drink at least 3 to 4 liters of water every day. Dehydration can mimic the symptoms of altitude sickness and makes it harder for your body to acclimatize.</p>
      
      <h3>3. Climb High, Sleep Low</h3>
      <p>This is a classic mountaineering rule. During your acclimatization days in Namche and Gokyo, hike to a higher elevation during the day and return to a lower elevation to sleep.</p>
      
      <h3>4. Avoid Alcohol and Smoking</h3>
      <p>Both alcohol and tobacco can dehydrate you and interfere with your breathing, making it much harder for your body to adapt to the altitude.</p>
      
      <h3>5. Know the Symptoms</h3>
      <p>Headaches, nausea, dizziness, and loss of appetite are early signs of AMS. If you experience these, do not go any higher. If symptoms persist or worsen, you must descend immediately.</p>
    `,
    date: 'April 2, 2026',
    image: '/AcclimatizationTipsforHighAltitude.png',
    author: 'Ang Rita',
    category: 'Safety'
  },
  {
    id: '3',
    slug: 'packing-guide',
    title: 'The Ultimate Packing Guide for Gokyo',
    excerpt: 'Packing for a high-altitude trek is a delicate balance between being prepared and keeping your bag light...',
    content: `
      <p>Packing for the Gokyo Lakes Trek requires careful planning. You need to be prepared for temperatures ranging from +20°C in the lower valleys to -15°C at the lakes. Here's a breakdown of the essentials.</p>
      
      <h3>1. Layering is Everything</h3>
      <p>Instead of one heavy jacket, use multiple layers: a moisture-wicking base layer, a warm fleece mid-layer, and a windproof/waterproof outer shell. This allows you to adjust your temperature as you move.</p>
      
      <h3>2. Invest in Good Boots</h3>
      <p>Your feet are your most important asset. Ensure your boots are waterproof, have good ankle support, and most importantly, are well broken-in before you start the trek.</p>
      
      <h3>3. The Sleeping Bag</h3>
      <p>Even if teahouses provide blankets, a high-quality sleeping bag rated to at least -15°C is essential for a good night's sleep in the higher villages like Gokyo and Machhermo.</p>
      
      <h3>4. Sun Protection</h3>
      <p>The sun is incredibly strong at high altitudes. Bring high-SPF sunscreen, lip balm with SPF, and category 3 or 4 sunglasses to prevent snow blindness.</p>
      
      <h3>5. Power and Connectivity</h3>
      <p>Batteries drain fast in the cold. Bring a high-capacity power bank and keep your electronics inside your sleeping bag at night to preserve their charge.</p>
    `,
    date: 'April 5, 2026',
    image: '/TheUltimatePackingGuideforGokyo.png',
    author: 'Ang Rita',
    category: 'Gear'
  }
];
export const GALLERY_IMAGES = [
  {
    url: '/GokyoThirdLake.jpg',
    alt: 'The pristine turquoise waters of Gokyo Lake',
    caption: 'Gokyo Third Lake',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    url: '/RenjoLaTrail.jpg',
    alt: 'Trekkers heading towards the high passes',
    caption: 'Renjo La Trail',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    url: '/HimalayanPanorama.jpg',
    alt: 'Panoramic view from Gokyo Ri',
    caption: 'Himalayan Panorama',
    className: 'md:col-span-1 md:row-span-2'
  },
  {
    url: '/HighAltitudePeaks.jpg',
    alt: 'Mountain textures and peaks',
    caption: 'High Altitude Peaks',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    url: '/GreatestHeights.jpg',
    alt: 'Everest and Lhotse from a distance',
    caption: 'Greatest Heights',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    url: '/NamcheBazaarr.jpg',
    alt: 'Sunset over prayer flags',
    caption: 'Namche Bazaar',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    url: '/hero-lukla.jpg',
    alt: 'lukla airport view',
    caption: 'Lukla Airport',
    className: 'md:col-span-1 md:row-span-1'
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Khumbu-Born Expertise',
    description: 'Our lead guides aren\'t just certified; they were born and raised in these high valleys. They know every rock, wind-pattern, and hidden trail.',
    icon: Award
  },
  {
    title: 'Gokyo Lake Guardians',
    description: 'We lead the annual "Blue Water" initiative, partnering with the SPCC to remove waste and protect the fragile ecosystem of the 6 lakes.',
    icon: Leaf
  },
  {
    title: 'Sherpa-Owned & Led',
    description: 'Unlike many agencies, 100% of our profits stay in the local community, funding schools and mountain infrastructure in the Everest region.',
    icon: Users
  },
  {
    title: 'Altitude Safety First',
    description: 'Our teams carry PAC (Portable Altitude Chamber) bags and oxygen. We maintain a strict "walk high, sleep low" culture on every trek.',
    icon: ShieldCheck
  },
  {
    title: 'Small Team Intimacy',
    description: 'Limited to 8 trekkers. No large crowds, just deep cultural immersion and dedicated one-on-one support throughout your journey.',
    icon: Users
  },
  {
    title: 'Direct Base Support',
    description: 'Real-time satellite tracking and a 24/7 Kathmandu rescue hub monitoring every group\'s metabolic and mental health.',
    icon: Headphones
  }
];

export const HERITAGE_STORY = {
  title: "A Legacy in Every Step",
  description: "Founded by Ang Tshering Sherpa, our mission is to preserve the untamed beauty of the Gokyo valley while empowering the people who call it home. We aren't just guides; we are the descendants of these mountains.",
  signature: "Ang Tshering Sherpa",
  role: "Founder & Lead Expeditionist"
};

export const PARTNERS = [
  'Nepal Tourism Board',
  'TAAN',
  'NMA',
  'Keep Nepal'
];
