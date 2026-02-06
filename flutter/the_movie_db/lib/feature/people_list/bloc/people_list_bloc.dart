
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:the_movie_db/core/interface/people_list_interface.dart';
import 'package:the_movie_db/core/models/people_list_popular_response.dart';

part 'people_list_event.dart';
part 'people_list_state.dart';

class PeopleListBloc extends Bloc<PeopleListEvent, PeopleListState> {
  final PeopleListInterface peopleListService;
  
  PeopleListBloc(this.peopleListService) : super(PeopleListInitial()) {
    on<PeopleListFetchAllEvent>(_onFetchAll);
  }

  Future<void> _onFetchAll(
    PeopleListFetchAllEvent event,
    Emitter<PeopleListState> emit,
  ) async {
    emit(PeopleListLoading());
    try {
      final peopleList = await peopleListService.getList();
      emit(PeopleListSuccess(peopleList: peopleList));
    } catch (e) {
      emit(PeopleListError(message: e.toString()));
    }
  }
}
