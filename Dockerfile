# FROM node:lts-alpine as build

# RUN mkdir /app

# WORKDIR /app

# COPY package.json .
# COPY next.config.js .
# COPY api-server.js .
# COPY .env.local .

# RUN npm install

# COPY .next ./.next
# COPY public ./.public
# COPY . .
# RUN npm run build

# # ---------------

# FROM node:lts-alpine

# ENV NODE_ENV production
# ENV API_PORT 3001

# WORKDIR /app

# COPY --from=build /app/package.json .
# COPY --from=build /app/next.config.js .
# COPY --from=build /app/api-server.js .
# COPY --from=build /app/.env.local .
# COPY --from=build /app/.next ./.next
# COPY --from=build /app/public ./public

# RUN npm install

# EXPOSE 3000
# EXPOSE 3001

# CMD npm start

FROM node:16-alpine3.12
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
CMD ["npx","prisma","generate","&&","npx","prisma","migrate","dev", "--name", "init","&&","npm", "run", "dev"]
