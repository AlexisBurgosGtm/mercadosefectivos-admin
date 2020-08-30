
function getView(){
    let view = {
        tabsClientes :()=>{
            return `
            <div class="panel-container show">
                <div class="panel-content">
                    <ul class="nav nav-pills nav-justified" role="tablist">
                        <li class="nav-item hidden"><a class="nav-link active" data-toggle="tab" href="#panelListado" id="btnTabListado">Listado</a></li>
                        <li class="nav-item hidden"><a class="nav-link" data-toggle="tab" href="#panelNuevo" id="btnTabNuevo">Nuevo</a></li>
                        <li class="nav-item hidden"><a class="nav-link" data-toggle="tab" href="#panelUbicacion" id="btnTabUbicacion">Ubicación</a></li>
                    </ul>
                    <div class="tab-content py-3">

                        <div class="tab-pane slide active show" id="panelListado" role="tabpanel">
                            <div class="row">
                                <div class="form-group">
                                    <label>Día de Visita</label>
                                    <select class="form-control" id="cmbDiaVisita">
                                    </select>
                                </div>
                            </div>

                            <div class="row" id="listadoContainer">
                    
                            </div>

                            <div class="shortcut-menu align-left">
                                <button class="btn btn-success btn-circle btn-xl" id="btnNuevoCliente">
                                    <i class="fal fa-plus"></i>
                                </button>
                            </div>

                        </div>
                        
                        <div class="tab-pane slide" id="panelNuevo" role="tabpanel">
                            

                        </div>

                        <div class="tab-pane fade" id="panelUbicacion" role="tabpanel">
                            <div class="mapcontainer2 col-12" id="mapcontainer"></div>
                            <div class="shortcut-menu align-left">
                                <button class="btn btn-info btn-circle btn-xl" id="btnNuevoClienteUbicacion">
                                    <i class="fal fa-check"></i>
                                </button>
                            </div>
                        </div>
   
                    </div>
                </div>
            </div>
            `
        },
        formNuevo:()=>{
            return `
                            <div class="card shadow col-12">
                                <br>        
                                <div class="row">
                                    <div class="col-auto">
                                        <div class="form-group">
                                            <label>Codigo:</label>
                                            <input id="txtCodigo" class="form-control" type="text" placeholder="Escriba el Código"  maxlenght="20">  
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-group">
                                            <label>NIT:</label>
                                            <input id="txtNit" class="form-control" type="text" placeholder="Escriba el NIT ..."  maxlenght="20">
                                        </div>    
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-group">
                                            <label>Visita:</label>
                                            <select id="cmbVisitaCliente" class="form-control"></select>
                                        </div>    
                                    </div>   
                                </div>
                                <br>
                                
                                <div class="form-group">
                                    <label>Negocio/Establecimiento:</label>
                                    <input id="txtNegocio" class="form-control" type="text" placeholder="nombre del negocio"  maxlenght="150">
                                </div>
                                                                
                                <br>
                                <div class="form-group">
                                    <label>Nombre y Apellido:</label>
                                    <input id="txtNomcliente" class="form-control" type="text" maxlenght="200" placeholder="nombre completo">
                                </div>

                                <div class="form-group">
                                    <label>Dirección:</label>
                                    <input id="txtDircliente" class="form-control" type="text" maxlenght="250" placeholder="Dirección cliente...">
                                </div>
                                <br>
                                
                                <div class="form-group">
                                    <label>Referencia:</label>
                                    <input id="txtReferncia" class="form-control" type="text" maxlenght="250" placeholder="Referencia del cliente...">
                                </div>
                                <br>

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
                                <br>
                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div class="form-group">
                                            <label>Vendedor:</label>
                                            <select id="cmbVendedor" class="form-control">
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    
                                        <div class="form-group">
                                            <label>Telefonos:</label>
                                            <input id="txtTelefono"  maxlength="8" class="form-control" type="number" placeholder="Telefono cliente">
                                        </div>
                                    
                                    </div>
                                </div>
                                <br>
                                <div class="form-group">
                                    <label>Observaciones:</label>
                                    <textarea rows="4" id="txtObs" class="form-control" maxlenght="250"></textarea>
                                </div>
                                <div class="row">
                                    <div class="col-5">
                                        <div class="form-group">
                                            <label>Latitud:</label>
                                            <label class="text-info" id="txtLatitud">0</label>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div class="form-group">
                                            <label>Longitud:</label>
                                            <label class="text-info" id="txtLongitud">0</label>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="form-group">
                                            <button class="btn btn-circle btn-danger" id="btnUbicacion">
                                                <i class="fal fa-map-marker"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row">
                                    <div class="col-6">
                                        <button id="btnCancelar" class="btn btn-warning btn-lg btn-rounded" data-dismiss="modal">
                                            <i class="fal fa-angle-double-right"></i>
                                            Cancelar
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button id="btnGuardar" class="btn btn-info btn-lg btn-rounded">
                                            <i class="fal fa-save"></i> 
                                            Guardar
                                        </button>
                                    </div>
                                </div>
                                <br><br>
                            </div>
            `
        },
    };

    root.innerHTML = view.tabsClientes();
    document.getElementById('panelNuevo').innerHTML = view.formNuevo();
};

