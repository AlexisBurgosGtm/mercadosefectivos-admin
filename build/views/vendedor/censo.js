function getView(){
    let view = {
        encabezado: ()=>{
            return `
            <div class="row">
                
                    <div class="form-group">
                        <label>Día de Visita</label>
                        <select class="form-control" id="cmbDiaVisita">

                        </select>
                    </div>
                
            </div>
            `
        },
        listado: ()=>{
            return `
            <div class="row" id="listadoContainer">
                
            </div>
            `
        },
        btnNuevo: ()=>{
            return `
            <div class="shortcut-menu align-left">
                <button class="btn btn-success btn-circle btn-xl" id="btnNuevoCliente">
                    <i class="fal fa-plus"></i>
                </button>
            </div>
            `
        },
        modalNuevo: ()=>{
            return `
            <div class="modal fade" id="ModalNuevoCliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label class="modal-title text-danger h3" id="">Datos del Nuevo Cliente</label>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fal fa-times"></i></span>
                            </button>
                        </div>

                        <div class="modal-body">

                            <div class="form-group">
                                <label id="lbClienteLat">0</label>
                                <label id="lbClienteLong">0</label>

                                <button class="btn btn-circle btn-outline-danger" id="btnUbicacion">
                                    <i class="fal fa-map-marker-alt"></i>
                                </button>
                            </div>

                        </div>
                    
                    </div>
                </div>
            </div>
            `
        
        },
        modalMapa: ()=>{
            return `
            <div class="modal fade" id="ModalUbicacionCliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label class="modal-title text-danger h3" id="">Clic sobre la Ubicación del Cliente</label>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fal fa-times"></i></span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <div id="mapcontainer"></div>

                        </div>
                    
                    </div>
                </div>
            </div>
            `
        
        },
    };

    root.innerHTML = view.encabezado() + view.listado() + view.btnNuevo() + view.modalNuevo() + view.modalMapa();

};

async function addListeners(){

    let cmbDiaVisita = document.getElementById('cmbDiaVisita');
    cmbDiaVisita.innerHTML = funciones.ComboSemana("LETRAS");
    
    let f = new Date();
    cmbDiaVisita.value = funciones.getDiaSemana(f.getDay());

    cmbDiaVisita.addEventListener('change',async ()=>{
        await api.censoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
    });

    let btnNuevoCliente = document.getElementById('btnNuevoCliente');
    btnNuevoCliente.addEventListener('click',()=>{
        $('#ModalNuevoCliente').modal('show');
    });

    let btnUbicacion = document.getElementById('btnUbicacion');
    btnUbicacion.addEventListener('click',()=>{
        showUbicacion();
        $('#ModalUbicacionCliente').modal('show');
    });

    await api.censoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');

    
};

function iniciarVistaVendedorCenso(){
    getView();
    addListeners();
};

function fcnGetDataCliente(codclie){

};


function showUbicacion(){
    let lat ='0'; let long = '0';

    try {
        navigator.geolocation.getCurrentPosition(function (location) {
            lat = location.coords.latitude.toString();
            long = location.coords.longitude.toString();
            map = Lmap(lat,long);
        })
    } catch (error) {
        funciones.AvisoError(error.toString());
    }

    document.getElementById('lbClienteLat').innerText = lat;
    document.getElementById('lbClienteLong').innerText = long;

    /**
    L.marker([rows.LAT, rows.LONG])
        .addTo(map)
        .bindPopup(`${rows.VENDEDOR} - <br>Tel:${rows.TELEFONO} - Updated:${rows.HORAMIN} hrs`, {closeOnClick: false, autoClose: false})
        .openPopup()   
         */
};

function Lmap(lat,long){
    //INICIALIZACION DEL MAPA            
      var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {center: [lat, long],maxZoom: 20, attribution: osmAttrib});    
      map = L.map('mapcontainer').setView([lat, long], 18).addLayer(osm);

      L.marker([lat, long])
        .addTo(map)
        .bindPopup(`Su posición según su GPS`, {closeOnClick: false, autoClose: false})
        .openPopup()
      return map;
};