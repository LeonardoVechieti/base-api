import {
  BaseModel,
  column,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Usuario extends BaseModel {
  public static get table() {
    return 'tab_usuario'
  }
  @column({ isPrimary: true, columnName: 'id_usuario' })
  public idUsuario: number

  @column()
  public idPerfil: number

  @column({ serializeAs: 'nome' })
  public nomUsuario: string

  @column({ serializeAs: 'email' })
  public desEmail: string

  @column({ serializeAs: null })
  public desSenha: string

  @column({ serializeAs: 'telefone' })
  public numTelefone: string

  @column()
  public datCadastro: DateTime

  @column()
  public idGrupoClientes: number

  @column()
  public idClientePadrao: number

  @column({ serializeAs: 'primeiroAcesso' })
  public indPrimeiroAcesso: Boolean

  @column({ serializeAs: 'aceiteContrato' })
  public indAceiteContrato: Boolean

  @column({ serializeAs: 'tokenResetSenha' })
  public codTokenResetSenha: string

  @column()
  public datTokenResetSenha: DateTime

  @column()
  public datAceiteContrato: DateTime

  @column()
  public desIpAceiteContrato: string

  @column({ serializeAs: 'ativo' })
  public indAtivo: Boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column({ serializeAs: 'mostrarTodasEmpresas' })
  public indMostrarTodasEmpresas: Boolean
}
