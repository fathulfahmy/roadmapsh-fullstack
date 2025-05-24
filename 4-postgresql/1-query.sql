-- https://www.youtube.com/watch?v=qw--VYLpxG4

-- user
CREATE USER username WITH PASSWORD 'password';

ALTER ROLE username WITH SUPERUSER;

-- database
CREATE DATABASE username;

CREATE DATABASE test;

DROP DATABASE test;

-- table
CREATE TABLE "user" ( 
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	gender VARCHAR(50) NOT NULL,
	email VARCHAR(50)
);

DROP TABLE "user";

-- insert
INSERT INTO users (
  name,
  gender,
  email
)
VALUES(
  'John',
  'MALE',
  'john@doe.com',
);

-- select
SELECT * FROM users;

SELECT id, name FROM users;

-- order by
SELECT * FROM users ORDER BY name;

SELECT * FROM users ORDER BY name DESC;

SELECT DISTINCT gender FROM users;

-- where
SELECT * FROM users WHERE id <= 10 AND gender = 'Male';

SELECT * FROM users WHERE id <= 10 OR id = 100;

-- limit
SELECT * FROM users LIMIT 20;

-- offset
SELECT * FROM users OFFSET 10 LIMIT 20;

-- fetch
SELECT * FROM users FETCH FIRST ROW ONLY;

SELECT * FROM users FETCH FIRST 10 ROW ONLY;

-- between and
SELECT * FROM users WHERE id BETWEEN 10 AND 20;

-- like
SELECT * FROM users WHERE name LIKE '%s';

SELECT * FROM users WHERE name LIKE 'S%';

SELECT * FROM users WHERE name LIKE '%s%';

SELECT * FROM users WHERE name LIKE '__s%';

-- group by
SELECT make, COUNT(*) FROM cars GROUP BY make;

-- aggregate functions
SELECT make, COUNT(*) FROM cars GROUP BY make HAVING count(*) > 50;

SELECT MIN(price) FROM cars;

SELECT MAX(price) FROM cars;

SELECT AVG(price) FROM cars;

SELECT ROUND(AVG(price)) FROM cars;

SELECT SUM(price) from cars;

-- arithmetic
SELECT 10 + 2;

SELECT 10 - 2;

SELECT 10 * 2;

SELECT 10 / 2;

SELECT 10 ^ 2;

SELECT 10 % 2;

SELECT model, price, ROUND(price * 0.10, 2) AS discount, price - ROUND(price * 0.10, 2) AS discounted_price FROM cars;

-- coalesce - return default value if first argument is null
SELECT COALESCE(email, 'Not available') FROM users;

-- nullif - return null if first and second argument values are equal

SELECT NULLIF(10, 10); -- null

SELECT NULLIF(10, 1); -- 10

SELECT 10 / 0; -- error

SELECT 10 / NULLIF(0,0); -- null

SELECT COALESCE(10 / NULLIF(0,0), 0); -- 0

-- timestamp and date
SELECT NOW();

SELECT NOW()::DATE;

SELECT NOW()::TIME;

SELECT NOW() - INTERVAL '1 YEAR';

SELECT NOW() - INTERVAL '1 MONTH';

SELECT NOW()::DATE + INTERVAL '1 DAY';

SELECT EXTRACT(CENTURY FROM NOW());

SELECT AGE(NOW(), '2001-10-07');

-- primary key
ALTER TABLE users DROP CONSTRAINT users_pkey;

ALTER TABLE users ADD PRIMARY KEY (id);

ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE(email);

ALTER TABLE users ADD CONSTRAINT gender_constraint CHECK (gender = 'Female' OR gender = 'Male');

-- delete
DELETE FROM users;

DELETE FROM users WHERE id = 1;

DELETE FROM users WHERE id = 1 AND gender = 'Male';

-- update
UPDATE users SET email = 'john@doe.com' WHERE id = 2;

UPDATE users SET name = 'Doe', email = 'john@doe.com' WHERE id = 2;

-- on conflict do nothing
INSERT INTO users (name, gender, email)
VALUES ('Jane', 'Female', 'jane@doe.com')
ON CONFLICT (email) DO NOTHING;

INSERT INTO users (name, gender, email)
VALUES ('Jane', 'Female', 'jane@doe.com')
ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email;

-- relationship
create table users (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	gender VARCHAR(50) NOT NULL,
	email VARCHAR(50)
  car_id BIGINT REFERENCES car (id),
  UNIQUE(car_id)
);

UPDATE users SET car_id = 1 WHERE id = 1;

SELECT * FROM users
JOIN cars ON users.car_id = cars.id;

SELECT users.name, cars.model
FROM users
JOIN cars ON users.car_id = cars.id;

SELECT *
FROM users
LEFT JOIN cars ON users.car_id = cars.id;

SELECT *
FROM users
RIGHT JOIN cars ON users.car_id = cars.id;

-- csv
copy (
  SELECT * FROM users
  JOIN cars ON users.car_id = cars.id
) TO 'folder/subfolder/output.csv' DELIMITER ',' CSV HEADER;

-- sequence
SELECT nextval('users_id_seq'::regclass);

ALTER SEQUENCE users_id_seq RESTART WITH 1010;

-- extension
SELECT * FROM pg_available_extensions;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- uuid
SELECT uuid_generate_v4();

create table users (
	user_id UUID NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	gender VARCHAR(50) NOT NULL,
	email VARCHAR(50),
  car_id UUID REFERENCES cars (car_id),
  UNIQUE(car_id)
);

INSERT INTO users (user_id, name, gender, email) 
VALUES (uuid_generate_v4(), 'Josephina', 'Female', 'jcahn1@smh.com.au');

SELECT users.name, cars.model
FROM users
JOIN cars USING (car_id)