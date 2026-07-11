FROM node:22-alpine

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./

RUN npm install

COPY src ./src

RUN echo "===== FILES BEFORE BUILD ====="
RUN find src

RUN npm run build

RUN echo "===== DIST ====="
RUN find dist -type f | sort
RUN echo "===== APP ====="
RUN ls -la dist/app
RUN echo "===== INDEX ====="
RUN cat dist/app/index.js

RUN echo "===== DIST AFTER BUILD ====="
RUN find dist

CMD ["npm", "start"]