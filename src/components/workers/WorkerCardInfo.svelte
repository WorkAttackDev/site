<script>
  import { createEventDispatcher } from "svelte";
  import { fade, fly, slide } from "svelte/transition";

  import HambugerMenu from "../shared/HambugerMenu.svelte";
  import ItemContentList from "../shared/ItemContentList.svelte";

  export let worker;
  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  @import "../../style/mixins.scss";
  @import "../../style/theme.scss";

  section {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #060606c2;
    z-index: 1;

    @media screen and (max-width: $phone) {
      :global(div) {
        display: none;
      }
    }
  }

  article {
    position: absolute;
    min-width: 30rem;
    width: 40%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    color: white;
    padding: 3rem;
    font-size: 1.5rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(15, 8, 8, 0.8);
    }

    & *:not(:last-child) {
      margin-bottom: 1rem;
    }

    @media screen and (max-width: $phone) {
      position: fixed;
      width: 100%;
      height: calc(100% - 15rem);
    }
  }

  h1 {
    font-size: 3rem;
  }

  figure {
    width: 100%;
    height: 100%;
  }

  img {
    @include flex-img;
  }

  button {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border: none;
    background-color: #98521aa1;
    color: white;
    padding: 1rem 0;
    font-size: 1.7rem;
    cursor: pointer;
  }
</style>

<section transition:fade>
  <article>
    <h1 transition:fly={{ x: 100, duration: 500 }}>{worker.name}</h1>
    <p transition:fly={{ x: 150, duration: 600 }}>{worker.bio}</p>
    <ItemContentList>
      {#each worker.abilities as ability}
        <li>{ability}</li>
      {/each}
    </ItemContentList>
    <button
      transition:fly={{ y: 50, duration: 700 }}
      on:click|stopPropagation={() => dispatch('close')}>
      Fechar
    </button>
  </article>
  <figure>
    <img src={worker.imgs[1] || '/teste.jpg'} alt={worker.name || 'unknown'} />
  </figure>
  <HambugerMenu toTopRight close on:click={() => dispatch('close')} />
</section>
