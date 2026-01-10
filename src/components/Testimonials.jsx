import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        content:
            "Techno Vanam did a great job understanding our business of being a platform that helps create AI influencers that spots trends and create show stopping videos. They came up with a design that is fresh and timeless. Can't wait for the world to see.",
        author: "Mav",
        role: "Founder, GEN",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mav",
        linkedin: "#",
    },
    {
        id: 2,
        content:
            "We would like to thank Techno Vanam for the work done on the rebranding of our Company. The new visual identity perfectly captures our vision and values, and we are confident it will resonate strongly with our shareholders and partners engagement.",
        author: "Mohammed Al Abri",
        role: "Investment Director",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed",
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
            const scrollAmount = 450; // Approximating card width + margin
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-[#fdfffb] py-16 sm:py-24 w-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 mb-10 px-4 sm:px-6 md:px-8 lg:px-12 text-brand-600 max-w-7xl mx-auto">
                <div className="w-2 h-2 rounded-full bg-brand-600" />
                <span className="text-xl sm:text-2xl font-semibold">
                    Testimonials
                </span>
            </div>

            {/* Scroll container */}
            <div className="relative mb-16">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide
                     px-4 sm:px-6 md:px-8 lg:px-12 py-4
                     scroll-pl-4 sm:scroll-pl-6 md:scroll-pl-8 lg:scroll-pl-12"
                    style={{
                        WebkitOverflowScrolling: "touch",
                        scrollbarWidth: "none",
                    }}
                >
                    <div className="flex gap-4 sm:gap-6 md:gap-8">
                        {testimonials.map((t) => (
                            <div
                                key={t.id}
                                className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px] snap-start"
                            >
                                <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 min-h-[300px] md:h-[320px]
                                  flex flex-col justify-between
                                  shadow-[0_4px_20px_rgba(0,0,0,0.01)]
                                  hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                                  transition-all duration-500 border border-gray-50">
                                    <p className="text-[#1A1A1A] text-sm md:text-base leading-[1.6]">
                                        {t.content}
                                    </p>

                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                                                <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm md:text-base text-[#1A1A1A]">
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
                                            className="w-9 h-9 rounded-full flex items-center justify-center
                                   border border-gray-100 bg-white hover:bg-black hover:text-white transition shadow-sm text-black"
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
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
                    {/* Progress Bar */}
                    <div className="w-full sm:flex-1 h-[3px] bg-brand-100 rounded-full overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-brand-600"
                            style={{ scaleX, originX: 0, width: "100%" }}
                        />
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-brand-600 flex items-center justify-center text-white shadow-md hover:bg-brand-700 transition-colors border border-brand-500"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-brand-600 flex items-center justify-center text-white shadow-md hover:bg-brand-700 transition-colors border border-brand-500"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
}
