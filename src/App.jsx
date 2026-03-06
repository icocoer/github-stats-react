import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { useGitHub } from "./hooks/useGitHub";


function App() { 
  const { user, repos ,loading,error,fetchAllData } = useGitHub();
  return ( 
    <>
    <div className="container">
      <h1>GitHub 助手</h1>
      <SearchBar onSearch={fetchAllData} />

      {loading && <p>正在调取 GitHub 档案...</p>}
      {error && <p style={{ color: 'red' }}>错误: {error}</p>}
      
      {user && <UserCard user={user} />}
      {/* 搜索后的三种状态 */}
      {!loading && user && repos.length === 0 && (
        <p className="hint">这个用户很神秘，还没有公开的代码仓库。</p>
      )}

      {/* 初始状态提示 */}
      {!loading && !user && !error && (
        <p className="hint">请输入 GitHub ID 开始探索</p>
      )}
      {repos.length > 0 && <p>已找到 {repos.length} 个公开仓库</p>}
    </div>
    </>
  );
}

export default App;