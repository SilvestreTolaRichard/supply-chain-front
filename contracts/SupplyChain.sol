// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SupplyChain {
    struct Lote {
        string id_lote;
        string lugar_crianza;
        string alimento;
        uint ganado;
        bool transportado; // true si el lote ya fue transportado
        bool elaborado; // true si el lote ya fue sacrificado
        InfoTransporteGanado info_transporte;
        InfoElaboracionCarne info_elaboracion;
        bool init;
    }
    struct InfoTransporteGanado {
        string lugar_origen;
        string lugar_destino;
        string fecha_transporte;
        string tiempo_transporte;
    }

    struct InfoElaboracionCarne {
        string nombre_matadero;
        string temperatura;
        string humedad;
        string tiempo_elaboracion;
        string fecha_sacrificio;
        string hash_carne;
    }

    struct Carne {
        string lote;
        InfoTransporteCarne info_transporte;
        bool init;
    }

    struct InfoTransporteCarne {
        string lugar_origen;
        string lugar_destino;
    }

    string vacio = "";
    string[] lotes;
    mapping(string => Lote) index_lotes;
    mapping(string => Carne) index_carnes;

    function setLote(string memory hash_lote, 
                string memory _id, 
                uint _ganado,
                string memory _lugar_crianza, 
                string memory _alimento) public {
        require(keccak256(bytes(index_lotes[hash_lote].id_lote)) == keccak256(bytes(vacio)), "Lote ya registrado.");
        Lote memory lote;
        lote.id_lote       = _id;
        lote.lugar_crianza = _lugar_crianza;
        lote.alimento      = _alimento;
        lote.ganado        = _ganado;
        lote.init          = true;
        index_lotes[hash_lote] = lote;
        lotes.push(hash_lote);
    }

    function getLote(string memory hash_lote) public view returns (Lote memory) {
        return index_lotes[hash_lote];
    }

    function getLotes() public view returns (Lote[] memory) {
        Lote[] memory array_lotes = new Lote[](lotes.length);
        for (uint256 i = 0; i < lotes.length; i++) {
            array_lotes[i] = index_lotes[lotes[i]];
        }
        return array_lotes;
    }

    function getHashLotes() public view returns (string[] memory) {
        return lotes;
    }

    function setInfoTransporte(string memory hash_lote,
                                string memory origen,
                                string memory destino,
                                string memory fecha,
                                string memory tiempo) public {
        require(index_lotes[hash_lote].init, "Lote no existente.");
        require(!index_lotes[hash_lote].transportado, "Lote ya transportado.");
        index_lotes[hash_lote].transportado                      = true;
        index_lotes[hash_lote].info_transporte.lugar_origen      = origen;
        index_lotes[hash_lote].info_transporte.lugar_destino     = destino;
        index_lotes[hash_lote].info_transporte.fecha_transporte  = fecha;
        index_lotes[hash_lote].info_transporte.tiempo_transporte = tiempo;
    }

    function setInfoElaboracion(string memory hash_lote,
                                string memory matadero,
                                string memory _temperatura,
                                string memory _humedad,
                                string memory tiempo,
                                string memory fecha,
                                string memory codigo_carne) public {
        require(index_lotes[hash_lote].init, "Lote no existente.");
        require(!index_lotes[hash_lote].elaborado, "Lote ya elaborado.");
        index_lotes[hash_lote].elaborado                           = true;
        index_lotes[hash_lote].info_elaboracion.nombre_matadero    = matadero;
        index_lotes[hash_lote].info_elaboracion.temperatura        = _temperatura;
        index_lotes[hash_lote].info_elaboracion.humedad            = _humedad;
        index_lotes[hash_lote].info_elaboracion.tiempo_elaboracion = tiempo;
        index_lotes[hash_lote].info_elaboracion.fecha_sacrificio   = fecha;
        index_lotes[hash_lote].info_elaboracion.hash_carne         = codigo_carne;
        Carne memory carne;
        carne.lote = hash_lote;
        carne.init = true;
        index_carnes[codigo_carne] = carne;
    }

    function getInfoCarne(string memory hash_carne) public view returns (Carne memory, Lote memory) {
        string memory hash_lote = index_carnes[hash_carne].lote;
        require(index_carnes[hash_carne].init, "Carne no existente.");
        return (index_carnes[hash_carne], index_lotes[hash_lote]);
    }

    function getCarne(string memory hash_carne) public view returns (Carne memory) {
        return index_carnes[hash_carne];
    }
}