import apiFirebase from "./apiFirebase";

export const deleteFirebase = async (id: string) => {
  try {
    const res = await apiFirebase.delete(`/later/${id}.json`);

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
