import express from "express";
import pkg from 'pg';
import dotenv from 'dotenv';


dotenv.config();

const { Pool } = pkg;
const router = express.Router();


//my credential
 const credentials = {
    database:process.env.PGDATABASE,//db name
    user:process.env.PGUSER,
    password:process.env.PGPASSWORD,//pass
    host:process.env.PGHOST,
    port:process.env.PGPORT
}

/* GET users listing. */
router.get('/',async(req,res)=>{
  const pool = new Pool(credentials);
  const all = await pool.query('SELECT * FROM person')
  res.json({
    message:'complete',
    payload: all.rows
  })
})
// POST new user on database
router.post('/',async(req,res)=>{
  const pool = new Pool(credentials);
  const{name,username}=req.body
  const newPerson = await pool.query('INSERT INTO person(name,username) VALUES($1,$2)',[name,username])
  console.log(req.body)
  res.json({
    message:'added',
    payload:newPerson
  })
})
// DELETE users from database
router.delete('/:id',async(req,res)=>{
  const pool = new Pool(credentials);
  const id = req.params.id;
  const deletedPerson =await pool.query('DELETE FROM person WHERE id = $1',[id])
  console.log(deletedPerson)
  res.json({
    message:'person deleted',
    payload:deletedPerson
  })

})



export default router;
