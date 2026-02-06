import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:the_movie_db/core/service/people_list_service.dart';
import 'package:the_movie_db/feature/people_list/bloc/people_list_bloc.dart';
import 'package:the_movie_db/feature/ui/people_list_widget.dart';

class PeopleListPage extends StatelessWidget {
  const PeopleListPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Personas'),
      ),
      body: BlocProvider(
        create: (context)=> PeopleListBloc(PeopleListService())..add(PeopleListFetchAllEvent()),
        child: BlocBuilder<PeopleListBloc,PeopleListState>(
          builder: (context,state){
            if(state is PeopleListLoading){
              return const Center(child: CircularProgressIndicator());
            }

            if (state is PeopleListError){
              return Center(child: Text(state.message));
            }
            if (state is PeopleListSuccess){
              return PeopleListWidget(peoples: state.peopleList);
            }
            return const Center(child:Text('No data'));
          },
        ),
      ),
    );
  }
}