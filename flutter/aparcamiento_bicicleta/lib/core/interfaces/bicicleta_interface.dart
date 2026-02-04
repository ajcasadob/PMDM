import 'package:aparcamiento_bicicleta/core/models/bicicleta_list_response.dart';

abstract class BicicletaInterface {

  Future<List<Bicicleta>> getAllAparcamientos ();
}