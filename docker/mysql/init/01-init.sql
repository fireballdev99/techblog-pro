-- Initailization
CREATE DATABASE IF NOT EXISTS techblog_dev CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE DATABASE IF NOT EXISTS techblog_test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Permissions
GRANT ALL PRIVILEGES ON techblog_dev.* TO 'techblog' @'%';

GRANT ALL PRIVILEGES ON techblog_test.* TO 'techblog' @'%';

FLUSH PRIVILEGES;

-- Log initailization
SELECT 'TechBlog Pro databases initialized successfully' as message;