// Event data management
// Add new events here and they'll automatically appear on the events page

export interface Event {
  id: string
  title: string
  tagline?: string
  description: string
  longDescription?: string
  date: string
  time?: string
  location: string
  capacity?: string
  status: "registration-open" | "registration-closed" | "completed"
  category: "Hackathon" | "Workshop" | "Panel" | "Social" | "Other"
  registrationLink?: string
  details?: {
    eligibility?: string
    teamSize?: string
    prizes?: string
    food?: string
  }
  schedule?: Array<{
    time: string
    title: string
    description: string
  }>
  faq?: Array<{
    question: string
    answer: string
  }>
  highlights?: string[]
  winners?: Array<{
    place: string
    team: string
    project: string
    description: string
  }>
}

export const events: Event[] = [
  {
    id: "hackml-2026",
    title: "HackML 2026",
    tagline: "DSSS Machine Learning Competition",
    description:
      "HackML 2026 is the first machine-learning-focused hackathon, where teams attempt to construct the best ML-models for each given question.",
    longDescription:
      "Join us for an intensive 24-hour hackathon focused on machine learning and artificial intelligence. Whether you're a beginner or an experienced ML practitioner, HackML offers opportunities to learn, collaborate, and innovate. Work in teams of up to 4 people to develop ML-powered applications, receive mentorship from industry professionals, attend technical workshops, and compete for exciting prizes.",
    date: "January 31st, 2026",
    time: "8:30 AM - 8:30 PM",
    location: "SFU Burnaby Campus - AQ Building",
    capacity: "125 participants",
    status: "registration-open",
    category: "Hackathon",
    registrationLink: "https://v0-hackml-portal.vercel.app/",
    details: {
      eligibility: "Open to all SFU students and students from other universities. All skill levels welcome.",
      teamSize: "Teams of 1-4 people. You can register individually and find teammates at the event.",
      prizes: "Over $5,000 in prizes including cash awards, tech gadgets, and software subscriptions.",
      food: "Meals, snacks, and beverages provided throughout the event.",
    },
    schedule: [
      { time: "8:30 AM", title: "Registration", description: "Participant check-in" },
      { time: "9:00 AM", title: "Opening Ceremony", description: "Welcome, agenda, rules, and team formation" },
      { time: "9:30 AM", title: "Hacking Begins", description: "Start building your projects" },
      { time: "12:30 PM", title: "Lunch", description: "Banh-Mi Sandwiches from Pho99" },
      { time: "1:30 PM", title: "Hacking Continues", description: "Final push for participants - submissions due by 5:30pm" },
      { time: "5:30 PM", title: "Dinner", description: "Pizza from Dominos" },
      { time: "6:15 PM", title: "Presentations", description: "Presentations will be held in BLU9402 in 2 waves - check Discord for details" },
      { time: "7:15 PM", title: "Judging", description: "Judging results + Round 2 Presentations" },
      { time: "8:45 PM", title: "Closing Ceremony", description: "Prizes awarded + Judges gifts + Group photo" }
    ],
    faq: [
      {
        question: "Do I need ML experience?",
        answer:
          "No! We welcome all skill levels.",
      },
      {
        question: "Do I need to be a Data Science student?",
        answer:
          "No, HackML 2026 is open to all SFU students, regardless of their major or background.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring your laptop, charger, and any other devices you need. We'll provide food, drinks, and workspace.",
      },
      {
        question: "Can I work alone?",
        answer:
          "We ask for everybody to group into teams of 4. On January 23rd, teams will be finalized, and accepted individual applicants will be added to non-full teams.",
      },
      {
        question: "Is there a registration fee?",
        answer: "No, HackML 2026 is completely free to attend. All meals and resources are provided.",
      },
    ],
  },
  {
    id: "hackml-2025",
    title: "DataJam 2025",
    tagline: "Our Inaugural ML Hackathon",
    description: "The first-ever HackML hackathon with 80+ participants and 15 amazing project submissions.",
    longDescription:
      "HackML 2025 was our inaugural machine learning hackathon that brought together over 80 students from SFU and UBCV. Participants presented their findings based on 3 unique datasets, which required proper cleaning and engineering before applying machine learning models.",
    date: "October 25, 2025",
    time: "8:30am - 9:30pm",
    location: "SFU Burnaby Campus",
    status: "completed",
    category: "Hackathon",
    highlights: [
      "100+ participants from SFU + UBCV",
      "14 project submissions",
      "4 industry judges",
      "$240 in prizes awarded",
    ],
    winners: [
      {
        place: "Best Beginner Team",
        team: "Enerlytics",
        project: "ClimaZoneAI - Renewable Energy Forecasting for Canada",
        description: "Enerlytics turns Canada’s daily weather data into solar, wind, and hydro forecasts, empowering industries and policymakers to plan smarter, cleaner, and more cost-efficient renewable energy. ",
      },
      {
        place: "Best Presentation",
        team: "Swing Effect",
        project: "Swing Efficiency Disruption Analysis",
        description: "Revolutionize batter development by moving beyond simple outcomes like batting average and quantifying the hidden mechanical battles happening on every swing.",
      },
      {
        place: "Most Effective Solution",
        team: "Data Dingers",
        project: "Data Dingers",
        description: "Data Dingers analyzes a variety of batting and pitching related factors with machine learning to maximize hard hit rate and minimize whiffs so teams can hit dingers while avoiding strikeouts.",
      },
      {
        place: "Most Creative Solution",
        team: "Mixed Doubles",
        project: "Mixed Doubles Curling Analysis",
        description: "The best strategies on impressing your date with Olympic Data compiled statistics."
      }
    ],
    schedule: [
      { time: "8:30 AM", title: "Registration", description: "Participant check-in" },
      { time: "9:00 AM", title: "Opening Ceremony", description: "Welcome, agenda, rules, and team formation" },
      { time: "9:30 AM", title: "Hacking Begins", description: "Start building your projects" },
      { time: "12:30 PM", title: "Lunch", description: "Banh-Mi Sandwiches from Pho99" },
      { time: "1:30 PM", title: "Hacking Continues", description: "Final push for participants - submissions due by 5:30pm" },
      { time: "5:30 PM", title: "Dinner", description: "Pizza from Pizza Hut" },
      { time: "6:15 PM", title: "Presentations", description: "Presentations will be held in BLU9402 in 2 waves - check Discord for details" },
      { time: "7:15 PM", title: "Judging", description: "Judging results + Round 2 Presentations" },
      { time: "8:45 PM", title: "Closing Ceremony", description: "Prizes awarded + Judges gifts + Group photo" }
    ],
  },
  {
    id: "summer-career-panel-2025",
    title: "Summer Career Panel 2025",
    description:
      "A panel of data science professionals share their experiences and advice for students seeking internships and full-time roles in the data science field.",
    date: "June 2025",
    location: "In-person at SFU Burnaby Campus's SUB Ballroom",
    status: "completed",
    category: "Panel",
  },
]

// Helper functions
export function getAllEvents(): Event[] {
  return events
}

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id)
}

export function getUpcomingEvents(): Event[] {
  return events.filter((event) => event.status !== "completed")
}

export function getPastEvents(): Event[] {
  return events.filter((event) => event.status === "completed")
}
