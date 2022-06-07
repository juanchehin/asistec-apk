import { Request, Response } from 'express';
import pool from '../database';

class EscuelasController {

// ==================================================
//       
// ==================================================

public async buscarEscuela(req: Request, res: Response): Promise<void> {
    let escuela = req.params.pBusqueda;

    pool.query(`call bsp_buscar_escuela('${escuela}')`, function(err: any, result: any, fields: any){
        if(err){
            console.log("error", err);
            return;
        }
        res.json(result);
    })
}

// ==================================================
//        Lista esc desde cierto valor
// ==================================================

public async listarEscuelas(req: Request, res: Response): Promise<void> {

        var desde = req.params.desde || 0;
        desde  = Number(desde);

        pool.query(`call bsp_listar_escuelas('${desde}')`, function(err: any, result: any, fields: any){
            if(err){
                console.log("error", err);
                return;
            }
            res.json(result);
        })
}

// ==================================================
//        Obtiene un personal de la BD
// ==================================================
public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;

        pool.query(`call bsp_dame_personal('${id}')`, function(err: any, result: any, fields: any){
            if(err){
                console.log("error", err);
                return;
            }
            if (result[0][0].Mensaje !== 'La escuela no existe!') {
                return res.json(result[0]);
            }
            res.status(404).json({ text: "La escuela no existe" });
        })
    
}


}

const escuelasController = new EscuelasController;
export default escuelasController;