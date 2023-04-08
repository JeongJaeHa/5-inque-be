-- migrate:up
CREATE TABLE contacts(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `admin_id` INT NOT NULL DEFAULT 1,
    `status` INT NOT NULL DEFAULT 1,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`)
);

-- migrate:down
DROP TABLE contacts;
