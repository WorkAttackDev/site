<script>
  import WALogoWhite from "./WALogoWhite.svelte";
  import FaFacebookF from "svelte-icons/fa/FaFacebookF.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import FaWhatsapp from "svelte-icons/fa/FaWhatsapp.svelte";
</script>

<style lang="scss">
  @import "../../style/theme.scss";

  @keyframes slidedown {
    from {
      opacity: 0;
      transform: translateY(-120%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slidedownsmall {
    from {
      opacity: 0;
      transform: translateY(-30%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  aside {
    position: fixed;
    top: 0;
    left: 0;
    width: $sidebar-width;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0 $footer-height;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;

    :global(svg) {
      width: 8rem;
      height: 6rem;
    }

    @media screen and (max-width: $phone) {
      height: $header-height-xs;
      padding-top: 1rem;
      padding-bottom: 0;

      :global(svg) {
        width: 6rem;
        height: 4rem;
      }

      .social-box {
        display: none;
      }
    }
  }

  .social-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 13rem;

    :global(svg) {
      position: relative;
      z-index: 2;
      width: 1.5rem;
      color: white;
      cursor: pointer;

      &:not(:first-child) {
        width: 2rem;
      }
    }
  }

  a {
    animation: slidedown 2s ease-out both;
  }

  .social-box a {
    position: relative;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    transition: 0.5s ease-out;
    animation: slidedownsmall 1s 2s ease-out both;

    &:nth-child(2) {
      animation-delay: 2.5s;
    }

    &:nth-child(3) {
      animation-delay: 3s;
    }

    &:before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      border-radius: 100px;
      transition: 0.5s 0.2s ease-out;
    }

    &:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: fit-content;
      height: 100%;
      background: transparent;
      border-radius: 100px;
      display: flex;
      align-items: center;
      color: transparent;
      transition: 0.5s ease-out;
      transform-origin: left;
      transform: scaleX(0);
      opacity: 0;
    }

    &:hover {
      &:before {
        background: rgba(#222, 0.8);
      }

      &:after {
        background: rgba(#222, 0.7);
        color: white;
        border-top-right-radius: 0%;
        border-bottom-right-radius: 0%;
        padding-left: 5rem;
        padding-right: 2rem;
        font-size: 1.2rem;
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
</style>

<aside>
  <a href="/">
    <WALogoWhite />
  </a>
  <div class="social-box">
    <a href="#" data-text="WorkAttack">
      <FaFacebookF />
    </a>
    <a href="#" data-text="WorkAttack">
      <FaInstagram />
    </a>
    <a href="#" data-text="+244 997267270">
      <FaWhatsapp />
    </a>
  </div>
</aside>
