import 'package:calculadora/shared/widget_button_personalizado.dart';
import 'package:flutter/material.dart';

class Calculadora extends StatelessWidget {
  const Calculadora({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(width: 8),
              WidgetButtonPersonalizado(
                bgColor: Colors.grey,
                button: '<-',
              
              ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.grey,
            button: 'AC',
           
          ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.grey,
            button: '%',
            
          ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.orange,
            button: '/',
           
              ),
              
            ],
          ),
          SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(width: 8),
              WidgetButtonPersonalizado(
                bgColor: Colors.grey,
                button: '7',
              
              ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.grey,
            button: '8',
           
          ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.grey,
            button: '9',
            
          ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.orange,
            button: 'x',
           
              ),
              
            ],
          ),
          SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(width: 8),
              WidgetButtonPersonalizado(
                bgColor: Colors.grey,
                button: '4',
              
              ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.grey,
            button: '5',
           
          ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.grey,
            button: '6',
            
          ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.orange,
            button: '-',
           
              ),
              
            ],
          ),
          SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(width: 8),
              WidgetButtonPersonalizado(
                bgColor: Colors.grey,
                button: '1',
              
              ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.grey,
            button: '2',
           
          ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.grey,
            button: '3',
            
          ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.orange,
            button: '+',
           
              ),
              
            ],
          ),
          SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(width: 8),
              WidgetButtonPersonalizado(
                bgColor: Colors.grey,
                button: '+/-',
              
              ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.grey,
            button: '0',
           
          ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.grey,
            button: '.',
            
          ),
          SizedBox(width: 8),
          WidgetButtonPersonalizado(
            bgColor: Colors.orange,
            button: '=',
           
              ),
              
            ],
          ),
          
          
          
          
          
        ],
        
        
      
        
      ),

      backgroundColor: Colors.black,
      
    );
  }
}