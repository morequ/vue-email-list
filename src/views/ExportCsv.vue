<template>
  <div class="container">
    <Header title="CSV">
      <ViewLink to="/" icon="fas fa-arrow-left" color="#1976D2
" />
    </Header>
    <Csv :items="emails" />
  </div>
</template>

<script>
import Header from "../components/Header";
import ViewLink from "../components/ViewLink";
import Csv from "../components/Csv";

export default {
  name: "ExportCsv",
  props: {
    emails: Array,
  },
  components: {
    Header,
    ViewLink,
    Csv,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>