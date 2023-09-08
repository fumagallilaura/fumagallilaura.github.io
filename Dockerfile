FROM node
WORKDIR /app
ENV API_PORT=3001 \
    DB_USER="root" \
    DB_PASS="root" \
    DB_NAME="todos" \
    DB_HOST="localhost" \
    DB_PORT=3306 \
    DB_DIALECT="mysql" \
    DB_OPTIONS="{}"
COPY . .
RUN npm i --production --silent
CMD ["node", "start"]