part of 'starwarslist_bloc.dart';

@immutable
sealed class StarwarslistState {}

final class StarwarslistInitial extends StarwarslistState {}

final class StarwarslistLoading extends StarwarslistState {}

final class StarwarslistSuccess extends StarwarslistState {
  final List<PersonResult> starWarsList;

  StarwarslistSuccess({required this.starWarsList});
}

final class StarwarslistError extends StarwarslistState {
  final String message;

  StarwarslistError({required this.message});
}
