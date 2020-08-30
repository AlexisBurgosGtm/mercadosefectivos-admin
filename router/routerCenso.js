const execute = require('./connection');
const express = require('express');
const router = express.Router();

router.post("/nuevocliente", async(req,res)=>{

    const{sucursal,codven,fecha,codclie,nitclie,negocio,nomclie,dirclie,codmun,coddepto,referencia,obs,telefono,visita,lat,long} = req.body;

    let qry = `INSERT INTO ME_CENSO (CODSUCURSAL,CODVEN,FECHA,CODCLIE,NITCLIE,NEGOCIO,NOMCLIE,DIRCLIE,REFERENCIA,CODMUN,CODDEPTO,OBS,VISITA,LAT,LONG,TELEFONO)
    VALUES ('${sucursal}',${codven},'${fecha}',${codclie},'${nitclie}','${negocio}','${nomclie}','${dirclie}','${referencia}','${codmun}','${coddepto}','${obs}','${visita}',${lat},${long},'${telefono}');`

     execute.Query(res,qry);
     
});


router.post("/listaclientes", async(req,res)=>{

    const{sucursal,codven,visita} = req.body;

    let qry = `SELECT CODSUCURSAL,CODVEN,FECHA,CODCLIE,NITCLIE,NEGOCIO,NOMCLIE,DIRCLIE,CODMUN,CODDEPTO, REFERENCIA,OBS,VISITA,LAT,LONG,TELEFONO
     FROM ME_CENSO WHERE CODSUCURSAL='${sucursal}' AND CODVEN=${codven} AND VISITA='${visita}'; `

     execute.Query(res,qry);
     
});

router.post("/datoscliente", async(req,res)=>{

    const{sucursal,codven,codclie} = req.body;

    let qry = `SELECT * FROM ME_CENSO WHERE CODSUCURSAL='${sucursal}' AND CODVEN=${codven} AND CODCLIE='${codclie}'; `

     execute.Query(res,qry);
     
});

router.post("/editarcliente", async(req,res)=>{

    const{sucursal,codven,fecha,codclie,nitclie,negocio,nomclie,dirclie,referencia,codmun,coddepto,obs,visita,lat,long,telefono} = req.body;

    let qry = `UPDATE ME_CENSO SET CODVEN=${codven},FECHA='${fecha}',NITCLIE='${nitclie}',NEGOCIO='${negocio}',NOMCLIE='${nomclie}',
    TELEFONO='${telefono}',DIRCLIE='${dirclie}',CODMUN='${codmun}',CODDEPTO='${coddepto}', 
    REFERENCIA='${referencia}',OBS='${obs}',VISITA='${visita}',LAT=${lat},LONG=${long}
     WHERE CODSUCURSAL='${sucursal}' AND CODCLIE=${codclie}; `

     execute.Query(res,qry);
     
});

router.post("/deletecliente", async(req,res)=>{

    const{sucursal,codclie} = req.body;

    let qry = `DELETE FROM ME_CENSO WHERE CODSUCURSAL='${sucursal}' AND CODCLIE=${codclie};`

     execute.Query(res,qry);
     
});


router.post("/municipios", async(req,res)=>{

    const{sucursal} = req.body;

    let qry = `SELECT CODMUNI, DESMUNI FROM ME_MUNICIPIOS WHERE CODSUCURSAL='${sucursal}'; `

     execute.Query(res,qry);
     
});

router.post("/departamentos", async(req,res)=>{

    const{sucursal} = req.body;

    let qry = `SELECT CODDEPTO, DESDEPTO FROM ME_DEPARTAMENTOS WHERE CODSUCURSAL='${sucursal}'; `

     execute.Query(res,qry);
     
});

module.exports = router;

