import { useState } from 'react';
import { githubService } from '../services/githubService';

export const useGitHub = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllData = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const [userRes, repoRes] = await Promise.all([
        githubService.getUserProfile(username),
        githubService.getUserRepos(username)
      ]);

      setUser(userRes.data);
      setRepos(repoRes.data);
    } catch (err) {
      setError(err.response?.data?.message || '请求失败');
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return { user, repos, loading, error, fetchAllData };
};