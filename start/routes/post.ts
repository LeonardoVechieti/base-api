import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Route.post('/post', 'PostController.create')
  Route.get('/post', 'PostController.getAll')
})
.prefix('api')
