import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Usuarios extends BaseSchema {
  protected tableName = 'tab_usuario'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_usuario').primary()
      table.integer('id_perfil').notNullable()
      table.string('nom_usuario').notNullable()
      table.string('des_email').notNullable().unique()
      table.string('des_senha').notNullable()
      table.string('num_telefone')
      table.dateTime('dat_cadastro').notNullable()
      table.integer('id_grupo_clientes').notNullable()
      table.integer('id_cliente_padrao').notNullable()
      table.boolean('ind_primeiro_acesso').notNullable().defaultTo(false)
      table.boolean('ind_aceite_contrato').notNullable().defaultTo(false)
      table.string('cod_token_reset_senha')
      table.dateTime('dat_token_reset_senha')
      table.dateTime('dat_aceite_contrato')
      table.string('des_ip_aceite_contrato')
      table.boolean('ind_ativo').notNullable().defaultTo(true)
      table.boolean('ind_mostrar_todas_empresas').notNullable().defaultTo(false)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
