
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:the_movie_db/core/models/movie_list_popular_response.dart';
import 'package:the_movie_db/core/service/movie_list_service.dart';

part 'movie_list_event.dart';
part 'movie_list_state.dart';

class MovieListBloc extends Bloc<MovieListEvent, MovieListState> {
  MovieListBloc(MovieListService service) : super(MovieListInitial()) {
    on<MovieListEvent>((event, emit) async{
      emit(MovieListLoading());
      try{

        final apiMovieList = await service.getList(MovieListType.popular);
        emit(MovieListSuccess(movieList: apiMovieList));
      }catch(e){
        emit(MovieListError(message: e.toString()));
      }
    
    });
  }
}
