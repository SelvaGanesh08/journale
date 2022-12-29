const exp = require('express');
const bp=require('body-parser');
const path=require('path');
const app =exp();
const rootdir = require('./util/path');
const index =require('./routes/index');
const write=require('./routes/write')
const article=require('./routes/article');
app.set('view engine','ejs');
app.set('views',path.join(rootdir, 'views'));
app.use(bp.urlencoded({extended: false}));
app.use(exp.static(path.join(rootdir,'public')));
app.use('/tinymce', exp.static(path.join(rootdir, 'node_modules', 'tinymce')));
app.use(write);
app.use(article);
app.use(index);

app.listen(3000);
