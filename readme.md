# Monorepo 项目

## 快速开始

```bash
# 安装所有依赖
pnpm install

# 构建 UI 组件库
pnpm dev:ui

# 在另一个终端启动 Web 应用
pnpm dev:web
```

## CI/CD 流水线

本项目使用 GitHub Actions 实现了完整的 CI/CD 流水线。

### 持续集成 (CI)

每当代码推送到 main/master 分支或创建 Pull Request 时，CI 流程会自动执行以下步骤：

1. 检出代码
2. 设置 Node.js 和 pnpm
3. 安装依赖
4. 运行代码检查 (ESLint)
5. 构建所有项目
6. 运行测试

### 持续部署 (CD)

当代码推送到 main/master 分支且 CI 流程成功后，CD 流程会自动部署 Web 应用：

1. 构建项目
2. 部署到 GitHub Pages

### 手动触发部署

你也可以通过 GitHub Actions 界面手动触发 CI/CD 流水线。

## 项目结构

- `monorepo-work-space/ui-components`: UI 组件库
- `monorepo-work-space/web-app`: Web 应用

## 开发注意事项

在提交代码前，请确保：

1. 运行 `pnpm lint` 进行代码检查
2. 运行 `pnpm test` 确保测试通过
3. 运行 `pnpm build` 确保项目能够正常构建
