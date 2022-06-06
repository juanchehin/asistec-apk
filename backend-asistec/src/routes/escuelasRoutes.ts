import express, { Router } from 'express';

import escuelasController from '../controllers/escuelasController';

class EscuelasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // this.router.get('/:desde/:FechaInicio/:FechaFin', [mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], cajaController.list);
        // this.router.post('/egresos' , [mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], cajaController.createEgreso);
        // this.router.get('/egresos/listar/:desde/:FechaInicio/:FechaFin' ,[mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], cajaController.listarEgresos);
        // this.router.post('/ingresos',[mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], cajaController.createIngreso);
        // this.router.get('/ingresos/listar/:desde/:FechaInicio/:FechaFin', [mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], cajaController.listarIngresos);
        // this.router.get('/cliente/:id', cajaController.dameMovimientosClientes);

    }

}

const escuelasRoutes = new EscuelasRoutes();
export default escuelasRoutes.router;