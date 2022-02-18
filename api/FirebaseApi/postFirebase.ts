import apiFirebase from "./apiFirebase";
import { Later } from "../../interface/laterInterface";

export const postFirebase = async (obj: Later) => {
  try {
    const res = await apiFirebase.post("/later.json", obj);

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
