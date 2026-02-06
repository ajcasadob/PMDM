import 'package:flutter/material.dart';
import 'package:the_movie_db/core/models/people_list_popular_response.dart';

class PeopleListWidget extends StatelessWidget {
final List<Person> peoples;

  const PeopleListWidget({super.key, required this.peoples});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      scrollDirection: Axis.horizontal,
      itemCount: peoples.length,
      itemBuilder: (context, index){
        final people = peoples[index];
        return Container(
          width: 150,
          margin: const EdgeInsets.all(8),
          child: Column(
            children: [
              Image.network(
                'https://image.tmdb.org/t/p/w500${people.profilePath}',
                width: 150,
                height: 200,
                fit: BoxFit.cover,
              ),
              const SizedBox(height: 8),
              Text(
                people.name,
                maxLines: 2,
                textAlign: TextAlign.center,
              )
            ],
          ),
        );

      }
    );
  }
}