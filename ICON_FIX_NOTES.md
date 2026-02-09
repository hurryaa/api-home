# 图标颜色修复说明

## 问题分析

@lobehub/icons 默认导出的组件是 Mono（单色），但库中包含 Color 版本的组件。

## 解决方案

@lobehub/icons 的每个图标都有多个变体：
- `OpenAI` - 默认（Mono 单色）
- `OpenAI.Color` - 彩色版本
- `OpenAI.Text` - 带文字版本
- `OpenAI.Combine` - 组合版本
- `OpenAI.Avatar` - 头像版本

## 实现

需要在 hero-demo.tsx 中使用 `.Color` 变体来显示彩色图标。

例如：
```tsx
const demoIcons: FloatingIconsHeroProps["icons"] = [
  { id: 1, icon: OpenAI.Color, className: "top-[10%] left-[10%]" },
  { id: 2, icon: Claude.Color, className: "top-[20%] right-[8%]" },
  // ...
];
```

或者修改 floating-icons-hero-section.tsx 的背景设置，确保图标有白色背景以显示彩色。
