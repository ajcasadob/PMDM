import 'package:flutter/material.dart';

class ButtonCalculadora extends StatelessWidget {
  const ButtonCalculadora({
    

    super.key,
    required this.bgColor,
    required this.icon,
    required this.iconColor,
    required this.button,
    required this.buttonText,
    
    });

  final Color bgColor;
  final IconData icon;
  final Color iconColor;
  final int button;
  final String buttonText;
  


  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 70,
      height: 70,
      child: ElevatedButton(
        onPressed: () {
          // Acción al presionar el botón
        },
        style: ElevatedButton.styleFrom(
          shape: const CircleBorder(),
          padding: const EdgeInsets.all(20),
          backgroundColor: bgColor, // Color de fondo del botón
        ),
        child: Icon(
          icon,
          color: iconColor, 
          size: 30,
          
        ),
        
      ),
    );
  }
}