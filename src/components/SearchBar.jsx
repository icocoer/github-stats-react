// src/components/SearchBar.jsx
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  return (
    <div className="flex items-center gap-3 w-full max-w-md">
      <input 
        className="flex-1 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="输入 GitHub 用户名..."
      />
      <button 
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-green-700 font-medium rounded-xl shadow-md shadow-blue-200 transition-transform active:scale-95"
        onClick={() => onSearch(input)}
      >
        分析
      </button>
    </div>
  );
}