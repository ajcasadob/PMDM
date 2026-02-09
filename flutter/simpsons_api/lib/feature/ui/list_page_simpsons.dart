import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:simpsons_api/core/service/characters_simpsons_service.dart';

import 'package:simpsons_api/feature/simpsons_list/bloc/characters_simpsons_list_bloc.dart';

class ListPageSimpsons extends StatefulWidget {
  const ListPageSimpsons({super.key});

  @override
  State<ListPageSimpsons> createState() => _ListPageSimpsonsState();
}

class _ListPageSimpsonsState extends State<ListPageSimpsons> {
  late CharactersSimpsonsListBloc listBloc;

  @override
  void initState() {
    super.initState();
    listBloc = CharactersSimpsonsListBloc(CharactersSimpsonsService())
      ..add(CharactersGethAll());
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Lista de los Simpsons',
          style: TextStyle(color: Colors.amberAccent),
        ),
        backgroundColor: Colors.blue,
      ),
      body:
          BlocBuilder<CharactersSimpsonsListBloc, CharactersSimpsonsListState>(
            bloc: listBloc,
            builder: (context, state){
              if(state is CharactersSimpsonsListLoading){

                return Center(child: CircularProgressIndicator());
              }else if (state is CharacterSimpsonsSuccess){
                return SizedBox(
                  width: double.infinity,
                  height: 500,
                  child: Center(
                    child: SizedBox(
                      width: double.infinity,
                      height: 280,
                      child: ListView.builder(
                      scrollDirection: Axis.horizontal,
                      itemCount: state.characterList.length,
                      itemBuilder:(context, index){
                        var personaje = state.characterList[index];
                        return Text(personaje.name);
                      }
                      
                      ),
                    ),
                  )
                );
              }else if (state is CharacterListError){
                return Center(child: Text(state.message));
              }else{
                return Center(child: Text("No hay na que comer"));
              }
            },
          ),
    );
  }
}
