
import 'package:aparcamiento_bicicleta/core/models/bicicleta_list_response.dart';
import 'package:aparcamiento_bicicleta/core/services/bicicleta_service.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter/material.dart';



part 'aparcamiento_list_event.dart';
part 'aparcamiento_list_state.dart';

class AparcamientoListBloc extends Bloc<AparcamientoListEvent, AparcamientoListState> {

  AparcamientoListBloc(BicicletaService bicicletaService) : super(AparcamientoListInitial()) {
    on<AparcamientoListFetchAllEvent>((event, emit) async {
      emit(AparcamientoListLoading());

      try{
        var apiAparcamientoList = await bicicletaService.getAllAparcamientos();
        emit(AparcamientoListSucess(bicicletaList: apiAparcamientoList));
      }catch(e){
        emit(AparcamientoListError(message: e.toString()));
      }
     
    });
  }
}
