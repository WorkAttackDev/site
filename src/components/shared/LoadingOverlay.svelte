<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import WALogo from "./WALogo.svelte";

  let text = "WorkAttack";
  let animate = false;

  onMount(() => {
    setTimeout(() => {
      animate = true;
      text = "Carregando...";
      console.log("acabou!!!");
    }, 7000);
  });
</script>

<style lang="scss">
  @import "../../style/mixins.scss";

  @keyframes text-anim {
    0% {
      opacity: 0;
      transform: translateY(-5vh);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes light-anim {
    0% {
      opacity: 0;
      left: 0;
    }

    20% {
      opacity: 1;
    }

    100% {
      left: 95%;
    }
  }

  section {
    position: relative;
    @include flex-center;
    flex-direction: column;
    position: fixed;
    background-color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    &::before {
      content: "";
      animation: light-anim 1.3s ease-out 2.6s both;
      position: absolute;
      top: 0;
      width: 80px;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.8),
        transparent
      );
      transform: skew(-45deg);
      z-index: 5;
    }
  }

  p {
    animation: text-anim 1s ease-out 2.4s both;
    font-size: 2.5rem;
    font-weight: bolder;
    color: #555;
    margin-right: 3rem;
  }

  .anim-light {
    &::before {
      animation: light-anim 1.5s ease-out both infinite;
    }
  }
</style>

<section class:anim-light={animate} transition:fade={{ duration: 1000 }}>
  <WALogo animate={true} />
  <p id="pAnim">{text}</p>
</section>
