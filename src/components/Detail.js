import React from 'react';
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
      <Background>
        <img
          alt="background"
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D8AEB7DE234898392BFD20E7D9B112B841E920AF9A3F54CCFB966722AFF3461/scale?width=1440&aspectRatio=1.78&format=jpeg"
        />
      </Background>
      <ImageTitle>
        <img
          alt="title"
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF737B93E2F2ABE27C74CBBEB322F18A421E7986129E9989587CEF2295B0447F/scale?width=1440&aspectRatio=1.78&format=png"
        />
      </ImageTitle>
      <Controls>
        <PlayBtn>
          <img alt="playBtn" src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayBtn>
        <TrailerBtn>
          <img alt="trailerBtn" src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerBtn>
        <AddBtn>
          <span>+</span>
        </AddBtn>
        <GroupWatchBtn>
          <img alt="GroupWatchBtn" src="/images/group-icon.png" />
        </GroupWatchBtn>
      </Controls>
      <Subtitle>Bao is a Pixar Animation Studios short film that was released on June 15, 2018</Subtitle>
      <Description>
        In "Bao," an aging Chinese mom suffering from empty nest syndrome gets another chance at motherhood when one of
        her dumplings springs to life as a lively, giggly dumpling boy. Mom excitedly welcomes this new bundle of joy
        into her life, but Dumpling starts growing up fast, and Mom must come to the bittersweet revelation that nothing
        stays cute and small forever. This short film from Pixar Animation Studios and director Domee Shi explores the
        ups and downs of the parent-child relationship through the colorful, rich, and tasty lens of the Chinese
        immigrant community in Canada.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 20vh;
  min-height: 170px;
  width: 30%;
  min-width: 200px;
  margin: 30px 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0 24px;
  margin-right: 22px;
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerBtn = styled(PlayBtn)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddBtn = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    color: rgb(249, 249, 249);
    font-size: 30px;
  }
`;

const GroupWatchBtn = styled(AddBtn)`
  background: #000;
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
