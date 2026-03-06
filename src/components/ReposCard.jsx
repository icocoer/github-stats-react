import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useMemo } from 'react';
import { calculateStats } from '../utils/githubHelpers';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function ReposCard({ repos }) {
  const stats = useMemo(() => calculateStats(repos), [repos]);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
      {(stats.length > 0) && 
      <>
      <h3 className="text-xl font-bold text-gray-800 mb-6">编程语言分析</h3>
      
      {/* 图表区域 */}
      <div className="h-75 w-full mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={stats}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="count"
            >
              {stats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
      </>
}
      {/* 热门仓库列表 */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4">热门仓库</h3>
      <div className="space-y-3">
        {repos.slice(0, 5).sort((a,b) => b.stargazers_count - a.stargazers_count).map(repo => (
          <div key={repo.id} className="flex justify-between items-center p-3 rounded-xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
            <a href={repo.html_url} target="_blank" className="text-blue-600 font-medium hover:underline">
              {repo.name}
            </a>
            <span className="text-gray-500 text-sm font-mono">⭐ {repo.stargazers_count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}