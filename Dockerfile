FROM node:12 as webbuild
ARG BUILD_NUMBER=0
RUN mkdir /src; mkdir /public
COPY src /src/
COPY public /public/
COPY package.json workbox-config.js yarn.lock /
RUN yarn install
RUN PUBLIC_URL=https://allowance.fun BUILD_NUMBER=${BUILD_NUMBER} yarn build

FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=webbuild /build/* /usr/share/caddy/