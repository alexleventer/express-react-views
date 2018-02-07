const express = require('express');
const reactViews = require('express-react-views');

const app = express();

app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  const initialState = {
    items: [
      'document your code',
      'drop the kids off at the pool',
      '</script><script>alert(666)</script>',
    ],
    text: '',
  };
  res.render('Html', {data: initialState});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Dynamic react example listening on port ' + port);
});
