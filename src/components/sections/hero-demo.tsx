'use client';

/* eslint-disable @typescript-eslint/ban-ts-comment */
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

// 创建彩色图标包装组件
// @lobehub/icons 的 .Color 属性在运行时存在，但 TypeScript 类型中未定义
// @ts-ignore
const ZhipuColor = (props: React.SVGProps<SVGSVGElement>) => <Zhipu.Color {...props} />;
// @ts-ignore  
const VolcengineColor = (props: React.SVGProps<SVGSVGElement>) => <Volcengine.Color {...props} />;
// @ts-ignore
const CohereColor = (props: React.SVGProps<SVGSVGElement>) => <Cohere.Color {...props} />;
// @ts-ignore
const ClaudeColor = (props: React.SVGProps<SVGSVGElement>) => <Claude.Color {...props} />;
// @ts-ignore
const GeminiColor = (props: React.SVGProps<SVGSVGElement>) => <Gemini.Color {...props} />;
// @ts-ignore
const MinimaxColor = (props: React.SVGProps<SVGSVGElement>) => <Minimax.Color {...props} />;
// @ts-ignore
const WenxinColor = (props: React.SVGProps<SVGSVGElement>) => <Wenxin.Color {...props} />;
// @ts-ignore
const SparkColor = (props: React.SVGProps<SVGSVGElement>) => <Spark.Color {...props} />;
// @ts-ignore
const QingyanColor = (props: React.SVGProps<SVGSVGElement>) => <Qingyan.Color {...props} />;
// @ts-ignore
const DeepSeekColor = (props: React.SVGProps<SVGSVGElement>) => <DeepSeek.Color {...props} />;
// @ts-ignore
const QwenColor = (props: React.SVGProps<SVGSVGElement>) => <Qwen.Color {...props} />;
// @ts-ignore
const AzureAIColor = (props: React.SVGProps<SVGSVGElement>) => <AzureAI.Color {...props} />;
// @ts-ignore
const HunyuanColor = (props: React.SVGProps<SVGSVGElement>) => <Hunyuan.Color {...props} />;
// @ts-ignore
const XinferenceColor = (props: React.SVGProps<SVGSVGElement>) => <Xinference.Color {...props} />;

// 图标配置 - 根据用户提供的 PROVIDER_ICONS 示例
const demoIcons: FloatingIconsHeroProps["icons"] = [
  // 有 .Color 变体的图标 (彩色)
  { id: 1, icon: ZhipuColor, className: "top-[10%] left-[10%]" },
  { id: 2, icon: VolcengineColor, className: "top-[20%] right-[8%]" },
  { id: 3, icon: CohereColor, className: "top-[80%] left-[10%]" },
  { id: 4, icon: ClaudeColor, className: "bottom-[10%] right-[10%]" },
  { id: 5, icon: GeminiColor, className: "top-[5%] left-[30%]" },
  { id: 6, icon: MinimaxColor, className: "top-[5%] right-[30%]" },
  { id: 7, icon: WenxinColor, className: "bottom-[8%] left-[25%]" },
  { id: 8, icon: SparkColor, className: "top-[40%] left-[15%]" },
  { id: 9, icon: QingyanColor, className: "top-[75%] right-[25%]" },
  { id: 10, icon: DeepSeekColor, className: "top-[90%] left-[70%]" },
  { id: 11, icon: QwenColor, className: "top-[50%] right-[5%]" },
  { id: 12, icon: AzureAIColor, className: "top-[55%] left-[5%]" },
  { id: 13, icon: HunyuanColor, className: "top-[5%] left-[55%]" },
  { id: 14, icon: XinferenceColor, className: "bottom-[5%] right-[45%]" },
  
  // 无 .Color 变体的图标 (使用默认单色/原生颜色)
  { id: 15, icon: Moonshot, className: "top-[25%] right-[20%]" },
  { id: 16, icon: OpenAI, className: "top-[60%] left-[30%]" },
  { id: 17, icon: XAI, className: "top-[35%] right-[12%]" },
  { id: 18, icon: Suno, className: "bottom-[20%] left-[45%]" },
  { id: 19, icon: Midjourney, className: "top-[15%] left-[50%]" },
  { id: 20, icon: Grok, className: "bottom-[25%] right-[35%]" },
];

export default function FloatingIconsHeroDemo() {
  const morphingTexts = [
    "统一的大模型接口网关",
    "ChatGPT 订阅正版充值",
    "一套代码调用多个模型",
    "支持 Claude Code 等",
    "按量计费 / 包月计费",
    "为开发者服务",
  ];

  return (
    <FloatingIconsHero
      title="接入全球大模型，开发只认 GPTW API"
      subtitle="我们为企业提供统一的 AI API 网关，覆盖国内外多种领先模型，助力业务快速上线。"
      ctaText="立即体验"
      ctaHref="https://api.pro365.top/login"
      secondaryCtaText="开发文档"
      secondaryCtaHref="https://api-pro365.apifox.cn/"
      badgeText="99.9%可用性保障"
      morphingTexts={morphingTexts}
      icons={demoIcons}
    />
  );
}
