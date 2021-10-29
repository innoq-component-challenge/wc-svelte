<script>
    export let heading, headingLevel, footer, href;

    let Heading = `h${headingLevel}`;
</script>

<section class="card">
    <div class="card-body">
        <heading class="card-title">
            {#if href}
            <a href={href}>{heading}</a>
            {:else}
            {heading}
            {/if}
        </heading>
        <p class="card-text"><slot></slot></p>
    </div>
    {#if footer}
    <div class="card-footer">{footer}</div> 
    {/if}
</section>
