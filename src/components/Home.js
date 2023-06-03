import React, { useEffect } from 'react'
import styled from 'styled-components'
import Sliders from './Sliders'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'
import { useDispatch } from 'react-redux'
import {  setMovies } from '../features/movie/movieSlice'

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection('Movies').onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      
      dispatch(setMovies(tempMovies))

    });
  }, []);

  return (
    <Container>
      <Sliders />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height:calc(100vh - 70px);
  padding:0 calc(3.5vw + 5px);
  position:relative;
  overflow-x:hidden;

  &:after{
    content:'';
    position:absolute; 
    inset:0;
    background:url('/images/home-background.png') center center / cover no-repeat fixed;
    opacity:1;
    z-index:-1;
  }

`