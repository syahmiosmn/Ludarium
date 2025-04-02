# Ludarium

Ludarium is a full-stack web application for archiving and managing game collections with memory notes.

## Features (Current Version)

### Backend (Ludarium.API)
- RESTful API built with **.NET 8 Web API**.
- **Entity Framework Core** with **PostgreSQL** database.
- **CRUD operations** for managing game entries.
- **Game state management** with a `GameController`.
- **CORS enabled** for frontend communication.
- **Swagger UI** setup for API documentation.

### Frontend (Ludarium Client)
- Built with **React + TypeScript**.
- UI powered by **Tailwind CSS**.
- State management using **Zustand**.
- Fetches game data from the API.
- Allows users to add new games.

## Installation & Setup

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (Recommended LTS version)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Visual Studio](https://visualstudio.microsoft.com/) (for backend)
- [VS Code](https://code.visualstudio.com/) (for frontend)

### Backend Setup
1. **Clone the Repository**

2. **Configure the Database**
   - Set up PostgreSQL and create a database.
   - Update `appsettings.json`:
     ```json
     "ConnectionStrings": {
       "DefaultConnection": "Host=localhost;Port=5432;Database=LudariumDB;Username=youruser;Password=yourpassword"
     }
     ```

3. **Apply Migrations & Run**
   ```sh
   dotnet ef database update
   dotnet run
   ```

### Frontend Setup
1. **Navigate to the frontend directory**
   ```sh
   cd ../ludarium-client
   ```

2. **Install dependencies**
   ```sh
   npm install axios react-hook-form zustand tailwindcss postcss autoprefixer
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

### API Endpoints
- **Get all games:** `GET /api/games`
- **Add a new game:** `POST /api/games`
  ```json
  {
    "title": "Game Name",
    "genre": "Genre Name",
    "releaseDate": "YYYY-MM-DD"
  }
  ```

## Known Issues

## Future Improvements
- Implement **edit/delete** functionality.
- Add **user authentication**.
- Enhance **UI/UX**.


