import { Layout, Palette, PanelsTopLeft, Code2, Smartphone, Video, TrendingUp, PenTool, CheckCircle2 } from "lucide-react";

export const servicesData = {
    "website-design": {
        title: "Website Design",
        icon: Layout,
        description: "We create immersive digital experiences that combine stunning aesthetics with high-performance functionality.",
        fullDesc: "Our website design process is centered around your brand's unique identity. We don't just build sites; we create digital homes that represent your values and drive conversions.",
        process: [
            { step: "01", title: "Discovery", desc: "Understanding your goals, audience, and market position." },
            { step: "02", title: "Architecture", desc: "Planning user flows and sitemaps for optimal navigation." },
            { step: "03", title: "UI Design", desc: "Crafting pixel-perfect visuals that reflect your brand." },
            { step: "04", title: "Interaction", desc: "Adding micro-animations and smooth transitions." }
        ],
        benefits: ["Fully Responsive", "SEO Optimized", "Conversion Focused", "Blazing Fast Load Times"]
    },
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
        benefits: ["Unique Identity", "Brand Consistency", "Market positioning", "Emotional Resonance"]
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
        benefits: ["User-Centric", "Reduced Churn", "Increased Adoption", "Accessibility First"]
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
        benefits: ["Clean Code", "High Performance", "Mobile Responsive", "Future-Proof Tech"]
    },
    "app-design": {
        title: "App Design",
        icon: Smartphone,
        description: "Creating mobile-first experiences that users carry in their pockets.",
        fullDesc: "Mobile apps require a specific focus on thumb-reachability and screen efficiency. We craft apps that feel native and natural.",
        process: [
            { step: "01", title: "User Flow", desc: "Mapping the journey from opening the app to goal." },
            { step: "02", title: "Design Systems", desc: "Creating reusable components for dev efficiency." },
            { step: "03", title: "Interface Design", desc: "Designing high-fidelity screens for iOS and Android." },
            { step: "04", title: "Assets Handover", desc: "Preparing all files for the development team." }
        ],
        benefits: ["Mobile Optimized", "Intuitive Flow", "Platform Specific", "Modern UI"]
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
        benefits: ["Higher Engagement", "Storytelling", "Dynamic Brand", "Visual Interest"]
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
        benefits: ["Brand Awareness", "Community Growth", "Consistent Voice", "Strategic Action"]
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
        benefits: ["Clear Message", "Bold Visuals", "Layout Mastery", "Ready to Print"]
    }
};
