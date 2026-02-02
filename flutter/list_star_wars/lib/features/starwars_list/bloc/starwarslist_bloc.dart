import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:list_star_wars/core/models/starwars_list_response.dart';
import 'package:list_star_wars/core/services/starwars_service.dart';

part 'starwarslist_event.dart';
part 'starwarslist_state.dart';

class StarwarslistBloc extends Bloc<StarwarslistEvent, StarwarslistState> {
  StarwarslistBloc(StarwarsService starwarsService) : super(StarwarslistInitial()) {
    on<StarwarslistFetchAllEvent>((event, emit) async {
      emit(StarwarslistLoading());
      try {
        var apiStarWarsList = await starwarsService.getAllPerson();
        emit(StarwarslistSuccess(starWarsList: apiStarWarsList));
      } catch (e) {
        emit(StarwarslistError(message: e.toString()));
      }
    });
  }
}
