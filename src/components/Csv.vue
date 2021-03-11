<template>
    <span class="csv" :key="index" v-for="(item, index) in items">
        {{item}}
        <span v-if="index != Object.keys(items).length - 1">, </span>
    </span>
</template>

<script>
export default {
    name: 'Csv',
    props: {
        items: Array
    },
}
</script>

<style>
.csv {
    display: inline;
}
</style>