import React, { useEffect } from 'react';
import './App.css';
import Tmbd from './tmdb';

export default () => {

  useEffect(() => {
    const loadAll = async () => {
        let list = await Tmbd.getHomeList();
        setMovieList(list);
    }

    loadAll();
  }, [])

  return (
    <div className="App">
      <h1>Olá Mundo</h1>
    </div>
  );

}