// Comprehensive Content Enhancement for Independence Day Website

// Historical Timeline Data
const historicalTimeline = [
  {
    year: "1857",
    title: "First War of Independence",
    description: "The Sepoy Mutiny marked the beginning of organized resistance against British rule.",
    significance: "Sparked nationwide awareness about independence"
  },
  {
    year: "1885",
    title: "Formation of Indian National Congress",
    description: "The INC was established to voice Indian concerns and demands for self-governance.",
    significance: "First organized political platform for independence"
  },
  {
    year: "1905",
    title: "Partition of Bengal",
    description: "British attempt to divide Bengal led to the Swadeshi movement.",
    significance: "United Indians against British divide-and-rule policy"
  },
  {
    year: "1919",
    title: "Jallianwala Bagh Massacre",
    description: "British troops killed hundreds of peaceful protesters in Amritsar.",
    significance: "Turned moderate Indians into freedom fighters"
  },
  {
    year: "1920",
    title: "Non-Cooperation Movement",
    description: "Gandhi launched mass civil disobedience against British rule.",
    significance: "First nationwide mass movement for independence"
  },
  {
    year: "1930",
    title: "Salt March (Dandi March)",
    description: "Gandhi's 240-mile march to make salt, breaking British salt monopoly.",
    significance: "Symbol of peaceful resistance worldwide"
  },
  {
    year: "1942",
    title: "Quit India Movement",
    description: "Gandhi's call for immediate British withdrawal from India.",
    significance: "Final push for complete independence"
  },
  {
    year: "1947",
    title: "Independence Day",
    description: "India gained freedom at the stroke of midnight on August 15, 1947.",
    significance: "Birth of the world's largest democracy"
  }
];

