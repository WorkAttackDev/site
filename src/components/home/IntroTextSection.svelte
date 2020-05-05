<script>
  import ArrowNext from "../shared/ArrowNext.svelte";
</script>

<style lang="scss">
  @import "../../style/animations.scss";
  @import "../../style/theme.scss";

  article {
    display: flex;
    flex-direction: column;
    max-width: 37rem;
    align-items: flex-start;
    margin: 1rem 0 0 5rem;
    justify-content: space-between;
    color: White;

    h1 {
      position: relative;
      font-size: 4.5rem;
      line-height: 1;
      animation: slideInSmall 1s ease-out both;
      margin-bottom: 2rem;

      &::before {
        content: "";
        position: absolute;
        width: 15rem;
        height: 0.7rem;
        background-color: white;
        margin-bottom: 1rem;
        top: -2rem;
        border-radius: 100px;
      }
    }

    @media screen and (max-width: $phone) {
      font-size: 3.5rem;
      margin: 5rem;
    }
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: flex-end;
    width: 22.3rem;
    background-color: transparent;
    border: none;
    font-size: 1.7rem;
    color: inherit;
    cursor: pointer;
    animation: slideInSmall 1s 0.5s ease-out both;
    text-decoration: none;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease-in;

    &:hover {
      border-color: white;

      :global(svg) {
        animation: go 0.5s ease-in-out forwards;
      }
    }

    @media screen and (max-width: $phone) {
      align-self: auto;
    }
  }

  @keyframes go {
    0% {
      transform: translateX(-20%);
    }

    100% {
      transform: translateX(30%);
    }
  }
</style>

<article>
  <h1>Eleve a sua imagem pessoal ou da sua empresa com os nossos serviços.</h1>
  <a href="/workattack">
    <p>Conheça à WorkAttack</p>
    <ArrowNext />
  </a>
</article>
