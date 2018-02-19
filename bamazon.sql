drop database if exists bamazon;

create database bamazon;

use bamazon;

create table products (
	id int not null auto_increment,
	product varchar (100) not null,
	department varchar (100) not null,
	price decimal (10,2) not null,
	stock int (10) not null,
	PRIMARY KEY (id)
);

insert into products (product, department, price, stock) values ("couch", "home", "600.00", "5");
insert into products (product, department, price, stock) values ("guitar", "music", "400.00", "15");
insert into products (product, department, price, stock) values ("basketball", "sports", "25.00", "105");
insert into products (product, department, price, stock) values ("coat", "clothing", "50.00", "20");
insert into products (product, department, price, stock) values ("pencil", "office", "2.50", "300");
insert into products (product, department, price, stock) values ("mousepad", "electronics", "3.99", "150");
insert into products (product, department, price, stock) values ("toothbrush", "health", "2.99", "475");
insert into products (product, department, price, stock) values ("tire", "automotive", "49.95", "25");
insert into products (product, department, price, stock) values ("rose", "floral", "14.99", "30");
insert into products (product, department, price, stock) values ("soup", "grocery", "2.99", "50");

select * from products;