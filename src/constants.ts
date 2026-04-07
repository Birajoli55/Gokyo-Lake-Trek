import { Itinerary, GearItem, FAQ, BlogPost } from './types';

export const TREK_STATS = [
  { label: 'Max Elevation', value: '5,357m', sub: 'Gokyo Ri' },
  { label: 'Duration', value: '12-15 Days', sub: 'Flexible' },
  { label: 'Difficulty', value: 'Challenging', sub: 'High Altitude' },
  { label: 'Best Season', value: 'Spring/Autumn', sub: 'Clear Skies' },
];

export const ITINERARIES: Itinerary[] = [
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

export const GEAR_LIST: GearItem[] = [
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

export const FAQS: FAQ[] = [
  {
    question: 'How difficult is the Gokyo Lake Trek?',
    answer: 'It is considered a moderate to challenging trek. While it doesn\'t require technical climbing, the high altitude (reaching 5,357m) and long walking days require good physical fitness and proper acclimatization.'
  },
  {
    question: 'Do I need a guide for this trek?',
    answer: 'As of 2023, the Nepal government has made it mandatory for solo trekkers to hire a licensed guide in most trekking regions, including the Everest region, for safety and environmental reasons.'
  },
  {
    question: 'What permits are required?',
    answer: 'You need the Khumbu Pasang Lhamu Rural Municipality Entrance Permit and the Sagarmatha National Park Entry Permit. If you are trekking from Jiri, you also need the Gaurishankar Conservation Area Permit.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
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
    image: 'https://picsum.photos/seed/gokyo1/800/600',
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
    image: 'https://picsum.photos/seed/trekking/800/600',
    author: 'Dr. Pasang Lhamu',
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
    image: 'https://picsum.photos/seed/packing/800/600',
    author: 'Ang Rita',
    category: 'Gear'
  }
];
