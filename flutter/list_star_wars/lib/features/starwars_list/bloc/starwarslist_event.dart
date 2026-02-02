part of 'starwarslist_bloc.dart';

@immutable
sealed class StarwarslistEvent {}

final class StarwarslistFetchAllEvent extends StarwarslistEvent {}
