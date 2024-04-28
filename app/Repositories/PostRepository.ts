import Post from 'App/Models/entities/Post'

export class PostRepository {

  public async getAll(): Promise<Post[]> {
    const postsPaginator = await Post.query().orderBy('created_at', 'desc').paginate(1, 10)
    return postsPaginator.all() // Retorna os resultados da consulta
  }
}
