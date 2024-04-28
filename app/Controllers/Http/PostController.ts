import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PostService from 'App/Services/PostService';

export default class PostsController {
  constructor(private postService: PostService) {}

  public async getAll({ response }: HttpContextContract) {
    try {
      const resp = await this.postService.getAll();
      return response.status(200).send(resp);
    } catch (error) {
      console.error('Erro ao obter posts:', error);
      return response.status(500).send({ message: 'Erro interno do servidor' });
    }
  }
}
