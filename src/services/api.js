export const getRepositories = (user) => {
    const URL = `https://api.github.com/users/${user}/repos`;
    return fetch(URL).then(r => r.json());
  };