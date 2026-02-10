import 'package:flutter/material.dart';

class Formulario extends StatefulWidget {
  const Formulario({super.key});

  @override
  State<Formulario> createState() => _FormularioState();
}

class _FormularioState extends State<Formulario> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController _passController = TextEditingController();
  String? _sexoSeleccionado;
  final List<String> _opcionesSexo = ['Masculino','Femenino','Arbol'];

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding:EdgeInsets.only(
        bottom: MediaQuery.of(context).viewInsets.bottom,
      ),
      child: SingleChildScrollView(
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              const Text('Nuevo usuario',style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold)),

              TextFormField(
                decoration: const InputDecoration(labelText: 'Nombre'),
                validator: (value)=> value == null || value.isEmpty ? 'Introduce nombre': null,
              ),

              TextFormField(
                decoration: const InputDecoration(labelText: 'Apellidos'),
                validator: (value)=> value == null || value.isEmpty ? 'Introduce apellidos':null,
              ),

              TextFormField(
                decoration: const InputDecoration(labelText: 'Email'),
                validator: (value)=> (value == null || !value.contains('@')) ? 'Email no válido ': null,
              ),

              TextFormField(
                controller: _passController,
                obscureText: true,
                decoration: const InputDecoration(labelText: 'Contraseña'),
                validator: (value)=>(value == null || value.length <6 )? 'Mínimo 6 caracteres': null,
              ),

              TextFormField(
                obscureText: true,
                decoration: const InputDecoration(labelText: 'Confirmar contraseña'),
                validator: (value)=> value!= _passController.text ? 'No coinciden': null,
              ),

              DropdownButtonFormField<String>(
                decoration: const InputDecoration(labelText: 'Sexo'),
                items: _opcionesSexo.map((s) => DropdownMenuItem(value: s, child: Text(s))).toList(),
                onChanged: (val) => setState(() => _sexoSeleccionado = val),
                validator:(value)=> value == null ? 'Selecciona una opción':null,
                
                ),
                
                
              
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  if(_formKey.currentState!.validate()){
                    Navigator.pop(context);
                    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Usuario creado')));
                  }
                },
                child: const Text('Registar'),
                
              ),


            ],
          ),
        ),
      ), 
      ); 
  }
}
