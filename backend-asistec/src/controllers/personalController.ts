import { Request, Response } from 'express';
import pool from '../database';

class PersonalController {

// ==================================================
//       
// ==================================================

public async damePersonal(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    pool.query(`call bsp_dame_personal('${id}')`, function(err: any, result: any, fields: any){
        if(err){
            console.log("error", err);
            return;
        }
        res.json(result);
    })
}

// ==================================================
//        Lista planes desde cierto valor
// ==================================================

    public async listarPersonal(req: Request, res: Response): Promise<void> {

        var desde = req.params.desde || 0;
        desde  = Number(desde);

        pool.query(`call bsp_listar_personal('${desde}')`, function(err: any, result: any, fields: any){
            if(err){
                console.log("error", err);
                return;
            }
            res.json(result);
        })
}

// ==================================================
//        Obtiene un personal de la BD a partir de su DNI
// ==================================================
public async getOne(req: Request, res: Response): Promise<any> {
        const { pBusqueda } = req.params;

        pool.query(`call bsp_buscar_personal('${pBusqueda}')`, function(err: any, result: any, fields: any){
            if(err){
                console.log("error", err);
                return;
            }
            res.json(result);
        })
    
}

// ==================================================
//        Inserta un personal
// ==================================================


public async create(req: Request, res: Response) {

        var pEscuela = req.body.pEscuela;
        var pApellidos = req.body.pApellidos;
        var pNombres = req.body.pNombres;
        var pDNI = req.body.Descripcion;
   
        pool.query(`call bsp_alta_personal('${pEscuela}','${pApellidos}','${pNombres}','${pDNI}')`, function(err: any, result: any, fields: any){
            if(err){
                console.log("error", err);
                return;
            }
            res.json({ Mensaje: 'Ok' });
        })


}


}

const personalController = new PersonalController;
export default personalController;