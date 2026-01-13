import ParadoxLogo from "../assets/logo.png";
import ParadoxImage from "../assets/logo.png";
import TeachableLogo from "../assets/logo.png";
import TeachableImage from "../assets/logo.png";
import UpsideLogo from "../assets/logo.png";
import UpsideImage from "../assets/logo.png";
import CardLogo1 from "../assets/logo.png";
import CardLogo2 from "../assets/logo.png";
import { Link } from "react-router-dom";

const projects = [
  {
    logo: ParadoxLogo,
    title: "Athlixir",
    description: "Athlixir is an AI-powered athlete ecosystem built to protect potential, prevent setbacks, and prove talent—uniting performance tracking, injury intelligence, and verified recognition to ensure no athlete is ever overlooked.",
    link: "/product1",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop",
    linkColor: "text-brand-500",
  },
  {
    logo: ParadoxLogo,
    title: "Youth Entrepreneurship Platform",
    description: "An interactive ecosystem built to empower the next generation of founders — connecting mentorship, startup resources, and real-world business tools to turn ideas into impactful ventures.",
    link: "/product2",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    linkColor: "text-brand-500",
  },
  {
    logo: ParadoxLogo,
    title: "WebBrain — Your Second Brain",
    description: "A living memory layer for your browser that understands what you explore, remembers what matters, and brings it back when you need it. WebBrain turns scattered browsing into structured knowledge — so every idea, insight, and discovery stays with you.",
    link: "/contact",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    linkColor: "text-brand-500",
  },
];

const ProjectCard = ({ project, reverse }) => (
  <Link
    to={project.link}
    className={`flex flex-row ${reverse ? "flex-row-reverse" : ""} rounded-3xl overflow-hidden shadow-sm bg-[#1a1a1a] hover:shadow-lg transition duration-300 w-full max-w-[1200px] mx-auto border border-white/5 card-glow card-glow-hover`}
  >
    {/* Text Section */}
    <div className="p-8 w-1/2 flex flex-col justify-center">
      <img
        src={project.logo}
        alt={`${project.title} logo`}
        className="w-[140px] mb-6"
        loading="lazy"
      />
      <p className="text-gray-400 text-lg leading-7 mb-6">
        {project.description}
      </p>
      <span
        className={`font-semibold text-sm uppercase flex items-center gap-2 ${project.linkColor}`}
      >
        See project
        <svg
          className="w-5 h-5 transform rotate-90"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 3l5 5-5 5" strokeWidth="2" />
        </svg>
      </span>
    </div>

    {/* Image Section */}
    <div className="w-1/2 h-[400px]">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </Link>
);

export default function Portfolio() {
  return (
    <>
      <section className="w-full flex flex-col items-center py-20 px-8 bg-black text-white">
        <div className="w-full max-w-7xl text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Portfolio
          </h2>
          <p className="text-gray-400 text-lg max-w-[640px] mx-auto">
            Our amazing team of designers and developers have produced some remarkable pieces of work.
          </p>
        </div>

        <div className="w-full max-w-7xl space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col items-center py-20 px-8 bg-black">
        <div className="w-full max-w-[1320px] flex flex-col items-center gap-10">
          {/* Header */}
          <div className="w-full max-w-[580px] text-center">
            <h2 className="text-[42px] leading-[52px] font-bold text-white">
              Let’s bring your vision to life
            </h2>
          </div>

          {/* Subheading */}
          <div className="w-full max-w-[520px] text-center">
            <p className="text-lg leading-[30px] text-gray-400">
              Explore how Technovanam builds custom solutions — or reach out and let’s create something exceptional.
            </p>
          </div>

          {/* Cards Container */}
          <div className="w-full flex flex-row justify-center gap-7">
            {/* Card 1 */}
            <div className="w-[calc(50%-14px)] max-w-[622px] bg-[#0a0a0a] border border-white/5 rounded-[32px] shadow-[0px_6px_20px_rgba(0,0,0,0.2)] p-[55px_41px] flex flex-col min-h-[462px] card-glow">
              {/* Logo */}
              <div className="mb-6">
                <div className="w-[80px] h-[80px] flex justify-center items-center mb-6">
                  <img
                    src={CardLogo1}
                    alt="Logo 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="mb-3 w-full max-w-[540px]">
                <h3 className="text-[32px] leading-[42px] font-bold text-white">
                  Ideas deserve more than just code
                </h3>
              </div>

              {/* Description */}
              <div className="mb-8 w-full max-w-[540px]">
                <p className="text-lg leading-[30px] text-gray-400">
                  We help startups and businesses bring big visions to life through thoughtful design and smart development. Whether you're starting fresh or scaling fast — we’re built for it.
                </p>
              </div>

              {/* Button */}
              <Link to="/contact">
                <button className="relative group overflow-hidden flex items-center justify-center gap-1 px-[39px] py-[27px] bg-brand-500 text-white font-bold text-[18px] rounded-full shadow-brand border border-brand-500 w-[259.81px] h-[72px] transition-all hover:bg-brand-600 active:scale-95">
                  <span className="relative z-10 flex items-center gap-1">
                    Let’s Build Together
                    <svg
                      className="w-5 h-5 transform -scale-y-100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                </button>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="w-[calc(50%-14px)] max-w-[622px] bg-[#0a0a0a] border border-white/5 rounded-[32px] shadow-[0px_6px_20px_rgba(0,0,0,0.2)] p-[55px_41px] flex flex-col min-h-[462px] card-glow">
              {/* Logo */}
              <div className="mb-6">
                <div className="w-[80px] h-[80px] flex justify-center items-center mb-6">
                  <img
                    src={CardLogo2}
                    alt="Logo 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="mb-3 w-full max-w-[540px]">
                <h3 className="text-[32px] leading-[42px] font-bold text-white">
                  You won’t find templates here
                </h3>
              </div>

              {/* Description */}
              <div className="mb-8 w-full max-w-[540px]">
                <p className="text-lg leading-[30px] text-gray-400">
                  We don’t showcase random past work — we focus on your future. Everything we create is tailored, strategic, and built from the ground up to serve a real purpose.
                </p>
              </div>

              {/* Button */}
              <Link to="/contact">
                <button className="relative group overflow-hidden flex items-center justify-center gap-1 px-[39px] py-[27px] bg-brand-500 text-white font-bold text-[18px] rounded-full shadow-brand border border-brand-500 w-[240px] h-[72px] transition-all hover:bg-brand-600 active:scale-95">
                  <span className="relative z-10 flex items-center gap-1">
                    Start Your Journey
                    <svg
                      className="w-5 h-5 transform -scale-y-100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};