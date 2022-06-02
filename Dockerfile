FROM node:16

COPY build /home/app/docs/

EXPOSE 3000

ENTRYPOINT npx -y serve -n /home/app/
