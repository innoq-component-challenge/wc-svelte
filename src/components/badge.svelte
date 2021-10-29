<script>
    import classNames from 'classnames';

    export let type; 
    export let caption;

    let TYPES = {
        danger: "bg-danger"
    };
</script>

<span class={classNames("badge", TYPES[type])}>{caption}</span>
