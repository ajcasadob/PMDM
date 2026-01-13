import 'package:flutter/material.dart';


class UserInterfaz extends StatelessWidget {
  const UserInterfaz({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFE62F16),
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // Logo
                  Padding(
                    padding: const EdgeInsets.only(bottom: 24.0),
                    child: Image.asset(
                      'assets/images/path_logo.png',
                      width: 300,
                      height: 120,
                    ),
                  ),
                  // Subtítulo
                  const Text(
                    'Beautiful, Private Sharing',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 20,
                      fontWeight: FontWeight.w300,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
