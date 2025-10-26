'use client';

import * as React from "react";

import {
  FloatingIconsHero,
  type FloatingIconsHeroProps,
} from "@/components/ui/floating-icons-hero-section";

const IconGoogle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9999 12.24C21.9999 11.4933 21.9333 10.76 21.8066 10.0533H12.3333V14.16H17.9533C17.7333 15.3467 17.0133 16.3733 15.9666 17.08V19.68H19.5266C21.1933 18.16 21.9999 15.4533 21.9999 12.24Z" fill="#4285F4"/>
    <path d="M12.3333 22C15.2333 22 17.6866 21.0533 19.5266 19.68L15.9666 17.08C15.0199 17.7333 13.7933 18.16 12.3333 18.16C9.52659 18.16 7.14659 16.28 6.27992 13.84H2.59326V16.5133C4.38659 20.0267 8.05992 22 12.3333 22Z" fill="#34A853"/>
    <path d="M6.2799 13.84C6.07324 13.2267 5.9599 12.58 5.9599 11.92C5.9599 11.26 6.07324 10.6133 6.2799 10L2.59326 7.32667C1.86659 8.78667 1.45326 10.32 1.45326 11.92C1.45326 13.52 1.86659 15.0533 2.59326 16.5133L6.2799 13.84Z" fill="#FBBC05"/>
    <path d="M12.3333 5.68C13.8933 5.68 15.3133 6.22667 16.3866 7.24L19.6 4.02667C17.68 2.29333 15.2266 1.33333 12.3333 1.33333C8.05992 1.33333 4.38659 3.97333 2.59326 7.32667L6.27992 10C7.14659 7.56 9.52659 5.68 12.3333 5.68Z" fill="#EA4335"/>
  </svg>
);

const IconApple = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-foreground/80" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09l-.1-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const IconMicrosoft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4 2H2v9.4h9.4V2Z" fill="#F25022"/>
    <path d="M22 2h-9.4v9.4H22V2Z" fill="#7FBA00"/>
    <path d="M11.4 12.6H2V22h9.4V12.6Z" fill="#00A4EF"/>
    <path d="M22 12.6h-9.4V22H22V12.6Z" fill="#FFB900"/>
  </svg>
);

const IconFigma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2a3 3 0 0 0 0 6h3V2H7z" fill="#F24E1E"/>
    <path d="M10 8H7a3 3 0 1 0 0 6h3V8z" fill="#FF7262"/>
    <path d="M7 14a3 3 0 1 0 3 3v-3H7z" fill="#A259FF"/>
    <path d="M10 2h4a3 3 0 1 1 0 6h-4V2z" fill="#1ABCFE"/>
    <path d="M14 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" fill="#0ACF83"/>
  </svg>
);

const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-foreground/80" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const IconSlack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#36C5F0"/>
    <path d="M9 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#2EB67D"/>
    <path d="M14 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" fill="#ECB22E"/>
    <path d="M15.5 15a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" fill="#E01E5A"/>
    <path d="M10 14h4v-1.5a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5 1.5V14Z" fill="#E01E5A"/>
    <path d="M8.5 14a1.5 1.5 0 0 0 1.5 1.5h1.5v-1a1.5 1.5 0 0 0-1.5-1.5H8.5v1Z" fill="#ECB22E"/>
    <path d="M15.5 10a1.5 1.5 0 0 0-1.5-1.5H12.5v4a1.5 1.5 0 0 0 1.5 1.5h1.5v-4Z" fill="#36C5F0"/>
    <path d="M14 8.5a1.5 1.5 0 0 0-1.5-1.5h-1v4a1.5 1.5 0 0 0 1.5 1.5h1v-4Z" fill="#2EB67D"/>
  </svg>
);

const IconNotion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-foreground/80" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
  </svg>
);

const IconVercel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-foreground/90" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22h20L12 2z"/>
  </svg>
);

const IconStripe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#635BFF"/>
    <path d="M12.65 10.5c0-.6-.45-.9-1.35-.9-1.2 0-2.7.45-3.9 1.2v-2.4c1.2-.6 2.55-.9 3.9-.9 2.25 0 3.75 1.05 3.75 3v5.1h-2.4v-.75c-.6.6-1.5.9-2.55.9-1.8 0-3.15-1.05-3.15-2.55 0-1.65 1.35-2.4 3.15-2.55 1.05-.15 2.1-.15 2.55-.15v-.15zm0 2.7c-.45 0-1.35 0-2.1.15-.75.15-1.2.45-1.2 1.05 0 .6.45.9 1.2.9.9 0 1.65-.45 2.1-1.05v-1.05z" fill="white"/>
  </svg>
);

const IconDiscord = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" fill="#5865F2"/>
  </svg>
);

const IconX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-foreground/90" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zM17.03 19.75h1.866L7.156 4.25H5.16l11.874 15.5z"/>
  </svg>
);

