import Image from "next/image";

import FloatingIconsHeroDemo from "@/components/sections/hero-demo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FeatureSteps } from "@/components/blocks/feature-section";
import {
  CloudCog,
  Compass,
  Gauge,
  Lock,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

const bentoFeatures = [
  {
    Icon: Sparkles,
    name: "AI Design Copilot",
    description:
      "Generate production-ready UI blocks with contextual prompts and team-approved design tokens.",
    href: "#",
    cta: "Generate a block",
    background: (
      <Image
        src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop"
        alt="AI generated interface"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Rocket,
    name: "Workflow Launchpads",
    description:
      "Launch complex marketing or product workflows in minutes with reusable templates and smart defaults.",
    href: "#",
    cta: "Browse templates",
    background: (
      <Image
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
        alt="Workflow launch"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    ),
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Lock,
    name: "Enterprise Guard",
    description:
      "Policy-aware permissions, audit trails, and SOC2-ready safeguards woven into every touchpoint.",
    href: "#",
    cta: "Review controls",
    background: (
      <Image
        src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1400&auto=format&fit=crop"
        alt="Security"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    ),
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: CloudCog,
    name: "Unified Data Cloud",
    description:
      "Streaming connectors with live observability so every team can make confident, real-time decisions.",
    href: "#",
    cta: "Connect sources",
    background: (
      <Image
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
        alt="Cloud services"
        className="absolute inset-0 h-full w-full object-cover opacity-65"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Users,
    name: "Team Canvas",
    description:
      "Bring product, design, and go-to-market teams together with multiplayer editing and temporal playback.",
    href: "#",
    cta: "Open canvas",
    background: (
      <Image
        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop"
        alt="Team collaboration"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Gauge,
    name: "Insight Pulse",
    description:
      "A living command center with adaptive dashboards, predictive alerts, and natural language summaries.",
    href: "#",
    cta: "Launch command center",
    background: (
      <Image
        src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop"
        alt="Analytics dashboard"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
  },
];

const featureStepsData = [
  {
    step: "Step 1",
    title: "Discover the Mission",
    content:
      "Map your strategy with tailored guidance, curated inspiration, and an onboarding plan that adapts in real time.",
    image:
      "https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Prototype the Orbit",
    content:
      "Assemble interactive journeys with drag-and-drop blueprints, live data, and AI copilots that assist every teammate.",
    image:
      "https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Launch & Amplify",
    content:
      "Ship experiences with confidence thanks to guardrails, instant analytics, and adaptive experiments at scale.",
    image:
      "https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop",
  },
];

const stats = [
  { label: "Deployments each month", value: "12K", description: "Automations delivered across product, marketing, and data teams." },
  { label: "Average time saved", value: "38%", description: "Teams ship nearly twice as fast compared to their previous stack." },
  { label: "Customer NPS", value: "72", description: "Designers, PMs, and engineers love collaborating inside Orbit." },
];

const testimonials = [
  {
    quote:
      "Orbit became our digital mission control. The floating hero is now our in-product welcome experience and it converts 3x better.",
    author: "Mara Ellison",
    role: "VP Product, StellarIQ",
  },
  {
    quote:
      "We built an entire enablement hub using the bento layout. Design handoff dropped from weeks to days.",
    author: "Devin Patel",
    role: "Head of Design Ops, Lumen",
  },
  {
    quote:
      "Feature steps power every onboarding we run. The autoplay progress keeps users engaged through complex workflows.",
    author: "Joanna Yu",
    role: "Director of Customer Education, NovaCloud",
  },
];

const faqs = [
  {
    question: "Can I customize these sections for my brand?",
    answer:
      "Absolutely. Tailwind CSS tokens and shadcn variants make it easy to adapt typography, colors, and spacing to your design system.",
  },
  {
    question: "Do the floating icons support custom SVGs?",
    answer:
      "Yes. Pass any React SVG component via the icons prop. You can mix lucide icons with branded illustrations effortlessly.",
  },
  {
    question: "Is there support for dark mode?",
    answer:
      "Dark mode is built into the theme tokens. Toggle a `dark` class at the root to switch the full experience instantly.",
  },
  {
    question: "How do I extend the autoplay behavior?",
    answer:
      "FeatureSteps exposes an `autoPlayInterval` prop and you can hook into `currentFeature` state to build custom controls.",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>
      <FloatingIconsHeroDemo />

      <section id="features" className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 -mt-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Shape narratives with responsive, animated canvases
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Combine motion-rich hero sections, adaptive bento grids, and cinematic feature explainers to craft journeys that feel custom-built for every visitor.
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-3">
          {bentoFeatures.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </section>

      <section className="bg-gradient-to-b from-background via-muted/40 to-background px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <FeatureSteps
            features={featureStepsData}
            title="Launch a mission in three simple stages"
            autoPlayInterval={4000}
            imageHeight="lg:h-[480px]"
          />

          <div className="grid gap-8 rounded-2xl border border-border/70 bg-background/70 p-10 shadow-xl shadow-black/5 backdrop-blur-md md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-3">
                <p className="text-4xl font-bold md:text-5xl">{stat.value}</p>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground/80">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Teams that already orbit with us</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Designers, developers, and strategists are building immersive onboarding and growth experiences with these modules every day.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-card/80 p-6 shadow-lg shadow-black/5"
              >
                <p className="text-lg italic text-muted-foreground">
                  “{testimonial.quote}”
                </p>
                <div className="mt-6">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-6 py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to bring these experiences into your product, site, or enablement stack.
            </p>
            <Button size="lg" className="px-8">
              Talk to the team
            </Button>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-border bg-background p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/80 bg-background/95 px-6 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-center md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Orbit Studio. Crafted with motion, clarity, and playful energy.
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Compass className="h-4 w-4" />
            Mission Control 4200 · Earth & Beyond
          </div>
        </div>
      </footer>
    </main>
  );
}
