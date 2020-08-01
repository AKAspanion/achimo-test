import { useLayoutEffect, useState, useRef } from "react";

import { fetchGithubUser } from "../../services";

export default function useGithubUserFetch(name) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const didMountRef = useRef(false);

  useLayoutEffect(() => {
    if (didMountRef.current) {
      setError("");
      setData(null);
      setLoading(true);
      (async function () {
        try {
          const resp = await fetchGithubUser(name);
          const data = await resp.json();

          if (resp.ok) {
            setData(data);
          } else {
            setError(data.message);
          }
        } catch (err) {
          setError("Unexpected error, try again!");
        } finally {
          setLoading(false);
        }
      })();
    } else {
      didMountRef.current = true;
    }
  }, [name]);

  return [data, error, loading, didMountRef.current];
}
