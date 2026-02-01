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

    },
    {
        id: 2,
        content:
            "Techno Vanam delivered an excellent billing software with great quality and attention to detail. They handled all our corrections patiently and implemented every change perfectly. Very professional, reliable team and highly recommended!",
        author: "Balasubramaniam R",
        role: "MD, ESA Engineering Works",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Balasubramaniam",

    },
    {
        id: 3,
        content:
            "I’m extremely happy with the work! Every detail matched my expectations perfectly. The charges were very reasonable, and I loved the flexibility for customization. Thank you for the outstanding support and great results!",
        author: "Eshani",
        role: "Founder, Aurora Waxlights",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eshani",

    },
    {
        id: 4,
        content: "An excellent UI/UX design experience from start to finish. The team clearly understood user behavior and translated it into a clean, modern interface. Feedback was implemented quickly, and the final design significantly improved our user experience.",
        author: "Karthikeyan",
        role: "Web Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",

    }
];



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
            <div className="flex items-center gap-3 mb-10 text-brand-600 max-w-7xl mx-auto px-6 sm:px-0">
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

            <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scroll-container-align {
          padding-left: 1.5rem;
          padding-right: 1rem;
          scroll-padding-left: 1.5rem;
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
