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
    tagline: "Build the Future with Machine Learning",
    description:
      "HackML is our flagship 24-hour machine learning hackathon where students, innovators, and ML enthusiasts come together to build creative solutions to real-world problems.",
    longDescription:
      "Join us for an intensive 24-hour hackathon focused on machine learning and artificial intelligence. Whether you're a beginner or an experienced ML practitioner, HackML offers opportunities to learn, collaborate, and innovate. Work in teams of up to 4 people to develop ML-powered applications, receive mentorship from industry professionals, attend technical workshops, and compete for exciting prizes.",
    date: "January 18-19, 2026",
    time: "9:00 AM - 9:00 AM (24 hours)",
    location: "SFU Burnaby Campus - AQ Building",
    capacity: "125 participants",
    status: "registration-open",
    category: "Hackathon",
    registrationLink: "https://portal-hackml.vercel.app/",
    details: {
      eligibility: "Open to all SFU students and students from other universities. All skill levels welcome.",
      teamSize: "Teams of 1-4 people. You can register individually and find teammates at the event.",
      prizes: "Over $5,000 in prizes including cash awards, tech gadgets, and software subscriptions.",
      food: "Meals, snacks, and beverages provided throughout the event.",
    },
    schedule: [
      { time: "8:30 AM", title: "Check-in", description: "Participants arrive and check-in." },
      { time: "10:00 AM", title: "Opening Ceremony", description: "Welcome, rules, and team formation" },
      { time: "11:00 AM", title: "Hacking Begins", description: "Start building your projects" },
      { time: "12:30 PM", title: "Lunch", description: "Fuel up for the afternoon" },
      { time: "2:00 PM", title: "Workshop: Intro to PyTorch", description: "For beginners" },
      { time: "6:00 PM", title: "Dinner", description: "Evening meal" },
      { time: "9:00 PM", title: "Late Night Snacks", description: "Keep the energy going" },
      { time: "12:00 AM", title: "Midnight Surprise", description: "Special activity TBA" },
      { time: "8:00 AM", title: "Breakfast", description: "Morning fuel" },
      { time: "9:00 AM", title: "Submissions Due", description: "Stop coding, prepare presentations" },
      { time: "10:00 AM", title: "Project Demos", description: "Present to judges" },
      { time: "12:00 PM", title: "Lunch & Awards", description: "Announcement of winners" },
    ],
    faq: [
      {
        question: "Do I need ML experience?",
        answer:
          "No! We welcome all skill levels. We'll have workshops and mentors to help beginners get started with machine learning.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring your laptop, charger, and any other devices you need. We'll provide food, drinks, and workspace.",
      },
      {
        question: "Can I work alone?",
        answer:
          "Yes! You can participate individually or in teams of up to 4 people. We'll also have a team formation session.",
      },
      {
        question: "Is there a registration fee?",
        answer: "No, HackML is completely free to attend. All meals and resources are provided.",
      },
    ],
  },
  {
    id: "hackml-2025",
    title: "HackML 2025",
    tagline: "Our Inaugural ML Hackathon",
    description: "The first-ever HackML hackathon with 80+ participants and 15 amazing project submissions.",
    longDescription:
      "HackML 2025 was our inaugural machine learning hackathon that brought together over 80 students from SFU and surrounding universities. Participants worked on diverse ML projects ranging from image classification to natural language processing.",
    date: "January 20-21, 2025",
    time: "24 hours",
    location: "SFU Burnaby Campus",
    status: "completed",
    category: "Hackathon",
    highlights: [
      "80+ participants from 5 universities",
      "15 project submissions",
      "8 industry mentors",
      "$3,000 in prizes awarded",
    ],
    winners: [
      {
        place: "1st Place",
        team: "Team DataMinds",
        project: "AI-Powered Study Assistant",
        description: "An ML model that generates personalized study materials and practice questions.",
      },
      {
        place: "2nd Place",
        team: "Neural Navigators",
        project: "Campus Traffic Predictor",
        description: "Real-time prediction of campus foot traffic using computer vision.",
      },
      {
        place: "3rd Place",
        team: "Code Crunchers",
        project: "Mental Health Chatbot",
        description: "NLP-based chatbot for student mental health support.",
      },
    ],
  },
  {
    id: "deep-learning-workshop-2026",
    title: "Deep Learning Workshop Series",
    description:
      "A comprehensive 6-week workshop series covering neural networks, CNNs, RNNs, and transformer architectures. Perfect for beginners and intermediate learners.",
    date: "March - April 2026",
    location: "Hybrid (In-person & Online)",
    status: "registration-closed",
    category: "Workshop",
  },
  {
    id: "industry-panel-spring-2026",
    title: "Data Science Career Panel",
    description:
      "Hear from data science professionals about their career journeys, industry insights, and practical advice for students entering the field.",
    date: "February 2026",
    location: "TBA",
    status: "registration-closed",
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
