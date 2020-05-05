<script>
  import IntroTextSection from "../components/home/IntroTextSection.svelte";
  import PageTransitionButtons from "../components/home/PageTransitionButtons.svelte";
  import WALogo from "../components/shared/WALogo.svelte";
</script>

<style lang="scss">
  @import "../style/theme.scss";
  // @import "../style/animations.scss";

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media screen and (max-height: $phone + 100) {
      overflow-y: auto;
    }

    @media screen and (max-width: $phone) {
      align-items: center;
      padding-top: 15rem;
    }
  }
</style>

<svelte:head>
  <title>Bem vindo à Work Attack</title>
</svelte:head>

<section>
  <IntroTextSection />
  <!-- <PageTransitionButtons /> -->
</section>
