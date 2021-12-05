import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Detail() {
  const { id } = useParams();

  const [movie, setMovie] = useState();

  useEffect(() => {
    // Grab the movie from DB
    db.collection('Movies')
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
          // redirect to home page
        }
      });
  }, [id]);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img alt={movie.Title} src={movie.BackgroundImg} />
          </Background>
          <ImageTitle>
            <img alt={movie.Title} src={movie.TitleImg} />
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
          <Subtitle>{movie.Genres}</Subtitle>
          <Description>{movie.Description}</Description>
        </>
      )}
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
  margin-top: 40px;

  img {
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
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
  transition: all 250ms;
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
  max-width: 760px;
`;
