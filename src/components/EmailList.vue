<template>
    <div :key="email.id" v-for="email in emails">
        <Email @delete-email="$emit('delete-email', email.id)" :email="email" />
    </div>
</template>

<script>
import Email from './Email'

export default {
    name: 'EmailList',
    props: {
        emails: Array
    },
    components: {
        Email
    },
    emits: ['delete-email']
}
</script>