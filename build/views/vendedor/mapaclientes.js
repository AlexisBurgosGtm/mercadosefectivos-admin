
function getView(){
    let view = {
        encabezado : ()=>{
            return `
                    <div class="card">
                        <div class="card-header">
                            <h4 id="lbTotalDia">Seleccione Dia</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">

                                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                        <div class="input-group">               
                                            <select class="form-control" id="cmbDiaVisita"></select>
                                        </div>                            
                                </div>
                                <div class="col-sm-12 col-md-1 col-lg-1 col-xl-1 text-right">
                                    <br>
                                </div>                                        
                                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <input type="text" id="txtFiltrarCliente" class="form-control" placeholder="Buscar en la lista...">
                                </div>
                                <div class="col-sm-12 col-md-1 col-lg-1 col-xl-1 text-right">
                                    <br>
                                </div>                                        
                                
                            </div> 
                        </div>

                    </div>
            `
        },
        tabsClientes :()=>{
            return `
            <div class="row">
                <div class="card" id="tblClientes">
                    
                </div>
            </div>
            `
        },
        modalMenuCliente: ()=>{
            return `<div class="card">
                        <div class="card-header bg-trans-gradient text-white text-center">
                            <label id="lbNombreCliente"></label>
                        </div>
                        
                        <div class="card-body">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-2">
                                        <label>Código:<label>    
                                    </div>
                                    <div class="col-3">
                                        <input type="text" id="txtCodClie" class="form-control">    
                                    </div>
                                    <div class="col-3">
                                        <input type="text" id="txtNitClie" class="form-control">
                                    </div>
                                </div>      
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-2">
                                        <label>Dirección:<label>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" id="txtDirClie" class="form-control">
                                    </div>
                                </div>                                
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-2">
                                        <label>Teléfono:<label>    
                                    </div>
                                    <div class="col-9">
                                        <input type="text" id="txtTelClie" class="form-control">
                                    </div>
                                </div>                               
                            </div>

                        </div>    
                        
                    </div>

                    <div class="col-10" align="right"> 
                        <div class="row">
                            <button class="btn btn-lg btn-danger btn-round col-12" id="btnCerrarModalCliente">
                                <i class="fal fa-times"></i>
                                CANCELAR
                            </button>
                        </div> 
                        
                        <br>
                        <div class="row">
                            <button class="btn btn-lg btn-warning btn-rounded col-12" id="btnTiendaCerrada">
                                <i class="fal fa-credit-card-front"></i>
                                TIENDA CERRADA
                            </button>
                        </div>
                        <br>
                        <div class="row">
                            <button class="btn btn-lg btn-secondary col-12" id="btnNoDinero">
                                <i class="fal fa-credit-card-front"></i>
                                NO DINERO
                            </button>
                        </div>
                        <br>
                        
                        <div class="row">
                            <button class="btn btn-lg btn-success col-12" id="btnVenderCliente">
                                <i class="fal fa-tag"></i>
                                VENDER
                            </button>
                        </div>          

                    </div>
                            `
        },
        modalHistorialCliente: ()=>{
            return `
            <div class="modal fade" id="ModalHistorialCliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label class="modal-title text-danger h3" id="">Historial de Compras del Cliente</label>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fal fa-times"></i></span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <div class="table-reponsive">
                                <table class="table table-responsive table-hover table-striped table-bordered">
                                    <thead>
                                        <td>Fecha</td>
                                        <td>Producto</td>
                                        <td>Importe</td>
                                    </thead>
                                    <tbody id="tblHistorial"></tbody>
                                </table>
                            </div>
                        </div>

                    
                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.encabezado() + view.tabsClientes() + view.modalHistorialCliente(); // view.listaclientes();
    rootMenuLateral.innerHTML = view.modalMenuCliente();
};

async function addListeners(){

    //EVENTOS DE LOS COMBOBOXES
    let cmbDiaVisita = document.getElementById('cmbDiaVisita');
    cmbDiaVisita.innerHTML = funciones.ComboSemana("LETRAS");
       
    cmbDiaVisita.addEventListener('change',async()=>{
        showUbicacion()
        .then((location)=>{
                let lat = location.coords.latitude.toString();
                let longg = location.coords.longitude.toString();
                
                api.clientesVendedorMapa(GlobalCodSucursal,GlobalCodUsuario,cmbDiaVisita.value,'tblClientes',Number(lat),Number(longg))
                //RE-AJUSTA EL MAPA A LA PANTALLA
                setTimeout(function () {
                    try {
                        map.invalidateSize();    
                    } catch (error) {
                        
                    }
                }, 500);
        });    
    })
    
    let f = new Date();
    cmbDiaVisita.value = funciones.getDiaSemana(f.getDay());

    //MODAL OPCIONES CLIENTE
    
    let btnCerrarModalCliente = document.getElementById('btnCerrarModalCliente');
    btnCerrarModalCliente.addEventListener('click',()=>{
        hideMenuLateral()
    });

    let btnTiendaCerrada = document.getElementById('btnTiendaCerrada');
    btnTiendaCerrada.addEventListener('click',()=>{
        funciones.Confirmacion('Se marcará este cliente como CERRADA. ¿Está seguro?')
        .then((value)=>{
            if(value==true){
                api.updateClientesLastSale(GlobalSelectedCodCliente,'CERRADO')
                .then(async()=>{
                    funciones.Aviso('TIENDA CERRADA');
                    await api.clientesVendedor(GlobalCodSucursal,GlobalCodUsuario,cmbDiaVisita.value,'tblClientes','tblClientesVisitados')
                })
                .catch(()=>{
                    funciones.AvisoError('No se marcar esta tienda. Inténtelo de nuevo')
                })
                
                hideMenuLateral();
            }
        })
        
        
    });

    let btnNoDinero = document.getElementById('btnNoDinero');
    btnNoDinero.addEventListener('click',()=>{
        funciones.Confirmacion('Se marcará este cliente como SIN DINERO. ¿Está seguro?')
        .then(async(value)=>{
            if(value==true){
                api.updateClientesLastSale(GlobalSelectedCodCliente,'NODINERO')
                .then(async()=>{
                    funciones.Aviso('TIENDA SIN DINERO');
                    await api.clientesVendedor(GlobalCodSucursal,GlobalCodUsuario,cmbDiaVisita.value,'tblClientes','tblClientesVisitados')
                })
                .catch(()=>{
                    funciones.AvisoError('No se marcar esta tienda. Inténtelo de nuevo')
                })

                hideMenuLateral();
            }
        })
        
        
    });

    let btnVenderCliente = document.getElementById('btnVenderCliente');
    btnVenderCliente.addEventListener('click',()=>{
        hideMenuLateral();
        classNavegar.ventas(GlobalSelectedCodCliente,GlobalSelectedNomCliente,GlobalSelectedDirCliente);
    });


    //carga la ubicación actual y general el mapa
    showUbicacion()
    .then((location)=>{
            let lat = location.coords.latitude.toString();
            let longg = location.coords.longitude.toString();
            //Number(lat),Number(longg));
            api.clientesVendedorMapa(GlobalCodSucursal,GlobalCodUsuario,cmbDiaVisita.value,'tblClientes',Number(lat),Number(longg))
            //RE-AJUSTA EL MAPA A LA PANTALLA
            setTimeout(function () {
                try {
                    map.invalidateSize();    
                } catch (error) {
                    
                }
            }, 500);
    });

    await api.vendedorTotalDia(GlobalCodSucursal,GlobalCodUsuario,funciones.getFecha(),'lbTotalDia')
    
};

function getMenuCliente(codigo,nombre,direccion,telefono,lat,long,nit){
    
    
    //map.remove()
    //map = Lmap(lat,long,nombre,telefono);

    document.getElementById('lbNombreCliente').innerHTML = nombre;
    document.getElementById('txtCodClie').value = codigo;
    document.getElementById('txtNitClie').value = nit;
    document.getElementById('txtDirClie').value = direccion;
    document.getElementById('txtTelClie').value = telefono;
    
    GlobalSelectedCodCliente = codigo;
    GlobalSelectedNomCliente = nombre;
    GlobalSelectedDirCliente = direccion;
    
    showMenuLateral('Opciones del Cliente');

};

function iniciarVistaVendedorMapaClientes(){
    getView();
    addListeners();

};

function showUbicacion(){
    return new Promise((resolve,reject)=>{
        try {
            navigator.geolocation.getCurrentPosition(function (location) {
                resolve(location);
            })
        } catch (error) {
            reject();
        }
    })
};


function Lmap(lat,long){

    //INICIALIZACION DEL MAPA            
      var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {center: [lat, long],maxZoom: 20, attribution: osmAttrib});    
      let mapa = L.map('mapcontainer').setView([lat, long], 18).addLayer(osm);

      L.marker([lat, long], {draggable:'true'})
        .addTo(mapa)
        .bindPopup(`Su ubicación`, {closeOnClick: false, autoClose: false})
        .openPopup()
             
        
    return mapa;
  
};