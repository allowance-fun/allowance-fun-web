FROM node:12 as webbuild
RUN mkdir /src; mkdir /public
COPY package.json workbox-config.js yarn.lock /
RUN yarn install
COPY src /src/
COPY public /public/
ARG BUILD_NUMBER="0"
ARG PUBLIC_URL="https://allowance.fun"
RUN echo "PUBLIC_URL=$PUBLIC_URL" >env.production && \
    echo "Using the following variables:" && \
    cat env.production && \
    echo "const ALLOWANCE_FUN_WEB_VERSION=\"1.0.0-$BUILD_NUMBER\";\n\nexport default ALLOWANCE_FUN_WEB_VERSION;" > src/web-version.js && \
    echo "web-version.js:" && \
    cat src/web-version.js
RUN yarn build
FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=webbuild /build /usr/share/caddy/
