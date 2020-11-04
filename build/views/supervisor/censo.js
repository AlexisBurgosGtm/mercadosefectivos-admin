// CAMPO CODCLIE= CERO(0) ACTIVO, UNO(1) INACTIVO
function getView(){
    let view = {
        encabezado : ()=>{
            return `
        <div class="card">
            <div class="card-header">
                <h5>Censo de Clientes</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <div class="form-group">
                            <select class="form-control" id="cmbListadoVendedor"></select>
                        </div>    
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <div class="form-group">
                            <select class="form-control" id="cmbTipoLista">
                                <option value="CLIENTES">CLIENTES</option>
                                <option value="MAPA">MAPA</option>
                            </select>
                            <!--<input type="search" class="form-control" id="txtFiltrarCliente">-->
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 hidden">
                        <div class="form-group">
                            <input type="date" class="form-control" id="txtFechaCenso">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <div class="form-group">
                            <select class="form-control" id="cmbListadoDia"></select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        },
        listado : ()=>{
            return `
        <div class="row">    
            <div class="table-responsive" id="tblClientes">
                
            </div>
        </div>    
            `
        },
        btnNuevo : ()=>{
            return `
            <div id="fixed-btn2">
                <button class="hidden btn btn-success btn-circle btn-xl" id="btnNuevo">+</button>
            </div>
            `
        },
        menuLateral : ()=>{
            return `
            <div class="row">
                <div clas="card">
                    Datos del cliente, mapa de ubicación
                </div>
                <div clas="card">
                    <div class="card-footer" id="containerBotonesCliente">
                    </div>
                </div>

                <div class="card shadow col-12">
                    <br>        
                    <div class="row">
                        <div class="col-auto">
                            <div class="form-group">
                                <label>Codigo:</label>
                                <input id="txtCodigo" class="form-control" type="text" placeholder="Código automático"  maxlenght="20">  
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
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <select class="form-control" id="cmbTipoNegocio">                        
                                </select>
                            </div>
                            <input id="txtNegocio" class="form-control" type="text" placeholder="nombre del negocio"  maxlenght="150">                                                        
                        </div>
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
                        <input id="txtReferencia" class="form-control" type="text" maxlenght="250" placeholder="Referencia del cliente...">
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
                    <br><br>
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
            </div>
            `
        }
    }

    root.innerHTML = view.encabezado() + view.listado();
    rootMenuLateral.innerHTML = view.menuLateral();
};

async function addListeners(){

    funciones.getComboMunicipios('cmbMunicipio')
    funciones.getComboDepartamentos('cmbDepartamento');
    
    
    await api.comboVendedores(GlobalCodSucursal,'cmbVendedor')
    await api.comboVendedores(GlobalCodSucursal,'cmbListadoVendedor')
    
    let cmbTipoLista = document.getElementById('cmbTipoLista');
    let cmbListadoVendedor = document.getElementById('cmbListadoVendedor');
    let cmbListadoDia = document.getElementById('cmbListadoDia');
    document.getElementById('cmbVisitaCliente').innerHTML = funciones.ComboSemana('LETRAS');

    //let txtFechaCenso = document.getElementById('txtFechaCenso');
    //let txtFiltrarCliente = document.getElementById('txtFiltrarCliente');

    //formulario de clientes
    document.getElementById('cmbTipoNegocio').innerHTML = funciones.getComboTipoClientes();

    cmbListadoDia.innerHTML = funciones.ComboSemana('LETRAS');

    //let btnNuevo = document.getElementById('btnNuevo');
    //btnNuevo.addEventListener('click',async()=>{
        //obtiene el gps point del cliente
        //await funciones.ObtenerUbicacion('txtLatitud','txtLongitud');
        //$('#ModalNuevoCliente').modal('show');
    //});

    cmbTipoLista.addEventListener('change',async()=>{
        if(cmbTipoLista.value=="CLIENTES"){
            await api.clientesCensoVendedor(GlobalCodSucursal,cmbListadoVendedor.value,cmbListadoDia.value,'tblClientes');
        }else{
            await api.clientesCensoVendedorMapa(GlobalCodSucursal,cmbListadoVendedor.value,cmbListadoDia.value,'tblClientes');
        };
    });

    cmbListadoVendedor.addEventListener('change',async()=>{
        if(cmbTipoLista.value=="CLIENTES"){
            await api.clientesCensoVendedor(GlobalCodSucursal,cmbListadoVendedor.value,cmbListadoDia.value,'tblClientes');
        }else{
            await api.clientesCensoVendedorMapa(GlobalCodSucursal,cmbListadoVendedor.value,cmbListadoDia.value,'tblClientes');
        };
    });
    

    
    cmbListadoDia.innerHTML = funciones.ComboSemana("LETRAS");
    cmbListadoDia.addEventListener('change',async()=>{
        if(cmbTipoLista.value=="CLIENTES"){
            await api.clientesCensoVendedor(GlobalCodSucursal,cmbListadoVendedor.value,cmbListadoDia.value,'tblClientes');
        }else{
            await api.clientesCensoVendedorMapa(GlobalCodSucursal,cmbListadoVendedor.value,cmbListadoDia.value,'tblClientes');
        };
    });

    //CARGAR LISTADO CENSO POR DIA Y VENDEDOR
    if(cmbTipoLista.value=="CLIENTES"){
        await api.clientesCensoVendedor(GlobalCodSucursal,cmbListadoVendedor.value,cmbListadoDia.value,'tblClientes');
    }else{
        await api.clientesCensoVendedorMapa(GlobalCodSucursal,cmbListadoVendedor.value,cmbListadoDia.value,'tblClientes');
    };

    //FILTRO DE CLIENTES
    //txtFiltrarCliente.addEventListener('keyup',()=>{
        //funciones.crearBusquedaTabla('tblClientesVendedor','txtFiltrarCliente');
    //});
    
    //FECHA DEL CENSO
    //txtFechaCenso.value = funciones.getFecha();

};
(
function Lmap(lat,long,nombre,direccion){
    //INICIALIZACION DEL MAPA            
      var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {center: [lat, long],maxZoom: 20, attribution: osmAttrib});    
      map = L.map('mapcontainer').setView([lat, long], 11).addLayer(osm);

      L.marker([lat, long])
        .addTo(map)
        .bindPopup(nombre + ' - ' + direccion, {closeOnClick: true, autoClose: false})   
        .openPopup()
                
      return map;
};

function inicializarVistaCensoSupervisor(){
    getView();
    addListeners();
}

function getMenuCliente(id,nitclie,tiponegocio,negocio,cliente,direccion,referencia,obs,fecha,codmuni,coddepto,telefono,visita,latitud,longitud){
    
    showMenuLateral('Cliente ' + cliente);
        let cmbListadoVendedor = document.getElementById('cmbListadoVendedor');
            document.getElementById('txtCodigo').value = id;
            document.getElementById('txtCodigo').disabled = true;

            document.getElementById('cmbTipoNegocio').value = tiponegocio;
            document.getElementById('txtNit').value = nitclie;
            document.getElementById('cmbVisitaCliente').value = visita;
            document.getElementById('txtNegocio').value = negocio; 
            document.getElementById('txtNomcliente').value = cliente;
            document.getElementById('txtDircliente').value = direccion;
            document.getElementById('txtReferencia').value = referencia;
            document.getElementById('cmbMunicipio').value = codmuni;
            document.getElementById('cmbDepartamento').value = coddepto;
            document.getElementById('cmbVendedor').value = cmbListadoVendedor.value;
            document.getElementById('txtTelefono').value = telefono;
            document.getElementById('txtObs').value = obs;
            document.getElementById('txtLatitud').innerText = latitud;
            document.getElementById('txtLongitud').innerText = longitud;
    

};

