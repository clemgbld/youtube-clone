import { Params } from "../../interface/paramsInterface";
import apiYoutube from "./apiYoutube";

export const loadMoreYoutubePages = async (
  params: Params,
  endPoint: string,
  setItems: any,
  setNextPageToken: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const response = await apiYoutube.get(endPoint, params);

    console.log(response.data);

    setNextPageToken(response.data.nextPageToken);
    setItems((prevState: any) => {
      if (!prevState) return;

      return [...prevState, ...response?.data.items];
    });
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};
