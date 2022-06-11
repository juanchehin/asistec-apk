import { Request, Response } from 'express';
import pool from '../database';

class AsistenciasController {

// ==================================================
//   Lista las asistencias del dia de hoy
// ==================================================

public async listarAsistenciasHoy(req: Request, res: Response): Promise<void> {

        var desde = req.params.desde || 0;
        desde  = Number(desde);
        var fechaHoy = new Date().toISOString().slice(0, 10);

        pool.query(`call bsp_dame_asistencias_por_dia('${fechaHoy}','${desde}')`, function(err: any, result: any, fields: any){
            if(err){
                console.log("error", err);
                return;
            }
            res.json(result);
        })
}


// ==================================================
//        Inserta una asistencia
// ==================================================
public async marcarAsistencia(req: Request, res: Response) {

        var pDNI = req.params.pDNI;
   
        pool.query(`call bsp_alta_asistencia('${pDNI}','-')`, function(err: any, result: any, fields: any){
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