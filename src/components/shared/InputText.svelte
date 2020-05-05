<script>
  import RoundWrapper from "./RoundWrapper.svelte";
  import MdSearch from "svelte-icons/md/MdSearch.svelte";

  export let type = "normal";
  export let placeholder = "";
  export let value;
  export let contrast = false;

  const isSearch = type === "search";
</script>

<style lang="scss">
  @import "../../style/theme.scss";

  input,
  textarea {
    font-size: 1.3rem;
    border: none;
    background-color: transparent;
    color: white;
    outline: none;
    width: 100%;

    &::placeholder {
      color: whitesmoke;
    }
  }

  textarea {
    height: 100%;
    padding: 1rem 0.5rem;
  }
</style>

{#if type === 'area'}
  <RoundWrapper {contrast} type="normal" size="lg">
    <textarea bind:value on:keydown {placeholder} />
  </RoundWrapper>
{:else}
  <RoundWrapper {contrast} type={isSearch ? 'search' : 'normal'}>
    {#if isSearch}
      <MdSearch />
    {/if}
    <input bind:value on:keydown {placeholder} />
  </RoundWrapper>
{/if}
