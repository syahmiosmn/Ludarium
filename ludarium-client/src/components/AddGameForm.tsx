"use client";

import { useState } from "react";
import { useGameStore } from "@/store/gameStore";

const AddGameForm: React.FC = () => {
  const { addNewGame } = useGameStore();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !genre || !releaseDate) return alert("All fields are required!");

    await addNewGame({
      title,
      genre,
      releaseDate: new Date(releaseDate), // Convert string to Date
    });

    setTitle("");
    setGenre("");
    setReleaseDate("");
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Add New Game</h2>
      
      <input
        type="text"
        placeholder="Game Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded w-full p-2 mb-3"
      />

      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="border rounded w-full p-2 mb-3"
      />

      <input
        type="date"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
        className="border rounded w-full p-2 mb-3"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Game
      </button>
    </form>
  );
};

export default AddGameForm;
