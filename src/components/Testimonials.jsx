import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        content: "Techno Vanam did a great job understanding our business of being a platform that helps create AI influencers that spots trends and create show stopping videos. They came up with a design that is fresh and timeless. Can't wait for the world to see.",
        author: "Mav",
        role: "Founder, GEN",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mav",
        linkedin: "#"
    },
    {
        id: 2,
        content: "We would like to thank Techno Vanam for the work done on the rebranding of our Company. The new visual identity perfectly captures our vision and values, and we are confident it will resonate strongly with our shareholders and partners engagement.",
        author: "Mohammed Al Abri",
        role: "Investment Director",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed",
        linkedin: "#"
    },
    {
        id: 3,
        content: "Techno Vanam delivered designs that were clearer and easier to navigate. The team was responsive, professional, and quick in their communication. Moreover, they shared multiple drafts and provided honest feedback. Overall, their fresh perspectives and creative breakthroughs impressed us.",
        author: "Jill Li",
        role: "Senior Designer, Jogg",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jill",
        linkedin: "#"
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

const Testimonials = () => {
    const scrollRef = useRef(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });
    const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <section className="bg-[#E9EBEE] py-20 w-full overflow-hidden">
            {/* Header aligned with showcase margin */}
            <div className="flex items-center gap-3 mb-8 px-8 sm:px-16 md:px-24 text-blue-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span className="text-lg font-medium tracking-tight uppercase" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Testimonials</span>
            </div>

            {/* Showcase Scroller */}
            <div className="relative mb-12">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory py-4 items-stretch"
                    style={{
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {/* Constant Initial Spacer */}
                    <div className="flex-shrink-0 w-8 sm:w-16 md:w-24 px-0" />

                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px] snap-start flex mr-6 md:mr-8"
                        >
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 w-full flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 h-[300px] md:h-[320px]">
                                <p className="text-[#1A1A1A] text-sm md:text-base leading-[1.6] font-normal tracking-tight line-clamp-6">
                                    {testimonial.content}
                                </p>

                                <div className="flex items-center justify-between mt-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-[#F3F4F6] flex-shrink-0">
                                            <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#1A1A1A] text-sm md:text-base tracking-tight">{testimonial.author}</h4>
                                            <p className="text-gray-400 text-[11px] md:text-xs font-medium uppercase tracking-wider">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    <a href={testimonial.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-gray-100 bg-white hover:bg-black hover:text-white text-black transition-all duration-300 shadow-sm">
                                        <LinkedinIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Constant End Spacer - This ensures the last card doesn't shrink from padding */}
                    <div className="flex-shrink-0 w-8 sm:w-16 md:w-24 px-0" />
                </div>
            </div>

            {/* Progress Bar Container aligned with side margins */}
            <div className="px-8 sm:px-16 md:px-24">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                    <div className="flex-1 w-full h-[1px] bg-gray-200/60 relative rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-black/80"
                            style={{ scaleX, originX: 0, width: "100%" }}
                        />
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
};

export default Testimonials;
