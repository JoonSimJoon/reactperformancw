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
class Gamesc extends React.Component {
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
          <MovieContainer title="England premier league schedule" movies={[{ title: "본머스 ㄷ 크리스탈",  },{ title: "번리 ㄷ 맨체스터 시티" },{ title: "레스터 시티 ㄷ 왓포드" },{ title: "맨유 ㄷ 토토넘" }]} />
          <MovieContainer title="champions league schedule" movies={[{ title: "리버풀 ㄷ 잘츠부르크" },{ title: "나폴리 ㄷ 헹크" }]} />
        </MovieContainerWrapper>
      </>
    );
  }
}
export default withLayout(Gamesc);
