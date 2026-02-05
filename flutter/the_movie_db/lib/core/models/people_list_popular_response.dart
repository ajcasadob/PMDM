class PeopleListPopularResponse {
  final int page;
  final List<Person> results;
  final int totalPages;
  final int totalResults;

  PeopleListPopularResponse({
    required this.page,
    required this.results,
    required this.totalPages,
    required this.totalResults,
  });

  factory PeopleListPopularResponse.fromJson(Map<String, dynamic> json) {
    return PeopleListPopularResponse(
      page: json['page'] ?? 0,
      results: (json['results'] as List<dynamic>?)
              ?.map((e) => Person.fromJson(e as Map<String, dynamic>))
              .toList() ??
          [],
      totalPages: json['total_pages'] ?? 0,
      totalResults: json['total_results'] ?? 0,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'page': page,
      'results': results.map((e) => e.toJson()).toList(),
      'total_pages': totalPages,
      'total_results': totalResults,
    };
  }
}

class Person {
  final bool adult;
  final int gender;
  final int id;
  final List<KnownFor> knownFor;
  final String knownForDepartment;
  final String name;
  final double popularity;
  final String? profilePath;

  Person({
    required this.adult,
    required this.gender,
    required this.id,
    required this.knownFor,
    required this.knownForDepartment,
    required this.name,
    required this.popularity,
    this.profilePath,
  });

  factory Person.fromJson(Map<String, dynamic> json) {
    return Person(
      adult: json['adult'] ?? false,
      gender: json['gender'] ?? 0,
      id: json['id'] ?? 0,
      knownFor: (json['known_for'] as List<dynamic>?)
              ?.map((e) => KnownFor.fromJson(e as Map<String, dynamic>))
              .toList() ??
          [],
      knownForDepartment: json['known_for_department'] ?? '',
      name: json['name'] ?? '',
      popularity: (json['popularity'] ?? 0).toDouble(),
      profilePath: json['profile_path'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'adult': adult,
      'gender': gender,
      'id': id,
      'known_for': knownFor.map((e) => e.toJson()).toList(),
      'known_for_department': knownForDepartment,
      'name': name,
      'popularity': popularity,
      'profile_path': profilePath,
    };
  }
}

class KnownFor {
  final bool? adult;
  final String? backdropPath;
  final List<int> genreIds;
  final int id;
  final String mediaType;
  final String originalLanguage;
  final String? originalTitle;
  final String? originalName;
  final String? overview;
  final String? posterPath;
  final String? releaseDate;
  final String? firstAirDate;
  final String? title;
  final String? name;
  final bool? video;
  final double voteAverage;
  final int voteCount;
  final List<String>? originCountry;

  KnownFor({
    this.adult,
    this.backdropPath,
    required this.genreIds,
    required this.id,
    required this.mediaType,
    required this.originalLanguage,
    this.originalTitle,
    this.originalName,
    this.overview,
    this.posterPath,
    this.releaseDate,
    this.firstAirDate,
    this.title,
    this.name,
    this.video,
    required this.voteAverage,
    required this.voteCount,
    this.originCountry,
  });

  factory KnownFor.fromJson(Map<String, dynamic> json) {
    return KnownFor(
      adult: json['adult'],
      backdropPath: json['backdrop_path'],
      genreIds: (json['genre_ids'] as List<dynamic>?)
              ?.map((e) => e as int)
              .toList() ??
          [],
      id: json['id'] ?? 0,
      mediaType: json['media_type'] ?? '',
      originalLanguage: json['original_language'] ?? '',
      originalTitle: json['original_title'],
      originalName: json['original_name'],
      overview: json['overview'],
      posterPath: json['poster_path'],
      releaseDate: json['release_date'],
      firstAirDate: json['first_air_date'],
      title: json['title'],
      name: json['name'],
      video: json['video'],
      voteAverage: (json['vote_average'] ?? 0).toDouble(),
      voteCount: json['vote_count'] ?? 0,
      originCountry: (json['origin_country'] as List<dynamic>?)
          ?.map((e) => e as String)
          .toList(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'adult': adult,
      'backdrop_path': backdropPath,
      'genre_ids': genreIds,
      'id': id,
      'media_type': mediaType,
      'original_language': originalLanguage,
      'original_title': originalTitle,
      'original_name': originalName,
      'overview': overview,
      'poster_path': posterPath,
      'release_date': releaseDate,
      'first_air_date': firstAirDate,
      'title': title,
      'name': name,
      'video': video,
      'vote_average': voteAverage,
      'vote_count': voteCount,
      'origin_country': originCountry,
    };
  }
}