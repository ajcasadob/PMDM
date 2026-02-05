import 'package:the_movie_db/core/models/people_list_popular_response.dart';

abstract class PeopleListInterface {
  Future<List<Person>> getList();
}