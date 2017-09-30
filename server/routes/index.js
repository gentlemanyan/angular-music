exports.route = function( app ) {
  app.use('/', (req, res, next) => {
    if ( !req.session ) {
      next();
    }
  });

  app.use('/user/login', (req, res, next) => {
    
  });

  app.use('/user/register', (req, res, next) => {
    
  });

  app.use('/user/delete', (req, res, next) => {

  });
}