import { Pool } from 'pg';

 const pool = new Pool({
     database:'postgres',
    user:'postgres',
    password:'300488',
    database:'example',
    host:'localhost',
    port:5432
})

export default pool;