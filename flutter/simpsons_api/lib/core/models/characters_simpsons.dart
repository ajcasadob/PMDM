class CharactersSimpsonsResponse {
  final int count;
  final String? next;
  final String? prev;
  final int pages;
  final List<CharacterResult> results;

  CharactersSimpsonsResponse({
    required this.count,
    this.next,
    this.prev,
    required this.pages,
    required this.results,
  });

  factory CharactersSimpsonsResponse.fromJson(Map<String, dynamic> json) {
    return CharactersSimpsonsResponse(
      count: json['count'] as int,
      next: json['next'] as String?,
      prev: json['prev'] as String?,
      pages: json['pages'] as int,
      results: (json['results'] as List<dynamic>)
          .map((e) => CharacterResult.fromJson(e as Map<String, dynamic>))
          .toList(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'count': count,
      'next': next,
      'prev': prev,
      'pages': pages,
      'results': results.map((e) => e.toJson()).toList(),
    };
  }
}

class CharacterResult {
  final int id;
  final int age;
  final String birthdate;
  final String gender;
  final String name;
  final String occupation;
  final String portraitPath;
  final List<String> phrases;
  final String status;

  CharacterResult({
    required this.id,
    required this.age,
    required this.birthdate,
    required this.gender,
    required this.name,
    required this.occupation,
    required this.portraitPath,
    required this.phrases,
    required this.status,
  });

  factory CharacterResult.fromJson(Map<String, dynamic> json) {
    return CharacterResult(
      id: json['id'] as int,
      age: json['age'] as int,
      birthdate: json['birthdate'] as String,
      gender: json['gender'] as String,
      name: json['name'] as String,
      occupation: json['occupation'] as String,
      portraitPath: json['portrait_path'] as String,
      phrases: (json['phrases'] as List<dynamic>)
          .map((e) => e as String)
          .toList(),
      status: json['status'] as String,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'age': age,
      'birthdate': birthdate,
      'gender': gender,
      'name': name,
      'occupation': occupation,
      'portrait_path': portraitPath,
      'phrases': phrases,
      'status': status,
    };
  }
}