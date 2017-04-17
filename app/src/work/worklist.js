import FirefliesImage from "./fireflies/fireflies_image.png";
import MatrixImage from "./matrix/matrix_image.png";
import GameOfLifeImage from "./gameoflife/gameoflife_image.png";

export const workList = [
  {
    name: "Fireflies",
    description: [
      "Fireflies was the first piece of artwork that I worked on using HTML5 canvas. ",
      "Each firefly illustrates a basic agent-based model, which interacts with your mouse movements and clicks. ",
      "For instance, a click creates a spark which cause fireflies to flee, ",
      "holding on generates a fire which attracts them, ",
      "and any fast movements causes wind to blow them away. "
    ].join(""),
    postscript: [
      "P.S: Try to attract all of them together! "
    ].join(""),
    image: FirefliesImage
  },
  {
    name: "Matrix",
    description: [
      "Matrix came from an small inspiration I got from many ASCII arts on the web. ",
      "They somehow gave me a ressemblence of the parts where Matrix playing scenes through digital rain, ",
      "which gave me the idea of animations with ASCII code. ",
      "This artwork extracts pixel data from a video and use it to generate an asciified image in text. "
    ].join(""),
    postscript: [
      "P.S: You can change the video source to camera! "
    ].join(""),
    image: MatrixImage
  },
  {
    name: "Game of Life",
    description: [
      "John Conway's Game of Life was my favourite course work during my university course. ",
      "Starting from replicating the basics of the game (play/pause, speed), ",
      "I added a few more features to it such as real-time editing, ",
      "limited life span, colors and glowing effects. "
    ].join(""),
    postscript: [
      "P.S: The controls are available at the top-left corner."
    ].join(""),
    image: GameOfLifeImage
  }
];
