<script>
  import { createEventDispatcher } from "svelte";
  import { slide, fade } from "svelte/transition";
  import HambugerMenu from "./HambugerMenu.svelte";

  export let imgs;

  const temp = typeof imgs === "string" ? imgs : imgs[0];
  console.log(temp);

  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  figure,
  img {
    width: 100%;
    height: 100%;
  }

  figure {
    position: absolute;
    top: 0;
    background-color: rgba(#333, 0.9);
    z-index: 2;
  }

  img {
    object-fit: contain;
  }
</style>

<figure transition:fade>
  <HambugerMenu toTopRight contrast close on:click={() => dispatch('close')} />
  <img transition:fade|local src={temp} alt="image preview" />
</figure>
