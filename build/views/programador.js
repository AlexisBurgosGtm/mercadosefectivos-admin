const { root } = require("cheerio");

function getView(){

    let str = ` <div class="card">
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
                </div>`;

    root.innerHTML = str;

};


function addListener(){
    getTipodocumentos('tblTipodocumento');

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

