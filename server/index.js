import express from 'express'
import cors from 'cors'
import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const data = {
    errors: JSON.parse(fs.readFileSync('data/errors.json')),
    exercises: JSON.parse(fs.readFileSync('data/exercises.json')),
    news: JSON.parse(fs.readFileSync('data/news.json')),
    programs: JSON.parse(fs.readFileSync('data/programs.json')),
    users: JSON.parse(fs.readFileSync('data/users.json')),
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express(),
 PORT = 5000
 app.use(cors())
 app.use(express.json())
 app.get( '/' , ( req, res ) => {
    res.sendFile(`${__dirname}/data/${req.query.src}`)
 } ) //express.static( path.join(__dirname, 'data'))


app.get('/user', (req, res) => {  
    res.json(data.users[req.query.id || -1])
})

// app.get('/', (req,res) => {
//     res.json(fs.readFileSync('data/errors.json')[0])
// })

app.get('/login', (req, res) => {
    console.log(req.query.password,data.users.filter(user => user.name ===  req.query.username ? user.password : null)[0])
    if( req.query && req.query.password && req.query.username &&
    req.query.password === data.users.filter(user => user.name ===  req.query.username ? user.password : null)[0].password){
        try {
            console.log(req.query)
            res.json(data.users.filter(user => user.name === req.query.username))
        } catch {
            res.json(data.errors)
        }
    }
    else {
        res.json(data.errors)
    }
})

app.get('/register', (req, res) => {
    let breaked = false;
    data.users.forEach(user => {
        if(user.name === req.query.username){res.json(data.errors); breaked = true}
    });
    if(!breaked){
        let newUser = {
            name: req.query.username,
            password: req.query.password,
        }
        
        data.users = Array.from(data.users)
    
        data.users.push(newUser)
    
        fs.writeFileSync('./data/users.json', JSON.stringify(data.users, 4, 4))
        res.json(newUser)
    }
})

app.get('/change', ( req, res ) => {
    const users = Array.from(data.users)
    let userNow
    users.forEach( ( user, i ) => {
        if ( user.name === req.query.username ) userNow = i
    } )
    users[userNow][req.query.key] = req.query.value
    fs.writeFileSync('./data/users.json', JSON.stringify(users, 4, 4))
    data.users = users
    res.json(users[userNow])
})
app.get( '/programs', ( req, res ) => {
    res.json(data.programs)
} )
app.get( '/program', ( req, res ) => {
    res.json(data.programs[Number(req.query.id)])
} )

app.get('/news', (req, res) => {
    res.json(data.news)
})

app.get('/startTraining', (req, res) => {
    res.json([data.programs[req.query.id || 0].plan, data.exercises])
})

app.listen( PORT, function () {
    console.log(`Server started on http://localhost:${PORT}`)
} )