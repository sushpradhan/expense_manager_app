const router = require('express').Router();

// write all routing code and logic here

var data = require('../../../db.json');

router.get('/', (req, res)=>{

    res.json(data);
    res.end();
})

router.post('/', (req, res)=>{

    const detail=req.body;
    data.push(detail);
    res.send("Details saved");
    res.end();
})

router.delete('/:id', (req, res)=>{

    const id= req.params.id;
    const newData=data.filter(data => data.id !== id);
    data=newData;
    res.send("deleted");
    res.end();
})

router.put('/:id', (req, res)=>{
    const id= req.params.id;
    const newexpense = req.body;
    const newData=data.filter(data => data.id!==id);
    data=newData;
    data.push(newexpense);
    res.send("updated");
    res.end();

})








module.exports = router;