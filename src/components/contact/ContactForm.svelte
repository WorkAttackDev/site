<script>
  import { fly } from "svelte/transition";
  import InputText from "../shared/InputText.svelte";
  import Button from "../shared/Button.svelte";
  import Modal from "../shared/Modal.svelte";

  let errorMsg = "";
  const emailInfo = {
    name: "",
    email: "",
    message: ""
  };

  const isEmpty = object => {
    for (const key in object) {
      if (object[key].trim() === "") return true;
    }
    return false;
  };

  const sendEmail = () => {
    if (isEmpty(emailInfo)) return (errorMsg = "Preencha todos os campos");
    console.log(emailInfo);
  };
</script>

<style lang="scss">
  @import "../../style/theme.scss";

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    padding: 4rem;
    width: 50%;
    background-color: rgba(0, 0, 0, 0.8);

    :global(div) {
      margin: 1rem 0;
      width: 100% !important;
    }

    :global(button) {
      margin: 1rem 0;
      width: fit-content;
    }

    h1 {
      font-size: 2rem;
      color: white;
      margin-bottom: 4rem;
    }

    @media screen and (max-width: $tablet - 100) {
      width: 100%;
    }
  }
</style>

<form
  on:submit|preventDefault={sendEmail}
  transition:fly={{ x: 500, duration: 700 }}>
  <h1>Entre em contacto</h1>
  <InputText placeholder="Nome" contrast bind:value={emailInfo.name} />
  <InputText placeholder="Email" contrast bind:value={emailInfo.email} />
  <InputText
    type="area"
    placeholder="Mensagem"
    contrast
    bind:value={emailInfo.message} />
  <Button contrast type="submit">Enviar</Button>
</form>

{#if errorMsg}
  <Modal on:close={() => (errorMsg = '')}>
    <h1>{errorMsg}</h1>
  </Modal>
{/if}
