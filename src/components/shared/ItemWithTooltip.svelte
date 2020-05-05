<script>
  import Tooltip from "./ToolTip.svelte";

  export let text = "lorem ipsum dolor";

  let showTooltip = false;
</script>

<style lang="scss">
  li {
    position: relative;
    margin: 1rem 0;
  }

  p {
    cursor: pointer;
    display: inline;
    border-color: transparent;
    transition: border 0.5s ease-out;

    &:hover {
      border-color: #fff;
      border-bottom: 1px solid;
      padding-bottom: 3px;
    }
  }
</style>

<li>
  <p on:click={() => (showTooltip = !showTooltip)}>{text}</p>
  {#if showTooltip}
    <Tooltip on:close={() => (showTooltip = false)}>
      <slot>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet amet</slot>
    </Tooltip>
  {/if}
</li>
