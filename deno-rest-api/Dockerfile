FROM denoland/deno:1.13.2

EXPOSE 8000

WORKDIR /app

ADD . .

RUN deno cache app.ts

CMD ["run", "--allow-net", "--unstable", "app.ts"]