import { useEffect, useState } from "react";
import apiFirebase from "../api/FirebaseApi/apiFirebase";

export const useFireBase = (
  dependency: string | string[] | undefined,
  uid: string | undefined
) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ac = new AbortController();
    const getFireBaseData = async () => {
      try {
        const res = await apiFirebase.get(`/later/${uid}.json`);

        const data = res.data;

        const loadedVideos = [];

        for (const key in data) {
          loadedVideos.push({
            id: key,
            videoId: data[key].id,
            channelId: data[key].cId,
            img: data[key].image,
            duration: data[key].duration,
            title: data[key].title,
            channeltitle: data[key].cTitle,
          });
        }

        setData(loadedVideos);

        setIsLoading(false);
      } catch (err) {
        if (err) {
          setError("Something went wrong");
        }
      }
    };
    getFireBaseData();

    return () => ac.abort();
  }, [dependency]);

  return {
    data,
    error,
    setData,
    isLoading,
  };
};
