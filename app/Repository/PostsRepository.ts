import Post from 'App/Models/Post'

export class PostsRepository {

  public async store(body): Promise<Post> {
    return await Post.create(body)
  }

  public async index(): Promise<Post[]> {
    return Post.query().orderBy('created_at', 'desc').paginate(1, 10)
  }
}
