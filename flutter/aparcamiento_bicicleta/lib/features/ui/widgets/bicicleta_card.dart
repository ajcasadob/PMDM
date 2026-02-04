import 'package:aparcamiento_bicicleta/core/models/bicicleta_list_response.dart';
import 'package:flutter/material.dart';

class BicicletaCard extends StatelessWidget {
  final Bicicleta bicicleta;

  const BicicletaCard({
    super.key,
    required this.bicicleta,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      elevation: 2,
      child: ListTile(
        leading: CircleAvatar(
          backgroundColor: Colors.blue,
          child: const Icon(
            Icons.pedal_bike,
            color: Colors.white,
          ),
        ),
        title: Text(
          bicicleta.tipo,
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 16,
          ),
        ),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 4),
            Row(
              children: [
                const Icon(Icons.pin_drop, size: 16, color: Colors.grey),
                const SizedBox(width: 4),
                Text(
                  'Lat: ${bicicleta.geoPoint2D.lat.toStringAsFixed(4)}, Lon: ${bicicleta.geoPoint2D.lon.toStringAsFixed(4)}',
                  style: const TextStyle(fontSize: 12),
                ),
              ],
            ),
          ],
        ),
        trailing: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
          decoration: BoxDecoration(
            color: Colors.green.shade100,
            borderRadius: BorderRadius.circular(12),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                '${bicicleta.numplazas}',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                  color: Colors.green.shade800,
                ),
              ),
              Text(
                'plazas',
                style: TextStyle(
                  fontSize: 10,
                  color: Colors.green.shade800,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
