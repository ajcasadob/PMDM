import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:simpsons_api/core/interface/characters_simpsons_interface.dart';
import 'package:simpsons_api/core/models/characters_simpsons.dart';

class CharactersSimpsonsService  implements CharactersSimpsonsInterface{



  @override
  Future<List<CharacterResult>> getAllCharacters() async{
   
    final apiKey = "https://thesimpsonsapi.com/api/characters";  
   
    try{

     final response = await http.get(
      Uri.parse(apiKey));
     
     if(response.statusCode >=200 && response.statusCode <=300){

      var listChamp = CharactersSimpsonsResponse.fromJson(jsonDecode(response.body)).results;
      return listChamp;
     }else{
      return [];
     }

    }catch(e){

      throw Exception("No hay ninguna lista de personasjes");
      
    }


  }
}