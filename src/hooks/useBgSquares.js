import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

const CELL_SIZE = 50;

function useBgSquares() {
  const { height, width } = useWindowSize();

  const [bgSquares, setBgSquares] = useState({
    columns: undefined,
    rows: undefined,
    totalSquares: undefined,
    cellSize: CELL_SIZE,
  });

  useEffect(() => {
    const columnNumber = Math.floor(width / CELL_SIZE) + 1;
    const rowNumber = Math.floor(height / CELL_SIZE) + 1;

    setBgSquares({
      columns: columnNumber,
      rows: rowNumber,
      totalSquares: columnNumber * rowNumber,
      cellSize: CELL_SIZE,
    });
  }, [height, width]);

  return bgSquares;
}

export default useBgSquares;
