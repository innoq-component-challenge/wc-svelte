<script>
    import classNames from 'classnames';

    export let additionalClasses;
    export let style = 'default';


    let STYLES = {
        default: 'btn-secondary',
        cta: 'btn-primary'
    };
    let cls = classNames('btn', STYLES[style] || STYLES.default, additionalClasses);
</script>

<button class={cls} {...$$props}><slot></slot></button>