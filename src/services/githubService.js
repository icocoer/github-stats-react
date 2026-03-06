import axios from 'axios';

// 创建 axios 实例，统一配置 Header 和 BaseURL
const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

// 封装具体的业务请求
export const githubService = {
  // 获取用户信息
  getUserProfile: (username) => apiClient.get(`/users/${username}`),
  
  // 获取用户仓库
  getUserRepos: (username) => apiClient.get(`/users/${username}/repos`),
};