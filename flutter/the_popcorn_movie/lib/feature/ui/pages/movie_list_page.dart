// pages/movie_list_page.dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:the_popcorn_movie/core/service/movie_list_service.dart';
import 'package:the_popcorn_movie/feature/movie_list/bloc/movie_list_bloc.dart';
import 'package:the_popcorn_movie/feature/ui/widgets/movie_list_popular_widget.dart';

class MovieListPage extends StatefulWidget {
  const MovieListPage({super.key});

  @override
  State<MovieListPage> createState() => _MovieListPageState();
}

class _MovieListPageState extends State<MovieListPage> {
  late MovieListBloc movieListBloc;
  MovieListService service = MovieListService();
  late MovieListType listType;
  late bool showPopular;

  @override
  void initState() {
    super.initState();
    listType = MovieListType.popular;
    movieListBloc = MovieListBloc(service)..add(MovieListFetchAllEvent(listType: listType));
    showPopular = true;
  }

  void _toggleMovieList() {
    setState(() {
      showPopular = !showPopular;
      listType = showPopular
            ? MovieListType.popular
            : MovieListType.topRated;
    });
    movieListBloc.add(MovieListFetchAllEvent(listType: listType));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("The movie db")),
      body: BlocBuilder<MovieListBloc, MovieListState>(
        bloc: movieListBloc,
        builder: (context, state) {
          if (state is MovieListLoading) {
            return Center(child: CircularProgressIndicator());
          } else if (state is MovieListSuccess) {
            return Column(
              children: [
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: ElevatedButton(
                    onPressed: _toggleMovieList,
                    child: Text(
                      showPopular ? 'Cambiar a Top Rated' : 'Cambiar a Popular',
                    ),
                  ),
                ),
                Expanded(child: MovieListWidget(bloc: movieListBloc)),
              ],
            );
          } else if (state is MovieListError) {
            return Center(
              child: CircularProgressIndicator(),
            );
          }
          return Center(child: Text('Estado desconocido'));
        },
      ),
    );
  }
}
