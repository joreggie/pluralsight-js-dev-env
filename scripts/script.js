import express from'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/*eslint-disable no-console*/
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(3000, (err)=>{
    if(err) console.log(err);
    open('http://localhost:3000/')
})
