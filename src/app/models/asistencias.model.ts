export class Asistencias {
  constructor(
    public idAsistencia: string,
    public idPersonal: string,
    private horarioEntrada: Date,
    private horarioSalida: Date,
    public observaciones: string
  ) {}

}
