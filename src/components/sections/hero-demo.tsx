'use client';

import * as React from "react";
import {
  AzureAI,
  Claude,
  Cohere,
  DeepSeek,
  Gemini,
  Grok,
  Hunyuan,
  Midjourney,
  Minimax,
  Moonshot,
  OpenAI,
  Qwen,
  Qingyan,
  Spark,
  Suno,
  Volcengine,
  Wenxin,
  Xinference,
  XAI,
  Zhipu,
} from '@lobehub/icons';

import {
  FloatingIconsHero,
  type FloatingIconsHeroProps,
} from "@/components/ui/floating-icons-hero-section";

const demoIcons: FloatingIconsHeroProps["icons"] = [
  { id: 1, icon: OpenAI, className: "top-[10%] left-[10%]" },
  { id: 2, icon: Claude, className: "top-[20%] right-[8%]" },
  { id: 3, icon: Gemini, className: "top-[80%] left-[10%]" },
  { id: 4, icon: Grok, className: "bottom-[10%] right-[10%]" },
  { id: 5, icon: DeepSeek, className: "top-[5%] left-[30%]" },
  { id: 6, icon: Zhipu, className: "top-[5%] right-[30%]" },
  { id: 7, icon: Moonshot, className: "bottom-[8%] left-[25%]" },
  { id: 8, icon: Qwen, className: "top-[40%] left-[15%]" },
  { id: 9, icon: Spark, className: "top-[75%] right-[25%]" },
  { id: 10, icon: Hunyuan, className: "top-[90%] left-[70%]" },
  { id: 11, icon: Wenxin, className: "top-[50%] right-[5%]" },
  { id: 12, icon: Minimax, className: "top-[55%] left-[5%]" },
  { id: 13, icon: AzureAI, className: "top-[5%] left-[55%]" },
  { id: 14, icon: Cohere, className: "bottom-[5%] right-[45%]" },
  { id: 15, icon: Xinference, className: "top-[25%] right-[20%]" },
  { id: 16, icon: Volcengine, className: "top-[60%] left-[30%]" },
  { id: 17, icon: Qingyan, className: "top-[35%] right-[12%]" },
  { id: 18, icon: XAI, className: "bottom-[20%] left-[45%]" },
  { id: 19, icon: Midjourney, className: "top-[15%] left-[50%]" },
  { id: 20, icon: Suno, className: "bottom-[25%] right-[35%]" },
];

export default function FloatingIconsHeroDemo() {
  const morphingTexts = [
    "主流大模型 API 网关",
    "ChatGPT 订阅正版充值",
    "国内镜像 ChatGPT · Claude",
    "Claude Code API 供应",
  ];

  return (
    <FloatingIconsHero
      title="一套接入，连通全球与国内顶级大模型"
      subtitle="我们为企业提供统一的 AI API 网关，覆盖国内外领先模型的订阅、镜像与代码能力，助力业务快速上线。"
      ctaText="立即体验"
      ctaHref="#features"
      secondaryCtaText="了解更多"
      secondaryCtaHref="#about"
      badgeText="旗舰服务矩阵"
      morphingTexts={morphingTexts}
      icons={demoIcons}
    />
  );
}
