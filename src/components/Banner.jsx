import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from '../pages/Logo.png'

const Wrapper = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  padding: 20px 58px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9000;
`;

const Logo = styled.img`
  height: 200%;
  margin-right: 30px;
  
`;
const Replay = styled.div`
  display:flex;
  width:100%;
  & > {
    align-self:center;
  }
`;


const NavText = styled.ul`
  display: flex;
  align-items: center;
  flex: 1;
`;
const NavTextItem = styled.li`
  color: white;
  list-style: none;
  margin-right: 10px;
  &:hover {
    font-weight: normal;
    color: #b3b3b3;
  }
`;
const NavIcon = styled.ul`
  display: flex;
`;
const NavIconItem = styled.li`
  height: 100%;
  width: fit-content;
  list-style: none;
  margin-right: 3px;
`;
const Img = styled.img`
  list-style: none;
  height: 100%;
`;
const setFont = event => {
  let asd = document.getElementsByClassName("asd");
  for (let a = 0; a < asd.length; a++) {
    asd[a].style.fontWeight = "normal";
    asd[a].style.color = "#e5e5e5";
  }
  event.target.style.fontWeight = "bold";
  event.target.style.color = "#fff";
};

const Banner = props => {
  
  return (
    <>
      <Wrapper>
        <a href="https://www.premierleague.com/"><Logo src={logo} ></Logo></a>
        <NavText>
          <NavTextItem className="asd" onClick={setFont}>
            <Link to="/">홈</Link>
          </NavTextItem>
          <Replay>
            <NavTextItem className="asd" onClick={setFont}>
              <a href="https://www.youtube.com/playlist?list=PL7MQjbfOyOE1io1S1ySLJG19gF_5oPRiT">챔피언스리그 다시보기</a>
            </NavTextItem>
            <NavTextItem className="asd" onClick={setFont}>
              <a href="https://www.youtube.com/playlist?list=PL7MQjbfOyOE3FOgSXX6XFp8ht9WGNULtw">epl 다시보기</a>
            </NavTextItem>
          </Replay>
          
        </NavText>
      </Wrapper>
    </>
  );
};
export default Banner;
