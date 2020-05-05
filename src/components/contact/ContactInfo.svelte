<script>
  import { slide, fade } from "svelte/transition";
  import CarimboWA from "../shared/CarimboWA.svelte";
  import MDEmail from "svelte-icons/md/MDEmail.svelte";
  import MDPhone from "svelte-icons/md/MDPhone.svelte";
  import MDPlace from "svelte-icons/md/MDPlace.svelte";
</script>

<style lang="scss">
  @import "../../style/theme.scss";
  article {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: $main-color;
    width: 50%;
    height: 100%;
    padding: 4rem 4rem 0;
    font-size: 2rem;
    color: white;
    align-items: center;
    text-align: center;
    word-break: break-all;

    @media screen and (max-width: $tablet - 100) {
      width: 100%;
      height: fit-content;
    }
  }

  h1 {
    position: relative;
    margin-bottom: 2rem !important;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1rem;
      background-color: white;
      width: 100%;
      height: 0.3rem;
    }
  }

  div {
    margin: 2rem 0;
    overflow-y: auto;

    @media screen and (max-width: $tablet - 100) {
      overflow: initial;
    }
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    :global(svg) {
      width: 4rem;
    }
  }
</style>

<article>
  <h1 transition:slide={{ duration: 900 }}>Contactos</h1>
  <div>
    <span transition:slide={{ duration: 900, delay: 100 }}>
      <MDEmail />
      <p>workattackgeral@gmail.com</p>
    </span>
    <span transition:slide={{ duration: 900, delay: 200 }}>
      <MDPhone />
      <p>tel: +244 997267270</p>
    </span>
    <span transition:slide={{ duration: 900, delay: 300 }}>
      <MDPlace />
      <p>Bairro Gamek vila</p>
    </span>
  </div>
  <CarimboWA left />
</article>
