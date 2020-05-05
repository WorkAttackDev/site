<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { stores } from "@sapper/app";

  import Header from "../components/shared/Header.svelte";
  import SideBar from "../components/shared/SideBar.svelte";
  import Footer from "../components/shared/Footer.svelte";
  import LoadingOverlay from "../components/shared/LoadingOverlay.svelte";

  let isLoading = true;
  let video; //= new HTMLVideoElement()

  const { page, preloading } = stores();

  onMount(() => {
    isLoading = false;
    setTimeout(() => video.play(), 2500);
  });
</script>

<style lang="scss" global>
  @import "../style/global.scss";

  main {
    position: relative;
    padding: $header-height 0 $footer-height $sidebar-width;
    height: 100vh;

    @media screen and (max-width: $phone) {
      padding-left: 0;
      padding-top: $header-height-xs;
      background-position: center;
    }
  }

  video {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

{#if $preloading || isLoading}
  <!-- {#if true} -->
  <LoadingOverlay />
{/if}

<Header page={$page} />
<SideBar />
<main transition:fade={{ duration: 2000 }}>
  <video muted loop bind:this={video}>
    <source src="/video_bg.mp4" />
  </video>
  <slot />
</main>
<Footer />
