# Orbit Innovation Landing

A Next.js + Typescript single-page experience showcasing premium React components built with the **shadcn/ui** philosophy, Tailwind CSS, and Framer Motion. The page highlights three reusable blocks:

- **Floating Icons Hero** – an immersive hero section with reactive floating brand icons.
- **Bento Grid** – a three-column responsive grid for spotlighting product capabilities.
- **Feature Steps** – an animated storytelling module with autoplaying progress and media transitions.

The repository is ready to explore, customize, or extract these components for your own project.

## Getting Started

```bash
npm install
npm run dev
```

This starts the app at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src
├── app
│   ├── globals.css     // Tailwind + design tokens
│   ├── layout.tsx      // Root layout & font setup
│   └── page.tsx        // Single page app composition
├── components
│   ├── blocks
│   │   └── feature-section.tsx        // FeatureSteps component
│   ├── sections
│   │   └── hero-demo.tsx              // Hero demo composition
│   └── ui
│       ├── bento-grid.tsx             // BentoGrid + BentoCard
│       ├── button.tsx                 // shadcn-inspired button
│       └── floating-icons-hero-section.tsx
└── lib
    └── utils.ts                       // Tailwind-aware `cn` helper
```

- **Components live in `src/components/ui`** following the shadcn/ui convention. This makes future `npx shadcn@latest add <component>` commands work without extra configuration.
- **Styles** are managed through Tailwind tokens defined in `globals.css`.

## Adding More Components with shadcn CLI

If you want to extend the library:

```bash
npx shadcn@latest init
npx shadcn@latest add dialog card avatar
```

The CLI will place new components inside `src/components/ui` and utilities inside `src/lib`, matching the structure already in this repository.

## Tailwind + Typescript

- Tailwind is configured via [`tailwind.config.ts`](./tailwind.config.ts) and [`postcss.config.js`](./postcss.config.js).
- Typescript path aliases (`@/*`) point to `src/*`, so imports stay clean and consistent with shadcn/ui examples.

## Component Usage

### Floating Icons Hero

```tsx
import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section";

<FloatingIconsHero
  title="A World of Innovation"
  subtitle="Your message here"
  ctaText="Join the Revolution"
  ctaHref="#cta"
  icons={iconArray}
/>
```

Each icon entry accepts any React SVG component, making it easy to mix lucide-react icons with custom logomarks.

### Bento Grid

```tsx
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

<BentoGrid>
  <BentoCard
    Icon={MyIcon}
    name="Feature"
    description="Feature description"
    background={<img src="https://images.unsplash.com/..." className="absolute inset-0" />}
    href="#"
    cta="Learn more"
    className="lg:row-start-1 lg:row-end-3"
  />
</BentoGrid>
```

### Feature Steps

```tsx
import { FeatureSteps } from "@/components/blocks/feature-section";

<FeatureSteps
  features={featureStepsData}
  title="Your Journey Starts Here"
  autoPlayInterval={4000}
  imageHeight="lg:h-[500px]"
/>
```

## Extending the Experience

- Swap Unsplash images with your own assets.
- Replace the lucide icons with brand assets using the same API.
- Add dark mode by toggling the `className` to `dark` on `<html>`.
- Use Framer Motion variants to orchestrate multi-section choreography.

Enjoy building! 🎉
