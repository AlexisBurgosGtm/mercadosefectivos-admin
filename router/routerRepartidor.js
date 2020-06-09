const execute = require('./connection');
const express = require('express');
const router = express.Router();

// EMBARQUES DEL REPARTIDOR
router.post("/embarquesrepartidor", async(req,res)=>{
    
    const { sucursal, codrepartidor} = req.body;
            
    let qry ='';

    qry = `SELECT CODEMBARQUE AS CODIGO, RUTA, FECHA FROM ME_REPARTO_EMBARQUES WHERE CODSUCURSAL='${sucursal}' AND CODEMPLEADO=${codrepartidor}`;     
  
    execute.Query(res,qry);

});

// PEDIDOS EN EMBARQUE
router.post("/embarque", async(req,res)=>{
    
    const { sucursal, codembarque} = req.body;
            
    let qry ='';

    qry = `SELECT FECHA, CODDOC, CORRELATIVO, NIT, CLIENTE, DIRECCION, MUNICIPIO, LAT, LONG, IMPORTE, DIRENTREGA, OBS,CODVEN,VENDEDOR,ST
    FROM ME_REPARTO_DOCUMENTOS
    WHERE (CODEMBARQUE = '${codembarque}') AND (CODSUCURSAL = '${sucursal}')`;     
  
    execute.Query(res,qry);

});


router.post("/detallepedido", async(req,res)=>{
    
    const { sucursal, coddoc,correlativo} = req.body;
            
    let qry ='';

    qry = `SELECT CODPROD,DESPROD,CODMEDIDA,CANTIDAD,EQUIVALE,TOTALUNIDADES,PRECIO,TOTALPRECIO AS IMPORTE FROM ME_REPARTO_DOCPRODUCTOS WHERE CODDOC='${coddoc}' AND CORRELATIVO='${correlativo}' AND CODSUCURSAL='${sucursal}' `;     
  
    execute.Query(res,qry);

});

router.post("/mapaembarque", async(req,res)=>{
    
    const { sucursal, embarque} = req.body;
            
    let qry ='';

    qry = `SELECT CODDOC, CORRELATIVO, NIT, CLIENTE, DIRECCION, MUNICIPIO, LAT, LONG, IMPORTE, VENDEDOR FROM ME_REPARTO_DOCUMENTOS WHERE CODSUCURSAL='${sucursal}' AND CODEMBARQUE='${embarque}'`;     
  
    execute.Query(res,qry);

});

router.post("/marcarpedido", async(req,res)=>{
    
    const { sucursal, embarque, coddoc, correlativo, st} = req.body;
            
    let qry ='';

    qry = `UPDATE ME_REPARTO_DOCUMENTOS SET ST='${st}' WHERE CODSUCURSAL='${sucursal}' AND CODEMBARQUE='${embarque}' AND CODDOC='${coddoc}' AND CORRELATIVO='${correlativo}' `;     
  
    execute.Query(res,qry);

});

module.exports = router;
