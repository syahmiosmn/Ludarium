"use client";

import { useEffect } from "react";
import { useGameStore } from "@/store/gameStore";
import AddGameForm from "@/components/AddGameForm";
import GameList from "@/components/GameList";

export default function Home() {
  const { games, fetchGames } = useGameStore();

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Ludarium Game Collection</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id} className="border-b py-2">
            <strong>{game.title}</strong> - {game.genre} ({new Date(game.releaseDate).getFullYear()})
          </li>
        ))}
      </ul>
      <AddGameForm />
      <GameList />
    </main>
  );
}
