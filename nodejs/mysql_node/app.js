import mysql from 'mysql2/promise';

(async () => {
    try {
        // 1: Connect to MySQL Server
        const db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Raghu@123'
        });

        console.log('Connected to MySQL server');

        // 2: Create Database if not exists
        await db.execute('CREATE DATABASE IF NOT EXISTS mydb_nodejs');

        // 3: Change to the database (Fix for USE mydb_nodejs)
        await db.changeUser({ database: 'mydb_nodejs' });

        // 4: Create Table if not exists
        await db.execute(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY, 
                name VARCHAR(255) NOT NULL, 
                email VARCHAR(255) NOT NULL UNIQUE
            );
        `);

        // 5: Show Tables
        const [tables] = await db.execute('SHOW TABLES');
        console.log("Tables:", tables);

        // 6: Create CURD operations

        // Insert data into database
        // await db.execute(`
        //     INSERT INTO users (name, email) VALUES ('Raghu', 'raghu@gmail.com');
        // `);

        // Using Prepared Statements
        // await db.execute(`
        //     INSERT INTO users (name, email) VALUES (?, ?);
        // `, ['Raghu', 'raghu53@gmail.com']);

        // Insert multiple data into database
        // const values = [['suhita', 'suhita@gmail.com'],
        // ['pritam', 'pritam@gmail.com'],
        // ['suvendu', 'suvendu@gmail.com'],];

        // await db.query(`INSERT INTO users (name, email) VALUES ?`, [values]);            
        // console.log("Inserted multiple rows successfully!");

        // Read data into database
        // const [users] = await db.execute('SELECT * FROM users');
        const [users] = await db.execute('SELECT * FROM users WHERE email = ?', ['raghu53@gmail.com']);
        console.log("Users:", users);

        // Update data into database
        // const [rows] = await db.execute(`UPDATE users SET email = ? WHERE name = ?`, ['jalgoda@gmail.com', 'suhita']);
        // console.log("Rows affected:", rows.affectedRows);

        // Delete data into database
        const [rows] = await db.execute(`DELETE FROM users WHERE name = ?`, ['raghu']);
        console.log("Rows affected:", rows.affectedRows);

        // 7: Close connection
        await db.end();
    } catch (error) {
        console.error("Error:", error);
    }
})();