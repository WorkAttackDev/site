<script>
  import { createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";
  import MdCLose from "svelte-icons/md/MdClose.svelte";

  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  @import "../../style/theme.scss";

  .modal {
    position: fixed;
    top: 15rem;
    right: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    padding: 2rem;
    background-color: rgba($main-color, 0.9);
    border-top: 1rem solid white;
    border-radius: 10px;
    z-index: 5;
    color: white;
    box-shadow: 0 0.3rem 10px rgba(176, 176, 176, 0.3);

    @media screen and (max-width: $phone) {
      width: 80%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  button {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    margin: 2rem 0 0;
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    margin-left: auto;

    &:hover,
    &:active {
      color: white;
      background-color: red;
    }
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(black, 0.25);
    z-index: 4;
  }
</style>

<div class="modal" transition:fly={{ x: 500, duration: 500 }}>
  <slot>Lorem ipsum dolor sit amet.</slot>
  <button on:click={() => dispatch('close')}>
    <MdCLose />
  </button>
</div>
<div class="backdrop" transition:fade />