// States and Union Territories Data
const statesData = [
  {
    name: "Andhra Pradesh",
    capital: "Amaravati",
    language: "Telugu",
    specialty: "Spicy cuisine and classical dance",
    famousFor: "Tirupati Temple, Araku Valley"
  },
  {
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    language: "Hindi, English",
    specialty: "Tribal culture and biodiversity",
    famousFor: "Tawang Monastery, Ziro Valley"
  },
  {
    name: "Assam",
    capital: "Dispur",
    language: "Assamese",
    specialty: "Tea gardens and silk",
    famousFor: "Kaziranga National Park, Majuli Island"
  },
  {
    name: "Bihar",
    capital: "Patna",
    language: "Hindi, Bhojpuri",
    specialty: "Ancient history and education",
    famousFor: "Nalanda University, Bodh Gaya"
  },
  {
    name: "Chhattisgarh",
    capital: "Raipur",
    language: "Hindi, Chhattisgarhi",
    specialty: "Tribal art and minerals",
    famousFor: "Chitrakote Falls, Bastar region"
  },
  {
    name: "Goa",
    capital: "Panaji",
    language: "Konkani, Portuguese",
    specialty: "Beaches and Portuguese heritage",
    famousFor: "Beaches, Churches, Carnival"
  },
  {
    name: "Gujarat",
    capital: "Gandhinagar",
    language: "Gujarati",
    specialty: "Business and entrepreneurship",
    famousFor: "Statue of Unity, Rann of Kutch"
  },
  {
    name: "Haryana",
    capital: "Chandigarh",
    language: "Hindi, Haryanvi",
    specialty: "Agriculture and sports",
    famousFor: "Wrestling, Kurukshetra"
  },
  {
    name: "Himachal Pradesh",
    capital: "Shimla",
    language: "Hindi, Pahari",
    specialty: "Hill stations and adventure sports",
    famousFor: "Manali, Dharamshala, Apple orchards"
  },
  {
    name: "Jharkhand",
    capital: "Ranchi",
    language: "Hindi, Santali",
    specialty: "Minerals and tribal culture",
    famousFor: "Jamshedpur, Dhanbad coal mines"
  },
  {
    name: "Karnataka",
    capital: "Bengaluru",
    language: "Kannada",
    specialty: "IT hub and classical music",
    famousFor: "Silicon Valley of India, Mysore Palace"
  },
  {
    name: "Kerala",
    capital: "Thiruvananthapuram",
    language: "Malayalam",
    specialty: "Backwaters and spices",
    famousFor: "God's Own Country, Ayurveda"
  },
  {
    name: "Madhya Pradesh",
    capital: "Bhopal",
    language: "Hindi",
    specialty: "Wildlife and heritage",
    famousFor: "Khajuraho, Kanha National Park"
  },
  {
    name: "Maharashtra",
    capital: "Mumbai",
    language: "Marathi",
    specialty: "Bollywood and business",
    famousFor: "Financial capital, Ajanta Ellora"
  },
  {
    name: "Manipur",
    capital: "Imphal",
    language: "Manipuri",
    specialty: "Classical dance and sports",
    famousFor: "Loktak Lake, Manipuri dance"
  },
  {
    name: "Meghalaya",
    capital: "Shillong",
    language: "Khasi, Garo",
    specialty: "Living root bridges and rainfall",
    famousFor: "Wettest place on Earth, Cherrapunji"
  },
  {
    name: "Mizoram",
    capital: "Aizawl",
    language: "Mizo",
    specialty: "Bamboo crafts and festivals",
    famousFor: "Blue Mountain, Chapchar Kut festival"
  },
  {
    name: "Nagaland",
    capital: "Kohima",
    language: "English, Naga languages",
    specialty: "Tribal festivals and handicrafts",
    famousFor: "Hornbill Festival, WWII history"
  },
  {
    name: "Odisha",
    capital: "Bhubaneswar",
    language: "Odia",
    specialty: "Classical dance and temples",
    famousFor: "Jagannath Temple, Konark Sun Temple"
  },
  {
    name: "Punjab",
    capital: "Chandigarh",
    language: "Punjabi",
    specialty: "Agriculture and Sikhism",
    famousFor: "Golden Temple, Bhangra dance"
  },
  {
    name: "Rajasthan",
    capital: "Jaipur",
    language: "Hindi, Rajasthani",
    specialty: "Royal heritage and deserts",
    famousFor: "Pink City, Thar Desert, Palaces"
  },
  {
    name: "Sikkim",
    capital: "Gangtok",
    language: "Nepali, Sikkimese",
    specialty: "Himalayan beauty and Buddhism",
    famousFor: "Kanchenjunga, Organic farming"
  },
  {
    name: "Tamil Nadu",
    capital: "Chennai",
    language: "Tamil",
    specialty: "Classical arts and temples",
    famousFor: "Meenakshi Temple, Marina Beach"
  },
  {
    name: "Telangana",
    capital: "Hyderabad",
    language: "Telugu, Urdu",
    specialty: "IT and pharmaceuticals",
    famousFor: "Charminar, Biryani, Cyberabad"
  },
  {
    name: "Tripura",
    capital: "Agartala",
    language: "Bengali, Tripuri",
    specialty: "Bamboo and handicrafts",
    famousFor: "Ujjayanta Palace, Neermahal"
  },
  {
    name: "Uttar Pradesh",
    capital: "Lucknow",
    language: "Hindi, Urdu",
    specialty: "Heritage and spirituality",
    famousFor: "Taj Mahal, Varanasi, Ayodhya"
  },
  {
    name: "Uttarakhand",
    capital: "Dehradun",
    language: "Hindi, Garhwali",
    specialty: "Pilgrimage and adventure",
    famousFor: "Char Dham, Valley of Flowers"
  },
  {
    name: "West Bengal",
    capital: "Kolkata",
    language: "Bengali",
    specialty: "Literature and sweets",
    famousFor: "Cultural capital, Durga Puja"
  }
];

