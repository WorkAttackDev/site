<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { slide } from "svelte/transition";

  const dispatch = createEventDispatcher();

  let tooltipNode;

  onMount(() => {
    tooltipNode.focus();
  });
</script>

<style lang="scss">
  @import "../../style/theme.scss";

  span {
    position: absolute;
    z-index: 1;
    top: 100%;
    max-width: 90%;
    display: flex;
    justify-content: center;
    padding: 1rem;
    background-color: darken($main-color, 5);
    border-top: 1rem solid white;
    border-radius: 10px;
    color: white;
    box-shadow: 0 0.3rem 10px rgba(176, 176, 176, 0.3);
  }
</style>

<span
  tabindex="0"
  transition:slide
  on:blur={() => dispatch('close')}
  bind:this={tooltipNode}>
  <slot>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</slot>
</span>
