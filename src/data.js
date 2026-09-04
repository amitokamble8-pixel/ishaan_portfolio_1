/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.

   Content source: Ishaan Mittal portfolio PDF (Portfolio_1.pdf).
   Sections marked with a NOTE contain material adapted or inferred
   from the PDF rather than stated verbatim — review before publishing.
   ================================================================== */

export const PROFILE = {
  first: "Ishaan",
  last: "Mittal",
  fullName: "Ishaan Mittal",
  /* NOTE: the source PDF has no tagline — this line is derived from the
     stated interests. Edit to taste. */
  tagline: "Mechanical. Automotive. Aeronautical Engineering.",
  location: "Gurugram, India",
  email: "",
  phone: "",
  bio: [
    "I have always been drawn to the mechanics behind the things around me. Over time, that curiosity has developed into a focused interest in mechanical, automotive and  aeronautical engineering.",
    "Studying Physics, Mathematics, Chemistry and Computer Science has given me a foundation across both the physical and computational sides of engineering. Outside school, I have pursued coding in Python, participated in interschool technology events, and explored engineering through practical experiences.",
    "My internship at Luxury Ride Karnal gave me the opportunity to work around real automotive systems, including suspension architecture, engine mounts, electronic diagnostics, NVH systems and dynamometer testing. Working with vehicles such as Audi, BMW and Volvo helped me connect engineering concepts with physical components and real-world constraints. At the Carl Benz School Summer School at Karlsruhe Institute of Technology, I expanded this perspective further through workshops in automobiles, robotics and virtual engineering, along with hands-on work involving electromotors and generators.",
    "These experiences have shaped the kind of engineer I want to become: someone who combines technical understanding, practical experimentation and interdisciplinary thinking to solve complex engineering problems.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/placeholder-cv.pdf",
  photo: "/placeholder-profile.png",
  aboutPhoto: "/placeholder-profile.png",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Academic Interests", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Collaboration", to: "/volunteering" },

  { label: "Activities", to: "/sports" },
];

/* ---- Experience (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "luxury-ride-karnal-internship",
    role: "Technical Engineering Intern",
    org: "Luxury Ride Karnal",
    logo: "",
    location: "Karnal, India",
    dates: "June 2025",
    meta: "Technical Engineering Internship · Karnal, India · June 2025",
    badge: "Internship",
    desc: "Hands-on exposure to automotive engineering, diagnostics and repair workflows across premium German vehicles.",
    bullets: [
      "Explored the multi-link air suspension system of an Audi A6 S-Line, studying how electronically controlled ride height affects aerodynamics, drag and high-speed stability",
      "Investigated suspension bushing degradation and assisted with component extraction using specialist workshop tools",
      "Worked with an OBD-II diagnostic scanner to learn how Electronic Control Units (ECUs) communicate system faults and how diagnostic data reveals vehicle performance",
      "Explored Noise, Vibration and Harshness (NVH) mitigation through engine and transmission mounting systems during work on a BMW X3",
      "Participated in maintenance and filtration procedures on a Volvo V90",
      "Observed an Audi A6 chassis dynamometer test, in which the vehicle recorded 240 hp during performance testing",
      "Came away seeing components previously understood through diagrams and equations as physical systems with tolerances, material limits, failure modes and performance constraints",
    ],
    tags: ["Automotive Engineering", "Diagnostics", "Suspension Systems", "NVH"],
    featured: true,
  },
  {
    slug: "carl-benz-school-summer-school",
    role: "Summer School Participant",
    org: "Carl Benz School Summer School — Karlsruhe Institute of Technology",
    logo: "",
    location: "Karlsruhe, Germany",
    dates: "June–July 2025",
    meta: "Summer School · Karlsruhe Institute of Technology, Germany · June–July 2025",
    badge: "Programme",
    desc: "Explored engineering through a combination of lectures, practical workshops and industrial visits covering automobiles, robotics, virtual engineering and sustainable energy.",
    bullets: [
      "Covered automobiles, robotics, virtual engineering and sustainable energy across lectures and practical workshops",
      "Explored how digital designs translate into physical prototypes, and examined aerodynamics, chassis stability and smart manufacturing",
      "Built an understanding of electromechanical systems through hands-on activities with electromotors and generators, and their relevance to the future of mobility",
      "Visited the Mercedes-Benz and Porsche museums to examine the evolution of automotive design, drivetrain engineering and aerodynamics",
      "Worked alongside students from different countries, strengthening technical communication and collaborative problem solving",
    ],
    tags: ["Robotics", "Virtual Engineering", "Sustainable Energy", "Automobiles"],
    featured: true,
  },
];

/* ---- Takeaways from the Carl Benz School Summer School ---- */
/* (additional export — needs a component if you want to render it) */

