import 'package:flutter/material.dart';

class WidgetButtonPersonalizado extends StatelessWidget {
  const WidgetButtonPersonalizado({
    super.key,
    required this.bgColor,
    required this.button,
   
    
    });

    final Color bgColor;
    final String button;
    //final String operador;
    


  
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 70,
      height: 70,
      decoration: BoxDecoration(
        color: bgColor,
        borderRadius: BorderRadius.circular(35),
      ),
      child: Center(
        child: Text(
          button,
          style: const TextStyle(
            fontSize: 24,
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}