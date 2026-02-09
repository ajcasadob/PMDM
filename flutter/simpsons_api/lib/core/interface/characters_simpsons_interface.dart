import 'package:simpsons_api/core/models/characters_simpsons.dart';

abstract class CharactersSimpsonsInterface {
  Future<List<CharacterResult>> getAllCharacters();
}