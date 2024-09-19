/*cree la base de datos en MySQL 
  Encienda el Xampp 
  Apache 
  MySQL
 --------------------

 EN Vs code encienda el terminal y pon el codigo
 --npm run dev--
  */
---------------------
probar consultas CRUD en Postman
---------------------

create database empleados;
use empleados;

create table clientes (
id_clientes int primary key auto_increment,
nombre varchar(25) default "No especifica",
telefono varchar(50) default "No especifica",
correo varchar(50) default "No especifica",
direccion varchar(50) default "No especifica",
fecha_registro date 
);


CREATE TABLE personal (
id_personal int primary key auto_increment,
nombre varchar(25) default "No especifica",
apellido varchar(25) default "No especifica",
salario decimal(10,2)  not null,
fecha_contratacion date  not null,
departamento varchar(50) default "No especifica",
email varchar(50) default "No especifica"
);


create table productos (
id_productos int primary key auto_increment,
tipo varchar(50) default "No especifica",
precio decimal(10,2) not null,
cantidad int not null,
ubicacion varchar(50) default "No especifica"
);


create table ventas (
fecha_ventas date ,
cantidad int ,
precio_total decimal(10,2) 
);


INSERT INTO clientes (nombre, telefono, correo, direccion, fecha_registro) 
VALUES 
('Juan Pérez', '123-456-7890', 'juan.perez@example.com', 'Calle 123', '2024-09-18'),
('Ana Gómez', '098-765-4321', 'ana.gomez@example.com', 'Avenida 456', '2024-09-18'),
('Luis Fernández', '111-222-3333', 'luis.fernandez@example.com', 'Calle 789', '2024-09-18'),
('María López', '444-555-6666', 'maria.lopez@example.com', 'Calle 101', '2024-09-18'),
('Pedro Martínez', '777-888-9999', 'pedro.martinez@example.com', 'Calle 202', '2024-09-18'),
('Laura Ruiz', '123-456-0000', 'laura.ruiz@example.com', 'Avenida 303', '2024-09-18'),
('Jorge Gómez', '999-888-7777', 'jorge.gomez@example.com', 'Calle 404', '2024-09-18'),
('Isabel Sánchez', '555-444-3333', 'isabel.sanchez@example.com', 'Avenida 505', '2024-09-18'),
('Ricardo Moreno', '222-333-4444', 'ricardo.moreno@example.com', 'Calle 606', '2024-09-18'),
('Patricia Castro', '888-999-0000', 'patricia.castro@example.com', 'Avenida 707', '2024-09-18');



INSERT INTO personal (nombre, apellido, salario, fecha_contratacion, departamento, email) 
VALUES 
('Carlos Martínez', 'Sánchez', 2500.00, '2024-01-15', 'Ventas', 'carlos.martinez@example.com'),
('María Rodríguez', 'Hernández', 3000.00, '2024-02-20', 'Marketing', 'maria.rodriguez@example.com'),
('José Gómez', 'Pérez', 2800.00, '2024-03-25', 'IT', 'jose.gomez@example.com'),
('Ana Torres', 'Jiménez', 3200.00, '2024-04-10', 'Recursos Humanos', 'ana.torres@example.com'),
('Luis Díaz', 'García', 2700.00, '2024-05-05', 'Ventas', 'luis.diaz@example.com'),
('Claudia Morales', 'Álvarez', 3100.00, '2024-06-15', 'Marketing', 'claudia.morales@example.com'),
('Sergio Fernández', 'Navarro', 2600.00, '2024-07-20', 'IT', 'sergio.fernandez@example.com'),
('Patricia Romero', 'Serrano', 3300.00, '2024-08-25', 'Recursos Humanos', 'patricia.romero@example.com'),
('Ricardo Castro', 'Cruz', 2900.00, '2024-09-10', 'Ventas', 'ricardo.castro@example.com'),
('Isabel López', 'Gómez', 3400.00, '2024-10-05', 'Marketing', 'isabel.lopez@example.com');


INSERT INTO productos (tipo, precio, cantidad, ubicacion) 
VALUES 
('Laptop', 1200.00, 10, 'Estante A'),
('Teléfono', 800.00, 25, 'Estante B'),
('Tablet', 450.00, 15, 'Estante C'),
('Auriculares', 150.00, 30, 'Estante D'),
('Monitor', 300.00, 20, 'Estante E'),
('Teclado', 100.00, 50, 'Estante F'),
('Ratón', 80.00, 40, 'Estante G'),
('Impresora', 200.00, 10, 'Estante H'),
('Cámara', 600.00, 12, 'Estante I'),
('Altavoces', 120.00, 22, 'Estante J');



INSERT INTO ventas (fecha_ventas, cantidad, precio_total) 
VALUES 
('2024-09-18', 2, 2400.00),
('2024-09-18', 3, 2400.00),
('2024-09-19', 1, 450.00),
('2024-09-19', 5, 750.00),
('2024-09-20', 4, 600.00),
('2024-09-20', 6, 900.00),
('2024-09-21', 2, 300.00),
('2024-09-21', 8, 960.00),
('2024-09-22', 3, 180.00),
('2024-09-22', 7, 840.00);