async function addListeners(){

    let cmbDiaVisita = document.getElementById('cmbDiaVisita');
    cmbDiaVisita.innerHTML = funciones.ComboSemana("LETRAS");
    
    let cmbVisitaCliente = document.getElementById('cmbVisitaCliente');
    cmbVisitaCliente.innerHTML = cmbDiaVisita.innerHTML;


    let f = new Date();
    cmbDiaVisita.value = funciones.getDiaSemana(f.getDay());
    cmbVisitaCliente.value = funciones.getDiaSemana(f.getDay());


    cmbDiaVisita.addEventListener('change',async ()=>{
        cmbVisitaCliente.value = cmbDiaVisita.value;
        fcnCensoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
    });

    let btnNuevoClienteUbicacion = document.getElementById('btnNuevoClienteUbicacion');

    let btnNuevoCliente = document.getElementById('btnNuevoCliente');
    btnNuevoCliente.addEventListener('click',()=>{
        //funciones.ObtenerUbicacion('txtLatitud','txtLongitud');
        //document.getElementById('btnTabNuevo').click()
        document.getElementById('btnTabUbicacion').click();
        document.getElementById('cmbVendedor').value = GlobalCodUsuario;
        //btnNuevoCliente.style = 'visibility:hidden';
        //btnNuevoClienteUbicacion.style = 'visibility:visible';
        setTimeout(function () {
            map.invalidateSize();
            
        }, 500); 
    });

    
    btnNuevoClienteUbicacion.addEventListener('click',()=>{
        document.getElementById('btnTabNuevo').click()        
        //btnNuevoClienteUbicacion.style = 'visibility:hidden';
    });

    //btnNuevoClienteUbicacion.style = 'visibility:hidden';

    let btnUbicacion = document.getElementById('btnUbicacion');
    btnUbicacion.addEventListener('click',()=>{
        btnNuevoCliente.click();

    });

    //carga el listado de clientes en el censo
    fcnCensoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');

    //carga la ubicación actual y general el mapa
    showUbicacion()
    .then((location)=>{
            let lat = location.coords.latitude.toString();
            let longg = location.coords.longitude.toString();
            map = Lmap(Number(lat),Number(longg));
    });

    let btnCancelar = document.getElementById('btnCancelar');
    btnCancelar.addEventListener('click',()=>{
        document.getElementById('btnTabListado').click();
        //btnNuevoCliente.style = 'visibility:visible';
    });

    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Guardar este Cliente?')
        .then((value)=>{
            if(value==true){
                fcnGuardarCliente()
                .then(async()=>{
                    document.getElementById('btnTabListado').click();
                    //btnNuevoCliente.style = 'visibility:visible';
                    //btnNuevoClienteUbicacion.style = 'visibility:hidden';
                    await fcnCensoListado(GlobalCodSucursal, GlobalCodUsuario, cmbDiaVisita.value, 'listadoContainer');
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar el cliente, revise su conexión')
                })

            }
        })
        
        
    });

    await getComboMunicipios('cmbMunicipio');
    await getComboDepartamentos('cmbDepartamento');  

    await api.comboVendedores(GlobalCodSucursal,'cmbVendedor');

};

function fcnGuardarCliente(){  

    let txtNit = document.getElementById('txtNit');
    let txtCodigo = document.getElementById('txtCodigo');
    let cmbVisitaCliente = document.getElementById('cmbVisitaCliente');
    let txtNegocio = document.getElementById('txtNegocio'); 
    let txtNomcliente = document.getElementById('txtNomcliente');
    let txtDircliente = document.getElementById('txtDircliente');
    let txtReferencia = document.getElementById('txtReferencia');
    let cmbMunicipio = document.getElementById('cmbMunicipio');
    let cmbDepartamento = document.getElementById('cmbDepartamento');
    let cmbVendedor = document.getElementById('cmbVendedor');
    let txtTelefono = document.getElementById('txtTelefono');
    let txtObs = document.getElementById('txtObs');
    let txtLatitud = document.getElementById('txtLatitud');
    let txtLongitud = document.getElementById('txtLongitud');

    return new Promise((resolve,reject)=>{
        axios.post('/censo/nuevocliente',{
            sucursal:sucursal,
            codven:cmbVendedor.value,
            fecha:funciones.getFecha(),
            codclie:txtCodigo.value,
            nitclie:txtNit.value,
            negocio: funciones.quitarCaracteres(txtNegocio.value,'"'," pulg",true),
            nomclie: funciones.quitarCaracteres(txtNomcliente.value,'"'," pulg",true), 
            dirclie: funciones.quitarCaracteres(txtDircliente.value,'"'," pulg",true), 
            codmun:cmbMunicipio.value,
            coddepto:cmbDepartamento.value,
            referencia: funciones.quitarCaracteres(txtReferencia.value,'"'," pulg",true), 
            obs: funciones.quitarCaracteres(txtObs.value,'"'," pulg",true), 
            telefono:txtTelefono.value,
            visita:cmbVisitaCliente.value,
            lat:txtLatitud.innerText,
            long:txtLongitud.innerText
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve();             
            }else{
                reject();
            };
        }, (error) => {
            reject();
        });      


    });
};

