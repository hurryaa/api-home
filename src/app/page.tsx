"use client";

import Image from "next/image";

import FloatingIconsHeroDemo from "@/components/sections/hero-demo";
import { FeatureSteps } from "@/components/blocks/feature-section";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FlowButton } from "@/components/ui/flow-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { WorldMap } from "@/components/ui/world-map";
import { Code2, Compass, CreditCard, Globe2, Sparkles } from "lucide-react";
import core1 from "@/components/public/core-1.webp";
import core2 from "@/components/public/core-2.webp";
import core3 from "@/components/public/core-3.webp";
import core4 from "@/components/public/core-4.webp";

const bentoFeatures = [
  {
    Icon: Sparkles,
    name: "多模态-视频、图片、文档理解与分析",
    description:
      "提供多个顶尖多模态AI大模型，覆盖视频理解、图片识别、数据分析、PDF文档解读等，为不同场景提供一站式解决方案",
    href: "https://api.pro365.top/login",
    cta: "立即注册",
    background: (
      <Image
        src={core1}
        alt="AI gateway architecture"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        fill
        sizes="(max-width: 1024px) 100vw, 34vw"
      />
    ),
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: CreditCard,
    name: "主流大模型灵活接入",
    description:
      "集成众多顶尖模型，低成本、快速体验多种模型的AIGC能力，为自己的产品、知识库、工作流等带来更多选择",
    href: "https://api.pro365.top/login",
    cta: "快速开始",
    background: (
      <Image
        src={core2}
        alt="Subscription dashboard"
        className="absolute inset-0 h-full w-full object-cover opacity-65"
        fill
        sizes="(max-width: 1024px) 100vw, 30vw"
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Globe2,
    name: "接入现成产品、开源项目",
    description:
      "多种主流API格式支持，包含OpenAI、Claude、Gemini、Midjourney等，适配绝大多数现成的AI产品或开源项目",
    href: "https://api.pro365.top/login",
    cta: "立即注册",
    background: (
      <Image
        src={core3}
        alt="Edge network operations"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        fill
        sizes="(max-width: 1024px) 100vw, 30vw"
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Code2,
    name: "Claude Code API 供应",
    description:
      "原生对接 Anthropic Claude Code，通过自然语言与电脑本地文件交互，从0开始构建项目，快速完成代码Debug、调优、重构、优化，读取目标文件进行数据分析、整理等。用自然语言驱动生产力",
    href: "#contact",
    cta: "了解更多",
    background: (
      <Image
        src={core4}
        alt="Developers collaborating"
        className="absolute inset-0 h-full w-full object-cover opacity-65"
        fill
        sizes="(max-width: 1024px) 100vw, 70vw"
      />
    ),
    className: "lg:col-start-1 lg:col-end-4 lg:row-start-3 lg:row-end-4",
  },
];

const featureStepsData = [
  {
    step: "Step 1",
    title: "完成注册并添加客服微信",
    content:
      "根据业务场景、并发量与预算，我们会为您匹配最适合的模型组合与计费方案。同时方便沟通您所遇到的任何问题",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "生成第一个API Key",
    content:
      "点击“控制台-令牌管理”，添加您的第一个密钥，这时您可以在“操练场”或“便捷对话“开始使用。",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "开始开发或接入现成应用",
    content:
      "查看“开发文档”，复制本站域名为API_base_url，您的密钥为API_Key",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 4",
    title: "保持余额充足",
    content:
      "设置余额预警并保持关注，避免余额不足影响您的应用",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
  },
];

const stats = [
  {
    label: "已对接主流模型",
    value: "300+",
    description:
      "覆盖 OpenAI、Claude、Gemini、GLM、Midjourney、Sora等国内外头部AI模型。",
  },
  {
    label: "平均接入周期",
    value: "<1 天",
    description:
      "标准 SDK、测试沙箱与专家服务帮助企业 3 天内完成首个应用上线。",
  },
  {
    label: "全年可用性",
    value: "99.95%",
    description:
      "多地域容灾、自动限流与智能路由确保关键业务稳定运行。",
  },
];

const testimonials = [
  {
    quote:
      "借助统一网关，我们在两周内完成了 6 个模型的灰度上线，语义客服的满意度提升了 31%。",
    name: "李晨",
    designation: "AI 平台负责人 · 北辰科技",
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1600&auto=format&fit=crop",
  },
  {
    quote:
      "正版充值和账期结算帮助财务合规落地，镜像节点保障了海外模型在国内的超低时延。",
    name: "赵雯",
    designation: "运营总监 · 星航出行",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    quote:
      "Claude Code API 让研发团队的协同效率翻倍，代码评审和多语言翻译都接入了自动化流程。",
    name: "郭远",
    designation: "工程效能主管 · 灵动数云",
    src: "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1600&auto=format&fit=crop",
  },
];

const faqs = [
  {
    question: "如何快速接入大模型 API 网关？",
    answer:
      "填写业务信息后，我们会在 24 小时内反馈接入方案，并提供 SDK、Postman 集合及沙箱环境协助调试。",
  },
  {
    question: "ChatGPT 订阅充值支持哪些套餐？",
    answer:
      "支持 ChatGPT Plus、Team、Enterprise 等官方套餐，提供企业发票及灵活的月/年付费方式。",
  },
  {
    question: "国内镜像服务是否合规？",
    answer:
      "镜像节点部署在合规 IDC，结合身份校验、日志审计与加密传输，满足企业与监管要求。",
  },
  {
    question: "Claude Code API 是否支持按量计费？",
    answer:
      "提供包月与按量两种模式，可根据项目阶段灵活切换，并支持团队级别的配额管理。",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>
      <FloatingIconsHeroDemo />

      <div className="h-24 bg-gradient-to-b from-background to-muted/20 md:h-32" />

      <section
        id="features"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            打造企业级 AI 服务矩阵
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            围绕大模型 API 网关、ChatGPT 订阅充值、国内镜像与 Claude Code API 供应，提供覆盖采购、接入、运营的全链路服务。
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
            title="三步完成企业级 AI 接入"
            autoPlayInterval={4500}
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

      <section className="bg-muted/40 px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">全球基础设施保障</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              我们的平台在全球部署，提供99.9%可用性保障，为您提供低延迟、高可用的大模型服务。
            </p>
          </div>
          <WorldMap
            dots={[
              {
                start: { lat: 39.9042, lng: 116.4074, label: "BeiJing" },
                end: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
              },
              {
                start: { lat: 39.9042, lng: 116.4074, label: "BeiJing" },
                end: { lat: 40.7128, lng: -74.0060, label: "New York" },
              },
              {
                start: { lat: 39.9042, lng: 116.4074, label: "BeiJing" },
                end: { lat: 51.5074, lng: -0.1278, label: "London" },
              },
              {
                start: { lat: 39.9042, lng: 116.4074, label: "BeiJing" },
                end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
              },
              {
                start: { lat: 39.9042, lng: 116.4074, label: "BeiJing" }, 
                end: { lat: -23.5505,lng: -46.6333, label: "Brazil" },
              },
              {
                start: { lat: 39.9042, lng: 116.4074, label: "BeiJing" },
                end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
              },
              {
                start: { lat: 39.9042, lng: 116.4074, label: "BeiJing" },
                end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
              },
              {
                start: { lat: 39.9042, lng: 116.4074, label: "BeiJing" },
                end: { lat: 55.7558, lng: 37.6173, label: "Moscow" },
              },
              {
                start: { lat: 39.9042, lng: 116.4074, label: "BeiJing" }, 
                end: { lat: 30.0444, lng: 31.2357, label: "Egypt" },
              },
              {
                start: { lat: 39.9042, lng: 116.4074, label: "BeiJing" }, 
                end: { lat: -26.2041,lng: 28.0473, label: "South Africa" },
              },
              ]}
            lineColor="#0ea5e9"
          />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">客户案例与真实反馈</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              来自科研、培训、互联网等行业的头部团队，正在使用我们的服务加速 AI 能力落地。
            </p>
          </div>

          <AnimatedTestimonials testimonials={testimonials} autoplay className="max-w-6xl" />
        </div>
      </section>

      <section id="about" className="bg-muted/40 px-6 py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">常见问题解答</h2>
            <p className="text-lg text-muted-foreground">
              如果您正在评估大模型接入，这里汇总了最常见的咨询与答复。
            </p>
            <FlowButton
              text="联系客服"
              onClick={() => (window.location.href = "微信：office980")}
            />
          </div>
          <div className="space-y-6" id="contact">
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
            © {new Date().getFullYear()} Orbit AI Gateway · 汇聚全球智算能力，助力企业安全合规地落地大模型。
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Compass className="h-4 w-4" />
            Global & Mainland Coverage
          </div>
        </div>
      </footer>
    </main>
  );
}
