# GitHub Pulse

一个基于 React + Vite 的 GitHub 用户分析小应用。

输入 GitHub 用户名后，可查看用户信息、仓库语言分布（饼图）和热门仓库（按 Star 排序）。

## 功能特性

- GitHub 用户搜索（按用户名）
- 用户资料展示：头像、昵称、用户名、简介、关注者、公开仓库数
- 仓库语言统计：按语言聚合并展示饼图
- 热门仓库列表：按 `stargazers_count` 排序并展示 Top 5
- 请求状态反馈：加载动画、错误提示

## 技术栈

- React 19
- Vite 7
- Tailwind CSS 4
- Axios
- Recharts
- ESLint 9

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

在项目根目录创建 `.env` 文件：

```env
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

建议使用 GitHub Personal Access Token（PAT），以提升 API 请求额度并降低触发限流的概率。

### 3. 启动开发环境

```bash
npm run dev
```

默认启动后可在终端输出的本地地址访问应用。

## 可用脚本

- `npm run dev`：启动开发服务器
- `npm run build`：构建生产包到 `dist/`
- `npm run preview`：本地预览生产构建
- `npm run lint`：运行 ESLint 检查

## 项目结构

```text
src/
	components/
		SearchBar.jsx      # 用户名输入与触发搜索
		UserCard.jsx       # 用户基础信息卡片
		ReposCard.jsx      # 语言统计图 + 热门仓库列表
	hooks/
		useGitHub.js       # 数据请求与状态管理（user/repos/loading/error）
	services/
		githubService.js   # GitHub API 封装
	utils/
		githubHelpers.js   # 仓库语言统计逻辑
	App.jsx              # 页面主布局
	main.jsx             # 应用入口
```

## 数据来源

应用通过 GitHub REST API 获取数据：

- `GET /users/{username}`
- `GET /users/{username}/repos`

## 注意事项

- 请勿将 `.env` 提交到公共仓库。
- 若出现 `API rate limit exceeded`，请检查 Token 是否有效，或稍后重试。
- 部分用户仓库语言字段可能为空，统计时已自动忽略。

## 后记

- 本项目为我初学react的第一个练手项目，主要是为了快速熟悉react，vite，tailwindcss，recharts 等技术。
- 使用Copilot 与 Gemini 辅助开发
- 本文除后记外，其他内容均由Copilot攥写