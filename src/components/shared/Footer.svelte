<style lang="scss">
  @import "../../style/theme.scss";

  @keyframes slideup {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  footer {
    position: fixed;
    right: 0;
    bottom: 0;
    width: calc(100% - #{$sidebar-width});
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $footer-height;
    border-top: 1px solid $black-trans;
    padding: 0 $h-gap-md;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 100;
    color: white;
    letter-spacing: 0.2rem;

    & * {
      animation: slideup 1s ease-out 0.5s both;

      &:nth-child(2) {
        animation-delay: 1s;
      }

      &:nth-child(3) {
        animation-delay: 1.5s;
      }
    }

    @media screen and (max-width: $phone) {
      width: 100%;
    }
  }

  .lang {
    font-size: 1.5rem;
    font-weight: 900;
  }

  // a {
  //   text-transform: none;
  //   color: $main-color;
  //   text-decoration: none;
  //   border-bottom: 1px solid transparent;
  //   transition: all 0.3s ease-in;
  //   margin: 0 auto 0 3rem;
  //   font-size: 1.1rem;

  //   &:hover {
  //     border-color: $main-color;
  //     color: white;
  //   }
  // }
</style>

<footer>
  <p style="text-shadow: 0 0 2px black;">2020 &copy; WorkAttack</p>
  <!-- <a href="#">Política de Privacidade</a> -->
  <p class="lang">PT</p>
</footer>
