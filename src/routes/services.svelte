<script>
  import ImageGallery from "../components/shared/ImageGallery.svelte";
  import ImageItem from "../components/shared/ImageItem.svelte";

  import services from "../data/services";
</script>

<svelte:head>
  <title>Work Attack | Serviços</title>
</svelte:head>

<ImageGallery>
  {#each services as item}
    <ImageItem {item} />
  {/each}
</ImageGallery>
