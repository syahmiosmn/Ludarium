import { useState } from "react";
import { useGameStore } from "../store/gameStore";

interface GameCardProps {
  game: {
    id: number;
    title: string;
    genre: string;
    releaseDate: Date;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { deleteGame, updateGame } = useGameStore();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(game.title);
  const [updatedGenre, setUpdatedGenre] = useState(game.genre);
  const [updatedReleaseDate, setUpdatedReleaseDate] = useState(
    game.releaseDate.toISOString().split("T")[0] // Format for input[type="date"]
  );

  const handleUpdate = () => {
    updateGame(game.id, {
      title: updatedTitle,
      genre: updatedGenre,
      releaseDate: new Date(updatedReleaseDate), // Convert back to Date
    });
    setIsEditing(false);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      {isEditing ? (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="border p-1 rounded"
          />
          <input
            type="text"
            value={updatedGenre}
            onChange={(e) => setUpdatedGenre(e.target.value)}
            className="border p-1 rounded"
          />
          <input
            type="date"
            value={updatedReleaseDate}
            onChange={(e) => setUpdatedReleaseDate(e.target.value)}
            className="border p-1 rounded"
          />
          <div className="flex gap-2 mt-2">
            <button onClick={handleUpdate} className="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-3 py-1 rounded">Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">{game.title}</h2>
          <p className="text-gray-600">Genre: {game.genre}</p>
          <p className="text-gray-600">Release Date: {game.releaseDate.toDateString()}</p>
          <div className="flex gap-2 mt-2">
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
            <button onClick={() => deleteGame(game.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameCard;
