
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
        tabsClientes :()=>{
            return `
            <div class="panel-container show">
                <div class="panel-content">
                    <ul class="nav nav-pills nav-justified" role="tablist">
                        <li class="nav-item hidden"><a class="nav-link active" data-toggle="tab" href="#panelListado" id="btnTabListado">Listado</a></li>
                        <li class="nav-item hidden"><a class="nav-link" data-toggle="tab" href="#panelNuevo" id="btnTabNuevo">Nuevo Cliente</a></li>
                        <li class="nav-item hidden"><a class="nav-link" data-toggle="tab" href="#panelUbicacion" id="btnTabUbicacion">Ubicación Cliente</a></li>
                    </ul>
                    <div class="tab-content py-3">

                        <div class="tab-pane fade active show" id="panelListado" role="tabpanel">
                            <div class="row" id="listadoContainer">
                    
                            </div>
                        </div>
                        
                        <div class="tab-pane fade" id="panelNuevo" role="tabpanel">
                            

                        </div>

                        <div class="tab-pane fade" id="panelUbicacion" role="tabpanel">
                            <div class="mapcontainer2 col-12" id="mapcontainer"></div>

                        </div>
   
                    </div>
                </div>
            </div>
            `
        },
        btnNuevo: ()=>{
            return `
            <div class="shortcut-menu align-left">
                <button class="btn btn-success btn-circle btn-xl" id="btnNuevoCliente">
                    <i class="fal fa-plus"></i>
                </button>
                <button class="btn btn-info btn-circle btn-xl" id="btnNuevoClienteUbicacion">
                    <i class="fal fa-check"></i>
                </button>
            </div>
            `
        },
        modalNuevo:()=>{
            return `
                    <div class="card-body">
                            <div class="form">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>NIT:</label>
                                            <input id="txtNit" class="form-control" type="text" placeholder="Escriba el NIT ...">
                                        </div>    
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Telefonos:</label>
                                            <input id="txtTelefono"  maxlength="8" class="form-control" type="number" placeholder="Telefono cliente">
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label>Negocio/Establecimiento:</label>
                                    <input id="txtNegocio" class="form-control" type="text" placeholder="nombre del negocio">
                                </div>
                                <div class="form-group">
                                    <label>Nombre y Apellido:</label>
                                    <input id="txtNomcliente" class="form-control" type="text" placeholder="nombre completo">
                                </div>
                                <div class="form-group">
                                    <label>Dirección:</label>
                                    <input id="txtDircliente" class="form-control" type="text" placeholder="Dirección cliente...">
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Municipio:</label>
                                            <select id="cmbMunicipio" class="form-control">
                                            </select>
                                        </div>    
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Departamento:</label>
                                            <select id="cmbDepartamento" class="form-control">
                                            </select>
                                        </div>    
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div class="form-group">
                                            <label>Vendedor:</label>
                                            <select id="cmbVendedor" class="form-control">
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Observaciones:</label>
                                    <textarea rows="4" id="txtObs" class="form-control" maxlenght="250"></textarea>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label>Latitud:</label>
                                            <h4 id="txtLatitud">0</h4>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label>Longitud:</label>
                                            <h4 id="txtLongitud">0</h4>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <button class="btn btn-circle btn-warning" id="btnUbicacion">
                                                <i class="fal fa-map-marker"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <button id="btnCancelar" class="btn btn-default btn-lg btn-round" data-dismiss="modal">
                                            <i class="fal fa-remove"></i>
                                            Cancelar
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button id="btnGuardar" class="btn btn-info btn-lg btn-round">
                                            <i class="fal fa-save"></i> 
                                            Guardar
                                        </button>
                                    </div>
                                </div>
                        
                                
                            </div>
                        </div>
                        
            `
        },
        modalNuevo2:()=>{
            return `
            <div class="modal fade" id="ModalNuevoCliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label class="modal-title">Datos del Cliente</label>
                        </div>
                        <div class="modal-body">
                            <div class="form">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>NIT:</label>
                                            <input id="txtNit" class="form-control" type="text" placeholder="Escriba el NIT ...">
                                        </div>    
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Telefonos:</label>
                                            <input id="txtTelefono"  maxlength="8" class="form-control" type="number" placeholder="Telefono cliente">
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label>Negocio/Establecimiento:</label>
                                    <input id="txtNegocio" class="form-control" type="text" placeholder="nombre del negocio">
                                </div>
                                <div class="form-group">
                                    <label>Nombre y Apellido:</label>
                                    <input id="txtNomcliente" class="form-control" type="text" placeholder="nombre completo">
                                </div>
                                <div class="form-group">
                                    <label>Dirección:</label>
                                    <input id="txtDircliente" class="form-control" type="text" placeholder="Dirección cliente...">
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Municipio:</label>
                                            <select id="cmbMunicipio" class="form-control">
                                            </select>
                                        </div>    
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Departamento:</label>
                                            <select id="cmbDepartamento" class="form-control">
                                            </select>
                                        </div>    
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div class="form-group">
                                            <label>Vendedor:</label>
                                            <select id="cmbVendedor" class="form-control">
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Observaciones:</label>
                                    <textarea rows="4" id="txtObs" class="form-control" maxlenght="250"></textarea>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label>Latitud:</label>
                                            <h4 id="txtLatitud">0</h4>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label>Longitud:</label>
                                            <h4 id="txtLongitud">0</h4>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="form-group">
                                            <button class="btn btn-circle btn-warning" id="btnUbicacion">
                                                <i class="fal fa-map-marker"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <button id="btnCancelar" class="btn btn-default btn-lg btn-round" data-dismiss="modal">
                                            <i class="fal fa-remove"></i>
                                            Cancelar
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button id="btnGuardar" class="btn btn-info btn-lg btn-round">
                                            <i class="fal fa-save"></i> 
                                            Guardar
                                        </button>
                                    </div>
                                </div>
                        
                                
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="mapcontainer" id="mapcontainer"></div>
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
                            

                        </div>
                    
                    </div>
                </div>
            </div>
            `
        
        },
    };

    root.innerHTML = view.encabezado() + view.tabsClientes() + view.btnNuevo();
    document.getElementById('panelNuevo').innerHTML = view.modalNuevo();
};

