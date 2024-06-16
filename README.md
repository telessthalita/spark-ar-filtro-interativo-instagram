# Tutorial: Criando um Filtro Interativo no Spark AR Studio

Olá! Este é um tutorial passo a passo para criar um filtro interativo no Spark AR Studio. Vamos adicionar um objeto de texto 2D, configurar diferentes textos, adicionar um evento de toque na tela e incluir um script para alterar os textos ao tocar na tela, simulando um filtro do Instagram.

## Requisitos

- Spark AR Studio instalado no seu computador.

## Passo 1: Criando o Projeto no Spark AR Studio

1. Abra o Spark AR Studio.
2. Clique em "New Project" para criar um novo projeto.

## Passo 2: Adicionando um Objeto de Texto 2D

1. No canto inferior esquerdo, clique em "+ Add Object".
2. Escolha "Text" para adicionar um objeto de texto.
3. Posicione o texto na cena conforme desejado.

## Passo 3: Definindo os Textos no Placeholder

1. Selecione o objeto de texto no painel de cena.
2. No painel de propriedades à direita, encontre "Text".
3. Clique no ícone de lápis ao lado de "Text" para editar o texto.
4. Digite o texto desejado no campo de texto e clique em "OK".
5. Repita o processo para adicionar textos diferentes. Vamos chamá-los de text0 a text07.

## Passo 4: Adicionando o Screen Tap usando o Patch Editor

1. No canto inferior direito, clique na aba "Patch Editor" para abrir o editor de patches.
2. Clique com o botão direito do mouse em qualquer lugar vazio no Patch Editor.
3. No menu de busca, digite "Screen Tap" e selecione-o para adicioná-lo ao Patch Editor.
4. Conecte a saída do patch "Screen Tap" ao patch que você deseja acionar com o toque na tela.

## Passo 5: Adicionando o Script

1. No painel de assets, clique em "+ Add Asset" no canto inferior esquerdo.
2. Escolha "Script" para adicionar um novo script ao projeto.
3. No script, copie e cole o código fornecido no README.md do repositório.

Lembre-se de substituir "Novo texto aqui" pelo texto que deseja exibir ao tocar na tela.

## Passo 6: Testando e Salvando

1. Salve o projeto.
2. Clique em "Testar no Dispositivo" para testar o filtro em seu dispositivo móvel.

E voilà! Você criou um filtro interativo no Spark AR Studio. Sinta-se à vontade para personalizar ainda mais o filtro adicionando elementos visuais, animações e ajustando o comportamento do script conforme necessário. Happy coding! 💻✨
