import 'package:aparcamiento_bicicleta/core/services/bicicleta_service.dart';
import 'package:aparcamiento_bicicleta/features/aparcamiento_list/bloc/aparcamiento_list_bloc.dart';
import 'package:aparcamiento_bicicleta/features/ui/widgets/bicicleta_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class AparcamientoListPage extends StatefulWidget {
  const AparcamientoListPage({super.key});

  @override
  State<AparcamientoListPage> createState() => _AparcamientoListPageState();
}

class _AparcamientoListPageState extends State<AparcamientoListPage> {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => AparcamientoListBloc(BicicletaService())
        ..add(AparcamientoListFetchAllEvent()),
      child: Scaffold(
        appBar: AppBar(
          title: const Text('Aparcamientos de Bicicletas'),
          backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        ),
        body: BlocBuilder<AparcamientoListBloc, AparcamientoListState>(
          builder: (context, state) {
            if (state is AparcamientoListLoading) {
              return const Center(
                child: CircularProgressIndicator(),
              );
            } else if (state is AparcamientoListSucess) {
              return ListView.builder(
                itemCount: state.bicicletaList.length,
                itemBuilder: (context, index) {
                  final bicicleta = state.bicicletaList[index];
                  return BicicletaCard(bicicleta: bicicleta);
                },
              );
            } else if (state is AparcamientoListError) {
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
                      'Error al cargar los datos',
                      style: Theme.of(context).textTheme.titleLarge,
                    ),
                    const SizedBox(height: 8),
                    Text(
                      state.message,
                      textAlign: TextAlign.center,
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                  ],
                ),
              );
            }
            return const Center(
              child: Text('Cargando...'),
            );
          },
        ),
      ),
    );
  }
}