# Orbit AI Gateway - 企业级大模型 API 接入平台

一个专为 AI 大模型服务打造的 Next.js + TypeScript 单页营销网站。展示企业级 AI API 网关、ChatGPT 订阅充值、国内镜像与 Claude Code API 供应等核心服务。

## 🎯 核心业务

- **主流大模型 API 网关** - 统一接口接入 OpenAI、Claude、Gemini、DeepSeek 等 40+ 国内外主流模型
- **ChatGPT 订阅正版充值** - 官方渠道获取 ChatGPT Plus / Team / Enterprise 订阅，支持企业发票
- **国内镜像 ChatGPT / Claude** - 多地域高可用镜像节点，提供合规访问链路与全程加密
- **Claude Code API 供应** - 原生对接 Anthropic Claude Code，细粒度权限管理与版本控制

## ✨ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 3.4+
- **UI 组件**: shadcn/ui 设计哲学
- **动画**: Framer Motion
- **图标**: 
  - lucide-react (通用图标)
  - @lobehub/icons (AI 大模型品牌图标)

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

## 📂 项目结构

```
src/
├── app/
│   ├── globals.css           # Tailwind + CSS 变量
│   ├── layout.tsx            # 根布局 & Inter 字体
│   └── page.tsx              # 主页面（所有章节组合）
├── components/
│   ├── blocks/               # 复合业务组件
│   │   └── feature-section.tsx    # 三步接入流程（自动轮播）
│   ├── sections/             # 页面分块
│   │   └── hero-demo.tsx           # Hero 演示（20 个 AI 品牌图标）
│   └── ui/                   # shadcn 风格基础组件
│       ├── bento-grid.tsx          # 四宫格服务展示
│       ├── button.tsx              # 按钮组件
│       ├── floating-icons-hero-section.tsx  # 浮动图标 Hero 区块
│       ├── morphing-text.tsx       # 文字变形动画
│       └── theme-toggle.tsx        # 深色模式切换
└── lib/
    └── utils.ts              # cn() 工具函数
```

## 🎨 特色组件

### 1. 浮动图标 Hero (Floating Icons Hero)

展示 20 个主流 AI 大模型品牌图标，随鼠标移动产生交互式斥力效果。

**使用的 AI 图标**:
- OpenAI, Claude, Gemini, Grok, DeepSeek
- Zhipu (智谱清言), Moonshot (月之暗面), Qwen (通义千问)
- Spark (讯飞星火), Hunyuan (腾讯混元), Wenxin (文心一言)
- Minimax, Azure AI, Cohere, Xinference
- Volcengine (火山引擎), Qingyan (青言), XAI, Midjourney, Suno

**特点**:
- 鼠标接近时图标产生斥力动画
- 持续的浮动与旋转效果
- 响应式布局适配

### 2. 文字变形动画 (Morphing Text)

首屏主标题采用文字变形动画效果，轮播展示四大核心服务：
- "主流大模型 API 网关"
- "ChatGPT 订阅正版充值"
- "国内镜像 ChatGPT · Claude"
- "Claude Code API 供应"

**实现原理**:
- 使用 SVG 滤镜 + blur 实现平滑过渡
- requestAnimationFrame 驱动动画循环
- 自动轮播间隔 1.5 秒

### 3. Bento Grid（服务网格）

响应式 3 列网格布局，展示四大核心业务：

```tsx
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

<BentoGrid className="lg:grid-rows-3">
  <BentoCard
    Icon={Sparkles}
    name="主流大模型 API 网关"
    description="统一接口接入 40+ 国内外主流模型..."
    background={<Image ... />}
    href="#contact"
    cta="预约接入"
    className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3"
  />
</BentoGrid>
```

### 4. 自动轮播接入流程 (Feature Steps)

三阶段接入流程自动播放，配合图片淡入淡出：

1. 提交需求并选择模型
2. 沙箱调试与灰度上线
3. 全量运营与持续优化

**配置**:
```tsx
<FeatureSteps
  features={featureStepsData}
  title="三步完成企业级 AI 接入"
  autoPlayInterval={4500}
  imageHeight="lg:h-[480px]"
/>
```

## 🛠️ 开发命令

```bash
npm run dev         # 开发服务器 (localhost:3000)
npm run build       # 生产构建
npm run start       # 启动生产服务器
npm run lint        # ESLint 检查
```

## 🎯 组件使用规范

### 添加新的 shadcn 组件

```bash
npx shadcn@latest add dialog card avatar
```

组件会自动安装到 `src/components/ui/`。

### 深色模式

- 点击页面右上角 🌙/☀️ 图标切换
- 通过 CSS 变量（`globals.css`）控制
- 在 `<html>` 标签添加/移除 `dark` 类

### 图片优化

项目使用 Next.js `Image` 组件自动优化：
- Unsplash 图片已在 `next.config.mjs` 配置白名单
- 响应式 sizes 属性适配移动端
- 自动生成多尺寸图片

## 📝 核心约定

1. **客户端组件**: 使用 `"use client"` 标记交互组件
2. **路径别名**: `@/*` 映射到 `src/*`
3. **类名合并**: 统一使用 `cn()` 工具函数
4. **图标选择**:
   - AI 品牌图标优先使用 `@lobehub/icons`
   - 通用图标使用 `lucide-react`

## 🌐 业务场景

本项目适用于：
- AI 大模型服务商的官网展示
- API 网关产品的营销落地页
- 企业级 AI 接入方案的能力矩阵展示
- SaaS 平台的服务介绍与客户案例

## 📄 许可

MIT License

---

💡 **设计理念**: 用动效讲故事，用组件传递价值，让访客在 3 秒内理解核心服务矩阵。
