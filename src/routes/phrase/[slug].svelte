<script context="module">
  export async function preload(page, session) {
    const { slug } = page.params;

    const res = await this.fetch(`data/_phrases-model.json`);
    const phrases = await res.json();
    const phrase = phrases[slug];

    return { phrase };
  }
</script>

<script>
  import PhraseDetail from "../../components/PhraseDetail.svelte";
  export let phrase;
</script>

<style>

</style>

<PhraseDetail {...phrase} />

<!-- <div class="content">
  {@html post.html}
</div> -->
