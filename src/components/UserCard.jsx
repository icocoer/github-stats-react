export default function UserCard({ user }) {
  if (!user) return null;
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>{user.email}</p>
      <div className="stats-row">
        <span>粉丝数: {user.followers}</span>
        <span>仓库: {user.public_repos}</span>
      </div>
    </div>
  );
}