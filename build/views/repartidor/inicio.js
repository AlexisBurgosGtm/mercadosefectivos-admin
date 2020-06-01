function getView(){
    let view = {
        encabezado : ()=>{
            return `
            <div class="row">
                <h3 id="txtTotalPicking">Q 0.00</h3>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <select id="cmbPicking" class="form-control">
                        
                    </select>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <select id="cmbTipoListado" class="form-control">
                        <option value="PEDIDOS">PEDIDOS</option>
                        <option value="MAPA">MAPA</option>
                    </select>
                </div>

            </div>
            `
        },
        listado : ()=>{
            return `
            <div class="row">
                <div class="table-responsive" id="containerRepartidor">
                    
                </div>
            </div>
            `
        },
        modalDetallePedido : ()=>{
            return `    
        <div class="card">
            <br>
            <div class="row">
                <div class="col-1"></div>
              

                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <button class="btn btn-md btn-danger" id="btnPedidoBloquear">
                        <i class="fal fa-globe"></i>
                        RECHAZADO
                    </button>
                    <button class="btn btn-md btn-success" id="btnPedidoConfirmar">
                        <i class="fal fa-bell"></i>
                        ENTREGADO
                    </button>
                </div>

            </div>
            <br>
            <div class="table-responsive">
                <table class="table table-responsive table-hover table-striped table-bordered">
                    <thead class="bg-trans-gradient text-white">
                        <tr>
                            <td>Producto</td>
                            <td>Medida</td>
                            <td>Cant</td>
                            <td>Precio</td>
                            <td>Subtotal</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody id="tblDetallePedido"></tbody>
                    
                </table>
            </div>
            <br>
            <div class="">
                <div class="col-1"></div>
                <div class="col-5">
                    <label>Total Pedido : </label>
                    <h2 class="text-danger" id="lbTotalDetallePedido"></h2>
                </div>
                
            </div>
        </div>
            `
        }
    };

    root.innerHTML = view.encabezado() + view.listado();
    rootMenuLateral.innerHTML = view.modalDetallePedido();
};

async function addListeners(){
    let cmbPicking = document.getElementById('cmbPicking');
    cmbPicking.addEventListener('change',async ()=>{
        await api.repartidorPicking(cmbPicking.value,'containerRepartidor','txtTotalPicking')
    })

    api.repartidorComboEmbarques('cmbPicking')
    
    let cmbTipoListado = document.getElementById('cmbTipoListado')
    cmbTipoListado.addEventListener('change',()=>{
        api.repartidorMapaEmbarque(cmbPicking.value,'tblReport','lbTotal');
    })
};

function Lmap(lat,long,nombre,importe){
    //INICIALIZACION DEL MAPA            
      var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {center: [lat, long],maxZoom: 20, attribution: osmAttrib});    
      map = L.map('mapcontainer').setView([lat, long], 18).addLayer(osm);

      L.marker([lat, long])
        .addTo(map)
        .bindPopup(nombre + ' - ' + importe)

      return map;
};

function iniciarVistaRepartidor(){
    getView();
    addListeners();
}


function getDetalleFactura(coddoc,correlativo,cliente){
    api.repartidorDetallePedido(coddoc,correlativo,'tblDetallePedido','lbTotalDetallePedido')
    showMenuLateral('CLIENTE: ' + cliente);

}