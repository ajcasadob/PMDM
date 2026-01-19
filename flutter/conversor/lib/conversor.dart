import 'package:conversor/espacio_conversor.dart';
import 'package:conversor/widge_botton.dart';
import 'package:flutter/material.dart';

class Conversor extends StatelessWidget {
  const Conversor({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blueGrey,
      body: Column(
        
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
            Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              EspacioConversor(
              texto: '1014',
              textoDos: 'Balance: 246.34',
              imagen: 'assets/images/flag_china.png',
              bgColor: Colors.white,
              ),
              SizedBox(height: 8),
              EspacioConversor(
              texto: '1014',
              textoDos: 'Balance: 150.56',
              imagen: 'assets/images/flag_usa.png',
              bgColor: Colors.white,
              ),
            ],
            ),
          SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(width: 8),
              WidgeBotton(
                bgColor: Colors.white,
                numero: '1',
              ),
              SizedBox(width: 8),
              WidgeBotton(
                bgColor: Colors.white,
                numero: '2',
              ),SizedBox(width: 8),
              WidgeBotton(
                bgColor: Colors.white,
                numero: '3',
              ),
              
            ],
          ),
          SizedBox(height: 15),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(width: 8),
              WidgeBotton(
                bgColor: Colors.white,
                numero: '4',
              ),
              SizedBox(width: 8),
              WidgeBotton(
                bgColor: Colors.white,
                numero: '5',
              ),SizedBox(width: 8),
              WidgeBotton(
                bgColor: Colors.white,
                numero: '6',
              )
            ],
          ),
          SizedBox(height: 15),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(width: 8),
              WidgeBotton(
                bgColor: Colors.white,
                numero: '7',
              ),
              SizedBox(width: 8),
              WidgeBotton(
                bgColor: Colors.white,
                numero: '8',
              ),SizedBox(width: 8),
              WidgeBotton(
                bgColor: Colors.white,
                numero: '9',
              )
            ],
          ),
          SizedBox(height: 15),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(width: 8),
              WidgeBotton(
                bgColor: Colors.white,
                numero: '.',
              ),
              SizedBox(width: 8),
              WidgeBotton(
                bgColor: Colors.white,
                numero: '0',
              )
            ],
          ),
        ],

      ),
    );
  }
}