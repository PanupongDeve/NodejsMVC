const app = require('./app');

let PORT = 3000;

if (process.env.NODE_ENV === 'production') {
    PORT = 80;
}

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});


