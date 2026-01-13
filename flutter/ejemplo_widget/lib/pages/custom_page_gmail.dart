import 'package:ejemplo_widget/shared/custom_widget_gmail.dart';
import 'package:flutter/material.dart';


class GmailPage extends StatelessWidget {
  const GmailPage({super.key});

 
 @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            
            GmailHeaderWidget(
              searchText: 'Buscar en el correo',
              onMenuTap: () {
                
              },
              onAvatarTap: () {
                
              },
            ),
           
            Expanded(
              child: Center(
                child: Text(
                  'Contenido del correo aquí',
                  style: TextStyle(color: Colors.grey),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}