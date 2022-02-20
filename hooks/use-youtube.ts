import { useEffect, useState } from "react";
import { Params } from "../interface/paramsInterface";
import apiYoutube from "../api/YoutubeApi/apiYoutube";
import { useRouter } from "next/router";

export const useYoutube = (
  endPoint: string,
  params: Params,
  dependency: string | string[] | undefined
) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const ac = new AbortController();
    const getYoutubeData = async () => {
      try {
        if (dependency) {
          const response = await apiYoutube.get(endPoint, params);

          const statusCode = response.status;

          if (statusCode === 403) {
            router.push("/error");
          }

          setData(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        if (err) {
          setError(
            "Something went wrong the api quotas has been reached please come back tomorrow"
          );

          router.push("/error");
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
