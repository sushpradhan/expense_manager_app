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

const dateconversion = (x) => {
    var pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    var arrayDate = x.match(pattern);
    var dt = new Date(arrayDate[3], arrayDate[2] - 1, arrayDate[1]);
    return dt.getTime();
}

router.get('/:expenseDate', (req, res)=>{

const date1 = req.body.startDate;
const date2 = req.body.endDate;
if((date2)!=null)
{
res.send(data.filter(data => dateconversion(data.expenseDate)>=dateconversion(date1) && dateconversion(data.expenseDate)<=dateconversion(date2)));
}
else
{
    res.send(data.filter(data => dateconversion(data.expenseDate)>=dateconversion(date1)));
}
res.end();
})

router.get('/category/:category', (req, res)=>{
const cat = req.params.category;
const date1 = req.body.startDate;
const date2 = req.body.endDate;
if(date2!=null)
{
res.send(data.filter(data => data.category==cat && (dateconversion(data.expenseDate)>=dateconversion(date1)) && (dateconversion(data.expenseDate)<=dateconversion(date2))));
}
else{
    res.send(data.filter(data => (data.category==cat) && ((dateconversion(data.expenseDate)>=dateconversion(date1)))));
}
res.end();

})


module.exports = router;