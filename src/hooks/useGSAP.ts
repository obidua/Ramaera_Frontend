// // // src/hooks/gsapHooks.ts
// // import { useEffect, useRef } from 'react';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import { TextPlugin } from 'gsap/TextPlugin';

// // gsap.registerPlugin(ScrollTrigger, TextPlugin);

// // export const useGSAP = () => {
// //   const containerRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       const createParticle = () => {
// //         const particle = document.createElement('div');
// //         particle.className = 'absolute w-1 h-1 bg-white rounded-full opacity-60';
// //         particle.style.left = Math.random() * 100 + '%';
// //         particle.style.top = '100%';
// //         document.body.appendChild(particle);

// //         gsap.to(particle, {
// //           y: -window.innerHeight - 100,
// //           x: (Math.random() - 0.5) * 300,
// //           opacity: 0,
// //           scale: Math.random() * 2 + 0.5,
// //           duration: Math.random() * 4 + 3,
// //           ease: "none",
// //           onComplete: () => particle.remove(),
// //         });
// //       };

// //       const particleInterval = setInterval(createParticle, 300);

// //       return () => clearInterval(particleInterval);
// //     }, containerRef);

// //     return () => ctx.revert();
// //   }, []);

// //   return containerRef;
// // };

// // export const useScrollAnimations = () => {
// //   useEffect(() => {
// //     gsap.to('.parallax-bg', {
// //       yPercent: -20,
// //       ease: 'none',
// //       scrollTrigger: {
// //         trigger: '.parallax-bg',
// //         start: 'top bottom',
// //         end: 'bottom top',
// //         scrub: 0.5,
// //       },
// //     });

// //     return () => {
// //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //     };
// //   }, []);
// // };

// // export const useParticleSystem = () => {
// //   useEffect(() => {
// //     const createAdvancedParticle = () => {
// //       const particle = document.createElement('div');
// //       const size = Math.random() * 2 + 1;
// //       const color = ['#ffffff', '#06b6d4', '#fbbf24'][Math.floor(Math.random() * 3)];

// //       particle.style.cssText = `
// //         position: fixed;
// //         width: ${size}px;
// //         height: ${size}px;
// //         background: ${color};
// //         border-radius: 50%;
// //         pointer-events: none;
// //         z-index: 1;
// //         left: ${Math.random() * 100}vw;
// //         top: 100vh;
// //         box-shadow: 0 0 ${size}px ${color};
// //       `;

// //       document.body.appendChild(particle);

// //       gsap.to(particle, {
// //         y: -window.innerHeight - 200,
// //         x: (Math.random() - 0.5) * 200,
// //         opacity: 0,
// //         scale: Math.random() * 1.5 + 0.5,
// //         rotation: Math.random() * 180,
// //         duration: Math.random() * 3 + 2,
// //         ease: "none",
// //         onComplete: () => particle.remove(),
// //       });
// //     };

// //     const interval = setInterval(createAdvancedParticle, 300);
// //     return () => clearInterval(interval);
// //   }, []);
// // };



// src/hooks/gsapHooks.ts
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { TextPlugin } from 'gsap/TextPlugin';

// gsap.registerPlugin(ScrollTrigger, TextPlugin);

// export const useGSAP = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const createParticle = () => {
//         const particle = document.createElement('div');
//         particle.className = 'absolute w-1 h-1 bg-white rounded-full opacity-60';
//         particle.style.left = Math.random() * 100 + '%';
//         particle.style.top = '100%';
//         document.body.appendChild(particle);

//         gsap.to(particle, {
//           y: -window.innerHeight - 100,
//           x: (Math.random() - 0.5) * 300,
//           opacity: 0,
//           scale: Math.random() * 2 + 0.5,
//           duration: Math.random() * 4 + 3,
//           ease: "none",
//           onComplete: () => particle.remove(),
//         });
//       };

//       const particleInterval = setInterval(createParticle, 300);

//       return () => clearInterval(particleInterval);
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return containerRef;
// };

// export const useParticleSystem = () => {
//   useEffect(() => {
//     const createAdvancedParticle = () => {
//       const particle = document.createElement('div');
//       const size = Math.random() * 2 + 1;
//       const color = ['#ffffff', '#06b6d4', '#fbbf24'][Math.floor(Math.random() * 3)];

//       particle.style.cssText = `
//         position: fixed;
//         width: ${size}px;
//         height: ${size}px;
//         background: ${color};
//         border-radius: 50%;
//         pointer-events: none;
//         z-index: 1;
//         left: ${Math.random() * 100}vw;
//         top: 100vh;
//         box-shadow: 0 0 ${size}px ${color};
//       `;

//       document.body.appendChild(particle);

//       gsap.to(particle, {
//         y: -window.innerHeight - 200,
//         x: (Math.random() - 0.5) * 200,
//         opacity: 0,
//         scale: Math.random() * 1.5 + 0.5,
//         rotation: Math.random() * 180,
//         duration: Math.random() * 3 + 2,
//         ease: "none",
//         onComplete: () => particle.remove(),
//       });
//     };

//     const interval = setInterval(createAdvancedParticle, 300);
//     return () => clearInterval(interval);
//   }, []);
// };
