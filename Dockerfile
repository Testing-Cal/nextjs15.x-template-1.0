FROM node:20.11.1-slim
ENV context ""
ENV port 3012
RUN mkdir -p /usr/src
RUN chown -R node:node /usr/src/
RUN chmod -R 775 /usr/src/
WORKDIR /usr/src
COPY . /usr/src
RUN chown -R node:node /usr/src/
USER node
RUN npm install -f

RUN npm run-script build

ENTRYPOINT ["npm", "--", "run", "dev"]
EXPOSE ${port}
