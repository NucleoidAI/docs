FROM node:16

COPY build /home/app/docs/

EXPOSE 80

ENTRYPOINT npx -y serve -n -p 80 /home/app/
