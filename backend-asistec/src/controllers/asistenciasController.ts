import { Request, Response } from 'express';
import pool from '../database';

class AsistenciasController {

// ==================================================
//       
// ==================================================

// public async damePersonal(req: Request, res: Response): Promise<void> {
//     const { id } = req.params;

//     pool.query(`call bsp_dame_personal('${id}')`, function(err: any, result: any, fields: any){
//         if(err){
//             console.log("error", err);
//             return;
//         }
//         res.json(result);
//     })
// }

// ==================================================
//        Lista planes desde cierto valor
// ==================================================

    public async listarAsistencias(req: Request, res: Response): Promise<void> {

        var desde = req.params.desde || 0;
        desde  = Number(desde);

        pool.query(`call bsp_listar_asistencias('${desde}')`, function(err: any, result: any, fields: any){
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
            if (result[0][0].Mensaje !== 'El personal no existe!') {
                return res.json(result[0]);
            }
            res.status(404).json({ text: "El personal no existe" });
        })
    
}

// ==================================================
//        Inserta una asistencia
// ==================================================


public async altaAsistencia(req: Request, res: Response) {

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

const asistenciasController = new AsistenciasController;
export default asistenciasController;