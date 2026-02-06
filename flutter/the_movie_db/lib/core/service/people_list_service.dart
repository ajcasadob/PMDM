import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:the_movie_db/core/interface/people_list_interface.dart';
import 'package:the_movie_db/core/models/people_list_popular_response.dart';

class PeopleListService implements PeopleListInterface {

  final String apiBaseUrl= "https://api.themoviedb.org/3/person/popular";
  final String apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGZkNDRlYzA5YWFhZWQ3NjZiMWU3OWZmYTJkZGI0ZCIsIm5iZiI6MTc2MzM2NzgyNi42NDMwMDAxLCJzdWIiOiI2OTFhZGI5MjIxODEwZWU3NmExNzVkOGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GJOyb-QyZmabgnu0ENPhNah92cnPCClK6ozHSZp-WOU";
  @override
  Future<List<Person>> getList() async {
    
    final response = await http.get(Uri.parse(apiBaseUrl),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer $apiToken'
    });

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