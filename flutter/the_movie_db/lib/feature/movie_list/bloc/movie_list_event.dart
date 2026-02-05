part of 'movie_list_bloc.dart';

@immutable
sealed class MovieListEvent {}

final class MovieListFetchAllEvent extends MovieListEvent{}
