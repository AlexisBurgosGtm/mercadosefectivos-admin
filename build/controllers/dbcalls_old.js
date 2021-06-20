document.getElementById('btnDownloadProductos').addEventListener('click',()=>{
    funciones.Confirmacion('¿Está seguro que desea Descargar el catálogo de Productos?')
    .then((value)=>{
        if(value==true){
            $('#modalWait').modal('show');
            deleteProductos()
            .then(()=>{
                downloadProductos();
            })
            .catch(()=>{
                funciones.AvisoError('No se pudieron eliminar los productos previos')
            })
            
        }
    })
})


function downloadProductos (){
   

    //setLog(`<label>Productos agregados: 0</label>`,'rootWait')
    //funciones.showToast('Descargando productos')
    //descargando productos
     axios.get('/ventas/buscarproductotodos?sucursal=' + GlobalCodSucursal)
    
    .then(async(response) => {
        const data = response.data;
        let contador = 1;       
        let totalrows = 0;
        if(data.rowsAffected[0]==0){
            //tabla.innerHTML= 'No existe nada relacionado a: ' + filtro + ', o no hay productos cargados'
            funciones.AvisoError('No hay productos');
        }else{  
            totalrows = Number(data.rowsAffected[0]);
            DbConnection = new JsStore.Instance(DbName);         
            data.recordset.map(async(rows)=>{
                var datosdb = {
                    CODSUCURSAL:rows.CODSUCURSAL,
                    CODPROD:rows.CODPROD,
                    DESPROD:rows.DESPROD,
                    CODMEDIDA:rows.CODMEDIDA,
                    EQUIVALE:rows.EQUIVALE,
                    COSTO:rows.COSTO,
                    PRECIO:rows.PRECIO,
                    DESMARCA:rows.DESMARCA,
                    EXENTO:rows.EXENTO,
                    EXISTENCIA:rows.EXISTENCIA
                }
                
                await DbConnection.insert({Into: "productos",Values: [datosdb]},
                        function (rowsAdded) {
                            setLog(`<label>Productos agregados: ${contador} </label>`,'rootWait')
                            contador += 1;
                            if(totalrows==contador){
                                $('#modalWait').modal('hide');
                                funciones.Aviso('Productos descargados exitosamente!!')
                            }
                        }, 
                        function (err) {
                            console.log(err);
                            console.log('No pude guardar los productos');
                        }), function (){
                            
                        }
            });
            
        }
    }, (error) => {
        console.log(error);
        funciones.AvisoError('No pude guardar los productos');
        $('#modalWait').modal('hide');
    });

 
   
};

function deleteProductos(){
    return new Promise((resolve,reject)=>{

        DbConnection.delete({
            From: 'productos'
        }, function (rowsDeleted) {
            //if (rowsDeleted > 0) {
                setLog(`<label class="text-danger">Eliminando productos...</label>`,'rootWait');
                resolve();
            //}
        }, function (error) {
            //funciones.AvisoError(error.Message);
            reject();
        })
    })            
};

function selectProducto(filtro) {

    return new Promise((resolve,reject)=>{
        DbConnection.select({
            From: "productos",
            Where: {
                "DESPROD": {like: '%' + filtro + '%'}
            }
            }, function (response) {

                resolve(response)
            }, function (error) {
                console.log(error);
                reject(error)
            })
            
        });
    
};





