import { config } from '@/config/config';
import { createPool, Pool } from 'mysql2/promise';

const pool: Pool = createPool({
  connectionLimit: 10,
  host: config.MYSQL.HOST,
  port: 3306,
  user: config.MYSQL.USER,
  password: config.MYSQL.PASSWORD,
  database: config.MYSQL.DATABASE,
});

export const handleMySql = async (sql: string, values?: any) => {
  let connection: any | null = null;
  let res = null;
  try {
    connection = await pool.getConnection();
    [res] = await connection.query(sql, values);
    return res;
  } catch (err) {
    console.error('err:', err);
    throw err;
    // throw new Error(err);
  } finally {
    if (connection) {
      connection.release();
    }
  }
};
