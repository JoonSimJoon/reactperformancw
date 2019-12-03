import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  color: white;
  & > img {
    width: 100%;
  }
  & > * {
  }
  overflow-x: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
const Logo = styled.div`
  font-size:50px;
`;

const Button = styled.button`
  border: none;
  color: white;
  border-radius: 8%;
  background: rgba(0, 0, 0, 0.4);
  padding: 3% 5%;
  margin-right: 3%;
  margin-left: 3%;
  transition: 0.4s;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    color: black;
    transform: scale(1.1);
  }
`;

const Preview = props => {
  return (
    <Wrapper> 
      <img
        src="http://getwallpapers.com/wallpaper/full/d/d/b/762333-free-download-premier-league-wallpapers-2560x1440.jpg"
        alt=""
      />
      <div
        style={{ position: "absolute", top: "30%", left: "65%", right: "5%" }}
      >
        <Logo>헤드라인 기사</Logo>
        <div style={{ marginBottom: "3%" , color:"white", fontSize:"20px"}}>
          메시 발롱도르 수상 <br />
          '새 역사 쓴' 손흥민, 발롱도르 22위...아시아 역대 최고 순위<br/>
          FA컵 3R 대진 발표...리버풀-에버턴, 맨유-울버햄튼, 토트넘-미들즈브러 <br />
        </div>
        <div>
          <Link to="/gamesc"><Button>일정</Button></Link>
          <Link to="/news"><Button>최신 뉴스</Button></Link>
          
        </div>
      </div>
    </Wrapper>
  );
};

export default Preview;
