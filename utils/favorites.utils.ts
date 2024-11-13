import type { MovieAndTvShow } from '~/model/movieAndTvShow/movieAndTvShow.model';
import LocalStorage from './localStorage.utils';

const _localStorage = new LocalStorage();

export const getStoredFavorites = (): MovieAndTvShow[] | [] =>{
  return (
    (_localStorage.getItem('movies') as MovieAndTvShow[]) ??
    ([] as MovieAndTvShow[])
  );
}

export const setStoredFavorites = (media: MovieAndTvShow[]): void => {
  if (media.length === 0) return _localStorage.removeItem('movies');
  _localStorage.setItem('movies', media);
}
