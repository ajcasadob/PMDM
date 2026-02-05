import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:the_movie_db/core/interface/people_list_interface.dart';
import 'package:the_movie_db/core/models/people_list_popular_response.dart';

class PeopleListService implements PeopleListInterface {

  final String apiBaseUrl= "https://api.themoviedb.org/3/person/popular";

  @override
  Future<List<Person>> getList() async {
    
    var response = await http.get(Uri.parse(apiBaseUrl));

    try{
      if(response.statusCode > 200 && response.statusCode <300){
        var peopleList = PeopleListPopularResponse.fromJson(jsonDecode(response.body)).results;
        return peopleList;
      }else{
        return [];
      }
    }catch(e){
      throw Exception("Error al obtener los actores");
    }
  }

}