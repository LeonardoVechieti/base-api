import Usuario from 'App/Models/Usuario'

export class UsuarioRepository {

  public async full(): Promise<Usuario[]> {
    return Usuario.query().orderBy('created_at', 'desc')
  }
}
