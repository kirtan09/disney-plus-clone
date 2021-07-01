import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectMovies } from '../../features/movie/movieSlice';
import { Link } from 'react-router-dom';

function Movies() {
  const movies = useSelector(selectMovies);

  if (!movies.recommends) return null;

  return (
    <Container>
      {Object.entries(movies).map(([key, values]) => {
        let heading = '';
        switch (key) {
          case 'recommends':
            heading = 'Recommended for you';
            break;
          case 'newDisney':
            heading = 'New to Disney+';
            break;
          case 'originals':
            heading = 'Originals';
            break;
          case 'trending':
            heading = 'Trending';
            break;
          default:
            break;
        }
        return (
          <>
            <h4>{heading}</h4>
            <Content>
              {values.map((movie) => {
                return (
                  <Wrap key={movie.id}>
                    <Link to={`/details/${movie.id}`}>
                      <img src={movie.cardImg} alt={movie.title} />
                    </Link>
                  </Wrap>
                );
              })}
            </Content>
          </>
        );
      })}
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
  }
`;
