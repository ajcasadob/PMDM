




import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:the_movie_db/core/interface/movie_list_interface.dart';
import 'package:the_movie_db/core/models/movie_list_popular_response.dart';

enum MovieListType{
  popular("popular"),
  topRated("top_rated"),
  nowPlaying("now_playing"),
  upcoming("upcoming");


  final String value;

  const MovieListType(this.value);
}


class MovieListService implements MovieListInterface{

  final String apiBaseUrl = "https://api.themoviedb.org/3/movie";
  final String apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGZkNDRlYzA5YWFhZWQ3NjZiMWU3OWZmYTJkZGI0ZCIsIm5iZiI6MTc2MzM2NzgyNi42NDMwMDAxLCJzdWIiOiI2OTFhZGI5MjIxODEwZWU3NmExNzVkOGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GJOyb-QyZmabgnu0ENPhNah92cnPCClK6ozHSZp-WOU";

  @override
  Future<List<Movie>> getList(MovieListType listType) async{
  try{
    final response = await http.get(
      Uri.parse("$apiBaseUrl/${listType.value}"),
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer $apiToken',
      },
    );

    
      if(response.statusCode >=200 && response.statusCode <300){
        var movieList = MovieListPopularResponse.fromJson(jsonDecode(response.body)).results;
        return movieList;
      }else{
        return [];
      }
    }catch(e){
      throw Exception("Error al obtener las películas");
    }
  
  
  }

}