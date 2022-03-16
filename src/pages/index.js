import styled from "styled-components";
import Image from "next/image";
import { Plan } from "../components";

const Title = styled.h1`
  font-size: 64px;
  font-weight: 500;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
`;

const InfoContainer = styled.div`
  padding-left: 100px;
  padding-right: 100px;

  > ${Title} {
    margin-bottom: 24px;
  }

  > ${Subtitle} {
    margin-bottom: 48px;
  }
`;

const BannerContainer = styled.div`
  > span {
    position: absolute;
    top: 16px;
    right: 0;
  }
`;

const PlanList = styled.div`
  > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  padding-top: 64px;

  > ${BannerContainer} {
    position: relative;
  }
`;

export default function IndexPage() {
  return (
    <Container>
      <InfoContainer>
        <Title>Discover new music every day.</Title>
        <Subtitle>
          Enjoy ad-free music listening, offline playback, and more. Cancel
          anytime.
        </Subtitle>
        <PlanList>
          <Plan
            name="standard"
            price="9.99"
            interval="month"
            feature="Listen to a single song"
          />
          <Plan
            name="pro"
            price="19.99"
            interval="month"
            feature="Listen to multiple songs"
          />
        </PlanList>
      </InfoContainer>
      <BannerContainer>
        <span>
          <Image src="/img/banner.png" width="611px" height="798px" alt="" />
        </span>
      </BannerContainer>
    </Container>
  );
}