// Indian Achievements Data
const achievements = [
  {
    category: "Space Technology",
    items: [
      "Chandrayaan-3: Successful Moon landing at South Pole",
      "Mars Orbiter Mission: Cost-effective Mars exploration",
      "ISRO: World's most cost-effective space agency",
      "104 satellites launched in single mission",
      "Aryabhata: First Indian satellite (1975)"
    ]
  },
  {
    category: "Technology & Innovation",
    items: [
      "UPI: Revolutionary digital payment system",
      "Aadhaar: World's largest biometric ID system",
      "Digital India: Massive digitization initiative",
      "JAM Trinity: Jan Dhan, Aadhaar, Mobile integration",
      "CoWIN: World's largest vaccination platform"
    ]
  },
  {
    category: "Defense & Security",
    items: [
      "Nuclear Power: Successful nuclear tests (1998)",
      "Indigenous Aircraft: Tejas fighter jet",
      "Missile Technology: Agni, Prithvi, BrahMos missiles",
      "Naval Power: Indigenous aircraft carrier INS Vikrant",
      "Cyber Security: Advanced cyber defense capabilities"
    ]
  },
  {
    category: "Economic Growth",
    items: [
      "5th Largest Economy: Global economic powerhouse",
      "Startup Ecosystem: 3rd largest startup ecosystem",
      "Manufacturing Hub: Make in India initiative",
      "Service Sector: Global IT services leader",
      "Financial Inclusion: 80% population banked"
    ]
  },
  {
    category: "Healthcare & Medicine",
    items: [
      "Vaccine Production: World's largest vaccine manufacturer",
      "Generic Medicines: Pharmacy of the world",
      "Ayurveda: Ancient medical system recognition",
      "Medical Tourism: Global healthcare destination",
      "COVID Response: Successful pandemic management"
    ]
  },
  {
    category: "Education & Research",
    items: [
      "IIT System: World-renowned technical institutes",
      "Digital Learning: Massive online education platforms",
      "Research Output: Growing scientific publications",
      "Skill Development: Largest skill development program",
      "Higher Education: Expanding university system"
    ]
  }
];

// Cultural Heritage Data
const culturalHeritage = [
  {
    type: "Classical Dances",
    items: [
      "Bharatanatyam (Tamil Nadu) - Temple dance tradition",
      "Kathak (North India) - Storytelling through dance",
      "Odissi (Odisha) - Sculptural dance form",
      "Kuchipudi (Andhra Pradesh) - Dance-drama tradition",
      "Mohiniyattam (Kerala) - Dance of the enchantress",
      "Manipuri (Manipur) - Devotional dance form",
      "Kathakali (Kerala) - Classical dance-drama",
      "Sattriya (Assam) - Monastery dance tradition"
    ]
  },
  {
    type: "Musical Traditions",
    items: [
      "Hindustani Classical - North Indian classical music",
      "Carnatic Music - South Indian classical tradition",
      "Folk Music - Regional traditional songs",
      "Qawwali - Sufi devotional music",
      "Bhajan - Devotional songs",
      "Ghazal - Poetic musical form",
      "Thumri - Semi-classical vocal music",
      "Dhrupad - Ancient classical form"
    ]
  },
  {
    type: "Art Forms",
    items: [
      "Madhubani Painting (Bihar) - Folk art tradition",
      "Warli Art (Maharashtra) - Tribal painting style",
      "Tanjore Painting (Tamil Nadu) - Classical art form",
      "Pattachitra (Odisha) - Traditional cloth painting",
      "Miniature Paintings (Rajasthan) - Detailed artwork",
      "Kalamkari (Andhra Pradesh) - Hand-painted textiles",
      "Phad Painting (Rajasthan) - Scroll paintings",
      "Gond Art (Madhya Pradesh) - Tribal art form"
    ]
  },
  {
    type: "Festivals",
    items: [
      "Diwali - Festival of Lights (Pan-India)",
      "Holi - Festival of Colors (North India)",
      "Durga Puja - Goddess worship (Bengal)",
      "Ganesh Chaturthi - Elephant God festival (Maharashtra)",
      "Onam - Harvest festival (Kerala)",
      "Pongal - Harvest celebration (Tamil Nadu)",
      "Baisakhi - Spring harvest (Punjab)",
      "Navratri - Nine nights of dance (Gujarat)"
    ]
  },
  {
    type: "Architectural Marvels",
    items: [
      "Taj Mahal - Symbol of love (Agra)",
      "Red Fort - Mughal architecture (Delhi)",
      "Qutub Minar - Indo-Islamic architecture (Delhi)",
      "Ajanta Ellora - Rock-cut caves (Maharashtra)",
      "Khajuraho - Temple sculptures (Madhya Pradesh)",
      "Hampi - Vijayanagara ruins (Karnataka)",
      "Konark Sun Temple - Architectural wonder (Odisha)",
      "Sanchi Stupa - Buddhist architecture (Madhya Pradesh)"
    ]
  }
];

