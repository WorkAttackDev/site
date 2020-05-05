<script>
  import ImageGallery from "../components/shared/ImageGallery.svelte";
  import WorkerCard from "../components/workers/WorkerCard.svelte";

  import workers from "../data/workers";
</script>

<style lang="scss">

</style>

<svelte:head>
  <title>Work Attack | Os Workers</title>
</svelte:head>

<ImageGallery>
  {#each workers as item}
    <WorkerCard worker={item} />
  {/each}
</ImageGallery>
