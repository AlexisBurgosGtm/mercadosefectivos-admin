function getView(){
    let view ={
        encabezado : ()=>{
            return `
            <div class="row">
                <div id="panel-1" class="panel col-12">
                    <div class="panel-hdr">
                        <h2>Seleccione mes y año</h2>                  
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>          
                        </div>
                    </div>
                    <div class="panel-container">
                        <div class="panel-content">
                            <div class="row">
                                <div class="col-sm-6 col-md-2 col-lg-2 col-xl-2">
                                    <select class="form-control" id="cmbTipoDatos">
                                        <option value="DIA">POR DIA</option>
                                        <option value="MES">POR MES</option>
                                    </select>
                                </div>
                                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <input type="date" class="form-control" id="txtFecha">
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <select class="form-control" id="cmbMes"></select>
                                </div>
                                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <select class="form-control" id="cmbAnio"></select>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `},
        listas : ()=>{
            return `
            <div class="row">

                <div id="panel-1" class="panel col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="panel-hdr">
                        <h2>Total por vendedor</h2>  
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>          
                        </div>
                    </div>
                    <div class="panel-container">
                        <div class="panel-content">
                            <div class="form-group">
                                <label>Total Ventas:</label>
                                <h3 class="text-danger" id="lbTotalVendedores">0</h3>
                            </div>
                            <div class="table-responsive" id="rootVendedores">
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div id="panel-2" class="panel col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="panel-hdr">
                        <h2>Total por Marca</h2>        
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>          
                        </div>
                    </div>
                    <div class="panel-container">
                        <div class="panel-content">
                            <div class="form-group">
                                <label>Total Marcas:</label>
                                <h3 class="text-danger" id="lbTotalMarcas">0</h3>
                            </div>
                            <div class="table-responsive" id="rootMarcas">
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            `
        }      
    };

    root.innerHTML = view.encabezado() + view.listas();

};

async function addListeners(){
    let cmbTipoDatos = document.getElementById('cmbTipoDatos');

    let cmbMes = document.getElementById('cmbMes');
    cmbMes.innerHTML = funciones.ComboMeses();
    let cmbAnio = document.getElementById('cmbAnio');
    cmbAnio.innerHTML = funciones.ComboAnio();

    let txtFecha = document.getElementById('txtFecha');
    txtFecha.value = funciones.getFecha();

    cmbTipoDatos.addEventListener('change', async ()=>{
        if(cmbTipoDatos.value=='DIA'){
            cmbMes.style = 'visibility:hidden';
            cmbAnio.style = 'visibility:hidden';
            txtFecha.style = 'visibility:visible';        
            
            await api.supervisorRankingVendedores(funciones.devuelveFecha('txtFecha'),'rootVendedores','lbTotalVendedores');
            await api.supervisorMarcas(funciones.devuelveFecha('txtFecha'),'rootMarcas','lbTotalMarcas');
        }else{
            cmbMes.style = 'visibility:visible';
            cmbAnio.style = 'visibility:visible';
            txtFecha.style = 'visibility:hidden';
            await api.supervisorMarcasMes(cmbAnio.value,cmbMes.value,'rootMarcas','lbTotalMarcas');        
        }
    })

    
    let f = new Date();
    cmbMes.value = f.getMonth()+1;
    cmbAnio.value = f.getFullYear();
    
    cmbMes.addEventListener('change',async()=>{
        await api.supervisorMarcasMes(cmbAnio.value,cmbMes.value,'rootMarcas','lbTotalMarcas');
    });
    
    cmbAnio.addEventListener('change',async()=>{
        await api.supervisorMarcasMes(cmbAnio.value,cmbMes.value,'rootMarcas','lbTotalMarcas');
    });
    
    txtFecha.addEventListener('change',async()=>{
        await api.supervisorRankingVendedores(funciones.devuelveFecha('txtFecha'),'rootVendedores','lbTotalVendedores');
        await api.supervisorMarcas(funciones.devuelveFecha('txtFecha'),'rootMarcas','lbTotalMarcas');
    })
    
    //status inicial de los selectores
    cmbMes.style = 'visibility:hidden';
    cmbAnio.style = 'visibility:hidden';
    txtFecha.style = 'visibility:visible';        

    //inicializar las listas
    await api.supervisorRankingVendedores(funciones.devuelveFecha('txtFecha'),'rootVendedores','lbTotalVendedores');
    await api.supervisorMarcas(funciones.devuelveFecha('txtFecha'),'rootMarcas','lbTotalMarcas');
};

function InicializarVistaSupervisorDashboard(){
    
    getView();
    addListeners();

};