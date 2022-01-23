//1 - importamos express
const express = require('express');
const app = express();


//2 - set urlencoded para guardar os dados do formulário
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/public", express.static('public'));

//3 - importar o dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//4 - set diretorio publico
app.use('/resources',express.static('public'));
app.use('/resources',express.static(__dirname + '/public'));

//5 - estabelecer o ejs
app.set('view engine','ejs');

//6 - importar modulo para fazer o caching, bcryptjs
const bcryptjs = require('bcryptjs');

//7 - Variaveis de sessão
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized:true
}));

//8 - invocamos o modulo de conexao à bd
const connection = require('./database/db');

//estabelecer rotas

app.get('/login', (req, res)=>{
    res.render('login');
})
app.get('/register', (req, res)=>{
    res.render('register');
})

//10 - Registo
app.post('/register', async (req, res)=>{
     
	 const { name, email, pass, passwordConfirm} = req.body;
     let passwordHaash = await bcryptjs.hash(pass,8);

	 connection.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if(error){
            console.log(error);
        }
        if(results.length > 0) {
            return res.render('register', {
                alert: true, 
                alertTitle: "Email in use",
                alertMessage: "Oops! Seems like that email is already in use",
                alertIcon: 'success',
                showConfirmButton: false,
                timer:1500,
                ruta:''
            })
        } else if( pass !== passwordConfirm){
            return res.render('register', {
                alert: true, 
                alertTitle: "Does not match",
                alertMessage: "Passwords do not match",
                alertIcon: 'success',
                showConfirmButton: false,
                timer:1500,
                ruta:''
            });
        }
	
     connection.query('INSERT INTO users SET ?', {name:name, email:email, pass:passwordHaash}, async(error, results)=>{
        if(error){
             console.log(error);
        }else{
            res.render('register',{
                alert: true, 
                alertTitle: "Registration",
                alertMessage: "Successful Registration!",
                alertIcon: 'success',
                showConfirmButton: false,
                timer:1500,
                ruta:''
            })
        }
     })
	});
})
//11 - Metodo para autenticação
app.post('/auth', async (req, res)=> {
	const email = req.body.email;
	const pass = req.body.pass;    
    let passwordHaash = await bcryptjs.hash(pass, 8);	
    if (email && pass) {
		connection.query('SELECT * FROM users WHERE email = ?', [email], async (error, results, fields)=> {
			if( results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass)) ) {    
				res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Incorrect user or password",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'    
                    });
				
                //res.send('Incorrect Username and/or Password!');				
			} else {    
				//criamos uma var de sessao, set true se iniciou sessao        
				req.session.loggedin = true;                
				req.session.name = results[0].name;
				res.render('login', {
					alert: true,
					alertTitle: "Conection Successful",
					alertMessage: "WELCOME TO PIRATE TREASURE",
					alertIcon:'success',
					showConfirmButton: false,
					timer: 1500,
					ruta: ''
				});        			
			}			
			res.end();
		});
	} else {	
		res.send('Please enter email and Password!');
		res.end();
	}
});
//12 - Método para controlar que está auth em todas as páginas
app.get('/', (req, res)=> {
	if (req.session.loggedin) {
		res.render('index',{
			login: true,
			name: req.session.name			
		});		
	} else {
		res.render('index',{
			login:false,
			name:'Hello! Please Log In or Register',			
		});				
	}
	res.end();
});


//funçao para limpar a cache dps do logout
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});

 //13 - Logout
//Destroi a sessao
app.get('/logout', function (req, res) {
	req.session.destroy(() => {
	  res.redirect('/') // siempre se ejecutará después de que se destruya la sesión
	})
});


