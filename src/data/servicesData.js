import { Layout, Palette, PanelsTopLeft, Code2, Smartphone, Video, TrendingUp, PenTool, CheckCircle2, Layers, FileText, Grid } from "lucide-react";

export const servicesData = {
    "website-design": {
        title: "Website Design",
        icon: Layout,
        heroTitle: "Websites That Inspire and Convert",
        heroSubtitle: "We design visually engaging, high-performing websites that captivate users and turn visits into meaningful actions.",
        description: "Visually engaging, conversion-focused websites",
        fullDesc: "We design visually engaging, high-performing websites that captivate users and turn visits into meaningful actions.",

        aboutTitle: "Your Website Is More Than Just a Digital Presence",
        aboutDesc1: "Your website is often the first interaction users have with your brand. We design websites that go beyond looks—focusing on clarity, usability, and conversion. Every layout, color, and interaction is crafted to build trust and guide users effortlessly.",
        aboutDesc2: "",

        process: [
            { step: "STEP 1", title: "Discovery & Strategy", desc: "Understanding your goals, audience, and brand direction." },
            { step: "STEP 2", title: "Wireframing & UX", desc: "Structuring intuitive layouts for smooth navigation." },
            { step: "STEP 3", title: "Visual Design", desc: "Creating pixel-perfect designs aligned with your brand." },
            { step: "STEP 4", title: "Handover & Support", desc: "Delivering assets and supporting development." }
        ],

        worksTitle: "Selected website projects showcasing design and performance.",
        works: [
            { title: "Project 1", desc: "Website Design", image: "" },
            { title: "Project 2", desc: "Website Design", image: "" },
            { title: "Project 3", desc: "Website Design", image: "" },
            { title: "Project 4", desc: "Website Design", image: "" },
            { title: "Project 5", desc: "Website Design", image: "" },
            { title: "Project 6", desc: "Website Design", image: "" },
            { title: "Project 7", desc: "Website Design", image: "" },
            { title: "Project 8", desc: "Website Design", image: "" }
        ],

        benefitsTitle: "Why Choose Our Website Design?",
        benefits: [
            { title: "Fully Responsive", desc: "Perfect on all devices" },
            { title: "SEO Optimized", desc: "Built for search engines" },
            { title: "Conversion Focused", desc: "Designed to drive action" },
            { title: "Fast Load Performance", desc: "Optimized for speed" }
        ]
    },

    "app-design": {
        title: "App Design",
        icon: Smartphone,
        heroTitle: "App Designs Users Love to Use",
        heroSubtitle: "We design seamless, intuitive mobile app interfaces that feel natural and engaging.",
        description: "Seamless, modern mobile app interfaces",
        fullDesc: "We design seamless, intuitive mobile app interfaces that feel natural and engaging.",

        aboutTitle: "Design That Enhances Every Interaction",
        aboutDesc1: "Great apps are built on clarity and usability. Our app designs focus on user behavior, smooth flows, and modern UI—ensuring every interaction feels effortless and purposeful.",
        aboutDesc2: "",

        process: [
            { step: "STEP 1", title: "Discovery", desc: "Understanding your app goals and target users." },
            { step: "STEP 2", title: "User Flows", desc: "Mapping intuitive user journeys." },
            { step: "STEP 3", title: "UI Design", desc: "Creating beautiful, functional interfaces." },
            { step: "STEP 4", title: "Handover & Support", desc: "Delivering design assets for development." }
        ],

        worksTitle: "App UI designs crafted for usability and scalability.",
        works: [
            { title: "App Project 1", desc: "Mobile App Design", image: "" },
            { title: "App Project 2", desc: "Mobile App Design", image: "" },
            { title: "App Project 3", desc: "Mobile App Design", image: "" },
            { title: "App Project 4", desc: "Mobile App Design", image: "" },
            { title: "App Project 5", desc: "Mobile App Design", image: "" },
            { title: "App Project 6", desc: "Mobile App Design", image: "" },
            { title: "App Project 7", desc: "Mobile App Design", image: "" },
            { title: "App Project 8", desc: "Mobile App Design", image: "" }
        ],

        benefitsTitle: "Why Choose Our App Design?",
        benefits: [
            { title: "User-Centered Design", desc: "Built around user needs" },
            { title: "Clean & Modern UI", desc: "Contemporary aesthetics" },
            { title: "Platform-Ready Layouts", desc: "iOS and Android optimized" },
            { title: "Scalable Design Systems", desc: "Grows with your app" }
        ]
    },

    "wireframing": {
        title: "Wireframing & Prototyping",
        icon: Layers,
        heroTitle: "Clear Structure Before Visual Design",
        heroSubtitle: "We turn ideas into structured layouts and interactive flows.",
        description: "Structured layouts and user flows",
        fullDesc: "We turn ideas into structured layouts and interactive flows.",

        aboutTitle: "The Foundation of Great User Experience",
        aboutDesc1: "Wireframes and prototypes help visualize structure, user journeys, and functionality before design or development begins—saving time and avoiding costly rework.",
        aboutDesc2: "",

        process: [
            { step: "STEP 1", title: "Discovery", desc: "Understanding project requirements and goals." },
            { step: "STEP 2", title: "User Flow Mapping", desc: "Defining user paths and interactions." },
            { step: "STEP 3", title: "Wireframes", desc: "Creating low-fidelity structural layouts." },
            { step: "STEP 4", title: "Interactive Prototypes", desc: "Building clickable, testable prototypes." }
        ],

        worksTitle: "UX flows and wireframes built for clarity.",
        works: [
            { title: "Wireframe Project 1", desc: "UX Flow Design", image: "" },
            { title: "Wireframe Project 2", desc: "Interactive Prototype", image: "" },
            { title: "Wireframe Project 3", desc: "UX Flow Design", image: "" },
            { title: "Wireframe Project 4", desc: "Interactive Prototype", image: "" },
            { title: "Wireframe Project 5", desc: "UX Flow Design", image: "" },
            { title: "Wireframe Project 6", desc: "Interactive Prototype", image: "" },
            { title: "Wireframe Project 7", desc: "UX Flow Design", image: "" },
            { title: "Wireframe Project 8", desc: "Interactive Prototype", image: "" }
        ],

        benefitsTitle: "Why Choose Our Wireframing & Prototyping?",
        benefits: [
            { title: "Clear User Journeys", desc: "Well-defined paths" },
            { title: "Faster Decision Making", desc: "Visualize before building" },
            { title: "Reduced Development Errors", desc: "Catch issues early" },
            { title: "Strong UX Foundation", desc: "Solid structural base" }
        ]
    },

    "landing-page-design": {
        title: "Landing Page Design",
        icon: FileText,
        heroTitle: "Landing Pages Built to Convert",
        heroSubtitle: "Focused designs that drive action and results.",
        description: "High-impact pages built to convert",
        fullDesc: "Focused designs that drive action and results.",

        aboutTitle: "Designed for One Goal: Conversion",
        aboutDesc1: "We design landing pages with a single purpose—turning visitors into leads or customers through strong visuals, messaging, and call-to-actions.",
        aboutDesc2: "",

        process: [
            { step: "STEP 1", title: "Strategy", desc: "Defining conversion goals and target audience." },
            { step: "STEP 2", title: "Content Structure", desc: "Organizing messaging for maximum impact." },
            { step: "STEP 3", title: "Visual Design", desc: "Creating compelling, focused layouts." },
            { step: "STEP 4", title: "Optimization", desc: "Testing and refining for better results." }
        ],

        worksTitle: "High-converting landing page designs.",
        works: [
            { title: "Landing Page 1", desc: "Campaign Landing Page", image: "" },
            { title: "Landing Page 2", desc: "Product Launch Page", image: "" },
            { title: "Landing Page 3", desc: "Campaign Landing Page", image: "" },
            { title: "Landing Page 4", desc: "Product Launch Page", image: "" },
            { title: "Landing Page 5", desc: "Campaign Landing Page", image: "" },
            { title: "Landing Page 6", desc: "Product Launch Page", image: "" },
            { title: "Landing Page 7", desc: "Campaign Landing Page", image: "" },
            { title: "Landing Page 8", desc: "Product Launch Page", image: "" }
        ],

        benefitsTitle: "Why Choose Our Landing Page Design?",
        benefits: [
            { title: "Conversion-Focused Layouts", desc: "Designed to drive action" },
            { title: "Clear Call-to-Actions", desc: "Prominent CTAs" },
            { title: "Fast Load Speed", desc: "Optimized performance" },
            { title: "Campaign-Ready Designs", desc: "Marketing optimized" }
        ]
    },

    "portfolio-design": {
        title: "Portfolio Website Design",
        icon: Layout,
        heroTitle: "Showcase Your Work With Confidence",
        heroSubtitle: "Portfolio websites designed to highlight your skills and story.",
        description: "Personal brands presented professionally",
        fullDesc: "Portfolio websites designed to highlight your skills and story.",

        aboutTitle: "Your Work Deserves the Right Presentation",
        aboutDesc1: "We design portfolio websites that reflect your personality, professionalism, and expertise—helping you stand out to clients, recruiters, or audiences.",
        aboutDesc2: "",

        process: [
            { step: "STEP 1", title: "Discovery", desc: "Understanding your brand and goals." },
            { step: "STEP 2", title: "Content Planning", desc: "Organizing your work and story." },
            { step: "STEP 3", title: "Design", desc: "Creating a unique, personal showcase." },
            { step: "STEP 4", title: "Launch Support", desc: "Helping you go live successfully." }
        ],

        worksTitle: "Portfolio designs for creatives and professionals.",
        works: [
            { title: "Portfolio 1", desc: "Creative Portfolio", image: "" },
            { title: "Portfolio 2", desc: "Professional Showcase", image: "" },
            { title: "Portfolio 3", desc: "Creative Portfolio", image: "" },
            { title: "Portfolio 4", desc: "Professional Showcase", image: "" },
            { title: "Portfolio 5", desc: "Creative Portfolio", image: "" },
            { title: "Portfolio 6", desc: "Professional Showcase", image: "" },
            { title: "Portfolio 7", desc: "Creative Portfolio", image: "" },
            { title: "Portfolio 8", desc: "Professional Showcase", image: "" }
        ],

        benefitsTitle: "Why Choose Our Portfolio Design?",
        benefits: [
            { title: "Clean, Professional Layouts", desc: "Elegant presentation" },
            { title: "Personal Brand Focused", desc: "Reflects your identity" },
            { title: "Easy Content Updates", desc: "Simple to maintain" },
            { title: "Responsive Design", desc: "Perfect on all devices" }
        ]
    },

    "design-systems": {
        title: "Design Systems",
        icon: Grid,
        heroTitle: "Design Systems That Scale",
        heroSubtitle: "Consistent, reusable UI frameworks for growing products.",
        description: "Scalable, consistent UI frameworks",
        fullDesc: "Consistent, reusable UI frameworks for growing products.",

        aboutTitle: "Consistency Across Every Screen",
        aboutDesc1: "Design systems ensure visual and functional consistency across platforms. We create scalable UI components, guidelines, and patterns that simplify design and development workflows.",
        aboutDesc2: "",

        process: [
            { step: "STEP 1", title: "Audit", desc: "Reviewing existing design patterns." },
            { step: "STEP 2", title: "Component Design", desc: "Creating reusable UI elements." },
            { step: "STEP 3", title: "Documentation", desc: "Building comprehensive guidelines." },
            { step: "STEP 4", title: "Team Handover", desc: "Training and implementation support." }
        ],

        worksTitle: "Scalable systems built for long-term growth.",
        works: [
            { title: "Design System 1", desc: "Enterprise Design System", image: "" },
            { title: "Design System 2", desc: "Product UI Framework", image: "" },
            { title: "Design System 3", desc: "Enterprise Design System", image: "" },
            { title: "Design System 4", desc: "Product UI Framework", image: "" },
            { title: "Design System 5", desc: "Enterprise Design System", image: "" },
            { title: "Design System 6", desc: "Product UI Framework", image: "" },
            { title: "Design System 7", desc: "Enterprise Design System", image: "" },
            { title: "Design System 8", desc: "Product UI Framework", image: "" }
        ],

        benefitsTitle: "Why Choose Our Design Systems?",
        benefits: [
            { title: "Visual Consistency", desc: "Unified brand experience" },
            { title: "Faster Design & Development", desc: "Reusable components" },
            { title: "Easy Scalability", desc: "Grows with your product" },
            { title: "Strong Brand Alignment", desc: "Consistent identity" }
        ]
    },

    // Keep existing services for backward compatibility
    "branding": {
        title: "Branding",
        icon: Palette,
        description: "Building iconic identities that resonate and leave a lasting impression.",
        fullDesc: "Branding is more than a logo; it's the emotional connection your customers have with your business. we help you craft that story.",
        process: [
            { step: "01", title: "Strategy", desc: "Defining your brand's core values and unique voice." },
            { step: "02", title: "Visual Identity", desc: "Developing logos, color palettes, and typography." },
            { step: "03", title: "Guidelines", desc: "Creating a manual to ensure consistency across platforms." },
            { step: "04", title: "Launch", desc: "Rolling out your new identity to the world." }
        ],
        benefits: [
            { title: "Unique Identity", desc: "Stand out from competitors" },
            { title: "Brand Consistency", desc: "Unified presence" },
            { title: "Market positioning", desc: "Clear differentiation" },
            { title: "Emotional Resonance", desc: "Connect with audience" }
        ]
    },

    "ux-ui-design": {
        title: "UX/UI Design",
        icon: PanelsTopLeft,
        description: "Bridging the gap between user needs and business objectives.",
        fullDesc: "We design with empathy. Our UX/UI process focuses on removing friction and making every interaction delightful and intuitive.",
        process: [
            { step: "01", title: "Research", desc: "Studying user behavior and identifying pain points." },
            { step: "02", title: "Wireframing", desc: "Building low-fidelity structures for functional testing." },
            { step: "03", title: "Prototyping", desc: "Interactive mockups to simulate the real experience." },
            { step: "04", title: "Visual Design", desc: "Applying the final layer of polish and brand style." }
        ],
        benefits: [
            { title: "User-Centric", desc: "Focused on user needs" },
            { title: "Reduced Churn", desc: "Better retention" },
            { title: "Increased Adoption", desc: "Higher engagement" },
            { title: "Accessibility First", desc: "Inclusive design" }
        ]
    },

    "web-development": {
        title: "Web Development",
        icon: Code2,
        description: "Turning designs into robust, scalable, and high-speed digital reality.",
        fullDesc: "We use the latest technologies to build websites that are not only beautiful but also stable, secure, and infinitely scalable.",
        process: [
            { step: "01", title: "Stack Selection", desc: "Choosing the best tech for your specific needs." },
            { step: "02", title: "Front-end Development", desc: "Coding the visuals with React/Next.js and Tailwind." },
            { step: "03", title: "Back-end Integration", desc: "Setting up CMS, APIs, and data management." },
            { step: "04", title: "Testing & QA", desc: "Rigorous checks for bugs and performance issues." }
        ],
        benefits: [
            { title: "Clean Code", desc: "Maintainable codebase" },
            { title: "High Performance", desc: "Fast loading times" },
            { title: "Mobile Responsive", desc: "Works on all devices" },
            { title: "Future-Proof Tech", desc: "Modern stack" }
        ]
    },

    "motion-design": {
        title: "Motion Design",
        icon: Video,
        description: "Adding life and movement to your brand story.",
        fullDesc: "Motion grabs attention in ways static images can't. We use animation to explain complex ideas and delight your users.",
        process: [
            { step: "01", title: "Storyboarding", desc: "Visualizing the sequence of animations on paper." },
            { step: "02", title: "Illustration", desc: "Creating the custom assets to be animated." },
            { step: "03", title: "Animation", desc: "Bringing the assets to life with smooth motion." },
            { step: "04", title: "Sound Design", desc: "Adding audio to complete the cinematic experience." }
        ],
        benefits: [
            { title: "Higher Engagement", desc: "Captures attention" },
            { title: "Storytelling", desc: "Communicates effectively" },
            { title: "Dynamic Brand", desc: "Modern presence" },
            { title: "Visual Interest", desc: "Memorable experience" }
        ]
    },

    "social-media": {
        title: "Social Media",
        icon: TrendingUp,
        description: "Strategic content that builds community and drives engagement.",
        fullDesc: "We don't just post; we strategize. We help you create a consistent presence that turns followers into fans.",
        process: [
            { step: "01", title: "Content Strategy", desc: "Planning what to post and when for maximum impact." },
            { step: "02", title: "Visual Creation", desc: "Designing thumb-stopping graphics and reels." },
            { step: "03", title: "Copywriting", desc: "Crafting captions that encourage interaction." },
            { step: "04", title: "Analytics", desc: "Measuring results and adjusting the strategy." }
        ],
        benefits: [
            { title: "Brand Awareness", desc: "Increased visibility" },
            { title: "Community Growth", desc: "Engaged followers" },
            { title: "Consistent Voice", desc: "Unified messaging" },
            { title: "Strategic Action", desc: "Data-driven decisions" }
        ]
    },

    "posters-prints": {
        title: "Posters & Prints",
        icon: PenTool,
        description: "High-impact visual communication for the physical and digital world.",
        fullDesc: "Whether it's for an event or a digital campaign, our posters are designed to deliver your message with maximum clarity.",
        process: [
            { step: "01", title: "Concept", desc: "Ideating the central message and visual hook." },
            { step: "02", title: "Typography", desc: "Selecting fonts that convey the right tone." },
            { step: "03", title: "Hierarchy", desc: "Arranging elements to guide the viewer's eye." },
            { step: "04", title: "Production", desc: "Preparing files for high-quality printing or web." }
        ],
        benefits: [
            { title: "Clear Message", desc: "Effective communication" },
            { title: "Bold Visuals", desc: "Eye-catching design" },
            { title: "Layout Mastery", desc: "Professional composition" },
            { title: "Ready to Print", desc: "Production-ready files" }
        ]
    }
};
