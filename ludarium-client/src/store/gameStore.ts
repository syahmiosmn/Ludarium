import { create } from "zustand";
import axios from "axios";

interface Game {
  id: number;
  title: string;
  genre: string;
  releaseDate: Date; 
}

interface GameStore {
  games: Game[];
  loading: boolean;
  error: string | null;
  fetchGames: () => Promise<void>;
  addNewGame: (game: Omit<Game, "id">) => Promise<void>;
}

export const useGameStore = create<GameStore>((set) => ({
  games: [],
  loading: false,
  error: null,

  fetchGames: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("http://localhost:5000/api/games");
  
      const games: Game[] = response.data.map((game: any) => ({
        ...game,
        releaseDate: new Date(game.releaseDate), // Convert to Date
      }));
  
      set({ games, loading: false }); // ✅ Use the formatted array
    } catch (error) {
      set({ error: "Failed to load games", loading: false });
    }
  },
  

  addNewGame: async (game) => {
    set({ loading: true });
    try {
      const formattedGame = {
        ...game,
        releaseDate: game.releaseDate.toISOString(),
      };
  
      const response = await axios.post("http://localhost:5000/api/games", formattedGame);
      set((state) => ({ games: [...state.games, { ...response.data, releaseDate: new Date(response.data.releaseDate) }], loading: false }));
    } catch (error) {
      set({ error: "Failed to add game", loading: false });
    }
  },
}));
