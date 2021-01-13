function getView(){

    let str = ` 
                <div class="card">
                    <input type="text" class="form-control" id="txtQry">
                    <button class="btn btn-danger btn-md" id="btnQry">Run</button>
                </div>
                <div class="card">
                    <div class="table-responsive">
                        <table class="table table-responsive table-hover table-striped">
                            <thead>
                                <tr>
                                    <td>Vendedor</td>
                                    <td>Coddoc</td>
                                    <td>Correlativo</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblTipodocumento">
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card">
                    <div id="rootQry"></div>
                </div>`;

    root.innerHTML = str;

};


function addListener(){
    getTipodocumentos('tblTipodocumento');

    let txtQry = document.getElementById('txtQry');
    let rootQry = document.getElementById('rootQry');
    let btnQry = document.getElementById('btnQry');
    btnQry.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está a punto de ejecutar una consulta sql')
        .then((value)=>{
            if(value==true){
                api.runqry(txtQry.value,'2410201415082017')
                .then((response)=>{
                    let str = 'filas afectadas: ' + response.rowsAffected[0].toString();
                    rootQry.innerHTML = str + '<br><br>' + JSON.stringify(response.recordset);
                })
                .catch(()=>{
                    funciones.AvisoError('Error')
                })
            }
        })
        

    });
};

function InicializarVista(){
    getView();
    addListener();
};

function getTipodocumentos(idContainer){
    
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;

    let strdata = ''; 

    axios.post('/tipodocumentos/documentosvendedores', {
        sucursal: GlobalCodSucursal
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{
            strdata = strdata + `
                        <tr>
                            <td>${rows.NOMBRE}</td>
                            <td>${rows.CODDOC}</td>
                            <td>${rows.CORRELATIVO}</td>
                            <td>
                                <button class="btn btn-md btn-info btn-circle">
                                    +
                                </button>
                            </td>
                        </tr>
                        `
        })
        container.innerHTML = strdata;

    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        container.innerHTML = '';            

    });
};

