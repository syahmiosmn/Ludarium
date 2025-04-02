import React from "react";

interface Game {
  id: number;
  title: string;
  genre: string;
  releaseDate: Date; // Changed releaseDate to a Date object
}

const GameCard: React.FC<{ game: Game }> = ({ game }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-4 m-2 text-black">
      <h3 className="text-lg font-semibold">{game.title}</h3>
      <p className="text-sm text-gray-600">Genre: {game.genre}</p>
      <p className="text-sm text-gray-500">
        {game.releaseDate.toLocaleDateString()} {/* Format the Date */}
      </p>
    </div>
  );
};

export default GameCard;
