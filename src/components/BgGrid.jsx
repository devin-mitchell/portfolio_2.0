import { Button, Grid, GridItem } from "@chakra-ui/react";
import useBgSquares from "../hooks/useBgSquares";
import anime from "animejs";
import { useNavigate } from "react-router-dom";

function BgGrid({ setIsFinished }) {
  const { rows, columns, cellSize, totalSquares } = useBgSquares();
  const navigate = useNavigate();

  const squares = document.getElementsByClassName("square");

  const squaresAnimation = () =>
    anime({
      targets: squares,
      translateX: anime.stagger(10, {
        grid: [columns, rows],
        from: "center",
        axis: "x",
      }),
      translateY: anime.stagger(10, {
        grid: [columns, rows],
        from: "center",
        axis: "y",
      }),
      rotateZ: anime.stagger([0, 90], {
        grid: [columns, rows],
        from: "center",
        axis: "x",
      }),
      borderRadius: "50%",
      scale: 0,
      delay: anime.stagger(50, { grid: [columns, rows], from: "center" }),
      backgroundColor: "#39FF14",
      easing: "easeInOutQuad",
    }).finished.then(() => {
      navigate("/home");
      setIsFinished(true);
    });

  const buttonAnimation = () =>
    anime({
      targets: "button",
      rotate: "3turn",
      scale: [1, 2.5, 0],
      opacity: [1, 1, 0],
      easing: "easeInQuart",
      duration: 800,
    });

  const handleClick = () => {
    squaresAnimation();
    buttonAnimation();
  };
  return (
    <>
      <Grid
        overflow="hidden"
        templateRows={`repeat(${rows}, ${cellSize}px)`}
        templateColumns={`repeat(${columns}, ${cellSize}px)`}
        bg="blackAlpha.900"
      >
        {totalSquares &&
          Array(totalSquares)
            .fill(null)
            .map((sq, i) => {
              return (
                <GridItem
                  className="square"
                  height="90%"
                  width="90%"
                  bg="gray.200"
                  key={`${i}-square`}
                ></GridItem>
              );
            })}
      </Grid>
      <Button
        w={"8rem"}
        h={"8rem"}
        position="absolute"
        bg="#39FF14"
        onClick={() => handleClick()}
        border="4px solid black"
        borderRadius={"50%"}
        _hover={{ bg: "#00C500" }}
        fontSize="2xl"
        fontFamily="serif"
      >
        ENTER
      </Button>
    </>
  );
}

export default BgGrid;
