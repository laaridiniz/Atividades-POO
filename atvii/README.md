<p align="center">Disciplina: Programação Orientada a Objetos<br>
Prof. Dr. Eng. Gerson Penha<br></p>

<h1 align="center">🔸Atividade 2🔸</h1>

<br id="topo">

## Contextualização

<p align="justify">Interface gráfica é um tipo de interface que permite a interação com dispositivos digitais por meio de elementos gráficos como ícones e outros indicadores visuais, em contraste a interface de linha de comando. Outra forma de denominar a interface gráfica é utilizando o termo Graphical User Interface - GUI. <br>
<br>
A maioria dos softwares desenvolvidos para usuários comuns, aqueles que não são especialistas em informática, necessita de uma GUI. A GUI serve para organizar a navegação, deixar o visitante confortável durante a visualização das informações, distribuir pesos de importância para cada tipo de conteúdo ou links e, dessa forma, guiar a atenção do usuário, utilizando elementos gráficos e recursos de diagramação apropriados para seu propósito.<br>
<br>
Existem várias formas de construir uma GUI e isto depende de fatores como o tipo de software desenvolvido e o tipo de plataforma onde o software será executado. Além destes fatores, algo importante é a fidelização do usuário, que pode ser alcançada pelo conceito de UI Design, ou User Interface Design (Design da Interface do 
Usuário).<br>
<br>
UI Design é a prática responsável pelo planejamento, desenvolvimento e aplicação de uma solução com o objetivo de facilitar a experiência do usuário e estimular sua interação com um objeto físico ou digital. É o recurso que conduz a interação do ser humano com um produto físico ou virtual. Na prática, o design de interface diz respeito à parte visual, à usabilidade, arquitetura da informação, navegação, transição de telas. Ou seja, todos os recursos que incrementam e melhoram a forma como o usuário lida com o produto, com o software.<br>
<br>
Um bom projeto de UI antecipa imediatamente as necessidades do usuário e garante que a interface seja fácil de usar e de acessar. Ele garante uma boa experiência de interação evitando ou minimizando dificuldades de utilização e frustrações ao utilizador do produto.
<br>
</p>

→ [Voltar ao topo](#topo)

## Atividade
  
<p align="justify">O sistema desenvolvido para o grupo WB foi um sucesso. Todas as franquias do grupo adotaram a solução desenvolvida por você, na tua empresa especializada em desenvolvimento de software. Mas, apesar de todo o sucesso, há uma questão ainda não resolvida. O sistema não tem uma GUI.<br>
<br>
Sem GUI, o uso do sistema tornou-se inapropriado para um ambiente web, onde a principal ferramenta é o navegador. Desta forma, corre-se o risco de o software tornar-se defasado e perder para concorrências futuras. Por isso, o próximo objetivo do desenvolvimento e atualizar o sistema com uma GUI moderna e que funcione tanto em navegadores comuns quanto em navegadores de dispositivos móveis, como celulares e/ou tablets por exemplo.<br>
<br>
Depois de muito debate sobre o design e layout das telas, a equipe de desenvolvimento da tua empresa iniciou um pré-projeto, com o desenvolvimento da primeira interface gráfica. Este pré-projeto está disponível no endereço https://github.com/gerson-pn/atvii-wb-typescript.<br>
<br>
No pré-projeto, utilizou-se uma biblioteca para construção de interfaces com HTML, a biblioteca materializecss. A materializecss é um framework front-end, responsivo, moderno e baseado no conceito “Material Design”.<br>
<br>
A documentação da biblioteca está disponível no endereço https://materializecss.com. Contudo, o último acesso do time de desenvolvimento foi a 2 meses e não se sabe se a documentação ainda está disponível, tampouco qual é a versão atual da biblioteca. A versão utilizada no pré-projeto foi a 1.0.0.<br>
<br>
Este pré-projeto é fundamental para a sobrevivência da tua empresa, se ela não se modernizar com certeza perderá clientes para seus concorrentes. Entretanto, momentaneamente, a equipe de desenvolvimento está com muito trabalho, devido a manutenções no sistema entregue anteriormente. Por isso, você irá assumir o  desenvolvimento do pré-projeto a partir de agora.<br>
<br>
Teu objetivo é desenvolver todas as interfaces, em HTML. Não há necessidade de vínculo com alguma plicação back-end, por hora. Porque ainda é um pré-projeto. Então você está comprometido em terminar as telas e suas transições, somente.<br>
<br>
Além da biblioteca materializecss, também se utilizou uma outra, a react. A react é uma biblioteca JavaScript/TypeScript de código aberto, com foco em criar GUI em páginas web. Por isso, a equipe de desenvolvimento definiu uma regra para construção da nova GUI. Todos os componentes criados com a react devem ser componentes de classe. Você deverá seguir esta regra para evitar conflitos, desnecessários, com o time de desenvolvimento.<br>
<br>
A documentação da react pode ser acessada no endereço https://reactjs.org, contudo, cabe a mesma observação feita para a biblioteca materializecss, o acesso do time de desenvolvimento foi a 2 meses e não se sabe se a documentação ainda está disponível ou qual é a versão atual da biblioteca. No pré-projeto utilizouse a versão 17.0. Se julgar necessário, você pode atualizar a versão e desenvolver na última disponível.<br>
<br>
Um ponto importante, se for conveniente, outra biblioteca pode ser utilizada no lugar a materializecss. Dado que ela é um framework front-end sua mudança não é de alto custo, portanto, não interfere abruptamente nos componentes de classe da react. Mas, deve-se lembrar que a GUI desenvolvida será acessada tanto por um navegador comum quando por um dispositivo móvel, portanto, o design precisa ser responsivo, obrigatoriamente.<br></p>

→ [Voltar ao topo](#topo)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

→ [Voltar ao topo](#topo)
