import 'package:flutter/material.dart';

class WidgeBotton extends StatelessWidget {
  const WidgeBotton({
    

    super.key,
    required this.numero,
    required this.bgColor
    });

    final String numero;
    final Color bgColor;


  @override
  Widget build(BuildContext context) {
    return Container(
      width: 70,
      height: 50,
      decoration: BoxDecoration(

        color: bgColor,
        borderRadius: BorderRadius.circular(10),
        
        
      ),
      child: Center(
        child: Text(
          numero,
          style: const TextStyle(
            fontSize: 24,
            color: Colors.black,
          ),
        ),
      ),
      



    );
  }
}