import 'package:the_movie_db/core/models/movie_list_popular_response.dart';
import 'package:the_movie_db/core/service/movie_list_service.dart';

abstract class MovieListInterface {
  Future<List<Movie>> getList(MovieListType listType);
}