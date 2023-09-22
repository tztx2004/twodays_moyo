// import * as dotenv from 'dotenv';
// import * as path from 'path';

// const envFilePath = path.resolve('.env/production.local');

// // Load the .env file
// dotenv.config({path: envFilePath});

export const config = {
    // MySQL DB connection
    MYSQL: {
        HOST: process.env.NEXT_PUBLIC_MYSQL_HOST,
        USER: process.env.NEXT_PUBLIC_MYSQL_USER,
        PASSWORD: process.env.NEXT_PUBLIC_MYSQL_PASSWORD,
        DATABASE: process.env.NEXT_PUBLIC_MYSQL_DATABASE,
        ROOT_PASSWORD: process.env.NEXT_PUBLIC_MYSQL_ROOT_PASSWORD
    }

};
console.log(config.MYSQL.HOST);