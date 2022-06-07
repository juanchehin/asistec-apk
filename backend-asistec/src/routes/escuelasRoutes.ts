import express, { Router } from 'express';

import escuelasController from '../controllers/escuelasController';

class EscuelasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/listar/:desde' , escuelasController.listarEscuelas);
        this.router.get('/busqueda/:pBusqueda' , escuelasController.buscarEscuela);

    }

}

const escuelasRoutes = new EscuelasRoutes();
export default escuelasRoutes.router;