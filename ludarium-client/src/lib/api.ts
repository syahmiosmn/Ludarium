import axios from "axios";

const API_URL = "http://localhost:5000/api/games";

export const getGames = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addGame = async (game: { title: string; genre: string; releaseDate: string }) => {
  const response = await axios.post(API_URL, game);
  return response.data;
};
