

import 'package:list_star_wars/core/models/starwars_list_response.dart';

abstract class StarwarsInterface {
  Future<List<PersonResult>> getAllPerson();
}