import express, { Router } from 'express';

import personalController from '../controllers/personalController';

class PersonalRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/nuevo' , personalController.create);
        this.router.get('/listar/:desde' , personalController.listarPersonal);
        this.router.get('/busqueda/:pBusqueda' , personalController.getOne);

        // this.router.get('/:desde/:FechaInicio/:FechaFin', [mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], cajaController.list);
        // this.router.post('/ingresos',[mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], cajaController.createIngreso);
        // this.router.get('/ingresos/listar/:desde/:FechaInicio/:FechaFin', [mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], cajaController.listarIngresos);
        // this.router.get('/cliente/:id', cajaController.dameMovimientosClientes);

    }

}

const personalRoutes = new PersonalRoutes();
export default personalRoutes.router;