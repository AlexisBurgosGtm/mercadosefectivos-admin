socket.on('productos precio', function(msg,form){
    funciones.NotificacionPersistent(msg,"Cambio Precios");
});

socket.on('productos bloqueado', function(msg,form){
    funciones.NotificacionPersistent(msg,"Productos Bloqueado");
});

socket.on('ventas nueva', async function(msg,form){
    //console.log('se emitió el socket')
    if(GlobalSelectedForm=='SUPERVISORDASHBOARD'){
        if(GlobalCodSucursal==msg){
            try {
                await cargarDatos(document.getElementById('cmbTipoDatos').value)
                await api.supervisorStatusGpsVentas('rootUbicaciones');
            } catch (error) {
                console.log('error al recargar dashboard ..  ' +  error)
            }
        }
    }
});

socket.on('noticias nueva', (msg,user)=>{
    funciones.NotificacionPersistent(msg,'Noticias !!')
})

socket.on('clientes ultimaventa',(msg,user)=>{
    
})

