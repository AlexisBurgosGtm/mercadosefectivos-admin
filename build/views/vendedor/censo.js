function getView(){
    let view = {
        encabezado: ()=>{
            return `
            <div class="row">
                
            </div>
            `
        },
        listado: ()=>{
            return `
            <div class="row">
                
            </div>
            `
        },
        btnNuevo: ()=>{
            return `
            <div class="shortcut-menu align-left">
                <button class="btn btn-success btn-circle btn-xl" id="btnNuevoCliente">
                    <i class="fal fa-plus"></i>
                </button>
            </div>
            `
        },
        modalNuevo: ()=>{
            return `
            <div class="modal fade" id="ModalNuevoCliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-right" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <label class="modal-title text-danger h3" id="">Datos del Nuevo Cliente</label>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="fal fa-times"></i></span>
                            </button>
                        </div>

                        <div class="modal-body">

                        

                        </div>
                    
                    </div>
                </div>
            </div>
            `
        
        },
    };

    root.innerHTML = view.encabezado() + view.listado() + view.btnNuevo() + view.modalNuevo();

};

function addListeners(){
    
    let btnNuevoCliente = document.getElementById('btnNuevoCliente');
    btnNuevoCliente.addEventListener('click',()=>{

        $('#ModalNuevoCliente').modal('show');

    });



};

function iniciarVistaVendedorCenso(){
    getView();
    addListeners();
};