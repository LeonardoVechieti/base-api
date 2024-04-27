import Post from 'App/Models/Post'
import { PostsRepository } from 'App/Repository/PostsRepository'
import { HttpContext } from '@adonisjs/core/build/standalone'


export default class PostsController {
  public async store({ request }: HttpContext): Promise<Post> {
    let body = request.all()
    return await new PostsRepository().store(body)
  }

  public async index(): Promise<Post[]> {
    return await new PostsRepository().index()
  }

}
