<script>
    export let items;
    export let ratio = '1/3';

    const c1 = 'col-md-3',
        c2 = 'col-md-9'; // TODO!

   let entries = Object.entries(JSON.parse(items)).map(([key, value], i) => {
       return {key, value, even: i % 2 === 0}
       });
</script>

<dl class="row">
    {#each entries as entry}
        <dt class={c1 + " " + (entry.even ? "bg-primary" : "bg-secondary")}>{entry.key}</dt>
        <dd class={c2 + " " + (entry.even ? "bg-primary" : "bg-secondary")}>{entry.value}</dd>
    {/each}
</dl>

