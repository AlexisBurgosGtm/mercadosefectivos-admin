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
        },
        gpsventas: ()=>{
            return `
            <div class="row">

                <div id="panel-3" class="panel col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div class="panel-hdr">
                        <h2>Ubicación del equipo de ventas</h2>  
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>          
                        </div>
                    </div>
                    <div class="panel-container">
                        <div class="panel-content">
                            
                            <div class="" id="rootUbicaciones">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        }      
    };

    root.innerHTML = view.encabezado() + view.listas() + view.gpsventas();

};

function Lmap(lat,long,nombre,telefono,horamin){
    //INICIALIZACION DEL MAPA            
      var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {center: [lat, long],maxZoom: 20, attribution: osmAttrib});    
      map = L.map('mapcontainer').setView([lat, long], 18).addLayer(osm);

      L.marker([lat, long])
        .addTo(map)
        .bindPopup(`${nombre} - Tel:${telefono} - Updated:${horamin}`)
        .openPopup()
      return map;
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
            await cargarDatos(cmbTipoDatos.value);
            
        }else{
            cmbMes.style = 'visibility:visible';
            cmbAnio.style = 'visibility:visible';
            txtFecha.style = 'visibility:hidden';
            await cargarDatos(cmbTipoDatos.value);
            
        }
    })

    
    let f = new Date();
    cmbMes.value = f.getMonth()+1;
    cmbAnio.value = f.getFullYear();
    
    cmbMes.addEventListener('change',async()=>{
        await cargarDatos(cmbTipoDatos.value);
        
    });
    
    cmbAnio.addEventListener('change',async()=>{
        await cargarDatos(cmbTipoDatos.value);
        
    });
    
    txtFecha.addEventListener('change',async()=>{
        await cargarDatos(cmbTipoDatos.value);
        
    })
    
    //status inicial de los selectores
    cmbMes.style = 'visibility:hidden';
    cmbAnio.style = 'visibility:hidden';
    txtFecha.style = 'visibility:visible';        

    //inicializar las listas
    await cargarDatos(cmbTipoDatos.value);
    
    await api.supervisorStatusGpsVentas('rootUbicaciones');
};

async function cargarDatos(tipodato){
    let cmbMes = document.getElementById('cmbMes');
    let cmbAnio = document.getElementById('cmbAnio');

    switch (tipodato) {
        case 'DIA':
            await api.supervisorRankingVendedores(funciones.devuelveFecha('txtFecha'),'rootVendedores','lbTotalVendedores');
            await api.supervisorMarcas(funciones.devuelveFecha('txtFecha'),'rootMarcas','lbTotalMarcas');
            break;
        case 'MES':
            await api.supervisorRankingVendedoresMes(cmbAnio.value,cmbMes.value,'rootVendedores','lbTotalVendedores');
            await api.supervisorMarcasMes(cmbAnio.value,cmbMes.value,'rootMarcas','lbTotalMarcas');
            break;
        default:
            break;
    }

}

function InicializarVistaSupervisorDashboard(){
    
    getView();
    addListeners();

};