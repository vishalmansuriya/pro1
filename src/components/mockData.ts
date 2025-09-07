export interface Alumni {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  graduationYear: number;
  degree: string;
  department: string;
  email: string;
  profileImage: string;
  skills: string[];
  match: number;
  achievements: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements: string[];
  postedDate: string;
  applicants: number;
}

export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  fee: string;
  description: string;
  speakers: string[];
  attendees: number;
  registrationDeadline: string;
  status: 'Open' | 'Closed';
}

export interface Campaign {
  id: number;
  name: string;
  description: string;
  category: string;
  supporters: number;
  raised: number;
  goal: number;
  progress: number;
  endDate: string;
}

export const mockAlumni: Alumni[] = [
  {
    id: 1,
    name: "Aarav Patel",
    title: "Senior Software Engineer",
    company: "Tata Consultancy Services",
    location: "Mumbai, Maharashtra",
    graduationYear: 2018,
    degree: "Computer Science and Engineering",
    department: "Information Technology",
    email: "aarav.patel@email.com",
    profileImage: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3MjA0MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Java", "Spring Boot", "Microservices", "Docker"],
    match: 83,
    achievements: "Led development of a core banking system used by 5 major Indian banks",
    linkedin: "linkedin.com/in/aarav-patel"
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Data Scientist",
    company: "Flipkart",
    location: "Bangalore, Karnataka",
    graduationYear: 2019,
    degree: "Data Science",
    department: "E-commerce",
    email: "priya.sharma@email.com",
    profileImage: "https://images.unsplash.com/photo-1659353218851-abe20addb330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU3MjI0MDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Python", "Machine Learning", "SQL", "Tableau"],
    match: 65,
    achievements: "Developed an AI model that improved product recommendations by 30%",
    linkedin: "linkedin.com/in/priya-sharma"
  },
  {
    id: 3,
    name: "Arjun Reddy",
    title: "Product Design Engineer",
    company: "Mahindra & Mahindra",
    location: "Chennai, Tamil Nadu",
    graduationYear: 2020,
    degree: "Mechanical Engineering",
    department: "Automotive",
    email: "arjun.reddy@email.com",
    profileImage: "https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzIyNDA3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["CAD", "Finite Element Analysis", "3D Printing", "Project Management"],
    match: 68,
    achievements: "Key designer for Mahindra's award-winning electric SUV",
    linkedin: "linkedin.com/in/arjun-reddy"
  },
  {
    id: 4,
    name: "Zara Khan",
    title: "Marketing Manager",
    company: "Unilever",
    location: "Delhi, India",
    graduationYear: 2017,
    degree: "Business Administration",
    department: "Marketing",
    email: "zara.khan@email.com",
    profileImage: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU3MjI0MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Digital Marketing", "Brand Strategy", "Analytics", "Social Media"],
    match: 94,
    achievements: "Launched successful campaigns that increased brand awareness by 40%",
    linkedin: "linkedin.com/in/zara-khan"
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    title: "Financial Analyst",
    company: "HDFC Bank",
    location: "Mumbai, Maharashtra",
    graduationYear: 2019,
    degree: "Finance",
    department: "Banking",
    email: "vikram.malhotra@email.com",
    profileImage: "https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzE2MDMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Financial Modeling", "Risk Analysis", "Excel", "Bloomberg"],
    match: 72,
    achievements: "Developed risk models that saved the bank $2M in potential losses",
    linkedin: "linkedin.com/in/vikram-malhotra"
  },
  {
    id: 6,
    name: "Anjali Mehta",
    title: "UX Designer",
    company: "Swiggy",
    location: "Hyderabad, Telangana",
    graduationYear: 2021,
    degree: "Design",
    department: "Technology",
    email: "anjali.mehta@email.com",
    profileImage: "https://images.unsplash.com/photo-1659353218851-abe20addb330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU3MjI0MDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    match: 86,
    achievements: "Redesigned the app interface leading to 25% increase in user engagement",
    linkedin: "linkedin.com/in/anjali-mehta"
  }
];

export const mockJobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "WebSolutions",
    location: "Austin, TX",
    salary: "$90,000 - $140,000",
    type: "Full-time",
    description: "Join our team to create responsive and performant web applications...",
    requirements: ["React", "JavaScript", "HTML/CSS", "Redux"],
    postedDate: "1 day ago",
    applicants: 27
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "TechCorp",
    location: "Seattle, WA",
    salary: "$75,000 - $110,000",
    type: "Full-time",
    description: "Analyze data to drive business insights and strategic decisions...",
    requirements: ["SQL", "Python", "Tableau", "Statistics"],
    postedDate: "3 days ago",
    applicants: 45
  },
  {
    id: 3,
    title: "Product Manager",
    company: "InnovateTech",
    location: "San Francisco, CA",
    salary: "$120,000 - $180,000",
    type: "Full-time",
    description: "Lead product strategy and work with cross-functional teams...",
    requirements: ["Product Strategy", "Agile", "Analytics", "Leadership"],
    postedDate: "1 week ago",
    applicants: 62
  }
];

export const mockEvents: Event[] = [
  {
    id: 1,
    name: "Tech Innovation Summit 2025",
    date: "March 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Bangalore International Exhibition Centre",
    fee: "₹2,500",
    description: "Join industry leaders to explore the latest trends in technology and innovation. Network with professionals and discover new opportunities.",
    speakers: ["Dr. Raj Kumar - CTO, Infosys", "Ms. Anita Singh - VP Engineering, Microsoft", "Mr. Kiran Patel - Founder, TechStartup"],
    attendees: 450,
    registrationDeadline: "March 10, 2025",
    status: "Open"
  },
  {
    id: 2,
    name: "Alumni Reunion 2025",
    date: "April 20, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "College Campus, Main Auditorium",
    fee: "Free",
    description: "Reconnect with your classmates and faculty. Enjoy dinner, entertainment, and reminisce about your college days.",
    speakers: ["Principal Dr. Sharma", "Dean of Engineering", "Class of 2015 Representative"],
    attendees: 320,
    registrationDeadline: "April 15, 2025",
    status: "Open"
  }
];

export const mockCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Scholarship Fund for Underprivileged Students",
    description: "Help provide education opportunities to deserving students from economically disadvantaged backgrounds.",
    category: "Education",
    supporters: 245,
    raised: 750000,
    goal: 1000000,
    progress: 75,
    endDate: "June 30, 2025"
  },
  {
    id: 2,
    name: "Rural Development Infrastructure Project",
    description: "Support the development of basic infrastructure in rural communities including clean water access and digital connectivity.",
    category: "Rural Development",
    supporters: 180,
    raised: 420000,
    goal: 800000,
    progress: 53,
    endDate: "December 31, 2025"
  }
];