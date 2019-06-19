<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let id;
  export let title;
  let isClicked = false;

  function handleClick() {
    isClicked = !isClicked;
  }
</script>

<a on:click|preventDefault={handleClick} href="./phrase/{id}">{title}</a>
<slot {isClicked} />
