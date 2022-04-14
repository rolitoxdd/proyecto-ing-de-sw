create database test;
use test;
create table Products (
  id serial not null,
  name varchar(30) not null,
  price varchar(30) not null,
  stock int not null
);