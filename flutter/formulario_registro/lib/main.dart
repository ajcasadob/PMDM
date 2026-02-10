import 'package:flutter/material.dart';
import 'package:formulario_registro/ui/formulario.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Mi app')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          showModalBottomSheet(
            context: context,
            isScrollControlled: true,
            builder: (BuildContext context){
              return const Padding(
                padding:EdgeInsets.all(16.0),
                child: Formulario(),
                );
            }
          );
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}

