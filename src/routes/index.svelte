<script>
  import Phrases from "./data/_phrases-model.json.js";
  import PhraseLink from "../components/PhraseLink.svelte";
  import PhraseDetail from "../components/PhraseDetail.svelte";
  let phrases = Phrases;

  if (!Object.entries) {
    Object.entries = function(obj) {
      var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
      while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

      return resArray;
    };
  }

  let phrasesArray = Object.entries(phrases);
  let showDetail = false;

  function handlePhraseClick(event) {
    event.preventDefault();
    console.log(event.detail.text);
    showDetail = !showDetail;
  }
</script>

<style>
  p {
    margin: 1em auto;
  }
</style>

<svelte:head>
  <title>Phraseology</title>
</svelte:head>

<!-- 
  
  TODO:
  - Build json API and try to get that working. Or better to somehow embed data?
  - Get Svelte to consume JSON: https://www.valentinog.com/blog/svelte/
  - IE11 seems to default to no JS version. Polyfill? Drop IE11?
  - http://blog.az.sg/posts/svelte-and-ie11/
  - https://github.com/sveltejs/svelte/issues/2621
  
 -->

{#each phrasesArray as phrase (phrase[0])}
  <p>
    <!-- <a href="./phrase/{phrase[0]}">{phrase[1].s}</a> -->
    <!-- https://svelte.dev/tutorial/slot-props -->
    <PhraseLink let:isClicked id={phrase[0]} title={phrase[1].s}>

      {#if isClicked}
        <PhraseDetail {...phrase[1]} />
      {/if}

    </PhraseLink>
    <!-- Instead of a simple link, this should be a component with a show hide box below it. That component, can then be used in the pages for the static site generation! -->
  </p>
{/each}
