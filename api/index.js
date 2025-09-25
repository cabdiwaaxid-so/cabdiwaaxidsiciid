const novax = require('novaxjs2');
const app = new novax();
app.serveStatic()
const redirectMiddleware = (req, res, next) => {
  const originalUrl = req.fullUrl || `${req.protocol}://${req.headers.host}${req.url}`;
  const targetDomain = `https://www.cabdiwaaxidsiciid.site${req.url}`;
  
  if (originalUrl === 'https://cabdiwaaxidsiciid.vercel.app/' || originalUrl.includes('cabdiwaaxidsiciid.vercel.app')) {
    res.set({
      'X-Redirect-By': 'Novaxjs2-Redirect-Middleware',
      'X-New-Location': targetDomain
    });
    return res.redirect(targetDomain, 301);
  }
  next();
};
app.useMiddleware(redirectMiddleware);
app.get('/', (req, res) => app.sendFile('./public/index.html', res));
app.on(404, (err, req, res) => app.sendFile('./public/404.html', res));
app.at(3000, '0.0.0.0', () => console.log('Server is running on port 3000'));