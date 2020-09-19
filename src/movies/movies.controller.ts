import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/Movie';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.movieService.getOne(id);
  }

  @Post()
  create(@Body() movie) {
    return this.movieService.create(movie);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() payload) {
    return {
      id: movieId,
      ...payload,
    };
  }
}
