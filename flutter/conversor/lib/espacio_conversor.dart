import 'package:flutter/material.dart';

class EspacioConversor extends StatelessWidget {
  const EspacioConversor({
    super.key,
    required this.texto,
    required this.bgColor,
    required this.imagen,
    required this.textoDos
    });


  final String texto;
  final Color bgColor;
  final String imagen;
  final String textoDos;
  

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      height: 50,
      decoration: BoxDecoration(
        color: bgColor,
        borderRadius: BorderRadius.circular(10),
      ),
      child: Row(
        children: [
          Expanded(
            child: Text(
              texto,
              style: const TextStyle(
                fontSize: 24,
                color: Colors.black
              ),
            ),
          ),
          Expanded(
            child: Text(
              textoDos,
              style: const TextStyle(
                fontSize: 12,
                color: Colors.black
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Image.asset(
              imagen,
              width: 30,
              height: 30,
            ),
          ),
        ],
      ),
    );
  }
}
