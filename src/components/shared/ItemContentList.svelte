<script>
  import { slide } from "svelte/transition";
</script>

<style lang="scss">
  @import "../../style/theme.scss";

  ul {
    list-style: none;
    margin: 2rem 0;
    overflow-y: auto;
    font-size: 1.5rem;
    color: white;

    li {
      margin-bottom: 1rem;
    }
  }
</style>

<ul transition:slide={{ duration: 700 }}>
  <slot>
    <li>Empty</li>
  </slot>
</ul>
