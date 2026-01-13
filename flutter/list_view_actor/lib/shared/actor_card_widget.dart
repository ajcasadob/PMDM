import 'package:flutter/material.dart';

class ActorCardWidget extends StatelessWidget {

  final String name;
  final String imageUrl;
  final String character;

  const ActorCardWidget({
    super.key,
    required this.name,
    required this.imageUrl,
    required this.character,
    });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 140,
      margin: const EdgeInsets.only(right: 12),
      child: Column(
        children: [
          // COMPONENTE 1: Imagen
          ClipRRect(
            borderRadius: BorderRadius.circular(8),
            child: Image.network(
              imageUrl,
              width: 140,
              height: 180,
              fit: BoxFit.cover,
            ),
          ),
          
          const SizedBox(height: 8),
          
          
          Text(
            name,
            style: const TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 14,
            ),
            maxLines: 2,
            textAlign: TextAlign.center,
          ),
          
          const SizedBox(height: 4),
          
          
          Text(
            character,
            style: const TextStyle(
              fontSize: 12,
              color: Colors.grey,
            ),
            maxLines: 1,
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}