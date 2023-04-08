-- migrate:up
CREATE TABLE admin(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `user` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

-- migrate:down
DROP TABLE admin;
