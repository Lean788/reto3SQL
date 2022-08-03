const express = require('express');
const app = express();
require('dotenv').config();

//configure
app.set('json spaces', 2);
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api', apiRouter);

// Routes

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.get('*', (req, res)=> {
    
    return res.status(404).send('Route not found')
}); 


//connection and server up

db.then(()=>{
    
    app.listen(PORT, () => {
        console.log(`The server is listening on port ${PORT}`)
    });

}).catch((err) => console.log(err.message));