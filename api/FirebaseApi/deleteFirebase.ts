import apiFirebase from "./apiFirebase";

export const deleteFirebase = async (id: string, uid: string | undefined) => {
  try {
    const res = await apiFirebase.delete(`/later/${uid}/${id}.json`);
  } catch (err) {
    console.log(err);
  }
};
