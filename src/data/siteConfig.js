export const siteConfig = {
  name: "DesignPlayground",
  designerName: "강지현",
  role: "Communication Designer",
  nav: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
  ],
  resumeUrl: "/resume.pdf",
  hero: {
    lineOne: "Portfolio",
    lineTwo: "& Creative Designer",
    description: "디자인으로 더 나은 경험을 만드는 커뮤니케이션 디자이너, 강지현입니다.",
  },
  about: {
    eyebrow: "Hello, I'm the mind behind the",
    eyebrowEmphasis: "playful chaos.",
    paragraphs: [
      "I am a Communication Designer bridging the gap between rigorous design theory and joyful visual experimentation. My work thrives on asymmetrical compositions, bold typography, and intuitive interactions that bring static screens to life.",
      "Currently based in the digital ether, I focus on creating curated spontaneity in every interface. I believe that good design shouldn't just be functional—it should evoke warmth, curiosity, and a sense of tactile depth.",
    ],
    ctaLabel: "Let's Collaborate",
    philosophy: [
      {
        icon: "sparkles",
        color: "yellow",
        title: "Curated Spontaneity",
        text: "Designing elements that feel intentionally placed yet bursting with energetic life and organic flow.",
      },
      {
        icon: "layers",
        color: "primary",
        title: "Tactile Depth",
        text: "Utilizing tonal layering and soft, diffused ambient glows to craft a sense of physical space on digital screens.",
      },
      {
        icon: "grid",
        color: "blue",
        title: "Asymmetrical Rigor",
        text: "Breaking the traditional grid with purpose to lead the eye and construct dynamic, editorial-style narratives.",
      },
    ],
    experience: [
      {
        title: "Senior Product Designer",
        org: "Creative Agency Co. • 2021 - Present",
        text: "Leading visual direction and UI/UX for high-profile clients, implementing modern design systems.",
        active: true,
      },
      {
        title: "Visual Designer",
        org: "Studio Memphis • 2018 - 2021",
        text: "Focused on editorial web layouts, branding, and interactive prototyping.",
        active: false,
      },
    ],
    education: [
      {
        title: "MFA Communication Design",
        org: "Design Institute • 2016 - 2018",
        text: "Explored the intersection of digital media, typography, and human-computer interaction.",
        active: true,
      },
      {
        title: "BFA Graphic Design",
        org: "State University • 2012 - 2016",
        text: "",
        active: false,
      },
    ],
    disciplines: [
      { label: "UI/UX Design", color: "primary" },
      { label: "Brand Identity", color: "yellow" },
      { label: "Prototyping", color: "blue" },
      { label: "Art Direction", color: "surface" },
      { label: "Typography", color: "purple" },
    ],
    software: [
      { label: "Adobe Creative Suite", value: 95, color: "primary" },
      { label: "Figma", value: 90, color: "yellow" },
      { label: "Webflow / HTML / CSS", value: 80, color: "blue" },
    ],
    beyondScreen: [
      { icon: "book", label: "Typography Books", color: "primary" },
      { icon: "headphones", label: "Synthwave", color: "yellow" },
      { icon: "coffee", label: "Pour-over Coffee", color: "blue" },
    ],
  },
  footer: {
    tagline: "DesignPlayground",
    socials: [
      { label: "Instagram", url: "https://instagram.com" },
      { label: "LinkedIn", url: "https://linkedin.com" },
      { label: "Behance", url: "https://behance.net" },
      { label: "Dribbble", url: "https://dribbble.com" },
    ],
    note: "© 2024 Communication Design Lab",
    email: "hello@designplayground.studio",
  },
};

export default siteConfig;
