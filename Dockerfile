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
COPY package.json package-lock.json /
# RUN npm install
WORKDIR /app
# CMD ["npx","prisma","generate","&&","npx","prisma","migrate","dev", "--name", "init","&&","npm", "run", "dev"]
# CMD npx prisma generate && sleep 8 && npx prisma migrate dev --create-only && npx prisma migrate deploy --schema=./prisma/schema.prisma && npx prisma db seed && npm run build && npm run serve
CMD npx prisma generate && sleep 8 && npx prisma db push && npx prisma db seed && npm run build && npm run serve
# CMD npx prisma generate && sleep 8 && npx prisma db push --accept-data-loss && npx prisma db seed && npm run dev