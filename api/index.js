const novax = require('novaxjs2');
const app = new novax();
app.serveStatic()
const redirectMiddleware = (req, res, next) => {
  const originalUrl = req.fullUrl || `${req.protocol}://${req.headers.host}${req.url}`;
  const targetDomain = 'https://www.cabdiwaaxidsiciid.site/';
  
  if (originalUrl === 'https://cabdiwaaxidsiciid.vercel.app/' || originalUrl.includes('cabdiwaaxidsiciid.vercel.app')) {
    
    const newUrl = originalUrl.replace('https://cabdiwaaxidsiciid.vercel.app', 'https://www.cabdiwaaxidsiciid.site');
    
    res.set({
      'X-Redirect-By': 'Novaxjs2-Redirect-Middleware',
      'X-New-Location': newUrl
    });
    return res.redirect(newUrl, 301);
  }
  next();
};

app.useMiddleware(redirectMiddleware);
app.get('/', (req, res) => app.sendFile('./index.html', res));
app.on(404, (req, res) => app.sendFile('./404.html', res));
app.at(3000, '0.0.0.0', () => console.log('Server is running on port 3000'));
