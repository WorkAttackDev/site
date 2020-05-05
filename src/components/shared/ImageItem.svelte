<script>
  import ImageItemContent from "./ImageItemContent.svelte";
  import ImageView from "./ImageView.svelte";

  export let item;

  let isOpen = false;
  let viewImage = false;
  let hasAList = item.areas ? true : false;
</script>

<style lang="scss">
  @import "../../style/theme.scss";
  article {
    flex: 1;
    position: relative;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.7s;
    scroll-snap-align: start;

    &:hover {
      flex-basis: 30%;

      img {
        transform: scale(1.15);
      }
    }

    @media screen and (max-width: $phone) {
      min-width: 100%;
      margin-right: -1rem;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s 0.3s;
  }

  // .opened state
  .opened {
    flex-basis: 100%;
    cursor: initial;

    &:hover {
      flex-basis: 100%;
    }

    @media screen and (max-width: $phone) {
      margin-right: 0;
      // :global(div) {
      //   &:first-of-type {
      //     display: none;
      //   }
      // }
    }
  }
</style>

<article class:opened={isOpen}>
  <img src={item.img || item.imgs[0]} alt={item.name} />
  <ImageItemContent
    {isOpen}
    {hasAList}
    content={item}
    on:click={() => (isOpen = true)}
    on:close={() => (isOpen = false)}
    on:open={() => (viewImage = true)} />
  {#if viewImage}
    <ImageView
      imgs={item.imgs || item.img}
      on:close={() => (viewImage = false)} />
  {/if}
</article>
