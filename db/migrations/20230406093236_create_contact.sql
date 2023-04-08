-- migrate:up
CREATE TABLE contact(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL
);

-- migrate:down
DROP TABLE locations;
