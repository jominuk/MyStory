import styled from "styled-components";
import Scrolls from "../hooks/Scrolls";
import Javascript from "./modal/Javascript";
import { useCallback, useState } from "react";

const Skills = () => {
  const scrollPosition = 1800;
  const imageStyles = Scrolls(scrollPosition);

  const [javascript, setJavascript] = useState(false);

  const onCloseModal = useCallback(() => {
    setJavascript(false);
  }, []);

  return (
    <>
      <div style={imageStyles}>
        <StTitle>skills</StTitle>
        <StSkills>
          <div className="skillGroup">
            <div>HTML5</div>
            <div>CSS3</div>
            <div>JavaScript</div>
            <div>TypeScript</div>
            <div>React</div>
            <div>Redux-Toolkit</div>
            <div>React-Query</div>
            <div>SWR</div>
            <div>Socket.io</div>
          </div>

          <div className="my-skill">
            {[80, 80, 60, 30, 70, 60, 65, 50, 20].map((percentage, index) => (
              <div key={index} className="backGraph">
                {percentage}%
                <div
                  className="graph"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            ))}
          </div>

          <div className="more">
            <button className="moreBtn">more</button>
            <button className="moreBtn">more</button>
            <button
              className="moreBtn"
              onClick={() => {
                setJavascript(true);
              }}
            >
              more
            </button>
            {javascript && <Javascript onCloseModal={onCloseModal} />}
            <button className="moreBtn">more</button>
            <button className="moreBtn">more</button>
            <button className="moreBtn">more</button>
            <button className="moreBtn">more</button>
            <button className="moreBtn">more</button>
            <button className="moreBtn">more</button>
          </div>
        </StSkills>
      </div>
    </>
  );
};

export default Skills;

const StTitle = styled.div`
  font-size: 54px;
  font-weight: 800;
  margin: 100px 0 50px 0;
  color: rgba(0, 0, 0, 0.6);
`;

const StSkills = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
    width: 80%;
    height: 500px;
    margin: 0 auto;

    .skillGroup {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      div {
        width: 150px;
        line-height: 35px;
        color: rgb(68, 70, 73);
        font-weight: 800;
        font-size: 15px;
      }
    }

    .my-skill {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 70%;

      .backGraph {
        position: relative;
        width: 95%;
        height: 35px;
        padding-right: 10px;
        text-align: right;
        border-radius: 10px;
        line-height: 35px;
        background: rgb(238 238 238);
        overflow: hidden;
      }

      .detail {
        background: red;
        margin-top: 10px;
      }

      .graph {
        background: rgba(82, 215, 142, 0.6);
        /* rgb(0 161 167); */
        height: 35px;
        position: absolute;
        top: 0;
        left: -100%;
        animation: slideIn 5s forwards 2s;
        border-radius: 0 10px 10px 0;
        padding-right: 10px;
        text-align: right;
      }
    }

    @keyframes slideIn {
      to {
        left: 0;
      }
    }

    .more {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .moreBtn {
        height: 35px;
      }
    }
  }

  @media screen and (max-width: 599px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 500px;
    margin: 0 auto;

    .skillGroup {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 20px;

      div {
        width: 100px;
        line-height: 35px;
        color: rgb(68, 70, 73);
        font-weight: 800;
        font-size: 15px;
      }
    }

    .my-skill {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 20%;
      margin-right: 20px;

      div {
        background: rgb(238 238 238);
        width: 95%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        overflow: hidden;
        border-radius: 10px;
      }
    }

    .more {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 5px;

      .moreBtn {
        height: 35px;
      }
    }
  }
`;
