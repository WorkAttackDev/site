<style lang="scss">
  @import "../style/theme.scss";
  @import "../style/animations.scss";

  section {
    position: relative;
    height: 100%;
    display: flex;
    overflow: hidden;
  }

  article,
  figure {
    width: 100%;
    height: 100%;
  }

  figure {
    animation: slideInRight 1s ease-in-out both;
  }

  article {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
    background-color: #98521aa1;
    color: #fff;
    animation: slideInLeft 1s 0.5s ease-in-out both;
    text-align: center;
    transition: 0.3s ease-out;
    overflow-y: auto;

    &:hover {
      background-color: #331d0aa1;
    }

    h1 {
      font-size: 5rem;
      margin: 0 2rem;
      margin-bottom: 2.5rem;
    }

    p {
      font-size: 1.5rem;
      letter-spacing: 1px;
      line-height: 3rem;
      margin: 0 4rem;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>

<svelte:head>
  <title>Work Attack | Conheça-nos</title>
</svelte:head>

<section>
  <figure>
    <img src="/teste.jpg" alt="teste" />
  </figure>
  <article>
    <h1>Nossa essência é o trabalho</h1>
    <p>
      A WorkAttack é uma Equipe de Produção de T.I e Design. Desenvolvemos
      projetos personalizados nas áreas de websites, lojas virtuais, sistemas de
      gestão, design gráfico, criação de marcas, inserção e produção de
      conteúdos, SEO e campanhas estratégicas de Marketing. Para garantir o
      desenvolvimento dos melhores projetos, investimos alto na renovação,
      ampliação e integração contínua de softwares e do conhecimento. Som uma
      ampla equipe de profissionais especializados com grande “know-how”. Ao
      longo de dois anos de atividade atraímos clientes e parceiros pela
      expertise e comprometimento em tudo que fazemos. Criamos um relacionamento
      de confiança com nossos clientes, garantindo fidelidade e conquistando a
      sua indicação como cliente satisfeito. Trabalhamos exaustivamente em cada
      projeto para fornecer soluções atualizadas às novas tendências, sempre
      sugerindo ações para beneficiar o seu negócio.
    </p>
  </article>
</section>
