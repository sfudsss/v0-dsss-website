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
      "HackML 2026 is the first machine-learning-focused hackathon at SFU, where teams attempt to construct the best ML-models for each given question.",
    longDescription:
      "Join us for an intensive 12-hour hackathon focused on machine learning and artificial intelligence. Whether you're a beginner or an experienced ML practitioner, HackML offers opportunities to learn, collaborate, and innovate. Work in teams of up to 4 people to develop ML-powered applications, receive mentorship from industry professionals, and compete for small prizes.",
    date: "January 31st, 2026",
    time: "8:30 AM - 8:30 PM",
    location: "SFU Burnaby Campus - SUB Ballroom",
    capacity: "125 participants",
    status: "registration-open",
    category: "Hackathon",
    registrationLink: "https://portal-hackml.vercel.app/",
    details: {
      eligibility: "Open to all SFU students and students from other universities. All skill levels welcome.",
      teamSize: "Teams of 1-4 people. Register individually, and use the team code to add members to your team. Team formation will be done through Discord.",
      prizes: "$200 in small prizes for winning teams.",
      food: "Meals and beverages provided throughout the event.",
    },
    schedule: [
      { time: "8:30 AM", title: "Check-ins", description: "Participant check-in" },
      { time: "9:00 AM", title: "Opening Ceremony", description: "Welcome, agenda, rules, and team formation" },
      { time: "9:30 AM", title: "Competition Begins", description: "Datasets and problems released for teams" },
      { time: "12:00 PM", title: "Lunch", description: "Sushi from T&T - Limit 8 per person (until further notice)" },
      { time: "3:00 PM", title: "Mid-point Check-ins", description: "Brief progress update and Q&A session with competition organizers" },
      { time: "6:00 PM", title: "Final Submission Deadline", description: "All model submissions must be completed and submitted through Kaggle by this time" },
      { time: "6:15 PM", title: "Dinner + Networking", description: "Pizza from Dominoes, and open networking with industry professionals and DSSS executives." },
      { time: "8:15 PM", title: "Result + Prizes + Closing Ceremony", description: "Prizes awarded + Judges gifts + Group photo" }
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
