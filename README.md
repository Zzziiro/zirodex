### **Descrição:**

Aplicação web responsável por listar todos os pokémons e possibilitar visualizar dados específicos de cada um. Para tal, é utilizada a PokéAPI (disponível em https://pokeapi.co/), através de requisições REST que retornarão os dados desejados.

### **Regras:**

- Criar uma página principal contendo a lista de pokémons (preferencialmente uma lista paginada!);
- Ao clicar em um dos itens da lista, deverá redirecionar para uma página contendo os seguintes detalhes do pokémon:
- Nome
  - Imagem padrão do pokémon, possível de alternar entre frente e costas (não se preocupe com outras versões do mesmo pokémon):
  - Altura em cm
  - Peso em kg
  - Status base (velocidade, ataque, defesa, vida...)
  - Habilidade(s)
  - Tipo(s)
- Deve ser possível retornar da página do pokémon para a página principal;
- Não utilizar bibliotecas externas com estilos e elementos prontos (Bootstrap, Material UI, etc). Se MUITO necessário, pode utilizar bibliotecas para componentes específicos;
- A interface pode estar em português ou inglês.
- Disponibilizar o código no github para validação.

### **Critérios técnicos:**

### **Essenciais:**

- [x] Código em inglês
- [x] Sintaxe ES6
- [x] Componentização
- [x] Layout responsivo
- [x] React Hooks
- [x] Context

---

# **Especificações técnicas do meu projeto**

### **Cores**

Inicialmente o intuito do projeto era o de imitar o design de uma pokedex clássica, do GameBoy Color, por isso a paleta foi mantida simples e básica, porém o direcionamento mudou quando vi que os sprites dos Pokémon eram mais recentes, o que poderia causar estranhamento, então fiz meu máximo pra manter o padrão e ser fiel ao material, mas não sendo 100% por causa dos sprites modernos.

- Preto -> #232323
- Cinza escuro -> #454545
- Cinza claro -> #deddde
- Vermelho -> #ff0000
- Branco -> #ffffff

### **Fonte**

A fonte usada no projeto é um clone da fonte original do GameBoy e GameBoy Color

- Pokemon GB Font -> https://www.fontspace.com/pokemon-gb-font-f9621

### **Layout**

O layout em si é responsivo, muda a quantidade de cards mostrando dependendo do tamanho da tela e do zoom aplicado, porém existem algumas especificidades para torná-lo ordenado

- Espaçamento entre os cards -> grid-gap: 15px
- Margem da página -> margin: 15px
- Altura dos cards/linhas -> height: 245px
- Altura da navBar -> height: 70px

## **Adições que eu quero fazer em uma revisita**

- [x] Botão para avançar/retornar de página no final de cada página
- [ ] Modo claro e escuro
- [ ] Melhor pesquisa, trazer todos os resultados