async function addListeners(){

    let cmbDiaVisita = document.getElementById('cmbDiaVisita');
    cmbDiaVisita.innerHTML = funciones.ComboSemana("LETRAS");
    
    let f = new Date();
    cmbDiaVisita.value = funciones.getDiaSemana(f.getDay());

    cmbDiaVisita.addEventListener('change',async ()=>{
        await api.censoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
    });

    let btnNuevoClienteUbicacion = document.getElementById('btnNuevoClienteUbicacion');

    let btnNuevoCliente = document.getElementById('btnNuevoCliente');
    btnNuevoCliente.addEventListener('click',()=>{
        //funciones.ObtenerUbicacion('txtLatitud','txtLongitud');
        //document.getElementById('btnTabNuevo').click()
        document.getElementById('btnTabUbicacion').click()
        btnNuevoCliente.style = 'visibility:hidden';
        btnNuevoClienteUbicacion.style = 'visibility:visible';
        setTimeout(function () {
            map.invalidateSize();
            
        }, 500); 
    });

    
    btnNuevoClienteUbicacion.addEventListener('click',()=>{
        document.getElementById('btnTabNuevo').click()        
        btnNuevoCliente.style = 'visibility:visible';
        btnNuevoClienteUbicacion.style = 'visibility:hidden';
    });

    btnNuevoClienteUbicacion.style = 'visibility:hidden';

    await api.censoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');

    showUbicacion()
    .then((location)=>{
            let lat = location.coords.latitude.toString();
            let longg = location.coords.longitude.toString();
            map = Lmap(Number(lat),Number(longg));

            
            
    })
    
};

function showUbicacion(){
    //let lat ='0'; let longg = '0';
    return new Promise((resolve,reject)=>{
        try {
            navigator.geolocation.getCurrentPosition(function (location) {
                //lat = location.coords.latitude.toString();
                //longg = location.coords.longitude.toString();
                resolve(location);
                //map = Lmap(Number(lat),Number(long));
            })
        } catch (error) {
            reject();
        }
    })

    

    
    
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
      let mapa = L.map('mapcontainer').setView([lat, long], 18).addLayer(osm);

      L.marker([lat, long], {draggable:'true'})
        .addTo(mapa)
        .bindPopup(`Su posición según su GPS`, {closeOnClick: false, autoClose: false})
        .openPopup()
        .on("dragend",function(e) {
            var position = e.target._latlng;
            console.log(e.target._latlng);
            //var position = e.getLatLng();
            document.getElementById('txtLatitud').innerText = position.lat;
            document.getElementById('txtLongitud').innerText = position.lng;
           });
     
      return mapa;
      /*
      .on("dragend",function(e) {
        var position = marker.getLatLng();
        document.getElementById('txtLatitud').innerText = position.lat;
        document.getElementById('txtLongitud').innerText = position.lng;
       });
        */
       
     /* 
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

    */ 

};


function iniciarVistaVendedorCenso(){
    getView();
    addListeners();
};

function fcnGetDataCliente(codclie){

};






function iniciarMapa(){
    
    try {
        navigator.geolocation.getCurrentPosition(function (location) {
            lat = location.coords.latitude.toString();
            long = location.coords.longitude.toString();
            var map = L.map('map').setView([Number(lat), Number(long)], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            L.marker([51.5, -0.09]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        })
    } catch (error) {
        funciones.AvisoError(error.toString());
    }

    
    
};