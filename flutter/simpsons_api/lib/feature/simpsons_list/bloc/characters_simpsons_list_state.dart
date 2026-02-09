part of 'characters_simpsons_list_bloc.dart';

@immutable
sealed class CharactersSimpsonsListState {}

final class CharactersSimpsonsListInitial extends CharactersSimpsonsListState {}

final class CharactersSimpsonsListLoading extends CharactersSimpsonsListState {}

final class CharacterSimpsonsSuccess extends CharactersSimpsonsListState{
  final List<CharacterResult> characterList;

  CharacterSimpsonsSuccess({required this.characterList});
  
}

final class CharacterListError extends CharactersSimpsonsListState{
  final String message;

  CharacterListError({required this.message});
}




