USE my_portfolio;


CREATE TABLE portfolio_table(
	id INT AUTO_INCREMENT,
    title VARCHAR(75),
    summary TEXT, 
    assignment MEDIUMTEXT, 
    websiteLink TEXT,
    githubLink TEXT,
    _created TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);

INSERT INTO portfolio_table(title, summary, assignment, websiteLink, githubLink) VALUE(
	'myTitle',
    'This is The Summary',
    'This Is The Much Longer Full Assignment',
    'http://www.thisisaweblink.com',
    'http://www.githublink.com'
    );
DROP TABLE users;
SELECT * FROM portfolio_table;



CREATE TABLE users (
id INT AUTO_INCREMENT,
email VARCHAR(60) NOT NULL UNIQUE,
password VARCHAR(60) NOT NULL,
created_at TIMESTAMP DEFAULT NOW(),
PRIMARY KEY (id)
);

CREATE USER 'auth_my_portfolio'@'localhost' identified with mysql_native_password by 'auth_my_portfolio';


FLUSH PRIVILEGES;

insert into users (email, password) value
('test2@test.com', 'password2'); 
SELECT * FROM users;
drop 

