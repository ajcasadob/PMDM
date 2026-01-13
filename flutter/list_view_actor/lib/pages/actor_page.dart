import 'package:flutter/material.dart';
import '../shared/actor_card_widget.dart';

class ActorPage extends StatelessWidget {
  const ActorPage({super.key});

   @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Actores'),
        backgroundColor: Colors.red.shade700,
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Reparto Principal',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            
            // LISTVIEW HORIZONTAL
            SizedBox(
              height: 260,
              child: ListView(
                scrollDirection: Axis.horizontal,
                children: const [
                  ActorCardWidget(
                    name: 'Robert Downey Jr.',
                    character: 'Iron Man',
                    imageUrl: 'https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
                  ),
                  ActorCardWidget(
                    name: 'Chris Evans',
                    character: 'Captain America',
                    imageUrl: 'https://image.tmdb.org/t/p/w500/3bOGNsHlrswhyW79uvIHH1V43JI.jpg',
                  ),
                  ActorCardWidget(
                    name: 'Scarlett Johansson',
                    character: 'Black Widow',
                    imageUrl: 'https://image.tmdb.org/t/p/w500/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg',
                  ),
                  ActorCardWidget(
                    name: 'Chris Hemsworth',
                    character: 'Thor',
                    imageUrl: 'https://image.tmdb.org/t/p/w500/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg',
                  ),
                  ActorCardWidget(
                    name: 'Mark Ruffalo',
                    character: 'Hulk',
                    imageUrl: 'https://image.tmdb.org/t/p/w500/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg',
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