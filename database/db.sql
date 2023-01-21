CREATE DATABASE productsdb IF NOT EXISTS;
    USE productsdb;
    CREATE TABLE product(
        id  INT NOT NULL AUTO_INCREMENT PRIMARY_KEY,
        name VARCHAR(250) NOT NULL,
        description VARCHAR(400) NOT NULL,
        price DECIMAL
        createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    describe product;