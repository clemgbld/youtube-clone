import { useEffect, useState } from "react";
import { Params } from "../interface/paramsInterface";
import apiYoutube from "../api/YoutubeApi/apiYoutube";

export const useYoutube = (
  endPoint: string,
  params: Params,
  dependency: string | string[] | undefined
) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ac = new AbortController();
    const getYoutubeData = async () => {
      try {
        if (dependency) {
          const response = await apiYoutube.get(endPoint, params);
          setData(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        if (err) {
          setError("Something went wrong");
        }
      }
    };

    getYoutubeData();

    return () => ac.abort();
  }, [dependency]);

  return {
    data,
    error,
    setData,
    isLoading,
  };
};
