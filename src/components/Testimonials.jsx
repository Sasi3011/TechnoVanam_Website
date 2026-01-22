import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        content:
            "I am very satisfied with the website built for me. The developer understood my needs, delivered beyond expectations, and responded promptly throughout. A smooth, professional experience—highly recommended!",
        author: "Sameeha",
        role: "Founder & CEO, Haven Tutors",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sameeha",
        linkedin: "#",
    },
    {
        id: 2,
        content:
            "Techno Vanam delivered an excellent billing software with great quality and attention to detail. They handled all our corrections patiently and implemented every change perfectly. Very professional, reliable team and highly recommended!",
        author: "Balasubramaniam R",
        role: "MD, ESA Engineering Works",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Balasubramaniam",
        linkedin: "#",
    },
    {
        id: 3,
        content:
            "Techno Vanam delivered designs that were clearer and easier to navigate. The team was responsive, professional, and quick in their communication. Moreover, they shared multiple drafts and provided honest feedback. Overall, their fresh perspectives and creative breakthroughs impressed us.",
        author: "Jill Li",
        role: "Senior Designer, Jogg",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jill",
        linkedin: "#",
    },
    {
        id: 4,
        content: "The level of creativity and attention to detail that Techno Vanam brings to the table is unmatched. They transformed our abstract ideas into a tangible, beautiful digital product that exceeded our expectations in every way.",
        author: "Alex Rivera",
        role: "Product Manager, TechFlow",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        linkedin: "#"
    }
];

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export default function Testimonials() {
    const scrollRef = useRef(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });
    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const scroll = (direction) => {
        if (scrollRef.current) {
            const isMobile = window.innerWidth < 640;
            const scrollAmount = isMobile ? window.innerWidth * 0.85 : 450;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-black py-16 sm:py-24 w-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 mb-10  text-brand-600 max-w-7xl mx-auto">
                <div className="w-2 h-2 rounded-full bg-brand-600" />
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Testimonials
                </h2>
            </div>

            {/* Scroll container */}
            <div className="relative mb-16">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 scroll-container-align"
                    style={{
                        WebkitOverflowScrolling: "touch",
                        scrollbarWidth: "none",
                    }}
                >
                    <div className="flex gap-4 sm:gap-6 md:gap-8">
                        {testimonials.map((t) => (
                            <div
                                key={t.id}
                                className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px] snap-start h-full"
                            >
                                <div className="bg-[#0a0a0a] rounded-[2rem] p-6 sm:p-8 md:p-10 min-h-[300px] h-full
                                  flex flex-col justify-between
                                  shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                                  card-glow card-glow-hover
                                  transition-all duration-500 border border-brand-500/30 hover:border-brand-500/60">
                                    <p className="text-gray-400 text-sm md:text-base leading-[1.6]">
                                        {t.content}
                                    </p>

                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden bg-white/5">
                                                <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm md:text-base text-white">
                                                    {t.author}
                                                </h4>
                                                <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">
                                                    {t.role}
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href={t.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-11 h-11 rounded-full flex items-center justify-center
                                   border border-brand-500/20 bg-white/5 hover:bg-blue-600 hover:text-white transition shadow-sm text-blue-400"
                                        >
                                            <LinkedinIcon />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Invisible spacer for end alignment */}
                    <div className="flex-shrink-0 w-4 sm:w-8 lg:w-12 px-0" />
                </div>
            </div>

            {/* Footer: Progress Bar and Navigation Buttons */}
            <div className="px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
                    {/* Progress Bar */}
                    <div className="w-full sm:flex-1 h-[3px] bg-brand-500/10 rounded-full overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-brand-500"
                            style={{ scaleX, originX: 0, width: "100%" }}
                        />
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="relative group overflow-hidden w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-500 flex items-center justify-center text-black shadow-md hover:bg-brand-600 transition-all duration-300 active:scale-95 border border-brand-500"
                            aria-label="Previous testimonial"
                        >
                            <span className="relative z-10">
                                <ArrowLeft size={20} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="relative group overflow-hidden w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-500 flex items-center justify-center text-black shadow-md hover:bg-brand-600 transition-all duration-300 active:scale-95 border border-brand-500"
                            aria-label="Next testimonial"
                        >
                            <span className="relative z-10">
                                <ArrowRight size={20} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scroll-container-align {
          padding-left: 0.5rem;
          padding-right: 1rem;
          scroll-padding-left: 0.5rem;
        }

        @media (min-width: 640px) {
          .scroll-container-align {
            padding-left: 1rem;
            padding-right: 1.5rem;
            scroll-padding-left: 1rem;
          }
        }

        @media (min-width: 1280px) {
          .scroll-container-align {
            padding-left: calc((100vw - 80rem) / 2);
            padding-right: 2rem;
            scroll-padding-left: calc((100vw - 80rem) / 2);
          }
        }
      `}</style>
        </section>
    );
}
