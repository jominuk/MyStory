import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scrolls from "../hooks/Scrolls";

const About = () => {
  const scrollPosition = 900;
  const imageStyles = Scrolls(scrollPosition);

  return (
    <>
      <div style={imageStyles}>
        <StTitle>about</StTitle>
        <StContainer>
          <div className="imgGro">
            <img
              src={require("../images/mypicture.jpg")}
              alt="증명사진"
              className="proflie-img"
            />
          </div>
          <div className="content">
            <div className="proflie-imfor">
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-address-book"
                  className="font"
                />
                조민욱
              </p>
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-cake-candles"
                  className="font"
                />
                92.10.25
              </p>
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-location-dot"
                  className="font"
                />
                경기도 성남시
              </p>
              <p>
                <FontAwesomeIcon icon="fa-solid fa-envelope" className="font" />
                jominuk1025 @ gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon="fa-solid fa-school" className="font" />
                두원공과 대학교(기계과)
              </p>
            </div>

            <div className="sns">
              <a
                href="https://github.com/jominuk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../images/git.jpg")} alt="git" />
              </a>
              <a
                href="https://minuk22.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../images/ti.jpg")} alt="tistory" />
              </a>
              <a
                href="https://velog.io/@jominuk1025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../images/vel.jpg")} alt="velog" />
              </a>
            </div>
          </div>
        </StContainer>
      </div>
    </>
  );
};

export default About;

const StTitle = styled.div`
  font-size: 54px;
  font-weight: 800;
  margin-bottom: 50px;
  color: rgba(0, 0, 0, 0.6);
`;

const StContainer = styled.div`
  .proflie-img {
    border-radius: 50%;
  }

  @media screen and (min-width: 1400px) {
    display: flex;
    width: 70%;
    height: 500px;
    border-radius: 30px;
    margin: 0% auto;
    box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.3);

    .font {
      margin-right: 20px;
      font-size: 24px;
    }

    .imgGro {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
    }
    .proflie-img {
      width: 240px;
      height: 280px;
    }

    .content {
      width: 50%;

      .proflie-imfor {
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        padding: 10px 0 10px 40px;
      }

      .sns {
        display: flex;
        justify-content: space-between;
        width: 60%;
        padding-left: 40px;
      }
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    display: flex;
    width: 85%;
    height: 500px;
    margin: 0% auto;
    border-radius: 30px;
    box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.3);

    .font {
      margin-right: 10px;
      font-size: 18px;
    }

    .imgGro {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
    }
    .proflie-img {
      width: 200px;
      height: 280px;
    }

    .content {
      width: 50%;

      .proflie-imfor {
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        padding: 10px 0 10px 20px;
      }

      .sns {
        display: flex;
        justify-content: space-between;
        width: 60%;
        padding-left: 40px;
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    .imgGro {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 300px;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.3);
    }
    .proflie-img {
      width: 200px;
      height: 250px;
    }

    .font {
      margin-right: 10px;
      font-size: 18px;
    }

    .content {
      width: 100%;
      margin: 50px auto;
      border-radius: 20px;
      box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.3);

      .proflie-imfor {
        height: 370px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        padding: 10px 0 10px 60px;
      }

      .sns {
        display: flex;
        justify-content: space-around;
        width: 80%;
        margin: 0 auto;
        padding: 0 0 30px 0;
      }
    }
  }

  @media screen and (max-width: 599px) {
    .imgGro {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.3);
    }

    .font {
      margin-right: 10px;
      font-size: 16px;
    }

    .proflie-img {
      width: 230px;
      height: 230px;
    }

    .content {
      margin: 50px auto;
      border-radius: 20px;
      box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.3);

      .proflie-imfor {
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        padding: 10px 0 10px 30px;
      }

      .sns {
        display: flex;
        justify-content: space-around;
        width: 90%;
        margin: 0 auto;
        padding: 0 0 30px 0;
      }
    }
  }
`;