function getDataCliente(codigo,nit,negocio,nombre,direccion,referencia,codmun,coddepto,obs,codven,visita,latitud,longitud){

    document.getElementById('txtNit').value = nit;
    document.getElementById('txtCodigo').value = codigo;
    document.getElementById('cmbVisitaCliente').value = visita;
    document.getElementById('txtNegocio').value = negocio; 
    document.getElementById('txtNomcliente').value = nombre;
    document.getElementById('txtDircliente').value = direccion;
    document.getElementById('txtReferencia').value = referencia;
    document.getElementById('cmbMunicipio').value = codmun;
    document.getElementById('cmbDepartamento').value = coddepto;
    document.getElementById('cmbVendedor').value = codven;
    document.getElementById('txtTelefono').value = telefono;
    document.getElementById('txtObs').value = obs;
    document.getElementById('txtLatitud').innerText = latitud;
    document.getElementById('txtLongitud').innerText = longitud;

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
        .bindPopup(`Marque la posición GPS del cliente nuevo`, {closeOnClick: false, autoClose: false})
        .openPopup()
        .on("dragend",function(e) {
            this.openPopup();
            var position = e.target._latlng;
            //console.log(e.target._latlng);
            //obtiene la posición del evento
            document.getElementById('txtLatitud').innerText = position.lat;
            document.getElementById('txtLongitud').innerText = position.lng;
           });
     
    //establece las coordenadas iniciales en los labels
    document.getElementById('txtLatitud').innerText = lat.toString();
    document.getElementById('txtLongitud').innerText = long.toString();
    
    return mapa;
  
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

function fcnCensoListado(sucursal, codven, visita, idContainer){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
    
    let strdata = '';
    let tbl = `<div class="table-responsive">
                    <table class="table table-responsive table-hover table-striped">
                        <thead class="bg-primary text-white">
                            <tr>
                                <td>Código/NIT</td>
                                <td>Cliente/Dirección</td>
                                <td>Teléfono</td>
                            </tr>
                        </thead>
                    </table>
                    <tbody id="tblListado">`;

    let tblfoot = `</tbody></table>`;

    axios.post('/censo/listaclientes', {
        sucursal: sucursal,
        codven:codven,
        visita:visita
    })
    .then((response) => {
        const data = response.data.recordset;
        
        data.map((rows)=>{
                let strClass = '';
                strdata = strdata + `<tr class="cursormano"
                onClick="fcnGetDataCliente('${rows.CODCLIE}');">
                                        <td>${rows.CODCLIE}
                                            <br>
                                            <small>NIT:<b>${rows.NITCLIE}</b></small>
                                        </td>
                                        <td>${rows.NOMCLIE}
                                            <br>
                                            <small>${rows.DIRCLIE},${rows.DESMUNI}</small>
                                        </td>
                                        <td>${rows.TELEFONO}</td>
                                    </tr>`
        })
        container.innerHTML = tbl + strdata + tblfoot;
        
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        strdata = '';
        container.innerHTML = '';
    });

};

function getComboMunicipios(idContainer){
    let contenedor = document.getElementById(idContainer);
    let strdata = '';
    
    axios.post('/censo/municipios', {
        sucursal: GlobalCodSucursal
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{
                strdata = strdata + `<option value='${rows.CODMUNI}'>${rows.DESMUNI}</option>`
        })
        contenedor.innerHTML = strdata;        
    }, (error) => {
        contenedor.innerHTML = strdata;        
    });
};

function getComboDepartamentos(idContainer){
    let contenedor = document.getElementById(idContainer);
    let strdata = '';
    
    axios.post('/censo/departamentos', {
        sucursal: GlobalCodSucursal
    })
    .then((response) => {
        const data = response.data.recordset;       
        data.map((rows)=>{
                strdata = strdata + `<option value='${rows.CODDEPTO}'>${rows.DESDEPTO}</option>`
        })
        contenedor.innerHTML = strdata;            
    }, (error) => {
        contenedor.innerHTML = strdata;        
    });
};