const IconSpotify = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.125 14.175c-.188.3-.563.413-.863.225-2.437-1.5-5.5-1.725-9.15-1.012-.338.088-.675-.15-.763-.488-.088-.337.15-.675.488-.762 3.937-.787 7.287-.525 9.975 1.125.3.187.412.562.225.862zm.9-2.7c-.225.363-.675.488-1.037.263-2.7-1.65-6.825-2.1-9.975-1.162-.413.113-.825-.15-1-.562-.15-.413.15-.825.563-1 .362-.112 3.487-.975 6.6 1.312.362.225.487.675.262 1.038v.112zm.113-2.887c-3.225-1.875-8.55-2.025-11.512-1.125-.487.15-.975-.15-1.125-.637-.15-.488.15-.975.638-1.125 3.337-.975 9.15-.787 12.825 1.312.45.263.6.825.337 1.275-.263.45-.825.6-1.275.337v-.038z" fill="#1DB954"/>
  </svg>
);

const IconDropbox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 4.5L12 8.5L6 12.5L0 8.5L6 4.5Z" fill="#0061FF"/>
    <path d="M18 4.5L12 8.5L18 12.5L24 8.5L18 4.5Z" fill="#0061FF"/>
    <path d="M6 16.5L12 20.5L6 24.5L0 20.5L6 16.5Z" fill="#0061FF" transform="translate(-6 -8)"/>
    <path d="M18 16.5L12 20.5L18 24.5L24 20.5L18 16.5Z" fill="#0061FF" transform="translate(-6 -8)"/>
  </svg>
);

const IconTwitch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.149 0L.707 3.028v17.944h5.66v3.028h3.028l3.028-3.028h4.243l7.07-7.07V0H2.15zm19.799 13.434l-3.535 3.535h-4.95l-3.029 3.029v-3.03H5.14V1.414h16.808v12.02z" fill="#9146FF"/>
    <path d="M15.53 5.303h2.12v6.36h-2.12v-6.36zm-4.95 0h2.12v6.36h-2.12v-6.36z" fill="#9146FF"/>
  </svg>
);

const IconLinear = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="linear-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5E5CE6" />
        <stop offset="100%" stopColor="#2C2C2C" />
      </linearGradient>
    </defs>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-4 9h8v2H8v-2z" fill="url(#linear-grad)"/>
  </svg>
);

const IconYouTube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.582 6.186A2.482 2.482 0 0 0 19.82 4.42C18.1 4 12 4 12 4s-6.1 0-7.82.42c-.98.26-1.74.98-1.762 1.766C2 7.94 2 12 2 12s0 4.06.418 5.814c.022.786.782 1.506 1.762 1.766C6.1 20 12 20 12 20s6.1 0 7.82-.42c.98-.26 1.74-.98 1.762-1.766C22 16.06 22 12 22 12s0-4.06-.418-5.814zM9.75 15.5V8.5L15.75 12 9.75 15.5z" fill="#FF0000"/>
  </svg>
);

const demoIcons: FloatingIconsHeroProps["icons"] = [
  { id: 1, icon: IconGoogle, className: "top-[10%] left-[10%]" },
  { id: 2, icon: IconApple, className: "top-[20%] right-[8%]" },
  { id: 3, icon: IconMicrosoft, className: "top-[80%] left-[10%]" },
  { id: 4, icon: IconFigma, className: "bottom-[10%] right-[10%]" },
  { id: 5, icon: IconGitHub, className: "top-[5%] left-[30%]" },
  { id: 6, icon: IconSlack, className: "top-[5%] right-[30%]" },
  { id: 7, icon: IconVercel, className: "bottom-[8%] left-[25%]" },
  { id: 8, icon: IconStripe, className: "top-[40%] left-[15%]" },
  { id: 9, icon: IconDiscord, className: "top-[75%] right-[25%]" },
  { id: 10, icon: IconX, className: "top-[90%] left-[70%]" },
  { id: 11, icon: IconNotion, className: "top-[50%] right-[5%]" },
  { id: 12, icon: IconSpotify, className: "top-[55%] left-[5%]" },
  { id: 13, icon: IconDropbox, className: "top-[5%] left-[55%]" },
  { id: 14, icon: IconTwitch, className: "bottom-[5%] right-[45%]" },
  { id: 15, icon: IconLinear, className: "top-[25%] right-[20%]" },
  { id: 16, icon: IconYouTube, className: "top-[60%] left-[30%]" },
];

export default function FloatingIconsHeroDemo() {
  return (
    <FloatingIconsHero
      title="Innovation Orbit"
      subtitle="Experience the future of digital collaboration. Connect with the world's leading platforms and tools in a beautifully orchestrated ecosystem designed for modern creators."
      ctaText="Start Building"
      ctaHref="#features"
      icons={demoIcons}
    />
  );
}
