# 部署说明

## Vercel 部署

本项目已配置好所有必要的文件，可以直接部署到 Vercel。

### 前提条件

确保以下文件存在（已包含在项目中）：

- `.npmrc` - 配置 npm 使用 legacy-peer-deps
- `next.config.mjs` - Next.js 配置（包含 Unsplash 图片域名白名单）
- `package.json` - 包含所有依赖（包括 antd）

### 部署步骤

1. **连接 Git 仓库**
   - 将代码推送到 GitHub/GitLab/Bitbucket
   - 在 Vercel 中导入项目

2. **自动检测配置**
   - Vercel 会自动检测 Next.js 项目
   - 构建命令：`npm run build`
   - 输出目录：`.next`

3. **环境变量（可选）**
   ```env
   # 如果需要，可以添加以下环境变量
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **部署**
   - 点击 "Deploy"
   - 等待构建完成（约 2-3 分钟）

### 常见问题

#### Q: 依赖安装失败

**错误信息**:
```
Could not resolve dependency: peer react@"^19.0.0" from @lobehub/icons
```

**解决方案**:
确保 `.npmrc` 文件存在且包含：
```
legacy-peer-deps=true
```

#### Q: 图片加载失败

**错误信息**:
```
Invalid src prop on `next/image`, hostname "images.unsplash.com" is not configured
```

**解决方案**:
检查 `next.config.mjs` 中的 `remotePatterns` 配置：
```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

#### Q: 构建时间过长

**原因**: @lobehub/icons 包含大量图标，首次构建需要更多时间。

**优化建议**:
- 使用 Vercel 的增量构建缓存
- 后续部署会明显加快

## 其他平台部署

### Netlify

1. 构建命令: `npm run build`
2. 发布目录: `.next`
3. 添加 `.npmrc` 到项目根目录

### Railway / Render

1. 确保 `.npmrc` 文件在项目根目录
2. 设置构建命令: `npm install && npm run build`
3. 启动命令: `npm start`

## 本地测试生产构建

在部署前，建议本地测试生产构建：

```bash
# 清理缓存
rm -rf .next node_modules

# 重新安装依赖
npm install

# 构建
npm run build

# 启动生产服务器
npm start
```

访问 http://localhost:3000 验证构建结果。

## 性能优化建议

1. **图片优化**
   - 所有图片已使用 Next.js Image 组件
   - 自动生成 WebP 格式
   - 响应式 sizes 属性

2. **代码分割**
   - 使用 dynamic import 按需加载大型组件
   - 示例：
     ```tsx
     const HeroDemo = dynamic(() => import('@/components/sections/hero-demo'))
     ```

3. **缓存策略**
   - Vercel 自动配置静态资源缓存
   - 建议使用 ISR (Incremental Static Regeneration) 对于动态内容

## 监控与分析

推荐启用 Vercel Analytics：

```bash
npm install @vercel/analytics
```

在 `src/app/layout.tsx` 中添加：
```tsx
import { Analytics } from '@vercel/analytics/react';

<Analytics />
```

## 技术支持

如遇到部署问题，请检查：
1. `.npmrc` 文件是否提交到版本控制
2. `next.config.mjs` 图片域名配置
3. Vercel 构建日志中的具体错误信息
