import { EstacionMunicipio } from "./estacion-municipio.interface";

export interface EstacionMunicipioMap {
    cp: string;
    direccion: string;
    horario: string;
    latitud: string;
    localidad: string;
    longitud: string;
    margen: string;
    municipio: string;
    precioAdblue: string;
    precioAmoniaco: string;
    precioBiodiesel: string;
    precioBioetanol: string;
    precioBiogasNaturalComprimido: string;
    precioBiogasNaturalLicuado: string;
    precioDieselRenovable: string;
    precioGasNaturalComprimido: string;
    precioGasNaturalLicuado: string;
    precioGlp: string;
    precioGasoleoA: string;
    precioGasoleoB: string;
    precioGasoleoPremium: string;
    precioGasolina95E10: string;
    precioGasolina95E25: string;
    precioGasolina95E5: string;
    precioGasolina95E5Premium: string;
    precioGasolina95E85: string;
    precioGasolina98E10: string;
    precioGasolina98E5: string;
    precioGasolinaRenovable: string;
    precioHidrogeno: string;
    precioMetanol: string;
    provincia: string;
    remision: string;
    rotulo: string;
    tipoVenta: string;
    bioetanol: string;
    esterMetilico: string;
    ideess: string;
    idMunicipio: string;
    idProvincia: string;
    idCCAA: string;
}

export function mapEstacionMunicipio(e: EstacionMunicipio): EstacionMunicipioMap {
    return {
        cp: e["C.P."],
        direccion: e["Dirección"],
        horario: e["Horario"],
        latitud: e["Latitud"],
        localidad: e["Localidad"],
        longitud: e["Longitud (WGS84)"],
        margen: e["Margen"],
        municipio: e["Municipio"],
        precioAdblue: e["Precio Adblue"],
        precioAmoniaco: e["Precio Amoniaco"],
        precioBiodiesel: e["Precio Biodiesel"],
        precioBioetanol: e["Precio Bioetanol"],
        precioBiogasNaturalComprimido: e["Precio Biogas Natural Comprimido"],
        precioBiogasNaturalLicuado: e["Precio Biogas Natural Licuado"],
        precioDieselRenovable: e["Precio Diésel Renovable"],
        precioGasNaturalComprimido: e["Precio Gas Natural Comprimido"],
        precioGasNaturalLicuado: e["Precio Gas Natural Licuado"],
        precioGlp: e["Precio Gases licuados del petróleo"],
        precioGasoleoA: e["Precio Gasoleo A"],
        precioGasoleoB: e["Precio Gasoleo B"],
        precioGasoleoPremium: e["Precio Gasoleo Premium"],
        precioGasolina95E10: e["Precio Gasolina 95 E10"],
        precioGasolina95E25: e["Precio Gasolina 95 E25"],
        precioGasolina95E5: e["Precio Gasolina 95 E5"],
        precioGasolina95E5Premium: e["Precio Gasolina 95 E5 Premium"],
        precioGasolina95E85: e["Precio Gasolina 95 E85"],
        precioGasolina98E10: e["Precio Gasolina 98 E10"],
        precioGasolina98E5: e["Precio Gasolina 98 E5"],
        precioGasolinaRenovable: e["Precio Gasolina Renovable"],
        precioHidrogeno: e["Precio Hidrogeno"],
        precioMetanol: e["Precio Metanol"],
        provincia: e["Provincia"],
        remision: e["Remisión"],
        rotulo: e["Rótulo"],
        tipoVenta: e["Tipo Venta"],
        bioetanol: e["% BioEtanol"],
        esterMetilico: e["% Éster metílico"],
        ideess: e["IDEESS"],
        idMunicipio: e["IDMunicipio"],
        idProvincia: e["IDProvincia"],
        idCCAA: e["IDCCAA"],
    };
}