<script>

</script>

<style lang="scss">
  @import "../../style/mixins.scss";
  @import "../../style/animations.scss";
  @import "../../style/theme.scss";

  section {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.678);
    animation: fadeIn 1s ease-out forwards;

    @media screen and (max-width: $phone) {
      overflow-x: auto;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
    }
  }

  // article {
  //   @include flex-center;
  //   min-width: calc(100% / 3);
  //   height: 100%;
  //   overflow: hidden;
  //   // transition: all 0.7s;
  //   background-color: rgba(0, 0, 0, 0.41);
  //   scroll-snap-align: start;

  //   button {
  //     border: none;
  //     background-color: rgba(0, 0, 0, 0.4);
  //     color: white;
  //     padding: 1rem 3rem;
  //     border-radius: 100px;
  //     outline: none;
  //     // cursor: pointer;
  //   }
  // }
</style>

<section>
  <slot>lorem</slot>
  <!-- <article>
      <button>Sem mais resultados</button>
    </article> -->
</section>
