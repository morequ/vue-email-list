<template>
  <div class="container">
    <Header @toggle-add-email="toggleAddEmail" title="Email List">
      <div>
        <Button
          @toggle-add-email="toggleAddEmail"
          text="Add"
          color="#388E3C"
        />
        <ViewLink
          :to="{
            name: 'export-csv',
            params: {
              emails: emails.map(({ email }) => email),
            },
          }"
          icon="fas fa-file-export"
          color="#1976D2
"
        />
      </div>
    </Header>
    <div v-show="showAddEmail">
      <AddEmail @add-email="addEmail" />
    </div>
    <EmailList @delete-email="deleteEmail" :emails="emails" />
  </div>
</template>

<script>
import Header from "../components/Header";
import Button from "../components/Button";
import ViewLink from "../components/ViewLink";
import EmailList from "../components/EmailList";
import AddEmail from "../components/AddEmail";

export default {
  name: "Home",
  components: {
    Header,
    EmailList,
    AddEmail,
    Button,
    ViewLink
  },
  data() {
    return {
      emails: [],
      showAddEmail: false,
    };
  },
  methods: {
    toggleAddEmail() {
      this.showAddEmail = !this.showAddEmail;
      console.log("Add new Email");
    },
    addEmail(email) {
      this.emails = [...this.emails, email];
    },
    deleteEmail(id) {
      if (confirm("Are you sure?"))
        this.emails = this.emails.filter((email) => email.id !== id);
    },
  },
  created() {
    this.emails = [
      {
        id: 1,
        email: "someone@somewhere.com",
      },
      {
        id: 2,
        email: "someone.else@somewhere.else.com",
      },
      {
        id: 3,
        email: "some.other.one@some.other.where.com",
      },
    ];
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 13px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
