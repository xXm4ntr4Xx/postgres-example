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





export default router;
