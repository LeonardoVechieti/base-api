import { PostRepository } from 'App/Repositories/PostRepository';
import Post from 'App/Models/entities/Post'

export default class PostService {
    constructor(private postRepository: PostRepository) {}

    public async getAll(): Promise<Post[]> {
        return await this.postRepository.getAll();
    }
}
