export const fetchGithubUser = (user) =>
  fetch(
    `${process.env.REACT_APP_API_URL}users/` + user.toString(),
    getConfig()
  );

const getConfig = () => {
  return process.env.NODE_ENV === "development"
    ? {
        headers: {
          Authorization: `token ${process.env.REACT_APP_API_TOKEN}`,
        },
      }
    : {};
};
