import express, { Router } from 'express';

import asistenciasController from '../controllers/asistenciasController';

class AsistenciasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/marcar/:pDNI', asistenciasController.marcarAsistencia);
        this.router.get('/listar/:desde' , asistenciasController.listarAsistenciasHoy);
    }

}

const asistenciasRoutes = new AsistenciasRoutes();
export default asistenciasRoutes.router;