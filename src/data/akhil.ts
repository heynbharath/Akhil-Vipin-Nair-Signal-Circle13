import { TeamMember } from "./types";

const akhil: TeamMember = {
  slug: "akhil",
  name: "Akhil Vipin Nair",
  title: "Co-Founder & CTO",
  company: "Circle13",
  bio: "Exploring AI, software engineering, and innovation. Find my projects, thoughts, and creations here.",
  photo: "/images/team/akhil.jpeg",
  coverPhoto: "/images/team/akhil-cover.jpeg",
  status: "Building in public",
  socials: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/akhilnair07/", icon: "Linkedin" },
    { platform: "WhatsApp", url: "https://wa.me/919886010706", icon: "WhatsApp" },
    { platform: "Instagram", url: "https://www.instagram.com/akhilnair_07", icon: "Instagram" },
    { platform: "X", url: "https://x.com/akhilnair_07", icon: "Twitter" },
    { platform: "GitHub", url: "https://github.com/akhilnair07", icon: "Github" },
    { platform: "Reddit", url: "https://www.reddit.com/user/AkhilNair2006/", icon: "Reddit" },
    { platform: "Substack", url: "https://substack.com/@akhilvipinnair/", icon: "Substack" },
    { platform: "Email", url: "mailto:amazingakhil2006@gmail.com", icon: "Mail" },
  ],
  sections: [
    {
      id: "ventures",
      title: "Ventures",
      links: [
        {
          label: "Build Labs",
          url: "https://buildlabs.circle13.space",
          icon: "Rocket",
          description: "Where ideas become products",
        },
        {
          label: "HallowTwin",
          url: "https://hallow-twin-circle13.vercel.app",
          icon: "Sparkles",
          description: "Synthetic Customer Simulation for Indian Startups",
        },
        {
          label: "HalfTold",
          url: "https://circle13.space/halftold",
          icon: "Heart",
          description: "The half she never says.",
        },
      ],
    },
    {
      id: "connect",
      title: "Connect",
      links: [
        {
          label: "Instagram",
          url: "https://www.instagram.com/circle13.signal/",
          icon: "Instagram",
          description: "@circle13.signal",
        },
        {
          label: "Reddit",
          url: "https://www.reddit.com/user/AkhilNair2006/",
          icon: "Reddit",
          description: "u/AkhilNair2006",
        },
        {
          label: "Substack",
          url: "https://substack.com/@akhilvipinnair/",
          icon: "Substack",
          description: "@akhilvipinnair",
        },
        {
          label: "Email",
          url: "mailto:amazingakhil2006@gmail.com",
          icon: "Mail",
          description: "amazingakhil2006@gmail.com",
        },
        {
          label: "Personal Website",
          url: "https://circle13.space",
          icon: "Globe",
          description: "circle13.space",
        },
      ],
    },
  ],
  products: [
    {
      name: "HallowTwin",
      tagline: "Synthetic Customer Simulation for Indian Startups",
      url: "https://hallow-twin-circle13.vercel.app",
      status: "Live",
    },
    {
      name: "HalfTold",
      tagline: "The half she never says.",
      url: "https://circle13.space/halftold",
      status: "Coming Soon",
    },
  ],
};

export default akhil;
