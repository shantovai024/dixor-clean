import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const useHorizontalScroll = () => {
    useEffect(() => {
        if (window.innerWidth > 1023) {
            const sections = gsap.utils.toArray(".panel");
            const container = document.querySelector(".thecontainer") as HTMLDivElement | null;

            if (container && sections.length > 0) {
                const animation = gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        pin: true,
                        scrub: 1,
                        end: () => "+=" + container.offsetWidth,
                    },
                });

                // ✅ Cleanup on unmount
                return () => {
                    animation.scrollTrigger?.kill();
                    animation.kill();
                };
            }
        }
    }, []);
};

export default useHorizontalScroll;
