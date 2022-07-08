# FROM node:14-alpine AS builder
# WORKDIR "/app"
# COPY . .
# RUN npm ci
# RUN npm run build
# # RUN npm run start:dev
# # RUN npm prune --production
# FROM node:14-alpine AS production
# WORKDIR "/app"
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/package-lock.json ./package-lock.json
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/node_modules ./node_modules
# # CMD [ "npm run start:dev"]
# # CMD [ "sh", "-c", "npm run start:prod"]
# CMD ["node", "dist/main.js"]



# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .
EXPOSE 3000
# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]

