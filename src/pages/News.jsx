import React from "react";
import Preview from "../components/Preview";
import MovieContainer from "../components/MovieContainer";
import styled from "styled-components";
import axios from "axios";
import withLayout from "../components/withLayout";

const MovieContainerWrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Preview />
        <MovieContainerWrapper
          style={{ marginTop: "45%", overflowX: "hidden", width: "100%" }}
        >
          <MovieContainer title="인기뉴스" movies={[{title:"메시 발동도르 수상"},{title:"위약금 총액만 495억… 포체티노, 타 팀 취임 사실상 불가능"},{title:"'SON 22위? 농담이지?' 토트넘 팬들 '과소평가' 격분"},{title:"후보 제외된 모드리치, 시상식 참석 '예의 지켜야'"},{title:"메시 발동로르 수상"}]}/>
          <MovieContainer title="최신뉴스" movies={[{ title: "무리뉴가 이끄는 토트넘"+" 다음 경기 맨유와 붙는다" },{ title: "'사랑해요, 아빠'..가족 깜짝 영상편지에 메시 쓰러질 뻔" },{ title: "'여전한 인기남' 즐라탄, EPL 복귀 거절하고 AC밀란행 근접" },{ title: "‘발롱도르 2위’ 판 다이크, “내년에 또 오고 싶다”" },]} />
        </MovieContainerWrapper>
      </>
    );
  }
}
export default withLayout(News);
