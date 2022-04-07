import { PageProps } from "gatsby";
import React from "react";
import Ratio from "react-bootstrap/Ratio";
import Layout from "../../components/layout";
import "../global.css";

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout className="pt-3">
      <h2>Projects</h2>
      <br />
      <h4>Chess-playing robot</h4>
      <h6>
        <a
          href="https://github.com/allanrodriguez/JellyAI"
          rel="noreferrer"
          target="_blank"
        >
          GitHub repository
        </a>
      </h6>
      <Ratio className="my-3" aspectRatio="16x9">
        <iframe
          className="embed-responsive-item"
          allowFullScreen
          src="https://www.youtube.com/embed/25QUqpAvNnE?rel=0"
          title="Jelly in action"
        >
          There's nothing here.
        </iframe>
      </Ratio>
      <p>
        For my final senior design project, two other students in my major and I
        teamed up to build a system that enables a chess engine to read and
        manipulate a physical chessboard. In short, we created a robot that can
        play a real-life chess match with anyone!
      </p>
      <p>
        The system, affectionately known as{" "}
        <b title="Our team's name was JAM and Jelly. The human members were JAM (James, Allan, Mario), so we named our robot counterpart Jelly (hehe get it?)">
          Jelly
        </b>
        , consists of a Raspberry Pi that runs the chess engine and an optical
        recognition program (both written in C++), and an Arduino to control the
        robot arm's servo motors. The flow of control is as follows:
      </p>
      <ol type="1">
        <li>
          After the opponent makes a move, the optical recognition program sets
          out to detect the moved piece.
        </li>
        <li>
          The opponent's move is passed to the chess engine, which first
          determines if the move was legal.
          <ol type="a">
            <li>
              If the move was legal, then the chess engine calculates the
              system's move, and passes it to the Arduino.
            </li>
            <li>
              If the move was illegal, then the system displays a message to the
              opponent asking them to move the piece back to its previous place.
            </li>
          </ol>
        </li>
        <li>
          The Arduino processes the move, and converts it to a series of
          instructions for the arm's servos. The arm then performs the move, and
          Jelly makes a final check to ensure that the move was made correctly.
        </li>
      </ol>
      <p>
        Jelly's development was divided into three parts: programming the arm to
        move and grab chess pieces off the board, developing the program through
        which Jelly uses a camera mounted over the board to detect board moves,
        and the chess engine that holds the state of the board and the
        algorithms for Jelly to calculate moves of its own. I was in charge of
        the latter, building the board and pieces, programming the rules of
        chess, and developing the brains of the chess engine.
      </p>
      <p>
        Once the board, pieces, and rules were created, I was in charge of
        testing the rules to ensure that Jelly accurately discerned between
        legal and illegal moves in all situations. Most of the bugs were fixed
        about halfway through the project, but more obscure situations plagued
        my tests throughout development, specifically with the king and getting
        in and out of check.
      </p>
      <p>
        After rule testing was complete, I began to build the chess engine. I
        could've modified an existing chess engine to be compatible with my
        partners' interfaces, but I felt like I could build a decent chess
        engine on my own. I researched existing chess engines, as well as
        chess-playing techniques, before beginning to code Jelly's engine.
        Because of the Raspberry Pi's memory constraints, I decided to make the
        engine look only three{" "}
        <b title="A ply, or half-move, occurs when a single player moves a piece. After both players have moved a piece, a move, or full move, has occurred.">
          plies
        </b>{" "}
        ahead to decide the best move. However, even then, the tree structure I
        had constructed resulted in tens of millions of possibilities as the
        game went on, and Jelly would eventually crash. To correct this, I
        implemented the alpha-beta pruning algorithm.
      </p>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning"
          rel="noreferrer"
          target="_blank"
        >
          Alpha-beta pruning
        </a>{" "}
        works by eliminating branches of moves that would result in moves that
        are either poorer than those in other branches, or have been found in
        other branches. Implementing this function yielded great results,
        reducing the move tree's memory requirements by 90%; Jelly no longer
        crashed! In the end, my chess engine was operational; it showed that it
        could capture enemy pieces and eventually put the opponent in checkmate.
        It could have done with more work, however, since it wasn't as
        aggressive as I hoped it would be.
      </p>
      <p>
        Building Jelly's chess engine taught me much on the need to optimize
        code to reduce space and computational footprints. Jelly had to be both
        operational and responsive, especially on the low-power Raspberry Pi it
        was running on. To that effect, I had to reduce the number of plies that
        the engine looked ahead to so that the program wouldn't take too long to
        run, and prune the resulting tree.
      </p>
      <p>
        It was exciting to be able to work with my teammates to put this
        together in the end and play with the robotic partner we created. Maybe
        one day, we'll make Jelly a must-have item for anyone looking for a
        worthy opponent!
      </p>
    </Layout>
  );
};

export default ProjectsPage;
