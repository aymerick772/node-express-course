const express = require('express');
const app = express();

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users',function(req,res){
	console.log(req.params.ig)
	res.json({
		success: true,
		message: 'go one user',
		users: req.params.id
	})
})

app.listen(8000,function(){console.log('server is listening')})

