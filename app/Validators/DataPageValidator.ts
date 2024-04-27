import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'

export default class DataPageValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    data: schema.string({}, [
      rules.required(),
      rules.regex(/^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/),
    ]),
    page: schema.number([rules.required()]),
  })

  public messages = {
    required: 'É necessário preencher o campo: {{ field }}',
    range: 'O valor está fora da faixa do campo: {{ field }}',
    maxLength: 'Excesso de caracteres no campo: {{ field }}',
    regex: 'O valor está fora do padrão para o campo: {{ field }}',
  }
}
