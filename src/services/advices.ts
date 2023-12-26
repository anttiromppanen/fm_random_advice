import axios from "axios";

const getRandomAdvice = async () => {
  const response = await axios.get("https://api.adviceslip.com/advice");
  return response.data;
};

export default getRandomAdvice;
