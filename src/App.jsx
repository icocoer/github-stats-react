import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { useGitHub } from "./hooks/useGitHub";
import ReposCard from "./components/ReposCard"; // 注意：确保文件名和导入名一致

import "./App.css";
function App() {
  const { user, repos, loading, error, fetchAllData } = useGitHub();

  return (
    /* v4 的容器通常配合 mx-auto 使用 */
    <div className="min-h-screen min-w-[70vw] bg-slate-50 py-10 px-4 rounded-2xl shadow-xl shadow-slate-200/50">
      <div className="max-w-6xl mx-auto">

        {/* 搜索区：使用了 v4 推荐的堆叠间距 */}
        <header className="flex flex-col items-center gap-6 mb-12">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            GitHub <span className="text-blue-600">Pulse</span>
          </h1>
          <SearchBar onSearch={fetchAllData} />
        </header>

        {/* 响应式网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* 左侧：用户信息 (占据 4/12) */}
          {!error && <aside className="lg:col-span-4 lg:sticky lg:top-8">
            {user && <UserCard user={user} />}
          </aside>
          }

          {/* 右侧：统计图表与列表 (占据 8/12) */}
          <main className="lg:col-span-8 space-y-6 w-full">
            {repos.length > 0 && <ReposCard repos={repos} />}
          </main>
          {loading && (
            <div className="flex justify-center p-20">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600"></div>
            </div>
          )}
          {error && (
            <div className="col-span-full p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;