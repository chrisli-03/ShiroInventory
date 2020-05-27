CREATE DATABASE IF NOT EXISTS shiros_inventory;
USE shiros_inventory;
CREATE TABLE IF NOT EXISTS tb_restock (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	form_id VARCHAR(255) NOT NULL,
	supplier VARCHAR(255),
	creation_date DATETIME NOT NULL
);
CREATE TABLE IF NOT EXISTS tb_restock_detail (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	item_name VARCHAR(255) NOT NULL,
	item_code VARCHAR(255) NOT NULL,
	item_spec VARCHAR(255),
	item_price FLOAT NOT NULL,
	item_quantity INT NOT NULL,
	restock_form INT NOT NULL,
	warehouse INT NOT NULL
);
CREATE TABLE IF NOT EXISTS tb_consumption (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    form_id VARCHAR(255) NOT NULL,
    creation_date DATETIME NOT NULL
);
CREATE TABLE IF NOT EXISTS tb_consumption_detail (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    item_code VARCHAR(255) NOT NULL,
    consumption_amount INT NOT NULL,
    consumption_form INT NOT NULL
);
CREATE TABLE IF NOT EXISTS tb_warehouse (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	warehouse_name VARCHAR(255) NOT NULL,
	warehouse_address VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS tb_supplier (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	supplier_name VARCHAR(255) NOT NULL,
	supplier_address VARCHAR(255),
	supplier_contact VARCHAR(255),
	supplier_contact_name VARCHAR(255)
);