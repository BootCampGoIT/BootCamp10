import axios from "axios";

export const addTutor = async (tutor) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/tutors.json`,
      tutor
    );
    return response.data.name;
  } catch (error) {
    console.log(error);
  }
};

export const getTutors = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/tutors.json`
    );
    if (response.data) {
      const keys = Object.keys(response.data);
      const tutors = keys.map((key) => ({ id: key, ...response.data[key] }));
      return tutors;
    } else return [];
  } catch (error) {}
};
