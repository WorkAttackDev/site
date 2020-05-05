<script>
  import { createEventDispatcher } from "svelte";
  export let links;

  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  @import "../../style/mixins.scss";
  @import "../../style/theme.scss";
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    align-items: center;
  }

  h1 {
    color: white;
    margin-bottom: 0.5rem;
  }

  p {
    color: white;
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    max-width: 30rem;
  }

  li {
    @include flex-center;
    margin: 0.5rem;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 0.5em 1em;
    background-color: $black-trans;
    border-radius: 20px;
    transition: 0.3s;
    font-size: 1.3rem;

    &:hover {
      background-color: rgba(black, 0.5);
    }
  }
</style>

<div>
  <h1>Nenhum resultado!</h1>
  <p>Talvez você está procurando por</p>
</div>

<ul>
  {#each links as { name, href }}
    <li on:click={() => dispatch('closemodal')}>
      <a {href}>{name}</a>
    </li>
  {/each}
</ul>
