<script>
  export let contrast = false;
  export let type = "";
  export let size = "sm";

  const isNormal = type === "normal";
  const isSearch = type === "search";
</script>

<style lang="scss">
  @import "../../style/theme.scss";

  div {
    background-color: $black-trans;
    width: fit-content;
    height: fit-content;
    display: flex;
    color: #fff;
    transition: 2s;

    :global(svg) {
      width: 2.5rem;
      margin-right: 1rem;
    }
  }

  .size-lg {
    height: 30% !important;
    border-radius: 20px !important;
  }

  .contrast {
    background-color: rgba(255, 255, 255, 0.15);
  }

  .isSearch {
    width: 25rem;
    height: 3.5rem;
    align-items: center;
    padding: 0 1.2rem;
    border-radius: 100px;

    // @media screen and (max-width: $tablet) {
    //     display: none;
    //   }
  }

  .isNormal {
    width: 25rem;
    height: 3.5rem;
    align-items: center;
    padding: 0 1.2rem;
    border-radius: 10px;
  }
</style>

<div class:contrast class:isNormal class:isSearch class:size-lg={size === 'lg'}>
  <slot>Lorem ipsum dolor sit amet.</slot>
</div>
