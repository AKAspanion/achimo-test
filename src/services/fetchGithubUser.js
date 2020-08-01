export const fetchGithubUser = (user) =>
  fetch(
    `${process.env.REACT_APP_API_URL}users/` +
      user.toString() +
      `?access_token=${process.env.REACT_APP_API_TOKEN}`
  );
