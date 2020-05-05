<script>
  import ItemContentList from "./ItemContentList.svelte";
  import ItemWithTooltip from "./ItemWithTooltip.svelte";

  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  export let isOpen = false;
  export let hasAList = false;
  export let content;

  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  @import "../../style/theme.scss";

  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    min-width: 20rem;
    padding: 0 3rem;
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.4s;

    :global(ul) {
      opacity: 0;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);

      h1 {
        opacity: 1;
        transform: translateY(3rem);

        &::before {
          transform: scaleY(1);
        }
      }
    }

    @media screen and (max-width: $tablet) {
      padding-top: 0;
    }
  }

  h1 {
    position: relative;
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: 0.7s;
    text-align: center;
    white-space: nowrap;

    &::before {
      position: absolute;
      content: attr(data-name);
      width: 100%;
      height: 100%;
      color: white;
      text-align: initial;
      transition: 0.7s;
      transform-origin: top;
      transform: scaleY(0);
    }

    &::after {
      content: "";
      width: 72%;
      left: 0;
      height: 0.5rem;
      background-color: #fff;
      position: absolute;
      bottom: -1rem;
      transition: 0.7s;
      border-radius: 1000px;
      transform-origin: right;
      transform: scaleX(0);
    }
  }

  p {
    opacity: 0;
    transition: 0.7s;
    margin-top: 6rem;
    font-size: 1.3rem;
    color: white;
    letter-spacing: 0.1rem;
    line-height: 2rem;
    max-height: 50%;
    overflow-y: auto;
  }

  .buttons {
    margin: 0 -3rem;
    display: flex;
    margin-top: auto;
  }

  button {
    width: 100%;
    border: none;
    background-color: #98521aa1;
    color: white;
    padding: 1rem 0;
    font-size: 1.7rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #98521ae6;
    }
  }

  // opened state
  //*************
  .opened {
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.7s;
    cursor: auto;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);

      h1 {
        transform: translateY(3rem);

        &::before {
          transform: scaleY(1);
        }
      }
    }

    @media screen and (max-width: $phone) {
      width: 100%;
    }
  }

  .opened {
    :global(ul) {
      opacity: 1;
      margin-top: 2rem;
    }
  }
  .opened h1 {
    transform: translateY(3rem);
    opacity: 1;
    text-align: left;
    white-space: wrap;

    &::before {
      transform: scaleY(1);
    }

    &::after {
      transform: scaleX(1);
    }
  }

  .opened > p {
    opacity: 1;
  }
</style>

<div class="content" class:opened={isOpen} on:click>
  <h1 data-name={content.name}>{content.name}</h1>
  <p>{content.desc}</p>
  {#if hasAList}
    <ItemContentList>
      {#each content.areas as area}
        <ItemWithTooltip text={area.name} />
      {/each}
    </ItemContentList>
  {/if}
  {#if isOpen}
    <div class="buttons">
      <button
        transition:fly={{ y: 200, duration: 900 }}
        on:click|stopPropagation={() => dispatch('open')}>
        Ver Imagem
      </button>
      <button
        transition:fly={{ y: 200, duration: 700 }}
        on:click|stopPropagation={() => dispatch('close')}>
        Fechar
      </button>
    </div>
  {/if}
</div>
