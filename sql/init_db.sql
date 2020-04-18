CREATE DATABASE IF NOT EXISTS shiros_inventory;
USE shiros_inventory;
CREATE TABLE IF NOT EXISTS tb_inventory (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    item_code VARCHAR(255) NOT NULL
);