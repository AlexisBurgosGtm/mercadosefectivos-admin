let classNavegar = {
    login : async()=>{
        divUsuario.innerText = 'DESCONECTADO';
        lbTipo.innerText = "Inicie sesión";
        rootMenu.innerHTML = '';
        GlobalCoddoc = '';
        GlobalCodUsuario=99999;
        GlobalUsuario = '';
        GlobalTipoUsuario ='';
            funciones.loadScript('../views/login/index.js','root')
            .then(()=>{
                GlobalSelectedForm='LOGIN';
                InicializarVista();
            })
        
    },
    inicio : async(tipousuario)=>{
        divUsuario.innerText = GlobalUsuario;
        lbTipo.innerText = GlobalTipoUsuario;

        switch (tipousuario) {
            case 'VENDEDOR':
                classNavegar.inicioVendedor();
                break;

            case 'SUPERVISOR':
                classNavegar.inicioSupervisor();
                break;
            
            case 'DIGITADOR':
                classNavegar.inicioDigitador();
                break;
            
            case 'REPARTIDOR':
                classNavegar.inicioRepartidor();
                break;
            case 'GERENTE':
                classNavegar.inicioGerente();                        
                break;
            default:
                break;
        };
    },
    inicioVendedor : async ()=>{
        let strMenu =   `
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuVendedorClientes">
                                <span>VENDER</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuVendedorReparto">
                                <span>REPARTO</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuVendedorPedidos">
                                <span>LOGRO DIA</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuVendedorLogro">
                                <span>LOGRO MES</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuVendedorNoticias">
                                <span>NOTICIAS</span>
                            </a>
                            `
                rootMenu.innerHTML = strMenu;

                funciones.loadScript('../views/vendedor/vendedor.js','root')
                .then(async()=>{
                    GlobalSelectedForm='INICIO';
                    InicializarVista();
                    
                      // handlers del menu
                    let btnMenuVendedorClientes = document.getElementById('btnMenuVendedorClientes');
                    btnMenuVendedorClientes.addEventListener('click',()=>{
                        classNavegar.inicio('VENDEDOR');
                    });
                    let btnMenuVendedorReparto = document.getElementById('btnMenuVendedorReparto');
                    btnMenuVendedorReparto.addEventListener('click',()=>{
                        classNavegar.vendedorReparto();
                    });
                    let btnMenuVendedorPedidos = document.getElementById('btnMenuVendedorPedidos');
                    btnMenuVendedorPedidos.addEventListener('click',()=>{
                        classNavegar.pedidos();
                    });
                    let btnMenuVendedorLogro = document.getElementById('btnMenuVendedorLogro');
                    btnMenuVendedorLogro.addEventListener('click',()=>{
                        classNavegar.logrovendedor();
                    });
                    let btnMenuVendedorNoticias = document.getElementById('btnMenuVendedorNoticias');
                    btnMenuVendedorNoticias.addEventListener('click',()=>{
                        classNavegar.noticias();
                    });
                    //actualiza la ubicación del empleado
                    await classEmpleados.updateMyLocation();
                })          
    },
    inicioGerente: ()=>{
                let strMenu =  `
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuGerenteInicio">
                                <span>Inicio</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuGerenteTracking">
                                <span>Tracking de Personal</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuGerenteVendedores">
                                <span>Vendedores</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuGerenteProductos">
                                <span>Productos</span>
                            </a>
                            
                            <a class="dropdown-item hidden" data-toggle="dropdown" id="btnMenuGerenteUsuarios">
                                <span>Usuarios</span>
                            </a>
                            <a class="dropdown-item hidden" data-toggle="dropdown" id="btnMenuGerenteNoticias">
                                <span>Noticias</span>
                            </a>
                            `
                    rootMenu.innerHTML = strMenu;
                       
                     // handlers del menu
                    let btnMenuGerenteInicio = document.getElementById('btnMenuGerenteInicio');
                    btnMenuGerenteInicio.addEventListener('click',()=>{
                        classNavegar.inicioGerente();
                    });
                    let btnMenuGerenteTracking = document.getElementById('btnMenuGerenteTracking');
                    btnMenuGerenteTracking.addEventListener('click',()=>{
                       classNavegar.gerenteTracking(); 
                    });
                    let btnMenuGerenteVendedores = document.getElementById('btnMenuGerenteVendedores');
                    btnMenuGerenteVendedores.addEventListener('click',()=>{
                        classNavegar.gerenteVendedores();
                    });
                    let btnMenuGerenteProductos = document.getElementById('btnMenuGerenteProductos');
                    btnMenuGerenteProductos.addEventListener('click',()=>{
                       classNavegar.gerenteProducto(); 
                    });
                    let btnMenuGerenteUsuarios = document.getElementById('btnMenuGerenteUsuarios');
                    btnMenuGerenteUsuarios.addEventListener('click',()=>{
                        
                    });
                    
                    let btnMenuGerenteNoticias = document.getElementById('btnMenuGerenteNoticias');
                    btnMenuGerenteNoticias.addEventListener('click',()=>{
                        
                    });

                    classNavegar.gerenteIniciar(); 
        
    },
    inicioDigitador : ()=>{
        console.log('inicio digitador');
          let strMenu =   `
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuDigitadorPendientes">
                                <span>PEDIDOS PENDIENTES</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuDigitadorEmbarques">
                                <span>EMBARQUES/PICKING</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuDigitadorUsuarios">
                                <span>GESTION DE USUARIOS</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuDigitadorClientes">
                                <span>GESTION DE CLIENTES</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuDigitadorNoticias">
                                <span>NOTICIAS</span>
                            </a>
                            `
                rootMenu.innerHTML = strMenu;

                funciones.loadScript('../views/digitador/inicio.js','root')
                .then(()=>{
                    GlobalSelectedForm='DIGITACION';
                    iniciarVistaDigitador();
                    
                      // handlers del menu
                    let btnMenuDigitadorPendientes = document.getElementById('btnMenuDigitadorPendientes');
                    btnMenuDigitadorPendientes.addEventListener('click',()=>{
                        classNavegar.inicioDigitador();
                    });
                    
                    let btnMenuDigitadorEmbarques = document.getElementById('btnMenuDigitadorEmbarques');
                    btnMenuDigitadorEmbarques.addEventListener('click',()=>{
                        classNavegar.digitadorEmbarques();                  
                    });

                    let btnMenuDigitadorUsuarios = document.getElementById('btnMenuDigitadorUsuarios');
                    btnMenuDigitadorUsuarios.addEventListener('click',()=>{
                        classNavegar.gerenteUsuarios('VENDEDOR');
                    });

                    let btnMenuDigitadorClientes = document.getElementById('btnMenuDigitadorClientes');
                    btnMenuDigitadorClientes.addEventListener('click',()=>{
                        classNavegar.supervisorClientes();
                    });

                    let btnMenuDigitadorNoticias = document.getElementById('btnMenuDigitadorNoticias');
                    btnMenuDigitadorNoticias.addEventListener('click',()=>{
                        classNavegar.noticias();
                    });
                })            
    },
    inicioRepartidor : async()=>{
        let strMenu =  `
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuGerenteInicio">
                                <span>Pickings</span>
                            </a>
                            
                            <a class="dropdown-item hidden" data-toggle="dropdown" id="btnMenuGerenteNoticias">
                                <span>Noticias</span>
                            </a>
                            `
                    rootMenu.innerHTML = strMenu;
                       
                     // handlers del menu
                    let btnMenuGerenteInicio = document.getElementById('btnMenuGerenteInicio');
                    btnMenuGerenteInicio.addEventListener('click',()=>{
                        classNavegar.inicioGerente();
                    });
                    
                    
                    let btnMenuGerenteNoticias = document.getElementById('btnMenuGerenteNoticias');
                    btnMenuGerenteNoticias.addEventListener('click',()=>{
                        

                    });

                    //actualiza la ubicación del empleado
                    await classEmpleados.updateMyLocation();

                    classNavegar.repartidorIniciar();

    },
    inicioSupervisor : async()=>{
        let strMenu =  `
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuSupervisorDashboard">
                                <span>Dashboard</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuSupervisorVendedores">
                                <span>Vendedores</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuSupervisorClientes">
                                <span>Clientes</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuSupervisorPrecios">
                                <span>Precios</span>
                            </a>
                            <a class="dropdown-item" data-toggle="dropdown" id="btnMenuSupervisorNoticias">
                                <span>Noticias</span>
                            </a>
                            `
                    rootMenu.innerHTML = strMenu;

                     // handlers del menu
                     let btnMenuSupervisorDashboard = document.getElementById('btnMenuSupervisorDashboard');
                     btnMenuSupervisorDashboard.addEventListener('click',()=>{
                         classNavegar.supervisorDashboard();
                     });

                     let btnMenuSupervisorVendedores = document.getElementById('btnMenuSupervisorVendedores');
                     btnMenuSupervisorVendedores.addEventListener('click',()=>{
                         classNavegar.supervisorVendedores();
                     });
                     let btnMenuSupervisorClientes = document.getElementById('btnMenuSupervisorClientes');
                     btnMenuSupervisorClientes.addEventListener('click',()=>{
                         classNavegar.supervisorClientes();
                     });
                     
                     let btnMenuSupervisorPrecios = document.getElementById('btnMenuSupervisorPrecios');
                     btnMenuSupervisorPrecios.addEventListener('click',()=>{
                        classNavegar.supervisorPrecios(); 
                     });
                     
                     let btnMenuSupervisorNoticias = document.getElementById('btnMenuSupervisorNoticias');
                     btnMenuSupervisorNoticias.addEventListener('click',()=>{
                        classNavegar.noticias();     
                     });

                     //actualiza la ubicación del empleado
                    await classEmpleados.updateMyLocation();
                    //carga el inicio del supervisor
                    classNavegar.supervisorDashboard();
    },
    supervisorDashboard:()=>{
        funciones.loadScript('../views/supervisor/dashboard.js','root')
        .then(()=>{
            GlobalSelectedForm='SUPERVISORDASHBOARD';
            InicializarVistaSupervisorDashboard();
        });          
    },
    supervisorVendedores:()=>{
        funciones.loadScript('../views/supervisor/vendedores.js','root')
        .then(()=>{
            GlobalSelectedForm='SUPERVISORVENDEDOR';
            InicializarVistaSupervisorVendedores();
        });          
    },
    supervisorPrecios: ()=>{
        funciones.loadScript('../views/supervisor/precios.js','root')
        .then(()=>{
            GlobalSelectedForm='SUPERVISORPRECIOS';
            inicializarVistaPrecios();
        })
    },
    supervisorClientes: ()=>{
        funciones.loadScript('../views/supervisor/clientes.js','root')
        .then(()=>{
            GlobalSelectedForm='SUPERVISORCLIENTES';
            inicializarVistaClientesSupervisor();
        })
    },
    repartidorIniciar:()=>{
        funciones.loadScript('../views/repartidor/inicio.js','root')
        .then(()=>{
            GlobalSelectedForm='REPARTIDORINICIO';
            iniciarVistaRepartidor();
        });            
    },
    ventas: async(nit,nombre,direccion)=>{
        
            funciones.loadScript('./views/vendedor/facturacion.js','root')
            .then(()=>{
                GlobalSelectedForm ='VENTAS';
                iniciarVistaVentas(nit,nombre,direccion);
            })
          
    },
    vendedorReparto: async()=>{
        
        funciones.loadScript('./views/vendedor/reparto.js','root')
        .then(()=>{
            GlobalSelectedForm ='VENDEDORREPARTO';
            iniciarVistaVendedorReparto();
        })
      
    },
    pedidos: async ()=>{
        funciones.loadScript('../views/pedidos/vendedor.js','root')
        .then(()=>{
            GlobalSelectedForm='PEDIDOS';
            inicializarVistaPedidos();
        })             
    },
    logrovendedor: ()=>{
        funciones.loadScript('../views/pedidos/vendedorlogro.js','root')
            .then(()=>{
                GlobalSelectedForm='LOGROVENDEDOR';
                inicializarVistaLogro();
        })
    },
    despacho: async()=>{
        funciones.loadView('../views/despacho/index.html','root')
        .then(()=>{
            funciones.loadScript('./views/despacho/controller.js','root')
            .then(()=>{
                GlobalSelectedForm ='DESPACHO';
                controllerdespacho.iniciarVistaDespacho();

            })
        })
    },
    noticias: ()=>{
        funciones.loadScript('../views/noticias/index.js','root')
        .then(()=>{
            GlobalSelectedForm='NOTICIAS';
            inicializarVistaNoticias();
        })
    },
    gerenteIniciar: ()=>{
        funciones.loadScript('../views/gerente/inicio.js','root')
        .then(()=>{
            GlobalSelectedForm='GERENTE';
            InicializarVistaGerente();
        });
    },
    gerenteTracking: ()=>{
        funciones.loadScript('../views/gerente/tracking.js','root')
        .then(()=>{
            GlobalSelectedForm='GERENTETRACKING';
            InicializarVistaGerenteTracking();
        })
    },
    gerenteVendedores: ()=>{
        funciones.loadScript('../views/gerente/vendedores.js','root')
        .then(()=>{
            GlobalSelectedForm='GERENTEVENDEDORES';
            InicializarVistaGerenteVendedores();
        })
    },
    gerenteProducto: ()=>{
        funciones.loadScript('../views/gerente/productos.js','root')
        .then(()=>{
            GlobalSelectedForm='GERENTEPRODUCTOS';
            inicializarVistaGerenteProductos();
        })
    },
    digitadorEmbarques : ()=>{
        funciones.loadScript('../views/digitador/embarques.js','root')
        .then(()=>{
            GlobalSelectedForm='DIGITADOREMBARQUES';
            iniciarVistaEmbarques();
        })
    },
    gerenteUsuarios:(tipo)=>{
        funciones.loadScript('../views/usuarios/inicio.js','root')
        .then(()=>{
            GlobalSelectedForm='USUARIOS';
            inicializarVistaUsuarios(tipo);
        })          
    }
}