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
import { CreateMovieDto, UpdateMovieDto } from './movies.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.movieService.getOne(id);
  }

  @Post()
  create(@Body() movie: CreateMovieDto) {
    return this.movieService.create(movie);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.movieService.delete(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: number, @Body() payload: UpdateMovieDto) {
    return this.movieService.update(id, payload);
  }
}
