import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:the_popcorn_movie/feature/movie_list/bloc/movie_list_bloc.dart';

class MovieListWidget extends StatelessWidget {
  final MovieListBloc bloc;
  
  const MovieListWidget({super.key, required this.bloc});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<MovieListBloc, MovieListState>(
      bloc: bloc,
      builder: (context, state) {
        if (state is MovieListLoading) {
          return Center(child: CircularProgressIndicator());
        }
        
        if (state is MovieListSuccess) {
          return ListView.builder(
            itemCount: state.movieList.length,
            itemBuilder: (context, index) {
              final movie = state.movieList[index];
              return ListTile(
                leading: movie.posterPath != null
                  ? Image.network(
                      'https://image.tmdb.org/t/p/w92${movie.posterPath}',
                      width: 50,
                    )
                  : Icon(Icons.movie),
                
                title: Text(movie.title),
                
              );
            },
          );
        }
        
        if (state is MovieListError) {
          return Center(child: Text(state.message));
        }
        
        return Center(child: Text('Sin datos'));
      },
    );
  }
}