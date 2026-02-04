part of 'aparcamiento_list_bloc.dart';

@immutable
sealed class AparcamientoListState {}

final class AparcamientoListInitial extends AparcamientoListState {}

final class AparcamientoListLoading extends AparcamientoListState {}

final class AparcamientoListSucess extends AparcamientoListState{
  
  final List<Bicicleta> bicicletaList;
  AparcamientoListSucess({required this.bicicletaList});
}

final class AparcamientoListError extends AparcamientoListState{
  final String message;


  AparcamientoListError({required this.message});
}
