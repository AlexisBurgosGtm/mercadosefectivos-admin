function getView(){
    let view ={
        listaProductos : ()=>{
            return `
            <div class="row">
                <div id="panel-1" class="panel col-12">
                    <div class="panel-hdr">
                        <h2>Busque un producto por nombre</h2>
                        <div class="panel-toolbar">
                            <button class="btn btn-panel hidden" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel hidden" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>          
                        </div>
                    </div>
                    
                    <div class="panel-container">
                        <div class="panel-content">
                            <div class="row">
                                <div class="col-8">
                                    <input type="text" class="form-control" id="txtFiltro" placeholder="Escriba para buscar...">
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-success" id="btnBuscarProducto">Buscar</button>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="table-responsive col-12">
                                    <table class="table table-responsive table-striped table-hover table-bordered">
                                        <thead class="bg-trans-gradient text-white">
                                            <tr>
                                                <td>PRODUCTO</td>
                                                <td>UXC</td>
                                                <td>COSTOUN</td>
                                                <td>MARCA</td>
                                            </tr>
                                        </thead>
                                        <tbody id="tblProductos"></tbody>
                                    
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        btnNuevo :()=>{
            return `
            <div class="shortcut-menu align-left">
                <button class="btn btn-danger btn-circle btn-xl" id="btnNuevoProducto">
                    <i class="fal fa-plus"></i>
                </button>
            </div>
            `
        },
        modalNuevo: ()=>{
            return `
            <div id="modalNuevo" class="modal fade default-example-modal-bottom" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-right">
                <div class="modal-content">
                    <div class="modal-header bg-success text-white">
                        <h5 id="" class="text-center">Datos del Producto</h5>
                    </div>                    
                    <div class="modal-body">
                     
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="negrita">Código</label>
                                    <input type="text" class="form-control" id="txtCodprod">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="negrita">Código Alterno</label>
                                    <input type="text" class="form-control" id="txtCodprod2">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Descripción Producto</label>
                            <input type="text" class="form-control" id="txtDesprod">
                        </div>
                        
                        <div class="form-group">
                            <label class="negrita">Descripción 2</label>
                            <input type="text" class="form-control" id="txtDesprod2">
                        </div>
                        
                        <div class="form-group">
                            <label class="negrita">Descripción 3</label>
                            <input type="text" class="form-control" id="txtDesprod3">
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="negrita">Uns x Caja</label>
                                    <input type="number" class="form-control" id="txtUxc" value=1>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="form-group">
                                    <label class="negrita">Costo Unitario</label>
                                    <input type="number" class="form-control" id="txtCosto" value=0.01>
                                </div>
                            </div>

                        </div>
                                            
                        <div class="row">
                            
                            <div class="col-4">
                                <div class="form-group">
                                    <label class="negrita">Exento de IVA</label>
                                    <select class="form-control" id="cmbExento">
                                        <option value="0">NO</option>
                                        <option value="1">SI</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label class="negrita">Tipo Alerta</label>
                                    <select class="form-control" id="cmbColor">
                                        <option value="0">NINGUNO</option>
                                        <option value="1">AMARILLO</option>
                                        <option value="2">VERDE</option>
                                        <option value="3">AZUL</option>
                                        <option value="4">CAFES</option>
                                        <option value="5">MORADO</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label class="negrita">Tipo Producto</label>
                                    <select class="form-control" id="cmbTipo">
                                        <option value="P">PRODUCTO (BIEN)</option>
                                        <option value="S">SERVICIO</option>
                                        <option value="F">FABRICADO</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div class="form-group">
                            <label class="negrita">MARCA</label>
                            <select class="form-control" id="cmbMarca">
                                <option value="1">NO DEFINIDO</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="negrita">FABRICANTE</label>
                            <select class="form-control" id="cmbClaseUno">
                                <option value="1">NO DEFINIDO</option>
                            </select>
                        </div>
                    
                        <div class="form-group">
                            <label class="negrita">PROVEEDOR (REFERENCIA)</label>
                            <select class="form-control" id="cmbClaseDos">
                                <option value="1">NO DEFINIDO</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="negrita">SEGMENTO (CLASIFICACIÓN 3)</label>
                            <select class="form-control" id="cmbClaseTres">
                                <option value="1">NO DEFINIDO</option>
                            </select>
                        </div>

                    </div>

                    <div class="row">
                          
                            <div class="col-6 text-right">
                                <button class="btn btn-outline-secondary btn-md" data-dismiss="modal">
                                    <i class="fal fa-chevron-circle-left"></i>CANCELAR
                                </button>
                            </div>

                            <div class="col-6 text-right">
                                <button class="btn btn-success btn-md" id="btnGuardar">
                                    <i class="fal fa-save"></i>GUARDAR
                                </button>
                            </div>
                    
                    </div>

                    <div class="modal-footer shadow">
                       
                    </div>
                </div>
            </div>
        </div>
            `
        },
        modalEditar: ()=>{
            return `
            <div id="modalEditar" class="modal fade default-example-modal-bottom" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-right">
                <div class="modal-content">
                    <div class="modal-header bg-info text-white">
                        <h5 id="" class="text-center">Edición del Producto</h5>
                    </div>                    
                    <div class="modal-body">
                     
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="negrita">Código</label>
                                    <input type="text" class="form-control" id="txtCodprodE">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="negrita">Código Alterno</label>
                                    <input type="text" class="form-control" id="txtCodprod2E">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Descripción Producto</label>
                            <input type="text" class="form-control" id="txtDesprodE">
                        </div>
                        
                        <div class="form-group">
                            <label class="negrita">Descripción 2</label>
                            <input type="text" class="form-control" id="txtDesprod2E">
                        </div>
                        
                        <div class="form-group">
                            <label class="negrita">Descripción 3</label>
                            <input type="text" class="form-control" id="txtDesprod3E">
                        </div>

                                            
                        <div class="row">
                            <div class="col-3">
                                <div class="form-group">
                                    <label class="negrita">Uns x Caja</label>
                                    <input type="number" class="form-control" id="txtUxcE" value=1>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label class="negrita">Exento de IVA</label>
                                    <select class="form-control" id="cmbExentoE">
                                        <option value="0">NO</option>
                                        <option value="1">SI</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label class="negrita">Tipo Alerta</label>
                                    <select class="form-control" id="cmbColorE">
                                        <option value="0">NINGUNO</option>
                                        <option value="1">AMARILLO</option>
                                        <option value="2">VERDE</option>
                                        <option value="3">AZUL</option>
                                        <option value="4">CAFES</option>
                                        <option value="5">MORADO</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-group">
                                    <label class="negrita">Tipo Producto</label>
                                    <select class="form-control" id="cmbTipoE">
                                        <option value="P">PRODUCTO (BIEN)</option>
                                        <option value="S">SERVICIO</option>
                                        <option value="F">FABRICADO</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div class="form-group">
                            <label class="negrita">MARCA</label>
                            <select class="form-control" id="cmbMarcaE">
                                <option value="1">NO DEFINIDO</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="negrita">FABRICANTE</label>
                            <select class="form-control" id="cmbClaseUnoE">
                                <option value="1">NO DEFINIDO</option>
                            </select>
                        </div>
                    
                        <div class="form-group">
                            <label class="negrita">PROVEEDOR (REFERENCIA)</label>
                            <select class="form-control" id="cmbClaseDosE">
                                <option value="1">NO DEFINIDO</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="negrita">SEGMENTO (CLASIFICACIÓN 3)</label>
                            <select class="form-control" id="cmbClaseTresE">
                                <option value="1">NO DEFINIDO</option>
                            </select>
                        </div>

                    </div>

                    <div class="row">
                          
                            <div class="col-6 text-right">
                                <button class="btn btn-outline-secondary btn-md" data-dismiss="modal">
                                    <i class="fal fa-chevron-circle-left"></i>CANCELAR
                                </button>
                            </div>

                            <div class="col-6 text-right">
                                <button class="btn btn-info btn-md" id="btnGuardarE">
                                    <i class="fal fa-save"></i>ACTUALIZAR
                                </button>
                            </div>
                    
                    </div>

                    <div class="modal-footer shadow">
                       
                    </div>
                </div>
            </div>
        </div>
            `
        },
        modalOpciones: ()=>{
            return `
            <div id="modalOpciones" class="modal fade default-example-modal-bottom" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-bottom">
                <div class="modal-content">
                    <div class="modal-header bg-trans-gradient text-white">
                        <h5 id="lbDesprod" class="text-center">Nombre del Producto</h5>
                    </div>                    
                    <div class="modal-body">
                        <div class="row" id="rootProductoResumen">
                            <div class="col-6">
                                <label>Total Ventas Mes </label>
                                <h3 class="text-danger">Q0.00 - 10 cajas</h3>
                            </div>
                            <div class="col-6">
                                <label>Total Compras </label>
                                <h3 class="text-info">Q0.00</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <button class="btn btn-secondary" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                    Salir
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-success" id="btnEditDetalles">
                                    <i class="fal fa-globe"></i>    
                                    Detalles
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-info" id="btnEditPrecios">
                                    <i class="fal fa-tag"></i>
                                    Precios
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-danger" id="btnEditStatus">
                                    <i class="fal fa-bell"></i>
                                    Act/Des
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <div class="modal-footer bg-trans-gradient">
                        
                    </div>
                </div>
            </div>
        </div>
            `
        }
    };

    root.innerHTML = view.listaProductos() + view.btnNuevo() + view.modalNuevo() + view.modalEditar();
    
};


function addListeners(){
    let txtFiltro = document.getElementById('txtFiltro');

    let btnNuevoProducto = document.getElementById('btnNuevoProducto');
    btnNuevoProducto.addEventListener('click',()=>{
        $('#modalNuevo').modal('show')
    });

    api.productosListado('tblProductos');
 
};

function inicializarVistaGerenteProductos(){

    getView();
    addListeners();

};


function insertProductoNuevo(){


    document.getElementById('txtCodprod').value
    document.getElementById('txtCodprod2').value
    document.getElementById('txtDesprod').value
    document.getElementById('txtDesprod2').value
    document.getElementById('txtDesprod3').value
    document.getElementById('txtUxc').value
    document.getElementById('txtCosto').value

    document.getElementById('cmbExento').value
    document.getElementById('cmbColor').value
    document.getElementById('cmbTipo').value
    document.getElementById('cmbMarca').value
    document.getElementById('cmbClaseUno').value
    document.getElementById('cmbClaseDos').value
    document.getElementById('cmbClaseTres').value

    

}

function getEditProducto(datos){
   

    $('#modalEditar').modal('show')
  
    document.getElementById('txtCodprodE').value = datos[0].CODPROD;
    document.getElementById('txtDesprodE').value = datos[0].DESPROD;
    document.getElementById('txtUxcE').value = datos[0].UXC;
    document.getElementById('txtCostoE').value = datos[0].COSTO;

};