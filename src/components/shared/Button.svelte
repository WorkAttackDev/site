<script>
  export let type = "button";
  export let stretch = false;
  export let contrast = false;
</script>

<style lang="scss">
  @import "../../style/theme.scss";
  button {
    background-color: $black-trans;
    border-radius: 100px;
    border: none;
    padding: 0.8rem 2rem;
    color: white;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: rgba(white, 0.8);
      color: rgba(black, 0.8);
    }
  }

  .stretch {
    width: 100%;
  }

  .contrast {
    background-color: rgba(white, 0.15);
  }
</style>

<button {type} class:stretch class:contrast on:click>
  <slot>lorem</slot>
</button>
