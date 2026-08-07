import type { ProcessStep, Stat, Benefit, FAQ } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, audience, goals, and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define structure, content, visual direction, and user experience.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create a polished interface focused on clarity and conversion.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Develop the website using modern, maintainable technologies.",
  },
  {
    number: "05",
    title: "Refine",
    description:
      "Test responsiveness, interactions, performance, and usability.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Prepare the final website for deployment.",
  },
];

export const stats: Stat[] = [
  { value: "10+", label: "Projects Built" },
  { value: "20+", label: "Technologies Explored" },
  { value: "100%", label: "Responsive Approach" },
  { value: "6", label: "Step Process" },
];

export const benefits: Benefit[] = [
  {
    title: "Business-first thinking",
    description:
      "Every decision supports your actual business goals — clarity, trust, and conversion — not just technical requirements.",
    icon: "Target",
  },
  {
    title: "Responsive everywhere",
    description:
      "Your website will look and perform excellently across phones, tablets, and desktops — because most visitors arrive on mobile.",
    icon: "Smartphone",
  },
  {
    title: "Detail-oriented execution",
    description:
      "Spacing, typography, interactions, and visual polish all matter. The details are what make a website feel premium.",
    icon: "Sparkles",
  },
  {
    title: "Built to evolve",
    description:
      "Clean architecture and modern technologies mean your site can grow with your business without starting from scratch.",
    icon: "TrendingUp",
  },
];

export const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Python",
  "Git",
  "REST APIs",
];

export const faqs: FAQ[] = [
  {
    question: "Can you build a website for my business?",
    answer:
      "Yes. I specialize in creating professional websites for businesses, startups, and organizations — from company sites to landing pages and portfolio websites.",
  },
  {
    question: "Will the website work on mobile?",
    answer:
      "Absolutely. Every website is built with a mobile-first, responsive approach so it looks and works beautifully on phones, tablets, and desktops.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. If your current website feels outdated or doesn't represent your business well, I can help modernize the design, improve structure, and enhance usability.",
  },
  {
    question: "Can you deploy the website?",
    answer:
      "Yes. I can prepare your website for deployment on platforms like Vercel, ensuring it's production-ready and accessible to your audience.",
  },
  {
    question: "Can the website be expanded later?",
    answer:
      "Definitely. I build with clean, maintainable code so new pages, features, and sections can be added as your business grows.",
  },
];

export const clientValues = [
  {
    title: "Clear communication",
    description:
      "Projects stay understandable from start to finish — no unnecessary jargon, just straightforward updates and decisions.",
  },
  {
    title: "Professional presentation",
    description:
      "Your website should make your business look established and trustworthy from the very first visit.",
  },
  {
    title: "Reliable delivery",
    description:
      "Structured process, attention to detail, and a focus on getting the fundamentals right before launch.",
  },
];

export const capabilities = [
  "Frontend Development",
  "UI/UX Implementation",
  "Responsive Design",
  "Performance Optimization",
  "Modern Web Architecture",
  "Landing Page Design",
  "Component-Based Development",
  "Static & Dynamic Sites",
];
