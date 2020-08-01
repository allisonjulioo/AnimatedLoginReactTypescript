# README #


# MUITO IMPORTANTE ANTES DE QUALQUER COISA

## Estou usando uma lib de animações "FRAMER MOTION" ela está com um bug que deixa a aplicação incessível 
## Eu resolvi de uma forma meio gambiarra pelo tempo que tive para desenvovler, não deu para criar um versão corrigida do código

Para resolver você deve instalar as dependências normalmente com o yarn ou o npm, depois vá nesse caminho no node_modules
node_modules\framer-motion\dist\framer-motion.d.ts

### Altere essas duas linhas  

`:1364  declare const svgElements: readonly ["animate", "circle", "clipPath", "defs", "de...]`

`:6898  declare const svgElements: readonly ["animate", "circle", "clipPath", "defs", "de...]`

remova a propriedade `readonly` e salve. após isso pode rodar o projeto normalmente. 

Adianto que não deu para fazer tudo que imaginei, dediquei um tempo maior a arquitetura e configuração de ambiete




Estes documento README tem como objetivo fornecer as informaÃ§Ãµes necessÃ¡rias para realizaÃ§Ã£o do projeto Empresas.

### O QUE FAZER ? ###

* VocÃª deve fazer um fork deste repositÃ³rio para o desenvolvimento do teste. ApÃ³s o desenvolvimento vocÃª deve enviar por email um link do seu repositÃ³rio. NÃ³s iremos avaliar seu projeto e retornar o resultado do seu teste.

### ESCOPO DO PROJETO ###

* Login e acesso de UsuÃ¡rio jÃ¡ registrado
	* Para o login usamos padrÃµes OAuth 2.0. Na resposta de sucesso do login a api retornarÃ¡ 3 custom headers (access-token, client, uid);
	* Para ter acesso as demais APIS precisamos enviar esses 3 custom headers para a API autorizar a requisiÃ§Ã£o;
* Listagem de Empresas
* Detalhamento de Empresas
* Filtro de Empresas por nome e tipo


### InformaÃ§Ãµes Importantes ###

* Layout e recortes disponÃ­veis no Zeplin
* https://app.zeplin.io/
* user: teste_web
* senha: teste_ioasys

* IntegraÃ§Ã£o disponÃ­vel a partir de uma collection para Postman (https://www.getpostman.com/apps) disponÃ­vel neste repositÃ³rio. Para utilizar a collection, vÃ¡ atÃ© o postman e import a colllection que estÃ¡ disponÃ­vel neste repositÃ³rio, assim vocÃª terÃ¡ acesso as documentaÃ§Ã£o da API.

* Ã‰ obrigatÃ³rio utilizaÃ§Ã£o do ReactJS.

* Ã‰ importante criar o layout responsivo, usando boas prÃ¡ticas e organizaÃ§Ã£o.

* Independente de onde conseguiu chegar no teste Ã© importante disponibilizar seu fonte para analisarmos.

### Dados para Teste ###

* Servidor: http://empresas.ioasys.com.br
* VersÃ£o da API: v1
* UsuÃ¡rio de Teste: testeapple@ioasys.com.br
* Senha de Teste : 12341234

### Dicas ###

* VocÃª pode utilizar um dos frameworks: Bootstrap(http://getbootstrap.com/) ou Materializecss(http://materializecss.com).
* No postman existem alguns parÃ¢metros no header que devem ser passados em todas requests exceto na de login, eles serÃ£o retornados no endpoint de login, nos headers da request.
* Sobrou tempo? Testes unitÃ¡rios, integraÃ§Ã£o e e2e no sistema sÃ£o bem vindos.
