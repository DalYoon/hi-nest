import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/Movie';
import { CreateMovieDto, UpdateMovieDto } from './movies.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find(movie => movie.id === id);
    if (!movie) {
      throw new NotFoundException('Movie Not Found');
    }
    return movie;
  }

  create(movie: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movie,
    });
  }

  delete(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== id);
  }

  update(id: number, payload: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.delete(id);
    this.movies.push({ ...movie, ...payload });
  }
}
