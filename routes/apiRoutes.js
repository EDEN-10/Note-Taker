const path = require('path');
const router = require('express').Router();
const fs =require('fs')

function getNotes(){
    let data =fs.readFileSync(path.join(__dirname,'../db/db.json'), 'utf-8')
    let parsedData =JSON.parse(data).note
    console.log(parsedData)
    return parsedData
}


function addNotes(newNote){
    let data =fs.readFileSync(path.join(__dirname,'../db/db.json'), 'utf-8')
    let note=JSON.parse(data).note   
    const {title, text}=newNote
    const newNoteSaved ={title, text, id: Math.random().toString()}
    note.push(newNoteSaved)
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'), 
        JSON.stringify({note}, null, 2)
    )

}

router.get('/notes', (req, res)=>{
    res.json(getNotes())})



router.post('/notes', (req, res)=>{
    res.json(addNotes(req.body))
})

module.exports = router