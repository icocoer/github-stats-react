import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  return (
    <div className="search-container">
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="输入 GitHub 用户名..."
      />
      <button onClick={() => onSearch(input)}>分析</button>
    </div>
  );
}