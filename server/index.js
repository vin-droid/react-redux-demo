const express =  require('express');

const app = express();

const port = process.env.port || 4000;

const request  =  require('request');

var url = require('url');


app.listen(port, () => console.log(`Listening on port ${port}`));

if (process.env.NODE_ENV === 'development') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('User-Agent', 'Chrome');
    res.setHeader("Accept", "application/vnd.github.v3.full+json");

    // Pass to next layer of middleware
    next();
});

app.get('/api/search-github-users', (req, res) => {
	let url_parts = url.parse(req.url, true);
	let searchKey = url_parts.query.username;
	console.log(searchKey);
    let URL = `https://api.github.com/search/users?q=${searchKey}`;
    console.log(URL);
	request.get({ url: URL, headers: {'User-Agent':'Chrome'}},(err,response,body)=>{
        //console.log(body);
		res.json({
            result: JSON.parse(body)
		});
        console.log(response);
	})
});