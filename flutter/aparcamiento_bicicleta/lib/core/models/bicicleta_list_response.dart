class BicicletaResponse {
  final int totalCount;
  final List<Bicicleta> results;

  BicicletaResponse({
    required this.totalCount,
    required this.results,
  });

  factory BicicletaResponse.fromJson(Map<String, dynamic> json) {
    return BicicletaResponse(
      totalCount: json['total_count'] as int,
      results: (json['results'] as List)
          .map((item) => Bicicleta.fromJson(item))
          .toList(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'total_count': totalCount,
      'results': results.map((item) => item.toJson()).toList(),
    };
  }
}

class Bicicleta {
  final String tipo;
  final int objectid;
  final int numplazas;
  final GeoShape geoShape;
  final GeoPoint2D geoPoint2D;

  Bicicleta({
    required this.tipo,
    required this.objectid,
    required this.numplazas,
    required this.geoShape,
    required this.geoPoint2D,
  });

  factory Bicicleta.fromJson(Map<String, dynamic> json) {
    return Bicicleta(
      tipo: json['tipo'] as String,
      objectid: json['objectid'] as int,
      numplazas: json['numplazas'] as int,
      geoShape: GeoShape.fromJson(json['geo_shape']),
      geoPoint2D: GeoPoint2D.fromJson(json['geo_point_2d']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'tipo': tipo,
      'objectid': objectid,
      'numplazas': numplazas,
      'geo_shape': geoShape.toJson(),
      'geo_point_2d': geoPoint2D.toJson(),
    };
  }
}

class GeoShape {
  final String type;
  final Geometry geometry;
  final Map<String, dynamic> properties;

  GeoShape({
    required this.type,
    required this.geometry,
    required this.properties,
  });

  factory GeoShape.fromJson(Map<String, dynamic> json) {
    return GeoShape(
      type: json['type'] as String,
      geometry: Geometry.fromJson(json['geometry']),
      properties: json['properties'] as Map<String, dynamic>,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'type': type,
      'geometry': geometry.toJson(),
      'properties': properties,
    };
  }
}

class Geometry {
  final List<double> coordinates;
  final String type;

  Geometry({
    required this.coordinates,
    required this.type,
  });

  factory Geometry.fromJson(Map<String, dynamic> json) {
    return Geometry(
      coordinates: (json['coordinates'] as List).map((e) => e as double).toList(),
      type: json['type'] as String,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'coordinates': coordinates,
      'type': type,
    };
  }
}

class GeoPoint2D {
  final double lon;
  final double lat;

  GeoPoint2D({
    required this.lon,
    required this.lat,
  });

  factory GeoPoint2D.fromJson(Map<String, dynamic> json) {
    return GeoPoint2D(
      lon: json['lon'] as double,
      lat: json['lat'] as double,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'lon': lon,
      'lat': lat,
    };
  }
}