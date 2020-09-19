import { Injectable } from '@nestjs/common';
import { Movie } from './entities/Movie';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find(movie => movie.id === +id);
  }

  create(movie) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movie,
    });
  }

  delete(id: string): boolean {
    this.movies.filter(movie => movie.id !== +id);
    return true;
  }
}
