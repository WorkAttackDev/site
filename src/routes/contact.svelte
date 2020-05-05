<script>
  import ContactForm from "../components/contact/ContactForm.svelte";
  import ContactInfo from "../components/contact/ContactInfo.svelte";
</script>

<style lang="scss">
  @import "../style/theme.scss";

  section {
    display: flex;
    width: 100%;
    height: 100%;

    @media screen and (max-width: $tablet - 99) {
      flex-direction: column;
      overflow-y: auto;
    }
  }
</style>

<section>
  <ContactInfo />
  <ContactForm />
</section>