export const TAKEAWAYS = [
  {
    title: "Systems Thinking",
    detail: "Understanding how mechanical, electrical and computational systems interact.",
  },
  {
    title: "Practical Engineering",
    detail: "Connecting theoretical concepts to physical components and prototypes.",
  },
  {
    title: "Interdisciplinary Thinking",
    detail: "Seeing how engineering increasingly overlaps with robotics, computing and environmental science.",
  },
  {
    title: "Collaboration",
    detail: "Working with an international group to explore technical problems and ideas.",
  },
];

/* ---- Projects ---- */
/* NOTE: the source PDF has no separate "projects" section. The entries below
   are drawn from the technical work described within the internship, summer
   school and activities sections — review before publishing. */

export const PROJECTS = [
  {
    name: "Multi-Link Air Suspension Study — Audi A6 S-Line",
    org: "Luxury Ride Karnal",
    meta: "Internship Study · June 2025",
    desc: "A hands-on study of an electronically controlled multi-link air suspension system, examining how variable ride height affects aerodynamics, drag and high-speed stability, alongside an investigation into suspension bushing degradation and component extraction.",
    tags: ["Suspension", "Aerodynamics", "Vehicle Dynamics"],
    featured: true,
  },
  {
    name: "ECU Fault Diagnosis with OBD-II",
    org: "Luxury Ride Karnal",
    meta: "Internship Study · June 2025",
    desc: "Worked with an OBD-II diagnostic scanner to understand how Electronic Control Units communicate system faults, and how diagnostic data can be interpreted to assess vehicle performance and condition.",
    tags: ["Diagnostics", "ECUs", "Automotive Electronics"],
    featured: true,
  },
  {
    name: "NVH Mitigation & Dynamometer Testing",
    org: "Luxury Ride Karnal",
    meta: "Internship Study · June 2025",
    desc: "Explored Noise, Vibration and Harshness mitigation through engine and transmission mounting systems on a BMW X3, and observed an Audi A6 chassis dynamometer test in which the vehicle recorded 240 hp.",
    tags: ["NVH", "Dynamometer", "Powertrain"],
    featured: true,
  },
  {
    name: "Electromotors, Generators & Virtual Engineering",
    org: "Carl Benz School Summer School, KIT",
    meta: "Workshop Work · June–July 2025",
    desc: "Hands-on work with electromotors and generators alongside workshops in robotics and virtual engineering, exploring how digital designs translate into physical prototypes and how electromechanical systems relate to the future of mobility.",
    tags: ["Electromechanical Systems", "Robotics", "Prototyping"],
    featured: false,
  },
  {
    name: "Python Programming",
    org: "Self-Directed",
    meta: "Ongoing",
    desc: "Pursuing Python programming outside school to build a computational foundation alongside an interest in engineering, and to approach problems more systematically.",
    tags: ["Python", "Computational Thinking"],
    featured: false,
  },
];

/* ---- Highlights ---- */
/* NOTE: the source PDF does not list awards, placements or grades. The entries
   below record participation and qualifications that ARE stated. Add results,
   positions or scores here if there are any. */

export const AWARDS = [
  {
    icon: "🏎️",
    title: "Carl Benz School Summer School — Karlsruhe Institute of Technology",
    meta: "Germany · June–July 2025",
    detail: "Selected participant in a summer school covering automobiles, robotics, virtual engineering and sustainable energy, including industrial visits and hands-on electromechanical work.",
    link: "",
    featured: true,
  },
  {
    icon: "🔧",
    title: "Technical Engineering Internship — Luxury Ride Karnal",
    meta: "June 2025",
    detail: "Hands-on internship across suspension architecture, engine mounts, electronic diagnostics, NVH systems and dynamometer testing on Audi, BMW and Volvo vehicles.",
    link: "",
    featured: true,
  },
  {
    icon: "🤖",
    title: "Interschool Technology & Engineering Competitions",
    meta: "AMITY ROBOTRONICS · SUNCITY TECHTONIK · DPS SYNTAX",
    detail: "Participated in multiple interschool technology and engineering events, applying problem-solving skills in competitive technical environments.",
    link: "",
    featured: true,
  },
  {
    icon: "🗣️",
    title: "German — A1 and A2 Levels",
    meta: "Language Study",
    detail: "Studied German at A1 and A2 levels, complementing an interest in German engineering institutions and automotive companies.",
    link: "",
    featured: false,
  },
];

/* ---- Academic interests ---- */

