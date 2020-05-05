<script>
  export let close = false;
  export let toTopRight = false;
  export let contrast = false;
</script>

<style lang="scss">
  @import "../../style/theme.scss";

  @keyframes slideleft {
    from {
      opacity: 0;
      transform: translateX(120%);
    }

    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 2rem;
    width: 4rem;
    cursor: pointer;
    z-index: 1;
    transition: transform 0.2s ease-out;

    &:hover,
    &:focus {
      span {
        width: 100%;
      }
    }

    &:focus {
      background-color: white;
    }
  }

  span {
    width: 100%;
    height: 0.2rem;
    background: white;
    transition: 0.5s, width 0.3s;
    border-radius: 2px;
    animation: slideleft 1.5s 0.5s ease-in backwards;

    // @media screen and (max-width: $phone) {
    //   height: 0.35rem;
    // }

    &:nth-child(2) {
      width: 80%;
      animation-delay: 0.8s;
    }

    &:nth-child(3) {
      width: 60%;
      animation-delay: 1.1s;
    }
  }

  // svelte special

  .close {
    span {
      background-color: #000;
      animation: none;

      &:nth-child(1) {
        transform: rotate(145deg);
        margin-top: 0.5rem;
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        width: 100%;
        transform: rotate(45deg);
        margin-bottom: 0.5rem;
      }
    }

    &:hover {
      transform: scale(1.3);
      span {
        background-color: #b50505;
      }
    }
  }

  .toTopRight {
    position: absolute;
    z-index: 2;
    right: 5rem;
    top: 3rem;
  }

  .contrast {
    span {
      background-color: #fff;
    }
  }
</style>

<div on:click class:close class:toTopRight class:contrast>
  <span />
  <span />
  <span />
</div>
