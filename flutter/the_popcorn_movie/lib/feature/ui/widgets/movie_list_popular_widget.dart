import 'package:flutter/material.dart';
import 'package:the_popcorn_movie/core/models/movie_list.dart';

class MovieListWidget extends StatelessWidget {
  final List<MovieResult> movieList; // Asume que tu modelo se llama Movie
  
  const MovieListWidget({super.key, required this.movieList});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: movieList.length,
      itemBuilder: (context, index) {
        final movie = movieList[index];
        return ListTile(
          leading: movie.posterPath != null
            ? Image.network(
                'https://image.tmdb.org/t/p/w92${movie.posterPath}',
                width: 50,
                fit: BoxFit.cover,
              )
            : const Icon(Icons.movie),
          
          title: Text(movie.title),
          subtitle: Text(movie.releaseDate),
        );
      },
    );
  }
}