export const ARTICLES = [
  {
    title: "Mechanical Engineering",
    outlet: "How mechanical systems are designed, constrained and made to work reliably",
    link: "",
  },
  {
    title: "Automotive Engineering",
    outlet: "How vehicle systems — suspension, powertrain, NVH — come together in practice",
    link: "",
  },
  {
    title: "Aeronautical Engineering",
    outlet: "How aerodynamics and structural design shape performance and stability",
    link: "",
  },
  {
    title: "Robotics & Smart Systems",
    outlet: "How mechanical, electrical and computational systems interact in automated systems",
    link: "",
  },
  {
    title: "Automotive Technology",
    outlet: "How diagnostics, electrification and smart manufacturing are changing mobility",
    link: "",
  },
];
/* NOTE: the five titles above are stated in the PDF; the one-line descriptions
   ("outlet" field) are written to match the reference format — edit freely. */

/* ---- Leadership & collaboration ---- */

export const VOLUNTEER = {
  /* NOTE: the PDF states no figures. These counts are derived from the named
     events and language levels — verify or replace. */
  stats: [
    { value: "3", label: "Interschool Tech Events" },
    { value: "2", label: "Engineering Programmes" },
    { value: "A2", label: "German Level Reached" },
  ],
  orgs: [
    {
      name: "Leading Through Technical Curiosity",
      role: "Approach to Leadership",
      desc: "My approach to leadership is rooted in collaboration, technical curiosity and the willingness to learn from others. For me, leadership is not simply about directing others — it is about taking initiative, sharing knowledge and helping a team move from an idea towards a workable solution.",
    },
    {
      name: "Interschool Technology Events",
      role: "Team Participant",
      desc: "Through interschool technology events and engineering programmes, I have worked in team-based environments where communicating ideas clearly and approaching technical challenges collectively were essential.",
    },
  ],
};

/* ---- Activities (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "🤖",
    name: "Engineering & Technology Competitions",
    desc: "Participated in multiple interschool technology and engineering events, including AMITY ROBOTRONICS, SUNCITY TECHTONIK and DPS SYNTAX. These gave me opportunities to work in competitive technical environments, apply problem-solving skills and engage with technology beyond the school curriculum.",
  },
  {
    icon: "💻",
    name: "Coding",
    desc: "Pursued Python programming outside school, developing my computational foundation alongside my interest in engineering. Learning to code has helped me approach problems more systematically and understand the role computation can play in modern engineering.",
  },
  {
    icon: "📷",
    name: "Photography",
    desc: "A creative counterpoint to my technical interests. Photography has encouraged me to observe details, think about perspective and develop an appreciation for visual composition.",
  },
  {
    icon: "🗣️",
    name: "Languages",
    desc: "Alongside English and Hindi, I have studied German at A1 and A2 levels. Learning German has complemented my interest in German engineering and gave me an additional way to engage with the culture and context surrounding the engineering institutions and automotive companies I encountered in Germany.",
  },
];

/* ---- Skills ---- */
/* NOTE: the source PDF does not list a skills section. The entries below are
   inferred from the described coursework, internship, summer school and
   activities — review and edit before publishing. */

export const SKILLS = [
  {
    group: "Automotive & Mechanical",
    items: ["Suspension Systems", "Engine & Transmission Mounts", "NVH Mitigation", "Dynamometer Testing"],
  },
  {
    group: "Diagnostics & Electronics",
    items: ["OBD-II Diagnostics", "ECU Fault Interpretation", "Electromotors & Generators"],
  },
  {
    group: "Design & Analysis",
    items: ["Virtual Engineering", "Aerodynamics", "Chassis Stability", "Systems Thinking"],
  },
  {
    group: "Technical",
    items: ["Python", "Computer Science", "Mathematics", "Physics", "Chemistry"],
  },
  {
    group: "Communication",
    items: ["Technical Communication", "Collaborative Problem Solving", "Team Leadership"],
  },
  {
    group: "Languages",
    items: ["English", "Hindi", "German (A1–A2)"],
  },
];

/* ---- Education (additional export — needs a component if you want to render it) ---- */

export const EDUCATION = [
  {
    school: "Scottish High International School",
    location: "Gurugram, India",
    level: "Grade 12",
    dates: "",
    gpa: "",
    coursework: [
      "Physics",
      "Mathematics",
      "Chemistry",
      "Computer Science",
    ],
  },
];
/* NOTE: the PDF states the school, grade level and subjects but no board,
   grades, GPA or start year — add those if you want them displayed. */

/* ---- Test scores (none listed in the source document) ---- */

export const TEST_SCORES = [];

/* ---- Looking ahead (additional export — needs a component if you want to render it) ---- */
/* NOTE: adapted from the closing lines of the PDF's "About Me" section. */

export const LOOKING_AHEAD = [
  "These experiences have shaped the kind of engineer I want to become: someone who combines technical understanding, practical experimentation and interdisciplinary thinking to solve complex engineering problems.",
  "I want to keep working at the intersection of mechanical, automotive and aeronautical engineering — understanding how things work, why they work, and how they can be engineered better.",
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Academic Interests", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Collaboration", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
