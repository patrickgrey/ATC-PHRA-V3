<script>
  import Nav from "../components/Nav.svelte";

  // export let segment;
</script>

<style>
  main {
    display: block;
    position: relative;
    width: 100%;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<svelte:head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

</svelte:head>

<!-- <Nav {segment}/> -->

<main>
  <slot />
</main>
