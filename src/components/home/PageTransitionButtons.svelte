<script>
  import ArrowNext from "../shared/ArrowNext.svelte";
  import ArrowPrev from "../shared/ArrowPrev.svelte";
</script>

<style lang="scss">
  span {
    display: flex;
    justify-content: space-around;
    width: 12rem;
    align-self: flex-end;
    margin-right: 5rem;
    margin-bottom: 5rem;

    :global(svg) {
      width: 4rem;
      height: 4rem;
      border: 1px solid white;
      border-radius: 50%;
      padding: 0.8rem;
      cursor: pointer;
      transition: 0.5s;
    }
  }
</style>

<span>
  <ArrowPrev />
  <ArrowNext size="4rem" />
</span>
