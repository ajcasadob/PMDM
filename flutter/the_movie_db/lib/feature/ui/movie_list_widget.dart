import 'package:flutter/material.dart';
import 'package:the_movie_db/core/models/movie_list_popular_response.dart';

class MovieListWidget extends StatelessWidget {
  final List<Movie> movies;
  
  const MovieListWidget({super.key, required this.movies});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      scrollDirection: Axis.horizontal,
      itemCount: movies.length,
      itemBuilder: (context, index) {
        final movie = movies[index];
        return Container(
          width: 150,
          margin: const EdgeInsets.all(8),
          child: Column(
            children: [
              Image.network(
                'https://image.tmdb.org/t/p/w500${movie.posterPath}',
                width: 150,
                height: 200,
                fit: BoxFit.cover,
              ),
              const SizedBox(height: 8),
              Text(
                movie.title,
                maxLines: 2,
                textAlign: TextAlign.center,
              ),
            ],
          ),
        );
      },
    );
  }
}