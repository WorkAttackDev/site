<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import CarimboWA from "./CarimboWA.svelte";

  import links from "../../data/links";

  export let showMenu = false;

  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  @import "../../style/theme.scss";
  @import "../../style/mixins.scss";
  @import "../../style/animations.scss";

  nav {
    @include flex-center;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding-left: $sidebar-width;
    background-color: #fff;

    @media screen and (max-width: $phone) {
      padding-left: 0;
    }
  }

  ul {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    font-size: 3rem;
    align-items: center;
    height: 30rem;
    z-index: 2;
  }

  li {
    width: 100%;
    display: flex;
    text-align: center;
    animation: slideIn 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28) reverse both;

    &:hover {
      &::before {
        opacity: 0.1;
        letter-spacing: 0;
      }
    }

    &::before {
      content: attr(data-name);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: black;
      font-size: 5em;
      pointer-events: none;
      opacity: 0;
      letter-spacing: 20px;
      transition: 0.5s;
      white-space: nowrap;
    }
  }

  .slide-li {
    animation: slideIn 0.5s ease-out both;

    @for $i from 1 through 6 {
      &:nth-child(#{$i}) {
        animation-delay: #{$i * 2 / 10}s;
      }
    }
  }

  a {
    position: relative;
    text-decoration: none;
    transition: 0.3s;
    padding: 0 2rem;
    color: #666;
    width: 100%;
    overflow: hidden;

    &:hover {
      background-color: $main-color;
      color: white;
      transform: scale(1.5);
      opacity: 1 !important;

      &::before {
        left: 85%;
        transition: 0.5s 0.2s;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100px;
      width: 80px;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.8),
        transparent
      );
      transform: skew(35deg);
      transition: 0s;
    }
  }
</style>

<nav transition:fly={{ x: 600, duration: 600 }}>
  <ul>
    {#each links as { name, href }, i}
      <li
        data-name={name}
        on:click={() => dispatch('goto')}
        class:slide-li={showMenu}>
        <a {href}>{name}</a>
      </li>
    {/each}
  </ul>
  <CarimboWA />
</nav>
