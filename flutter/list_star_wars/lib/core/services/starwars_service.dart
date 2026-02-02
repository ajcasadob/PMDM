import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:list_star_wars/core/interfaces/starwars_interface.dart';
import 'package:list_star_wars/core/models/starwars_list_response.dart';

class StarwarsService implements StarwarsInterface {
  final String _apiBaseUrl = "https://swapi.dev/api/people/";

  @override
  Future<List<PersonResult>> getAllPerson() async {
    var url = Uri.parse(_apiBaseUrl + '?limit=200&offset=0');

    try{
      var response = await http.get(url);

      if(response.statusCode == 200 || response.statusCode== 201){

        var starWarsListData = StarWarsListResponse.fromJson(jsonDecode(response.body));
        return starWarsListData.results;
      }else{
        return [];
      }

    }catch(e){
      return [];
    }
    
  }
}