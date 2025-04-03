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
  updateGame: (id: number, updatedGame: Omit<Game, "id">) => Promise<void>;
  deleteGame: (id: number) => Promise<void>;
}

export const useGameStore = create<GameStore>((set) => ({
  games: [],
  loading: false,
  error: null,

  // Fetch games
  fetchGames: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("http://localhost:5000/api/games");

      const games: Game[] = response.data.map((game: any) => ({
        ...game,
        releaseDate: new Date(game.releaseDate), // Convert string to Date
      }));

      set({ games, loading: false });
    } catch (error) {
      set({ error: "Failed to load games", loading: false });
    }
  },

  // Add a new game
  addNewGame: async (game) => {
    set({ loading: true });
    try {
      const formattedGame = {
        ...game,
        releaseDate: game.releaseDate.toISOString(),
      };

      const response = await axios.post("http://localhost:5000/api/games", formattedGame);
      set((state) => ({
        games: [...state.games, { ...response.data, releaseDate: new Date(response.data.releaseDate) }],
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to add game", loading: false });
    }
  },

  // **Update a game**
  updateGame: async (id, updatedGame) => {
    set({ loading: true });
    try {
      const formattedGame = {
        ...updatedGame,
        releaseDate: updatedGame.releaseDate.toISOString(),
      };

      await axios.put(`http://localhost:5000/api/games/${id}`, formattedGame);
      
      set((state) => ({
        games: state.games.map((game) =>
          game.id === id ? { ...game, ...updatedGame, releaseDate: new Date(updatedGame.releaseDate) } : game
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to update game", loading: false });
    }
  },

  // **Delete a game**
  deleteGame: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`http://localhost:5000/api/games/${id}`);

      set((state) => ({
        games: state.games.filter((game) => game.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to delete game", loading: false });
    }
  },
}));
