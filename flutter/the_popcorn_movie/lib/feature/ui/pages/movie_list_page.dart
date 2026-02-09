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
    movieListBloc = MovieListBloc(service)
      ..add(MovieListFetchAllEvent(listType: listType));
    showPopular = true;
  }

  @override
  void dispose() {
    movieListBloc.close();
    super.dispose();
  }

  void _changeMovieList() {
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
      appBar: AppBar(
        title: Text("The movie db"),
        centerTitle: true,
      ),
      body: BlocBuilder<MovieListBloc, MovieListState>(
        bloc: movieListBloc,
        builder: (context, state) {
          return Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: ElevatedButton(
                  onPressed: state is MovieListLoading ? null : _changeMovieList,
                  child: Text(
                    showPopular ? 'Cambiar a Top Rated' : 'Cambiar a Popular',
                  ),
                ),
              ),
              Expanded(
                child: _buildBody(state),
              ),
            ],
          );
        },
      ),
    );
  }

  Widget _buildBody(MovieListState state) {
    if (state is MovieListLoading) {
      return Center(
        child: CircularProgressIndicator(),
      );
    } 
    
    if (state is MovieListSuccess) {
      if (state.movieList.isEmpty) {
        return Center(
          child: Text('No hay películas disponibles'),
        );
      }
      return MovieListWidget(movieList: state.movieList);
    } 
    
    if (state is MovieListError) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.error_outline, size: 48, color: Colors.red),
            SizedBox(height: 16),
            Text(
              'Error al cargar películas',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8),
            Text(state.message),
            SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                movieListBloc.add(MovieListFetchAllEvent(listType: listType));
              },
              child: Text('Reintentar'),
            ),
          ],
        ),
      );
    }
    
    return Center(child: Text('Estado desconocido'));
  }
}
