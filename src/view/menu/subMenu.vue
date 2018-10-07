<template>
    <div>
        <tableExpand addButton></tableExpand>
    </div>
</template>
<script>
    import tableExpand from './table-expand'
    export default {
        name: 'subMenu',
        props: {
            row: Object,
        },

    }
</script>