// Freedom Fighters Extended Data
const freedomFighters = [
  {
    name: "Mahatma Gandhi",
    title: "Father of the Nation",
    contribution: "Led non-violent independence movement",
    quote: "Be the change you wish to see in the world",
    birthYear: 1869,
    region: "Gujarat",
    movement: "Non-cooperation, Civil Disobedience"
  },
  {
    name: "Netaji Subhas Chandra Bose",
    title: "Azad Hind Fauj Leader",
    contribution: "Formed Indian National Army",
    quote: "Give me blood, and I shall give you freedom",
    birthYear: 1897,
    region: "Bengal",
    movement: "Armed resistance, INA"
  },
  {
    name: "Bhagat Singh",
    title: "Revolutionary Martyr",
    contribution: "Youth icon of freedom struggle",
    quote: "Inquilab Zindabad!",
    birthYear: 1907,
    region: "Punjab",
    movement: "Revolutionary activities"
  },
  {
    name: "Rani Lakshmibai",
    title: "Warrior Queen of Jhansi",
    contribution: "Led 1857 rebellion in Central India",
    quote: "Main apni Jhansi nahi dungi",
    birthYear: 1828,
    region: "Uttar Pradesh",
    movement: "1857 Revolt"
  },
  {
    name: "Chandrashekhar Azad",
    title: "Revolutionary Freedom Fighter",
    contribution: "Hindustan Republican Association leader",
    quote: "Dushman ki goliyon ka hum samna karenge",
    birthYear: 1906,
    region: "Uttar Pradesh",
    movement: "Revolutionary activities"
  },
  {
    name: "Sardar Vallabhbhai Patel",
    title: "Iron Man of India",
    contribution: "United 562 princely states",
    quote: "Unity in diversity is India's strength",
    birthYear: 1875,
    region: "Gujarat",
    movement: "Integration of India"
  },
  {
    name: "Jawaharlal Nehru",
    title: "First Prime Minister",
    contribution: "Architect of modern India",
    quote: "At the stroke of midnight hour, when the world sleeps, India will awake to life and freedom",
    birthYear: 1889,
    region: "Uttar Pradesh",
    movement: "Congress leadership"
  },
  {
    name: "Maulana Abul Kalam Azad",
    title: "Education Minister",
    contribution: "Promoted education and secularism",
    quote: "Education imparted by heart can bring revolution in the society",
    birthYear: 1888,
    region: "West Bengal",
    movement: "Educational reform"
  },
  {
    name: "Sarojini Naidu",
    title: "Nightingale of India",
    contribution: "Poet and freedom fighter",
    quote: "A country's greatness lies in its undying ideals of love and sacrifice",
    birthYear: 1879,
    region: "Andhra Pradesh",
    movement: "Women's rights, Independence"
  },
  {
    name: "Bal Gangadhar Tilak",
    title: "Father of Indian Unrest",
    contribution: "Promoted Swaraj movement",
    quote: "Swaraj is my birthright and I shall have it",
    birthYear: 1856,
    region: "Maharashtra",
    movement: "Extremist movement"
  }
];

