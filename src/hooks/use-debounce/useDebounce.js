import { useEffect, useState } from "react";

export default function useDebounce(data, delay) {
  const [savedData, setSavedData] = useState(data);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSavedData(data);
    }, delay);
    return () => clearTimeout(timeout);
  }, [data]);

  return savedData;
}
