export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: string | string[];
  image?: string;
  sourcePage: string;
  type: 'title' | 'content' | 'stats' | 'process' | 'quote' | 'cta';
  stats?: Array<{
    label: string;
    value: string;
    icon?: string;
  }>;
  processSteps?: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}

export const presentationSlides: Slide[] = [
  // Title Slide
  {
    id: 1,
    title: "RAMAERA INDUSTRIES LTD",
    subtitle: "India's First Community-Owned Public Limited Company",
    content: "Building Real Factories. Sharing Real Profits. Creating Real Impact.",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "HomePage",
    type: "title"
  },

  // Vision & Mission
  {
    id: 2,
    title: "OUR VISION",
    subtitle: "Transforming India Through Industrial Democracy",
    content: [
      "Turn ordinary Indians into co-owners of extraordinary industries",
      "Build India's future from the grassroots up",
      "Create generational wealth through real asset ownership",
      "Democratize industrial ownership across the nation"
    ],
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "AboutPage",
    type: "content"
  },

  // What Makes Us Different
  {
    id: 3,
    title: "WE ARE NOT A SCHEME",
    subtitle: "Understanding What Ramaera Really Is",
    content: [
      "❌ Not a financial scheme or investment platform",
      "❌ Not a startup seeking funding",
      "❌ Not a crowdfunding website",
      "✅ A legitimate public limited company",
      "✅ Community-owned industrial enterprise",
      "✅ Real factories with real operations"
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "AboutPage",
    type: "content"
  },

  // What is RAMAERA - NEW SLIDE
  {
    id: 4,
    title: "WHAT IS RAMAERA? - PART 1",
    subtitle: "The Core Ideology: Community-Owned Industrialization",
    content: [
      "🤝 A closed community of common people, united since 2020",
      "💡 Bringing together three types of people:",
      "   • Those with knowledge but no funds",
      "   • Those with funds but no knowledge", 
      "   • Those with networks and connections",
      "🏭 Basic idea: When knowledgeable person wants to start manufacturing",
      "💰 Other community members help with small contributions",
      "🤝 Everyone shares profits based on mutual understanding",
      "🌟 Creating opportunities for common people to become industrialists"
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "AboutPage",
    type: "content"
  },

  // What is RAMAERA Part 2 - NEW SLIDE
  {
    id: 5,
    title: "WHAT IS RAMAERA? - PART 2",
    subtitle: "The Financial Model & Scalable Impact",
    content: [
      "💰 Funding Example: ₹1 Cr factory = 1,000 people × ₹10,000 each",
      "📊 Profit Distribution Model:",
      "   • 30% → Factory operator (knowledge & experience)",
      "   • 55% → Shareholders (who contributed funds)",
      "   • 10% → Marketing & community growth",
      "   • 5% → Ramaera operations",
      "👥 Community Growth: 22,000 → Target: 2,00,000 shareholders",
      "🎯 Portfolio Strategy: Lower contribution, higher factory count",
      "🌾 Real Impact: Farmer invests ₹1 lakh across 30 factories",
      "💵 Expected Returns: ₹50,000/year after 2-3 years"
    ],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "AboutPage",
    type: "content"
  },
  // Current Impact Stats
  {
    id: 6,
    title: "REAL IMPACT, REAL RESULTS",
    subtitle: "Our Current Achievements",
    content: "Factories funded, jobs created, communities empowered",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "HomePage",
    type: "stats",
    stats: [
      { label: "Spice Factory Launched", value: "₹2.2 Cr", icon: "Factory" },
      { label: "Supermarket Funded", value: "₹45 Lakh", icon: "ShoppingCart" },
      { label: "Shareholders Growing", value: "22,000+", icon: "Users" },
      { label: "Target Factories", value: "10,000+", icon: "Target" }
    ]
  },

  // How It Works - Overview
  {
    id: 7,
    title: "HOW IT WORKS",
    subtitle: "Your Journey from Shareholder to Factory Co-Owner",
    content: "Simple 8-step process to become a factory co-owner and build India's industrial future",
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "HowItWorksPage",
    type: "process",
    processSteps: [
      { number: "1", title: "Get Invited", description: "Receive invitation from existing shareholder" },
      { number: "2", title: "Buy Share", description: "Become lifetime shareholder of Ramaera" },
      { number: "3", title: "Explore Projects", description: "Browse live factory projects in dashboard" },
      { number: "4", title: "Invest & Earn", description: "Contribute to factories and receive yearly profits" }
    ]
  },

  // Step 1: Get Invited
  {
    id: 8,
    title: "STEP 1: GET INVITED",
    subtitle: "Exclusive Community Access",
    content: [
      "Must be invited by an existing shareholder",
      "Ensures trusted community members only",
      "Maintains quality and alignment with values",
      "Creates accountability within the network"
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "HowItWorksPage",
    type: "content"
  },

  // Step 2: Buy Share
  {
    id: 9,
    title: "STEP 2: BUY MINIMUM 1 SHARE",
    subtitle: "Become a Lifetime Partner",
    content: [
      "Minimum investment: ₹500 for 1 share",
      "Lifetime partnership with Ramaera Industries",
      "Access to all current and future projects",
      "Non-tradable until IPO announcement"
    ],
    image: "/assets/buy.jpg",
    sourcePage: "HowItWorksPage",
    type: "content"
  },

  // Step 3: Explore Projects
  {
    id: 10,
    title: "STEP 3: EXPLORE PROJECTS",
    subtitle: "Browse Live Factory Opportunities",
    content: [
      "Access member dashboard with live projects",
      "View detailed project information",
      "Check funding progress and timelines",
      "Analyze potential returns and risks"
    ],
    image: "/assets/project.jpg",
    sourcePage: "HowItWorksPage",
    type: "content"
  },

  // Step 4: Invest & Earn
  {
    id: 11,
    title: "STEP 4: INVEST & EARN",
    subtitle: "Contribute and Receive Profits",
    content: [
      "Invest in multiples of project units (₹500, ₹10,000, etc.)",
      "Receive yearly profit distributions",
      "Profits based on actual factory performance",
      "Transparent auditing and reporting"
    ],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "HowItWorksPage",
    type: "content"
  },

  // Live Projects Overview
  {
    id: 12,
    title: "LIVE FACTORY PROJECTS",
    subtitle: "Real Factories, Real Profits, Real Impact",
    content: "Currently operational and upcoming manufacturing ventures",
    image: "/assets/factory.jpg",
    sourcePage: "SuccessStoriesPage",
    type: "content"
  },

  // Spice Factory Success
  {
    id: 13,
    title: "SUCCESS STORY: SPICE FACTORY",
    subtitle: "Hajipur, Bihar - ₹2.2 Crore Investment",
    content: [
      "✅ Fully operational and profitable",
      "✅ 4,000+ investors participating",
      "✅ 60+ jobs created locally",
      "✅ Modern processing equipment installed",
      "✅ Monthly profit sharing active"
    ],
    image: "/assets/sliderHeader.webp",
    sourcePage: "SuccessStoriesPage",
    type: "content"
  },

  // Supermarket Success
  {
    id: 14,
    title: "SUCCESS STORY: RAMAERA MART",
    subtitle: "Agra, UP - ₹45 Lacs Investment",
    content: [
      "✅ Community supermarket operational",
      "✅ 1,800+ investors involved",
      "✅ 20+ local families employed",
      "✅ Serving 2,000+ households weekly",
      "✅ Digital payment integration complete"
    ],
    image: "/assets/mart1.jpg",
    sourcePage: "SuccessStoriesPage",
    type: "content"
  },

  // Industries We Target
  {
    id: 15,
    title: "TARGET INDUSTRIES",
    subtitle: "Manufacturing Across Every Sector",
    content: [
      "🏭 FMCG & Personal Care",
      "🌾 Food Processing & Agriculture",
      "🏪 Retail & Supermarkets",
      "⚡ Electronics & Appliances",
      "👕 Apparel & Textiles",
      "💊 Healthcare & Pharma",
      "🎓 Education & Training Centers",
      "🔨 Construction Materials"
    ],
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "IndustriesPage",
    type: "content"
  },

  // Profit Distribution
  {
    id: 16,
    title: "PROFIT DISTRIBUTION MODEL",
    subtitle: "How Factory Earnings Are Shared",
    content: [
      "30% → Factory Operator (Management)",
      "55% → Project Investors (Shareholders)",
      "10% → Marketing & Growth",
      "5% → Operations & Legal"
    ],
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "HowItWorksPage",
    type: "content"
  },

  // Example Calculation
  {
    id: 17,
    title: "PROFIT EXAMPLE",
    subtitle: "₹1 Crore Factory with ₹10 Lakh Monthly Profit",
    content: [
      "Factory Operator: ₹3 Lakh",
      "Project Investors: ₹5.5 Lakh",
      "Marketing Budget: ₹1 Lakh",
      "Operations: ₹50,000"
    ],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "HowItWorksPage",
    type: "content"
  },

  // Who Can Join
  {
    id: 18,
    title: "WHO CAN JOIN RAMAERA",
    subtitle: "After Becoming a Shareholder, You Can:",
    content: [
      "🎯 Explore & invest in any project",
      "🏭 Apply to launch your own factory",
      "💰 Receive yearly profit distribution",
      "👨‍👩‍👧‍👦 Pass profits to nominee",
      "🔄 Access unlimited future projects"
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "AboutPage",
    type: "content"
  },

  // Community Stats
  {
    id: 19,
    title: "THRIVING COMMUNITY",
    subtitle: "Join India's Largest Industrial Investment Community",
    content: "Building India's industrial future together",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "JoinPage",
    type: "stats",
    stats: [
      { label: "Active Members", value: "22,000+", icon: "Users" },
      { label: "Total Invested", value: "₹2.95 Cr", icon: "IndianRupee" },
      { label: "Factories Running", value: "2", icon: "Factory" },
      { label: "Target Vision", value: "10,000+", icon: "Target" }
    ]
  },

  // Why Choose Ramaera
  {
    id: 20,
    title: "WHY CHOOSE RAMAERA?",
    subtitle: "Unique Benefits of Community Ownership",
    content: [
      "🏭 Co-own real industries, not paper investments",
      "🛡️ No risk of fraud - legal & regulated",
      "♾️ Lifetime access to unlimited projects",
      "💰 Real profits from real factories",
      "🤝 Community support and transparency"
    ],
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "JoinPage",
    type: "content"
  },

  // Factory Application Process
  {
    id: 21,
    title: "APPLY FOR YOUR FACTORY",
    subtitle: "For Skilled People Without Funds",
    content: [
      "Have technical expertise? We provide funding",
      "Community evaluates your proposal",
      "Interview process for approved applications",
      "Launch your factory with community support"
    ],
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "ApplyFactoryPage",
    type: "content"
  },

  // Examples of Dreamers
  {
    id: 22,
    title: "DREAMERS WE HELP",
    subtitle: "Real People Building Real Factories",
    content: [
      "🔧 Mechanics with auto-parts ideas",
      "🌶️ Homemakers with spice blend formulas",
      "💊 Pharmacists making affordable medicine",
      "🎓 Teachers launching skill schools"
    ],
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "ApplyFactoryPage",
    type: "content"
  },

  // Coming Soon Projects
  {
    id: 23,
    title: "UPCOMING PROJECTS",
    subtitle: "Next Wave of Factories in Development",
    content: [
      "💡 LED Plant - Gujarat (₹1.5 Cr)",
      "👕 Garment Unit - Kolkata (₹1.2 Cr)",
      "🌾 Flour Mill - Punjab (₹80 Lacs)",
      "💧 Alkaline Water Plant - Jhansi & Chhapra (₹30 Lacs)",
      "🍽️ Frozen Foods - Kashipur (₹10 Lacs)"
    ],
    image: "/assets/water1.jpg",
    sourcePage: "SuccessStoriesPage",
    type: "content"
  },

  // Investment Terms
  {
    id: 24,
    title: "INVESTMENT TERMS",
    subtitle: "Important Information for Shareholders",
    content: [
      "⚠️ No guaranteed returns - this is not a scheme",
      "📊 Profits distributed only after actual earnings",
      "⏳ If no profit, investors wait for next year",
      "🏭 Pure industrialization, not financial trading",
      "🔒 All investments are non-refundable"
    ],
    image: "https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "HowItWorksPage",
    type: "content"
  },

  // Shareholding Benefits
  {
    id: 25,
    title: "SHAREHOLDER BENEFITS",
    subtitle: "What You Get as a Ramaera Partner",
    content: [
      "🏭 Co-ownership in real manufacturing units",
      "💰 Yearly profit distributions from successful factories",
      "🎯 Access to unlimited future projects",
      "👨‍👩‍👧‍👦 Transferable to family members/nominees",
      "📈 Potential IPO benefits when company goes public"
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "JoinPage",
    type: "content"
  },

  // Community Journey
  {
    id: 26,
    title: "OUR JOURNEY",
    subtitle: "From Vision to Reality",
    content: [
      "2020-2022: Formed community of 22,000 citizens",
      "2023-Now: Successfully launched first real factories",
      "2025 Goal: 200,000 shareholders & 1,000 industries"
    ],
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "AboutPage",
    type: "content"
  },

  // Risk Disclosure
  {
    id: 27,
    title: "RISK DISCLOSURE",
    subtitle: "Important Investment Considerations",
    content: [
      "⚠️ Industrial investments carry inherent risks",
      "📉 Some factories may not generate profits",
      "🔒 Investments are non-refundable",
      "⏰ Returns are not guaranteed or time-bound",
      "🏭 Success depends on market conditions and management"
    ],
    image: "https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "HowItWorksPage",
    type: "content"
  },

  // Generational Impact
  {
    id: 28,
    title: "BUILDING LEGACY",
    subtitle: "Generational Wealth Through Industrial Ownership",
    content: [
      "👨‍👩‍👧‍👦 Shares transferable to family members",
      "♾️ Lifetime partnership benefits",
      "🏭 Real asset ownership, not paper investments",
      "💎 Building wealth for future generations"
    ],
    image: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "AboutPage",
    type: "content"
  },

  // Quote Slide
  {
    id: 29,
    title: "OUR PHILOSOPHY",
    subtitle: "",
    content: "We are not raising money — we are raising a nation of industrialists.",
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "HomePage",
    type: "quote"
  },

  // Call to Action
  {
    id: 30,
    title: "JOIN THE REVOLUTION",
    subtitle: "Ready to Build India's Industrial Future?",
    content: [
      "🚀 Become a Ramaera Shareholder",
      "🏭 Apply to Launch Your Factory",
      "📞 Contact Our Community",
      "🌐 Visit Our Member Portal"
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sourcePage: "HomePage",
    type: "cta"
  }
];