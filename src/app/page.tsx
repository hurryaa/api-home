import Image from "next/image";

import FloatingIconsHeroDemo from "@/components/sections/hero-demo";
import { FeatureSteps } from "@/components/blocks/feature-section";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Code2, Compass, CreditCard, Globe2, Sparkles } from "lucide-react";

const bentoFeatures = [
  {
    Icon: Sparkles,
    name: "主流大模型 API 网关",
    description:
      "统一接口接入 OpenAI、Claude、Gemini、DeepSeek、文心一言等国内外主流模型，支持智能路由、配额管理与安全审计。",
    href: "#contact",
    cta: "预约接入",
    background: (
      <Image
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
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
    name: "ChatGPT 订阅正版充值",
    description:
      "官方渠道获取 ChatGPT Plus / Team / Enterprise 订阅，支持企业发票、额度分配与用量监控。",
    href: "#contact",
    cta: "获取方案",
    background: (
      <Image
        src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop"
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
    name: "国内镜像 ChatGPT / Claude",
    description:
      "多地域高可用镜像节点，提供合规访问链路与全程加密，稳定输出海外模型能力。",
    href: "#contact",
    cta: "开通镜像",
    background: (
      <Image
        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1400&auto=format&fit=crop"
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
      "原生对接 Anthropic Claude Code，提供细粒度权限管理、版本控制与企业私有模型联调。",
    href: "#contact",
    cta: "申请测试",
    background: (
      <Image
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop"
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
    title: "提交需求并选择模型",
    content:
      "填写业务场景、并发量与预算，我们会为你匹配最适合的模型组合与计费方案。",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "沙箱调试与灰度上线",
    content:
      "使用标准 SDK、国内镜像或专线通道完成调试，专家团队陪伴完成配置与验收。",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "全量运营与持续优化",
    content:
      "上线后可一键扩容、自动分发额度，并实时查看调用监控与结算报表。",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  },
];

const stats = [
  {
    label: "已对接主流模型",
    value: "40+",
    description:
      "覆盖 OpenAI、Claude、Gemini、DeepSeek、通义千问、文心一言等国内外头部模型。",
  },
  {
    label: "平均接入周期",
    value: "<3 天",
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
    author: "李晨",
    role: "AI 平台负责人 · 北辰科技",
  },
  {
    quote:
      "正版充值和账期结算帮助财务合规落地，镜像节点保障了海外模型在国内的超低时延。",
    author: "赵雯",
    role: "运营总监 · 星航出行",
  },
  {
    quote:
      "Claude Code API 让研发团队的协同效率翻倍，代码评审和多语言翻译都接入了自动化流程。",
    author: "郭远",
    role: "工程效能主管 · 灵动数云",
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

      <section
        id="features"
        className="relative z-10 -mt-12 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24"
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

      <section className="px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">客户案例与真实反馈</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              来自金融、出行、互联网等行业的头部团队，正在使用我们的服务加速 AI 能力落地。
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

      <section id="about" className="bg-muted/40 px-6 py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">常见问题解答</h2>
            <p className="text-lg text-muted-foreground">
              如果你正在评估大模型接入、订阅采购或镜像服务，这里汇总了最常见的咨询与答复。
            </p>
            <Button size="lg" className="px-8" asChild>
              <a href="mailto:hello@orbit-ai.com">联系顾问</a>
            </Button>
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
