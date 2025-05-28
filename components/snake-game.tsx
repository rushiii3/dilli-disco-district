"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 15, y: 15 };
const INITIAL_DIRECTION: Direction = "RIGHT";

interface SnakeGameProps {
  onGameEnd: (score: number) => void;
}

export default function SnakeGame({ onGameEnd }: SnakeGameProps) {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(INITIAL_FOOD);
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  // Generate random food position
  const generateFood = useCallback((snakeBody: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (
      snakeBody.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      )
    );
    return newFood;
  }, []);

  // Move snake
  const moveSnake = useCallback(() => {
    if (gameOver || !gameStarted) return;

    setSnake((currentSnake) => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };

      // Move head based on direction
      switch (direction) {
        case "UP":
          head.y -= 1;
          break;
        case "DOWN":
          head.y += 1;
          break;
        case "LEFT":
          head.x -= 1;
          break;
        case "RIGHT":
          head.x += 1;
          break;
      }

      // Check wall collision
      if (
        head.x < 0 ||
        head.x >= GRID_SIZE ||
        head.y < 0 ||
        head.y >= GRID_SIZE
      ) {
        setGameOver(true);
        return currentSnake;
      }

      // Check self collision
      if (
        newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        setGameOver(true);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore((prevScore) => {
          const newScore = prevScore + 10;

          if (newScore >= 200) {
            onGameEnd(newScore);
          }

          return newScore;
        });
        setFood(generateFood(newSnake));
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, gameStarted, generateFood]);

  // Handle keyboard input
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (!gameStarted && e.key === " ") {
        setGameStarted(true);
        return;
      }

      if (gameOver && e.key === " ") {
        // Restart game
        setSnake(INITIAL_SNAKE);
        setFood(INITIAL_FOOD);
        setDirection(INITIAL_DIRECTION);
        setGameOver(false);
        setScore(0);
        setGameStarted(true);
        return;
      }

      if (!gameStarted || gameOver) return;

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          e.preventDefault();
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          e.preventDefault();
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
      }
    },
    [direction, gameOver, gameStarted]
  );

  // Game loop
  useEffect(() => {
    if (gameStarted && !gameOver) {
      const speed = Math.max(100, 200 - Math.floor(score / 50) * 10);
      gameLoopRef.current = setInterval(moveSnake, speed);
    } else {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameStarted, gameOver, moveSnake, score]);

  // Update high score
  useEffect(() => {
    if (gameOver && score > highScore) {
      setHighScore(score);
    }
  }, [gameOver, score, highScore]);

  // Keyboard event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-black font-mono">
      {/* Header */}
      <div className="mb-4 text-center">
        <div className="flex space-x-8 text-lg">
          <div>SCORE: {score.toString().padStart(4, "0")}</div>
          <div>HIGH: {highScore.toString().padStart(4, "0")}</div>
        </div>
      </div>

      {/* Game Board */}
      <div
        className="relative border-4 border-green-400 bg-black"
        style={{
          width: `${GRID_SIZE * 20}px`,
          height: `${GRID_SIZE * 20}px`,
          imageRendering: "pixelated",
        }}
      >
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: GRID_SIZE }, (_, y) =>
            Array.from({ length: GRID_SIZE }, (_, x) => (
              <div
                key={`${x}-${y}`}
                className="absolute border border-green-800"
                style={{
                  left: x * 20,
                  top: y * 20,
                  width: 20,
                  height: 20,
                }}
              />
            ))
          )}
        </div>

        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className={`absolute ${
              index === 0 ? "bg-green-300" : "bg-green-500"
            } border border-green-200`}
            style={{
              left: segment.x * 20,
              top: segment.y * 20,
              width: 20,
              height: 20,
              boxShadow: index === 0 ? "0 0 10px #4ade80" : "none",
            }}
          >
            {/* Snake head eyes */}
            {index === 0 && (
              <>
                <div
                  className="absolute w-1 h-1 bg-black"
                  style={{
                    top: "4px",
                    left:
                      direction === "LEFT"
                        ? "2px"
                        : direction === "RIGHT"
                        ? "14px"
                        : "4px",
                  }}
                />
                <div
                  className="absolute w-1 h-1 bg-black"
                  style={{
                    top:
                      direction === "UP"
                        ? "2px"
                        : direction === "DOWN"
                        ? "14px"
                        : "4px",
                    left:
                      direction === "LEFT"
                        ? "2px"
                        : direction === "RIGHT"
                        ? "14px"
                        : "12px",
                  }}
                />
              </>
            )}
          </div>
        ))}

        {/* Food */}
        <div
          className="absolute bg-red-500 border border-red-300 animate-pulse"
          style={{
            left: food.x * 20,
            top: food.y * 20,
            width: 20,
            height: 20,
            boxShadow: "0 0 10px #ef4444",
          }}
        >
          <div className="absolute inset-1 bg-red-400 rounded-full" />
        </div>

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">
                GAME OVER
              </div>
              <div className="text-lg text-green-400 mb-4">
                Final Score: {score}
              </div>
              <div className="text-sm text-green-300 animate-pulse">
                Press SPACE to restart
              </div>
            </div>
          </div>
        )}

        {/* Start Screen */}
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-4">
                READY TO PLAY?
              </div>
              <div className="text-sm text-green-300 mb-2">
                Use arrow keys to move
              </div>
              <div className="text-sm text-green-300 mb-4">
                Eat the red food to grow
              </div>
              <div className="text-lg text-green-400 animate-pulse">
                Press SPACE to start
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="mt-4 text-center text-sm text-green-300">
        <div className="mb-2">🎮 CONTROLS</div>
        <div className="grid grid-cols-3 gap-2 max-w-32 mx-auto">
          <div></div>
          <div className="border border-green-400 px-2 py-1">↑</div>
          <div></div>
          <div className="border border-green-400 px-2 py-1">←</div>
          <div className="border border-green-400 px-2 py-1">↓</div>
          <div className="border border-green-400 px-2 py-1">→</div>
        </div>
        <div className="mt-2">SPACE: Start/Restart</div>
      </div>

      {/* Game Stats */}
      <div className="mt-4 text-xs text-green-500 text-center">
        <div>Length: {snake.length}</div>
        <div>Speed: {Math.max(100, 200 - Math.floor(score / 50) * 10)}ms</div>
      </div>
    </div>
  );
}
