import 'package:flutter/material.dart';
import 'package:the_movie_db/feature/ui/movie_list_page.dart';
import 'package:the_movie_db/feature/ui/people_list_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Movie db',
      initialRoute: '/',
      routes: {
        '/':(context) => const MovieListPage(),
        '/personas': (context) => const PeopleListPage()

      },
      theme: ThemeData(
       
        colorScheme: .fromSeed(seedColor: Colors.deepPurple),
      ),
      home: MovieListPage(),
    );
  }
}
