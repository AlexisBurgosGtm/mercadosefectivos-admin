function getView(){
    let str = `
    <div class="row">
        <div class="card-header bg-trans-gradient text-white">
            <h3>Noticias equipo Mercados Efectivos</h3>
        </div>
    </div>
    <br>
    <div class="row">
        <div id="tblNoticias">
        
        </div>
    </div>
    `
    root.innerHTML = str; //'<div class="row" id="tblCoronavirus"></div>'
};

function addListeners(){

};

function inicializarVistaNoticias(){
    getView();
    
    //api.coronavirus('tblCoronavirus');

    api.noticiaslistado(GlobalCodSucursal,GlobalUsuario,'tblNoticias')
};