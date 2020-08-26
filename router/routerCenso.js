const execute = require('./connection');
const express = require('express');
const router = express.Router();

router.post("/nuevocliente", async(req,res)=>{

    const{sucursal,codven,fecha,codclie,nitclie,nomclie,nomfactura,dirclie,codmun,coddepto,referencia,obs,telefono,visita,lat,long} = req.body;

    let qry = `INSERT INTO ME_CENSO (CODSUCURSAL,CODVEN,FECHA,CODCLIE,NITCLIE,NOMCLIE,NOMFACTURA,DIRCLIE,CODMUN,CODDEPTO, REFERENCIA,OBS,VISITA,LAT,LONG,TELEFONO)
    VALUES ('${sucursal}',${codven},'${fecha}',${codclie},'${nitclie}','${nomclie}','${nomfactura}','${dirclie}','${codmun}','${coddepto}','${referencia}','${obs}','${visita}',${lat},${long},'${telefono}');`

     execute.Query(res,qry);
     
});


router.post("/listaclientes", async(req,res)=>{

    const{sucursal,codven,visita} = req.body;

    let qry = `SELECT CODSUCURSAL,CODVEN,FECHA,CODCLIE,NITCLIE,NOMCLIE,NOMFACTURA,DIRCLIE,CODMUN,CODDEPTO, REFERENCIA,OBS,VISITA,LAT,LONG,TELEFONO
     FROM ME_CENSO WHERE CODSUCURSAL='${sucursal}' AND CODVEN=${codven} AND VISITA='${visita}'; `

     execute.Query(res,qry);
     
});

router.post("/editarcliente", async(req,res)=>{

    const{sucursal,codven,fecha,codclie,nitclie,nomclie,nomfactura,dirclie,codmun,coddepto,referencia,obs,visita,lat,long,telefono} = req.body;

    let qry = `UPDATE ME_CENSO SET CODVEN=${codven},FECHA='${fecha}',NITCLIE='${nitclie}',NOMCLIE='${nomclie}',
    TELEFONO='${telefono}',NOMFACTURA='${nomfactura}',DIRCLIE='${dirclie}',CODMUN='${codmun}',CODDEPTO='${coddepto}', 
    REFERENCIA='${referencia}',OBS='${obs}',VISITA='${visita}',LAT=${lat},LONG=${long}
     WHERE CODSUCURSAL='${sucursal}' AND CODCLIE=${codclie}; `

     execute.Query(res,qry);
     
});

router.post("/deletecliente", async(req,res)=>{

    const{sucursal,codclie} = req.body;

    let qry = `DELETE FROM ME_CENSO WHERE CODSUCURSAL='${sucursal}' AND CODCLIE=${codclie};`

     execute.Query(res,qry);
     
});

module.exports = router;

