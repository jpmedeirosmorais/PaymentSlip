
-Para iniciar o projeto rodar o comando: *npm run start* ou *yarn start*.


Bibliotecas utilizadas:

Nodemon
Toda vez que alterarmos os arquivos da aplicação teremos que derrubar e subir novamente, isso não é muito produtivo, então utilizei o nodemon para monitorar os ajustes e restartar o servidor.

Body Parser
O Node em si não sabe converter os dados da requisição para o formato que precisamos, o body-parser é um middleware capaz de converter o body da requisição para vários formatos. Um desses formatos é json.

Config
Este pacote config permite organizar a configuração da aplicação e estender em qualquer arquivo.

Express
Vai fornecer os recursos mínimos para construção da API.