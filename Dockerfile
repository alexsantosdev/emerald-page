FROM node:16.13.2-alpine3.15 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:16.13.2-alpine3.15 
WORKDIR /app
COPY --from=builder /app/build build
RUN npm install -g serve
EXPOSE 3000

# Inicializa a aplicação
CMD ["serve", "-s", "build", "-n"]
