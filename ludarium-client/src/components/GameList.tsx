import React, { useEffect } from "react";
import { useGameStore } from "../store/gameStore";
import GameCard from "./GameCard";

const GameList: React.FC = () => {
    const { games, fetchGames, loading, error } = useGameStore();

    useEffect(() => {
      fetchGames();
    }, []);
  
    if (loading) return <p className="text-blue-500">Loading games...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
  
    return (
      <div>
        {games.length === 0 ? (
          <p className="text-gray-500">No games found. Add one!</p>
        ) : (
          games.map((game) => <GameCard key={game.id} game={game} />)
        )}
      </div>
    );
  };

export default GameList;
