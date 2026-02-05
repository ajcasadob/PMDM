import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:the_movie_db/core/service/movie_list_service.dart';
import 'package:the_movie_db/feature/movie_list/bloc/movie_list_bloc.dart';
import 'package:the_movie_db/feature/ui/movie_list_widget.dart';

class MovieListPage extends StatelessWidget {
  const MovieListPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Movies'),
      ),
      body: BlocProvider(
        create: (context) => MovieListBloc(MovieListService())..add(MovieListFetchAllEvent()),
        child: BlocBuilder<MovieListBloc, MovieListState>(
          builder: (context, state) {
            if (state is MovieListLoading) {
              return const Center(child: CircularProgressIndicator());
            }
            
            if (state is MovieListError) {
              return Center(child: Text(state.message));
            }
            
            if (state is MovieListSuccess) {
              return MovieListWidget(movies: state.movieList);
            }
            
            return const Center(child: Text('No data'));
          },
        ),
      ),
    );
  }
}