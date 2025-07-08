echo "Starting TechBlog Pro Development Environment..."

# Check docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# create .env.local
if [ ! -f .env.local ]; then
    echo "Creating... .env.local from template..."
    cp .env.example .env.local
    echo "Please update .env.local with your actual values"
fi

# Start services
echo "Starting Docker container..."
docker-compose up --build -d

# Wait for services to be ready
echo "Waiting for services to start..."
sleep 10

# Show running containers
echo "Running containers:"
docker-compose ps

# Show helpful URLs
echo ""
echo "TechBlog Pro is ready!"
echo "APP: http://localhost:3000"
echo "MYSQL: localhost:3306"
echo "Redis: localhost:6379"
echo ""
echo "Use 'pnpm docker:logs' to view logs"
echo "Use 'pnpm docker:stop' to stop all services"