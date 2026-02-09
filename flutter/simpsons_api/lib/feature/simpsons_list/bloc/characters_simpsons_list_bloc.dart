
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:simpsons_api/core/models/characters_simpsons.dart';
import 'package:simpsons_api/core/service/characters_simpsons_service.dart';

part 'characters_simpsons_list_event.dart';
part 'characters_simpsons_list_state.dart';

class CharactersSimpsonsListBloc extends Bloc<CharactersSimpsonsListEvent, CharactersSimpsonsListState> {
  CharactersSimpsonsListBloc(CharactersSimpsonsService service) : super(CharactersSimpsonsListInitial()) {
    on<CharactersSimpsonsListEvent>((event, emit) async {

      emit(CharactersSimpsonsListLoading());

      try{

        var listChamp = await service.getAllCharacters();
        emit(CharacterSimpsonsSuccess(characterList: listChamp));

      }catch(e){
        emit(CharacterListError(message: e.toString()));
      }


    
    });
  }
}