function SelectCensoAll(empnit,codven,contenedor){
    DbConnection.select({
        From: "censo"
    }, function (censo) {

        var HtmlString = "";
        censo.forEach(function (cliente) {
            if (cliente.empnit==empnit){
                if (cliente.codven==codven){
                    HtmlString += "<tr Id=" + cliente.Id + ">" + 
                    "<td class='col-5'>" + cliente.nomcliente + "</td>" + 
                    "<td class='col-5'>" + cliente.dircliente + "</td>" + 
                    "<td class='col-1'>" + cliente.telefono + "</td>" + 
                    "<td class='col-1'><button class='btn btn-round btn-icon btn-danger btn-sm' onclick='classCenso.DeleteCliente(" + cliente.Id +");'>x</button></td></tr>";                        
                }
            }

        }, function (error) {
            console.log(error);
        })
        contenedor.innerHTML = HtmlString;
    });
}
function dbInsertTempVentas(coddoc,correlativo,codprod,desprod,codmedida,cantidad,precio,subtotal,empnit,equivale,costo,totalcosto) {
    var data = {
        empnit:empnit,
        coddoc:coddoc,
        correlativo:correlativo,
        codprod:codprod,
        desprod:desprod,
        codmedida:codmedida,
        cantidad:cantidad,
        precio:precio,
        subtotal:subtotal,
        equivale:equivale,
        costo:costo,
        totalcosto:totalcosto
    }

    DbConnection.insert({
        Into: "tempVentas",
        Values: [data]
    }, function (rowsAdded) {
        console.log('datos tempventas agregados exitosamente')
    }, function (err) {
        console.log(err);
        //alert('Error Occured while adding data')
    })
};
// CARGA LA LISTA DE LA TABLA TEMP
function dbSelectTempVentas(contenedor) {
    DbConnection.select({
        From: "tempVentas"
    }, function (productos) {

        var HtmlString = "";
        productos.forEach(function (prod) {
            HtmlString += "<tr Id=" + prod.Id + ">" + 
            "<td class='col-4'>" + prod.desprod + "</td>" + 
            "<td class='col-2'>" + prod.codmedida + "</td>" + 
            "<td class='col-1'>" + prod.cantidad + "</td>" + 
            "<td class='col-2'>" + funciones.setMoneda(prod.subtotal,'Q') + "</td>" +
            "<td class='col-1'>" + 
              "<button class='btn btn-round btn-icon btn-danger' onclick='dbDeleteTempProducto(" + prod.Id +");'> x </button>" + 
            "</td></tr>";
        }, function (error) {
            console.log(error);
        })
        contenedor.innerHTML = HtmlString;
    });
};
// CARGA LA LISTA DE PRODUCTOS DEL PEDIDO SELECCIONADO
function dbSelectTempVentasEditar(contenedor, correlativo) {

    GlobalSelectedCorrelativo = correlativo;
    
    DbConnection.select({
        From: "docproductos",
        Where: {
            correlativo: Number(correlativo)
        }
    }, function (productos) {
        

        var HtmlString = "";
        productos.forEach(function (prod) {
            HtmlString += "<tr Id=" + prod.Id + ">" + 
            "<td class='col-4'>" + prod.desprod + "</td>" + 
            "<td class='col-2'>" + prod.codmedida + "</td>" + 
            "<td class='col-1'>" + prod.cantidad + "</td>" + 
            "<td class='col-2'>" + funciones.setMoneda(prod.subtotal,'Q') + "</td>" +
            "<td class='col-1'>" + 
              "<button class='btn btn-round btn-icon btn-danger' onclick='dbDeleteTempProductoEditar(" + prod.Id +");'> x </button>" + 
            "</td></tr>";
        }, function (error) {
            console.log(error);
        })
        contenedor.innerHTML = HtmlString;
    });
};
// CALCULA EL TOTAL DE LA VENTA SEGÚN LA TABLA TEMP VENTAS
function dbTotalTempVentas(contenedor) {
    DbConnection.select({
        From: "tempVentas"
        
    }, function (productos) {
        
        let varSubtotal = parseFloat(0);
        let varSubtotalCosto = parseFloat(0);
        
        productos.forEach(function (prod) {
           varSubtotal += parseFloat(prod.subtotal);
           varSubtotalCosto += parseFloat(prod.totalcosto);
        }, function (error) {
            console.log(error);
        })
        contenedor.innerHTML = funciones.setMoneda(varSubtotal,'Q');
        GlobalTotalVenta = varSubtotal;
        GlobalTotalCosto = varSubtotalCosto;
    });
};