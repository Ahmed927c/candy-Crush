import { candies } from "./candyData";

export const createBoard = (boardSize: number=8) => Array(boardSize*boardSize).fill(0).map(() => candies[Math.floor(Math.random()*candies.length)]);