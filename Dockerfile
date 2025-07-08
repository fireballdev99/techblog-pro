# Base setup
FROM node:20-alpine

# metadata maintainer
LABEL maintainer="fireballdev99"
LABEL version="1.0"
LABEL description="TechBlog Pro - Next.js 15 Blog Platform"

# install dependencies for alpine linux
RUN apk add --no-cache \
    libc6-compat \
    git

WORKDIR /app

# Package installation
RUN npm install -g pnpm
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install

#  Source code
COPY . .

# create user not root (secure practice)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs



# Runtime
EXPOSE 3000

# Environment variable for Next.js
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:3000 || exit 1

CMD ["pnpm","dev"]