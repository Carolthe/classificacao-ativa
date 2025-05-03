import mysql from 'mysql2/promise'; // note o '/promise'

export class MysqlConection {
  async conect() {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'rating',
      port: 3306, // porta como número, não string
    });

    return connection;
  }

  async insert(nota) {
    const connection = await this.conect();
    try {
      await connection.query('INSERT INTO rating (rating) VALUES (?)', [nota]);
    } catch (error) {
      console.error(error);
    } finally {
      await connection.end();
    }
  }
}