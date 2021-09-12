const tl = gsap.timeline({ defaults: { ease: "power1.out" } }); // Default property which remains constant in all animations
tl.to(".text", { y: "0%", duration: 0.8, stagger: 0.25, delay : 0.6 }); // Adds delay (staggers) between each element
tl.to(".slider", { y: "-100%", duration: 1.2, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 0.78 }, "-=0.76"); // Specially specify the start timing of the element
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.1");
