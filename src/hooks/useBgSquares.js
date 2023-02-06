import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

function useBgSquares() {
  const { height, width } = useWindowSize();

  const cellSize = width > 3000 ? Math.floor(width / 50) : 50;

  const [bgSquares, setBgSquares] = useState({
    columns: undefined,
    rows: undefined,
    totalSquares: undefined,
    cellSize: cellSize,
  });

  useEffect(() => {
    const columnNumber = Math.floor(width / cellSize) + 1;
    const rowNumber = Math.floor(height / cellSize) + 1;

    setBgSquares({
      columns: columnNumber,
      rows: rowNumber,
      totalSquares: columnNumber * rowNumber,
      cellSize: cellSize,
    });
  }, [cellSize, height, width]);

  return bgSquares;
}

export default useBgSquares;
