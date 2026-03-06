export const calculateStats = (repos) => {
  if (!repos || repos.length === 0) return [];

  // 1. 统计语言出现次数
  const counts = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  // 2. 转换为数组并计算百分比
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  
  return Object.entries(counts)
    .map(([name, count]) => ({
      name,
      count,
      percent: ((count / total) * 100).toFixed(1)
    }))
    .sort((a, b) => b.count - a.count); // 按数量降序
};