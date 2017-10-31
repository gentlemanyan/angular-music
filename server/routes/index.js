exports.route = function( app ) {
  app.use('/', (req, res, next) => {
    if ( !req.session ) {
      next();
    }
  });

  app.use('/user/login', (req, res, next) => {
    console.log('用户登录.......');
    console.log( req.body );
  });

  app.use('/user/register', (req, res, next) => {
    
  });

  app.use('/user/delete', (req, res, next) => {

  });
}