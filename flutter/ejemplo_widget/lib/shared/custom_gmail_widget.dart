import 'package:flutter/material.dart';

class GmailCustom extends StatelessWidget {
  const GmailCustom({
    super.key,
    required this.icon,
    required this.text,
    required this.label,
  });


  final Icon icon;
  final Text text;
  final String label;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(label),
      ),
      body: Center(
        child: Container(
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: Colors.red,
            borderRadius: BorderRadius.circular(8),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              icon,
              const SizedBox(height: 10),
              text,
            ],
          ),
        ),
      ),
    );
  }
}