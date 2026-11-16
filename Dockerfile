# Stage 1: Production dependencies
FROM node:22-alpine AS production-deps

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev


# Stage 2: Production
FROM node:22-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=production-deps --chown=node:node /app/node_modules ./node_modules

COPY --chown=node:node app.js package.json ./

USER node

EXPOSE 3000

CMD ["node", "app.js"]