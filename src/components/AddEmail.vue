<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Email</label>
      <input type="email" v-model="email" name="email" placeholder="Email Address" />
    </div>
    <input type="submit" value="Save Email" class="btn btn-block" />
  </form>    
</template>

<script>
export default {
    name: 'AddEmail',
    data() {
        return {
            email: ''
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if(!this.email) {
                alert('Please add a email')
                return
            }

            const newEmail = {
                id: Math.floor(Math.random() * 100000),
                email: this.email
            }

            this.$emit('add-email', newEmail)

            this.email = ''
        }
    }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>