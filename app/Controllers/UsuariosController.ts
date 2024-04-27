import Usuario from 'App/Models/Usuario'
import { UsuarioRepository } from 'App/Repository/UsuarioRepository'
import DataPageValidator from 'App/Validators/DataPageValidator'

export default class UsuariosController {
  // public async data({ request }: HttpContext): Promise<Usuario[]> {
  //   let body = await request.validate(DataPageValidator)
  //   return await new UsuarioRepository().dataSearch(body.data, body.page)
  // }

  public async full(): Promise<Usuario[]> {
    return await new UsuarioRepository().full()
  }
}
