
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:the_popcorn_movie/core/models/movie_list.dart';
import 'package:the_popcorn_movie/core/service/movie_list_service.dart';

part 'movie_list_event.dart';
part 'movie_list_state.dart';

class MovieListBloc extends Bloc<MovieListEvent, MovieListState> {
  final MovieListService service;
  
  MovieListBloc(this.service) : super(MovieListInitial()) {
    on<MovieListFetchAllEvent>((event, emit) async {
      emit(MovieListLoading());
      try {
        var apiMovieList = await service.getAllMovies(event.listType);
        emit(MovieListSuccess(movieList: apiMovieList));
      } catch (e) {
        emit(MovieListError(message: e.toString()));
      }
    });
  }
}