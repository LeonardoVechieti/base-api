import Usuario from 'App/Models/entities/Usuario'

export class UsuarioRepository {

  public async full(): Promise<Usuario[]> {
    return Usuario.query().orderBy('created_at', 'desc')
  }

  public async data(body): Promise<Usuario[]> {
    return Usuario.query().where('name', 'like', `%${body.name}%`).orderBy('created_at', 'desc')
  }
}
