"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!features.length) return;

    const tick = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentFeature((value) => (value + 1) % features.length);
          return 0;
        }

        return prev + 100 / Math.max(1, autoPlayInterval / 100);
      });
    }, 100);

    return () => clearInterval(tick);
  }, [features.length, autoPlayInterval]);

  useEffect(() => {
    setProgress(0);
  }, [currentFeature]);

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          {title}
        </h2>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10">
          <div className="order-2 space-y-8 md:order-1">
            {features.map((feature, index) => (
              <motion.div
                key={feature.step}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border-2 md:h-10 md:w-10",
                    index === currentFeature
                      ? "scale-110 border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground bg-muted",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-lg">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="hidden h-2 w-full overflow-hidden rounded-full bg-muted lg:block">
              <motion.div
                className="h-full bg-primary"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut", duration: 0.1 }}
              />
            </div>
          </div>

          <div
            className={cn(
              "order-1 relative overflow-hidden rounded-lg md:order-2",
              "h-[220px] md:h-[320px] lg:h-[420px]",
              imageHeight,
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={feature.step}
                      className="absolute inset-0 overflow-hidden rounded-lg"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="h-full w-full object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
