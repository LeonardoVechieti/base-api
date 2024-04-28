import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/post', 'PostsController.create')
  Route.get('/post', 'PostsController.getPosts')
})
.prefix('api')
