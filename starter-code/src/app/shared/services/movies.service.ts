import { Movie } from './../models/movie.model';
import { Injectable } from '@angular/core';
import moviesMock from '../data/movies.data';

@Injectable()
export class MoviesService {
  movies = moviesMock;

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id): Movie {
    return this.movies.find(el => {
      return el.id === id;
    });
  }
}
