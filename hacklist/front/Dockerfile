FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build
RUN npm ci --production

# Step 2: Create a lightweight production image
FROM node:18-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]