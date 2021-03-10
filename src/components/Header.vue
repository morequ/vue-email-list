<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @toggle-add-email="$emit('toggle-add-email')" text="Add New Email" color="green" />
    </header>
</template>

<script>
import Button from './Button'

export default ({
    name: 'Header',
    props: ['title'],
    components: {
        Button
    }
})
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center
    }
</style>