# Usar uma imagem oficial do Node.js
FROM node:14

# Defina a pasta de trabalho dentro do container
WORKDIR /usr/src/app

# Copie os arquivos do projeto para a pasta de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos para a pasta de trabalho
COPY . .

# O comando para iniciar o aplicativo
CMD ["npm", "start"]
