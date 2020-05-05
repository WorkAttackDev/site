<script>
  import { goto } from "@sapper/app";
  import HamburgerMenu from "./HambugerMenu.svelte";
  import NavMenu from "./NavMenu.svelte";
  import Modal from "./Modal.svelte";
  import SearchModalContent from "./SearchModalContent.svelte";
  import InputText from "./InputText.svelte";

  import links from "../../data/links";
  import { findServiceByName } from "../../util/service";
  import { findWorkByName } from "../../util/work";

  export let page;

  let showMenu = false;
  let showModal = false;
  let searchText = "";

  $: currPath = () => {
    const link = links.find(_l => _l.href === page.path);
    return link ? link.name : "Error";
  };

  const handleSearch = async () => {
    if (searchText.trim() === "") return;

    for (let i = 0; i < links.length; i++) {
      if (searchText.toLowerCase() === links[i].name.toLowerCase()) {
        await goto(links[i].href);
        return;
      }
    }

    showModal = true;
  };

  const handleLinkClick = async href => {
    await goto(href);
  };
</script>

<style lang="scss">
  @import "../../style/theme.scss";

  @keyframes slideright {
    from {
      opacity: 0;
      transform: translateX(-30%);
    }

    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @keyframes slideup {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }

    80% {
      transform: scale(1.2);
    }

    100% {
      opacity: 1;
      transform: translateY(0%) scale(1);
    }
  }

  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $header-height;
    border-bottom: 1px solid $black-trans;
    padding: 0 5rem 0 $sidebar-width + 5;
    z-index: 2;

    :global(div) {
      animation: slideright 1s 0.5s ease-out both;

      @media screen and (max-width: $tablet - 100) {
        &:first-child {
          display: none;
        }
      }
    }

    :global(input) {
      width: 80%;
    }

    @media screen and (max-width: $phone) {
      padding: 0 2rem 0 12rem;
      height: $header-height-xs;

      & > h1 {
        font-size: 1.8rem;
      }
    }
  }

  h1 {
    font-size: 2rem;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    animation: slideup 1.2s ease-out 0.7s both;
  }
</style>

<header>
  <InputText
    bind:value={searchText}
    type="search"
    placeholder="Pesquisar"
    on:keydown={e => (e.key === 'Enter' ? handleSearch() : null)} />
  <h1>{currPath()}</h1>
  <HamburgerMenu close={showMenu} on:click={() => (showMenu = !showMenu)} />
  {#if showMenu}
    <NavMenu {showMenu} on:goto={() => (showMenu = !showMenu)} />
  {/if}
</header>

{#if showModal}
  <Modal on:close={() => (showModal = false)}>
    <SearchModalContent {links} on:closemodal={() => (showModal = false)} />
  </Modal>
{/if}
