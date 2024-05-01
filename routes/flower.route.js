const router = require('express').Router()
import { find } from '../models/flowers.model';


router.route('/').get((req, res) => {
  find()
    .then(flowers => res.json(flowers))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const date = Date.parse(req.body.date);


  const newExample = new Example({
    name,
    description,
    date,
  });


  newExample.save()
    .then(() => res.json('Example added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


export default router;