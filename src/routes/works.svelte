<script>
  import ImageGallery from "../components/shared/ImageGallery.svelte";
  import ImageItem from "../components/shared/ImageItem.svelte";

  import works from "../data/works";
</script>

<svelte:head>
  <title>Work Attack | Trabalhos</title>
</svelte:head>

<ImageGallery>
  {#each works as item}
    <ImageItem {item} />
  {/each}
</ImageGallery>
