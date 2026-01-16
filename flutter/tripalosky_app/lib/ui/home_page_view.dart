import 'package:flutter/material.dart';
import 'package:tripalosky_app/shared/badge_custom_widget.dart';

class HomePageView extends StatelessWidget {
  const HomePageView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Hello, Vanessa')),
      floatingActionButton: FloatingActionButton(onPressed: (){},
      child: const Icon(Icons.search),

      ),
      body: Padding(padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Popular',style: TextStyle(fontSize: 24)),
          SizedBox(height: 16),
          BadgeCustomWidget(
            width: 120,
            label: 'Mountain',
            icon: Icons.terrain,
            color: Colors.brown,
          ),
        ],
      )),
      
      
    );
  }
}