# front/Dockerfile
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./
EXPOSE 3333

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


FROM base AS production
WORKDIR /app
ENV NODE_ENV=production
RUN npm install
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
CMD ["npm", "start"]

FROM base AS dev
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]