function getView(){
    let view = {
        encabezado : ()=>{
            return `
            <div class="row">
                <h3 id="txtTotalPicking">Q 0.00</h3>
                <div class="card col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <select id="cmbPicking" class="form-control">
                        
                    </select>
                </div>

                <div class="card col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
                <div class="table-responsive">
                    <table class="table table-responsive table-hover table-striped" id="tblListado"></table>
                </div>
            </div>
            `
        },
        modalDetallePedido : ()=>{
            return `
            <div class="row"></div>
            `
        }
    };

    root.innerHTML = view.encabezado() + view.listado();
    rootMenuLateral.innerHTML = view.modalDetallePedido();
};

async function addListeners(){
    let cmbPicking = document.getElementById('cmbPicking');
    cmbPicking.addEventListener('change',async ()=>{
        await api.digitadorPicking(cmbPicking.value,'tblListado','txtTotalPicking')
    })

    api.repartidorComboEmbarques('cmbPicking')
    
};


function iniciarVistaRepartidor(){
    getView();
    addListeners();
}