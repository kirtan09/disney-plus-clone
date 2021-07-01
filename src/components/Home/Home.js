import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImageSlider from '../ImageSlider/ImageSlider';
import Viewers from '../Viewers/Viewers';
import Recommends from '../Movies/Movies';
import db from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../../features/movie/movieSlice';
import { useHistory, withRouter } from 'react-router-dom';
import { selectUserName } from '../../features/user/userSlice';

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const history = useHistory();

  useEffect(() => {
    if (userName) {
      let recommends = [];
      let newDisney = [];
      let originals = [];
      let trending = [];
      db.collection('movies').onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          switch (doc.data().type) {
            case 'recommend':
              recommends.push({ id: doc.id, ...doc.data() });
              break;
            case 'new':
              newDisney.push({ id: doc.id, ...doc.data() });
              break;
            case 'original':
              originals.push({ id: doc.id, ...doc.data() });
              break;
            case 'trending':
              trending.push({ id: doc.id, ...doc.data() });
              break;
            default:
              break;
          }
        });
        dispatch(
          setMovies({
            recommends: recommends,
            newDisney: newDisney,
            originals: originals,
            trending: trending,
          })
        );
      });
    } else {
      history.push('/login');
    }
  }, [userName, dispatch, history]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
    </Container>
  );
}

export default withRouter(Home);

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;

  &:before {
    background: url('/images/home-background.png') center center / cover;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
