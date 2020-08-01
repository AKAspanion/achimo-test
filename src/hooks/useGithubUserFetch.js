import { useEffect, useState } from "react";

import { fetchGithubUser } from "../services";

export default function useGithubUserFetch(name) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    setData({});
    setError("");
    setLoading(true);
    (async function () {
      try {
        const resp = await fetchGithubUser(name);
        const data = await resp.json();

        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [name]);

  return [data, error, loading];
}
