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

    }

}

const personalRoutes = new PersonalRoutes();
export default personalRoutes.router;