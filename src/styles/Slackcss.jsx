import styled from "styled-components";

export const Slackcss = {
  StBackground: styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Sunflower:wght@300;500;700&display=swap");
    margin: 50px auto;
    font-family: "Sunflower", sans-serif;
    .titleBox {
      display: flex;
      align-items: center;
      height: 130px;
      border-bottom: 1px solid #ccc;
    }
    .pointColor {
      font-size: 18px;
      font-weight: 1000;
    }
    .pointColor1 {
      font-size: 18px;
      font-weight: 1000;
      color: #0000ff84;
    }

    .imgBox {
      width: 70px;
      height: 70px;
      margin: 0 20px;
    }

    h1 {
      font-weight: 600;
    }
    .h3Title {
      margin: 100px 0 40px 0;
    }
    .ezipContent {
      line-height: 40px;
    }
    .LogoImage {
      width: 100px;
      height: 25px;
      margin-right: 20px;
    }

    .Link {
      color: #135e79;
      border-bottom: 2px solid powderblue;
      width: 120px;
      cursor: pointer;
      margin-right: 50px;
    }
    .Link2 {
      color: #135e79;
      border-bottom: 2px solid powderblue;
      width: 100px;
      cursor: pointer;
    }
    .contents1 {
      width: 98%;
      margin-left: 2%;
    }

    .troubleBox {
      padding: 10px 20px 10px 30px;
      border: 3px solid #ccc;
      border-radius: 30px;
      margin-bottom: 50px;

      div {
        margin-top: 30px;
      }
    }

    .trouble {
      height: 90px;
      border-bottom: 2px dashed #ccc;
    }

    .contents1 {
      width: 98%;
      margin-left: 2%;
    }

    @media screen and (min-width: 1500px) {
      width: 50%;
    }

    @media screen and (min-width: 1000px) and (max-width: 1499px) {
      width: 70%;
    }

    @media screen and (min-width: 700px) and (max-width: 999px) {
      width: 80%;
    }

    @media screen and (max-width: 699px) {
      width: 80%;

      .trouble {
        height: 120px;
      }
    }
  `,

  StWork: styled.div`
    @media screen and (min-width: 1000px) {
      display: flex;
      width: 100%;
      margin-bottom: 30px;

      .titleLogoBox {
        display: flex;
        justify-content: space-around;
        width: 100%;
      }

      .kakaoLogin {
        width: 400px;
        height: 280px;
        border-radius: 10px;
      }
    }

    @media screen and (min-width: 500px) and (max-width: 999px) {
      .kakaoLogin {
        width: 400px;
        height: 280px;
        margin-top: 50px;
      }
    }

    @media screen and (max-width: 599px) {
      height: 550px;
      .kakaoLogin {
        width: 320px;
        height: 220px;
        margin-top: 50px;
      }
    }
  `,
};
