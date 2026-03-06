export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
      <div className="flex flex-col items-center text-center">
        <img 
          src={user.avatar_url} 
          className="w-32 h-32 rounded-full ring-4 ring-slate-50 mb-4 object-cover"
          alt="avatar"
        />
        <h2 className="text-2xl font-bold text-slate-800">{user.name}</h2>
        <p className="text-slate-500 mb-4 italic text-sm">@{user.login}</p>
        <p className="text-slate-600 text-sm leading-relaxed">{user.bio}</p>
        
        <div className="grid grid-cols-2 gap-8 w-full mt-8 pt-6 border-t border-slate-50">
          <div>
            <p className="text-2xl font-bold text-blue-600">{user.followers}</p>
            <p className="text-xs text-slate-400 uppercase font-semibold">Followers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">{user.public_repos}</p>
            <p className="text-xs text-slate-400 uppercase font-semibold">Repos</p>
          </div>
        </div>
      </div>
    </div>
  );
}