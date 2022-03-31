create database example;

--\c into todo_database

create table todo(
  todoId serial primary key,
  description varchar(255)
);