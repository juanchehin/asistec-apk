export class Personal {
  constructor(
    public idPersonal: string,
    public idEscuela: string,
    public apellidos: string,
    public nombres: string,
    public dni: string,
    public estado: string,
    public horasTrabajadas: string,
    private _token: string,
    private tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
      return null;
    }
    return this._token;
  }

  get tokenDuration() {
    if (!this.token) {
      return 0;
    }
    return this.tokenExpirationDate.getTime() - new Date().getTime();
  }
}
