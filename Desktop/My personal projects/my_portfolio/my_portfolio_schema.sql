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
DROP TABLE portfolio_table;
SELECT * FROM portfolio_table;