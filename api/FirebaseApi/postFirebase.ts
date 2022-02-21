import apiFirebase from "./apiFirebase";
import { Later } from "../../interface/laterInterface";

export const postFirebase = async (obj: Later, uid: string | undefined) => {
  try {
    const res = await apiFirebase.post(`/later/${uid}.json`, obj);
  } catch (err) {
    console.log(err);
  }
};
