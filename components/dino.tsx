"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";

interface Obstacle {
  x: number;
  width: number;
  height: number;
}

interface TRexGameProps {
  onGameEnd: (score: number) => void;
}

export default function TRexGame({ onGameEnd }: TRexGameProps) {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [dinoY, setDinoY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [gameSpeed, setGameSpeed] = useState(2);

  const gameLoopRef = useRef<number | null>(null);
  const dinoRef = useRef({ y: 0, velocity: 0 });
  const groundY = 200;
  const dinoSize = 40;
  const jumpForce = -15;
  const gravity = 0.5;

  const resetGame = useCallback(() => {
    setGameOver(false);
    setScore(0);
    setDinoY(0);
    setIsJumping(false);
    setObstacles([]);
    setGameSpeed(2);
    dinoRef.current = { y: 0, velocity: 0 };
  }, []);

  const startGame = useCallback(() => {
    setGameStarted(true);
    resetGame();
  }, [resetGame]);

  const jump = useCallback(() => {
    if (!gameStarted || gameOver) {
      if (!gameStarted) startGame();
      if (gameOver) {
        resetGame();
        setGameStarted(true);
      }
      return;
    }

    if (dinoRef.current.y === 0) {
      dinoRef.current.velocity = jumpForce;
      setIsJumping(true);
    }
  }, [gameStarted, gameOver, startGame, resetGame]);

  const checkCollision = useCallback(
    (dino: { y: number }, obstacles: Obstacle[]) => {
      const dinoLeft = 100;
      const dinoRight = dinoLeft + dinoSize;
      const dinoTop = groundY - dinoSize - dino.y;
      const dinoBottom = groundY - dino.y;

      return obstacles.some((obstacle) => {
        const obstacleLeft = obstacle.x;
        const obstacleRight = obstacle.x + obstacle.width;
        const obstacleTop = groundY - obstacle.height;
        const obstacleBottom = groundY;

        return (
          dinoRight > obstacleLeft &&
          dinoLeft < obstacleRight &&
          dinoBottom > obstacleTop &&
          dinoTop < obstacleBottom
        );
      });
    },
    []
  );

  const gameLoop = useCallback(() => {
    if (!gameStarted || gameOver) return;

    // Update dino physics
    dinoRef.current.velocity += gravity;
    dinoRef.current.y += dinoRef.current.velocity;

    if (dinoRef.current.y >= 0) {
      dinoRef.current.y = 0;
      dinoRef.current.velocity = 0;
      setIsJumping(false);
    }

    setDinoY(dinoRef.current.y);

    // Update obstacles
    setObstacles((prev) => {
      const updated = prev
        .map((obstacle) => ({ ...obstacle, x: obstacle.x - gameSpeed }))
        .filter((obstacle) => obstacle.x > -obstacle.width);

      // Add new obstacles
      if (updated.length === 0 || updated[updated.length - 1].x < 400) {
        const shouldAddObstacle = Math.random() < 0.02;
        if (shouldAddObstacle) {
          updated.push({
            x: 800,
            width: 20 + Math.random() * 20,
            height: 30 + Math.random() * 30,
          });
        }
      }

      // Check collision
      if (checkCollision(dinoRef.current, updated)) {
        setGameOver(true);
        setHighScore((prev) => Math.max(prev, score));
        return prev;
      }

      return updated;
    });

    // Update score and speed
    // Update score and speed
    setScore((prev) => {
      const newScore = prev + 1;

      // Redirect condition
      if (newScore >= 2000) {
        onGameEnd(newScore);
        setGameOver(true);
        if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
        return prev;
      }

      setGameSpeed(2 + Math.floor(newScore / 500) * 0.5);
      return newScore;
    });

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  }, [gameStarted, gameOver, score, gameSpeed, checkCollision]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameStarted, gameOver, gameLoop]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };

    const handleClick = () => jump();

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleClick);
    };
  }, [jump]);

  return (
    <>
      <style jsx>{`
        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes head-bob {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-1px);
          }
        }

        @keyframes leg-left {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-1px) rotate(-5deg);
          }
          75% {
            transform: translateY(0px) rotate(5deg);
          }
        }

        @keyframes leg-right {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(0px) rotate(5deg);
          }
          75% {
            transform: translateY(-1px) rotate(-5deg);
          }
        }

        @keyframes tail-wag {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 0.3s ease-in-out infinite;
        }

        .animate-head-bob {
          animation: head-bob 0.3s ease-in-out infinite;
        }

        .animate-leg-left {
          animation: leg-left 0.2s ease-in-out infinite;
        }

        .animate-leg-right {
          animation: leg-right 0.2s ease-in-out infinite;
        }

        .animate-tail-wag {
          animation: tail-wag 0.4s ease-in-out infinite;
        }
      `}</style>
      <div className="flex flex-col items-center justify-center min-h-screen  p-4">
        <div className="relative w-full max-w-4xl h-80 bg-white border-2 border-gray-300 overflow-hidden">
          {/* Sky and clouds */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-blue-100">
            <div className="absolute top-8 left-20 w-16 h-8 bg-white rounded-full opacity-70"></div>
            <div className="absolute top-12 left-32 w-12 h-6 bg-white rounded-full opacity-70"></div>
            <div className="absolute top-6 right-40 w-20 h-10 bg-white rounded-full opacity-70"></div>
          </div>

          {/* Ground */}
          <div
            className="absolute bottom-0 w-full bg-green-400"
            style={{ height: `${80}px` }}
          >
            <div className="w-full h-2 bg-green-600"></div>
          </div>

          {/* Dinosaur */}
          <div
            className={`absolute transition-transform duration-100 ${
              isJumping ? "scale-110" : ""
            }`}
            style={{
              left: "100px",
              bottom: `${80 - dinoY}px`,
              width: `${dinoSize}px`,
              height: `${dinoSize}px`,
            }}
          >
            <div className="relative w-full h-full">
              {/* Dino body with running bob animation */}
              <div
                className={`absolute bottom-0 left-2 w-6 h-8 bg-green-600 rounded-t-lg ${
                  !isJumping ? "animate-bounce-subtle" : ""
                }`}
              ></div>

              {/* Dino head with slight bob */}
              <div
                className={`absolute bottom-6 left-0 w-8 h-6 bg-green-600 rounded-lg ${
                  !isJumping ? "animate-head-bob" : ""
                }`}
              ></div>

              {/* Eye */}
              <div
                className={`absolute bottom-8 left-1 w-2 h-2 bg-black rounded-full ${
                  !isJumping ? "animate-head-bob" : ""
                }`}
              ></div>

              {/* Running legs - alternating animation */}
              <div
                className={`absolute bottom-0 left-1 w-2 h-3 bg-green-600 transition-transform ${
                  !isJumping ? "animate-leg-left" : ""
                }`}
              ></div>
              <div
                className={`absolute bottom-0 left-5 w-2 h-3 bg-green-600 transition-transform ${
                  !isJumping ? "animate-leg-right" : ""
                }`}
              ></div>

              {/* Tail with slight movement */}
              <div
                className={`absolute bottom-4 left-6 w-4 h-2 bg-green-600 rounded-r-lg ${
                  !isJumping ? "animate-tail-wag" : ""
                }`}
              ></div>
            </div>
          </div>

          {/* Obstacles */}
          {obstacles.map((obstacle, index) => (
            <div
              key={index}
              className="absolute bg-red-600"
              style={{
                left: `${obstacle.x}px`,
                bottom: "80px",
                width: `${obstacle.width}px`,
                height: `${obstacle.height}px`,
              }}
            ></div>
          ))}

          {/* Game UI */}
          <div className="absolute top-4 right-4 text-right">
            <div className="text-lg font-bold">Score: {score}</div>
            <div className="text-sm text-gray-600">High: {highScore}</div>
            <div className="text-xs text-gray-500">
              Speed: {gameSpeed.toFixed(1)}x
            </div>
          </div>

          {/* Game Over Screen */}
          {gameOver && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
                <p className="text-lg mb-2">Score: {score}</p>
                <p className="text-sm text-gray-600 mb-4">
                  High Score: {highScore}
                </p>
                <Button onClick={jump} className="w-full">
                  Play Again
                </Button>
              </div>
            </div>
          )}

          {/* Start Screen */}
          {!gameStarted && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg text-center">
                <h1 className="text-3xl font-bold mb-4">T-Rex Runner</h1>
                <p className="text-gray-600 mb-4">
                  Press SPACE, ↑ arrow, or click to jump!
                </p>
                <Button onClick={startGame} className="w-full">
                  Start Game
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 text-center text-gray-600">
          <p>Use SPACEBAR, UP ARROW, or CLICK to jump over obstacles!</p>
          <p className="text-sm">
            The game gets faster as your score increases
          </p>
        </div>
      </div>
    </>
  );
}
