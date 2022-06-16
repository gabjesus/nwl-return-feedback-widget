comandos usados

// iniciar package.json
npm init -y

// instalar typescript, tipos do node e o ts-node-dev em DEV
npm i typescript @types/node ts-node-dev -D

// instalar express
npm i express
// instalar tipos do express em DEV
npm i -D @types/express

// instalar prisma
npm i prisma -D
npm i @prisma/client
// iniciar arquivos de config do prisma
// npx prisma init

// criar tabela com o prisma
npx prisma migrate dev
// ver interface do DB
npx prisma studio

// instalar lib de envio de e-mails
npm i nodemailer
// tipos
npm i -D @types/nodemailer

// instalar o jest
npm install jest -D
// inicializar o jest
npx jest --init
// ter jests com ext .ts
npm install ts-node -D
// instalar um cara que faz com que o jest rode testes em ts
npm i -D @swc/jest
// tipagens do jest
npm i @types/jest -D
// rodar teste
npm run test

// instalando cors e tipagens
npm i cors
npm i @types/cors -D