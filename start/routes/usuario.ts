import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/usuario/completo', 'UsuariosController.full')
})
  // .middleware('basic:ROLE_BI_VIEW')
  // .prefix('api')
