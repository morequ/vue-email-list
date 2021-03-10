<template>
    <div class='email'>
        <h3>{{email.email}}
           <i @click="$emit('delete-email', email.id)" class="fas fa-times"></i> 
        </h3>
    </div>
</template>

<script>

export default {
    name: 'Email',
    props: {
        email: Object
    }
}
</script>

<style scope>
.fas {
  color: red;
}
.email {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.email h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1em;
}
</style>