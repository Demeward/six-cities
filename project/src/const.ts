enum AppRoute {
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH'
}

export {AppRoute, AuthorizationStatus};
