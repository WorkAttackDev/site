<script>
  import WorkerCardInfo from "./WorkerCardInfo.svelte";

  export let worker;

  let imgSrc = worker.imgs[0] ? worker.imgs[0] : "/test.jpg";
  let showInfo = false;
</script>

<style lang="scss">
  @import "../../style/theme.scss";

  article {
    position: relative;
    min-width: calc(100% / 3);
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.7s;
    scroll-snap-align: start;

    @media screen and (max-width: $phone) {
      min-width: 100%;
    }
  }

  figure {
    position: relative;
    width: 100%;
    height: 100%;

    &:hover {
      &::before {
        opacity: 1;
      }
    }

    &::before {
      content: attr(data-name);
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 10rem;
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-size: 1.7rem;
      font-weight: bolder;
      padding-bottom: 2rem;
      color: white;
      background-image: linear-gradient(
        to top,
        rgba(#000, 0.8) 20%,
        transparent
      );
      transition: opacity 0.5s linear;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>

<article on:click={() => (showInfo = !showInfo)}>
  <figure data-name={worker.name}>
    <img src={imgSrc} alt={worker.name} />
  </figure>
</article>

{#if showInfo}
  <WorkerCardInfo {worker} on:close={() => (showInfo = false)} />
{/if}
