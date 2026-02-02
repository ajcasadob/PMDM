import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:list_star_wars/core/services/starwars_service.dart';
import 'package:list_star_wars/features/starwars_list/bloc/starwarslist_bloc.dart';

class StarWarsListPage extends StatefulWidget {
  const StarWarsListPage({super.key});

  @override
  State<StarWarsListPage> createState() => _StarWarsListPageState();
}

class _StarWarsListPageState extends State<StarWarsListPage> {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => StarwarslistBloc(StarwarsService())
        ..add(StarwarslistFetchAllEvent()),
      child: Scaffold(
        appBar: AppBar(
          title: const Text('Star Wars Characters'),
          backgroundColor: Colors.black,
          foregroundColor: Colors.yellow,
        ),
        body: BlocBuilder<StarwarslistBloc, StarwarslistState>(
          builder: (context, state) {
            if (state is StarwarslistLoading) {
              return const Center(
                child: CircularProgressIndicator(
                  color: Colors.yellow,
                ),
              );
            } else if (state is StarwarslistSuccess) {
              return ListView.builder(
                itemCount: state.starWarsList.length,
                itemBuilder: (context, index) {
                  final character = state.starWarsList[index];
                  return Card(
                    margin: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 8,
                    ),
                    child: ListTile(
                      leading: CircleAvatar(
                        backgroundColor: Colors.black,
                        child: Text(
                          character.name[0].toUpperCase(),
                          style: const TextStyle(color: Colors.yellow),
                        ),
                      ),
                      title: Text(
                        character.name,
                        style: const TextStyle(fontWeight: FontWeight.bold),
                      ),
                      subtitle: Text(
                        'Gender: ${character.gender} | Birth Year: ${character.birthYear}',
                      ),
                      trailing: const Icon(Icons.arrow_forward_ios),
                      onTap: () {
                        // Aquí podrías navegar a una página de detalles
                      },
                    ),
                  );
                },
              );
            } else if (state is StarwarslistError) {
              return Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Icon(
                      Icons.error_outline,
                      color: Colors.red,
                      size: 60,
                    ),
                    const SizedBox(height: 16),
                    Text(
                      'Error: ${state.message}',
                      style: const TextStyle(color: Colors.red),
                      textAlign: TextAlign.center,
                    ),
                  ],
                ),
              );
            }
            return const Center(child: Text('Inicializando...'));
          },
        ),
      ),
    );
  }
}