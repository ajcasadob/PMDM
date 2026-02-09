import 'package:the_popcorn_movie/core/models/movie_list.dart';
import 'package:the_popcorn_movie/core/service/movie_list_service.dart';

abstract class MovieListInterface {
  Future<List<MovieResult>> getAllMovies(MovieListType listType);
}