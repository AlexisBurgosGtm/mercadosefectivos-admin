function getView(){
    let view = {
        encabezado: ()=>{
            return `
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="card">
                        <div class="form-group">
                            <select class="form-control" id="cmbEmbarques">
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        detalle: ()=>{
            return `
            <div class="row">
                <div class="card">
                    <div class="table-responsive" id="containerRepartidor">

                    </div>
                </div>
            </div>
            `
        },
        modalDetallePedido : ()=>{
            return `    
        <div class="card">
            <br>
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

    root.innerHTML = view.encabezado() + view.detalle();
    rootMenuLateral.innerHTML = view.modalDetallePedido();
    
}

async function addListeners(){
    let cmbEmbarques = document.getElementById('cmbEmbarques');
    cmbEmbarques.addEventListener('change',async ()=>{
        GlobalSelectedCodEmbarque = cmbEmbarques.value;
        await api.vendedorRepartoPicking(cmbEmbarques.value,'containerRepartidor')
    })

    await api.vendedorEmbarques('cmbEmbarques');

};


function iniciarVistaVendedorReparto(){
    
    getView();
    addListeners();

}


function getDetalleFactura(coddoc,correlativo,cliente){
    GlobalSelectedCoddoc = coddoc;
    GlobalSelectedCorrelativo = correlativo;

    api.vendedorDetallePedido(coddoc,correlativo,'tblDetallePedido','lbTotalDetallePedido')
    showMenuLateral('CLIENTE: ' + cliente);

}