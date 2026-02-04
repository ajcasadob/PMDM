import 'dart:convert';

import 'package:aparcamiento_bicicleta/core/interfaces/bicicleta_interface.dart';
import 'package:aparcamiento_bicicleta/core/models/bicicleta_list_response.dart';
import 'package:http/http.dart' as hhtp;

class BicicletaService implements BicicletaInterface{

  final String _apiBaseUrl = "https://valencia.opendatasoft.com/api/explore/v2.1/catalog/datasets/aparcaments-bicicletes-aparcamientos-bicicletas/records?limit=20";

  @override
  Future<List<Bicicleta>> getAllAparcamientos() async {
   
   var url = Uri.parse(_apiBaseUrl);

   try{
    var response = await hhtp.get(url);

    if(response.statusCode == 200){
      var bicicletasResponseList = BicicletaResponse.fromJson(jsonDecode(response.body));
      return bicicletasResponseList.results;
    }else{
      return [];
    }

   }catch(e){
    return [];
   }
  }

  
}