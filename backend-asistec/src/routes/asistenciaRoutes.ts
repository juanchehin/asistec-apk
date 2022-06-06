import express, { Router } from 'express';

import asistenciasController from '../controllers/asistenciasController';

class AsistenciasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // this.router.get('/:desde/:FechaInicio/:FechaFin', cajaController.list);
        // this.router.post('/egresos' , cajaController.createEgreso);
        // this.router.get('/egresos/listar/:desde/:FechaInicio/:FechaFin' ,[mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], cajaController.listarEgresos);
        // this.router.post('/ingresos',[mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], cajaController.createIngreso);
        // this.router.get('/ingresos/listar/:desde/:FechaInicio/:FechaFin', [mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], cajaController.listarIngresos);
        // this.router.get('/cliente/:id', cajaController.dameMovimientosClientes);

    }

}

const asistenciasRoutes = new AsistenciasRoutes();
export default asistenciasRoutes.router;