// National Symbols Extended
const nationalSymbols = {
  flag: {
    name: "Tiranga",
    colors: ["Saffron (Courage)", "White (Peace)", "Green (Prosperity)"],
    symbol: "Ashoka Chakra (24 spokes)",
    meaning: "Dharma (Righteousness)",
    designer: "Pingali Venkayya",
    adopted: "July 22, 1947"
  },
  anthem: {
    name: "Jana Gana Mana",
    composer: "Rabindranath Tagore",
    language: "Bengali",
    duration: "52 seconds",
    adopted: "January 24, 1950",
    meaning: "Victory to the ruler of minds"
  },
  song: {
    name: "Vande Mataram",
    composer: "Bankim Chandra Chatterjee",
    language: "Sanskrit/Bengali",
    meaning: "I bow to thee, Mother",
    significance: "Inspired freedom fighters",
    status: "National Song"
  },
  emblem: {
    name: "State Emblem",
    source: "Lion Capital of Ashoka",
    location: "Sarnath",
    animals: "Four Asiatic Lions",
    motto: "Satyameva Jayate",
    meaning: "Truth Alone Triumphs"
  },
  bird: {
    name: "Indian Peacock",
    scientific: "Pavo cristatus",
    significance: "Grace, beauty, pride",
    habitat: "Throughout India",
    status: "Protected species"
  },
  animal: {
    name: "Bengal Tiger",
    scientific: "Panthera tigris tigris",
    significance: "Strength, power, grace",
    habitat: "Indian subcontinent",
    status: "National animal since 1973"
  },
  flower: {
    name: "Lotus",
    scientific: "Nelumbo nucifera",
    significance: "Purity, spirituality",
    symbolism: "Rising above muddy waters",
    religious: "Sacred in Hinduism and Buddhism"
  },
  tree: {
    name: "Banyan Tree",
    scientific: "Ficus benghalensis",
    significance: "Immortality, unity",
    characteristics: "Aerial roots, vast canopy",
    cultural: "Village meeting place"
  },
  fruit: {
    name: "Mango",
    scientific: "Mangifera indica",
    significance: "King of fruits",
    varieties: "Over 1000 varieties",
    season: "Summer fruit"
  },
  river: {
    name: "Ganges",
    length: "2,525 km",
    significance: "Sacred river",
    origin: "Gangotri Glacier",
    importance: "Spiritual and cultural"
  }
};

// Modern India Statistics
const modernIndiaStats = {
  demographics: {
    population: "1.4+ billion",
    languages: "22 official languages",
    religions: "All major world religions",
    literacy: "77.7%",
    urbanization: "35%"
  },
  economy: {
    gdp: "$3.7 trillion",
    ranking: "5th largest economy",
    growth: "6-7% annually",
    sectors: "Services, Manufacturing, Agriculture",
    exports: "$400+ billion"
  },
  technology: {
    internet: "700+ million users",
    mobile: "1.2+ billion connections",
    startups: "100+ unicorns",
    it_exports: "$150+ billion",
    digital_payments: "UPI transactions"
  },
  infrastructure: {
    railways: "68,000 km network",
    highways: "1.4+ million km",
    airports: "140+ airports",
    ports: "12 major ports",
    power: "400+ GW capacity"
  }
};

// Export all data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    historicalTimeline,
    statesData,
    achievements,
    culturalHeritage,
    freedomFighters,
    nationalSymbols,
    modernIndiaStats
  };
}

// Make data available globally
window.IndiaData = {
  historicalTimeline,
  statesData,
  achievements,
  culturalHeritage,
  freedomFighters,
  nationalSymbols,
  modernIndiaStats
};