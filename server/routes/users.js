import express from "express";
const router =express.Router()

router.get('/',(req,res)=>{
    res.send("Users page")
})


router.get('/:url',(req,res)=>{
    res.send(`${req.params.url}-profil page`)
})
export default router