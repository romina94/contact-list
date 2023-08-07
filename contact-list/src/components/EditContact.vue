<template>
  <div class="col-lg-10 col-xs-12 edit">
    <router-link to="/">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
    </router-link>

    <form @submit.prevent="editContact()" class="contact">
      <div class="header">
        <img v-bind:src="contact.image" />
        <input type="submit" class="btn" value="Save">
        <router-link to="/">
          Cancel
        </router-link>
      </div>

      <label>
        Full name
      </label>
      <input v-model="contact.name" type="text" class="form-control" placeholder="Full name">
      <label>
        Email address
      </label>
      <input v-model="contact.email" type="text" class="form-control" placeholder="Email address">
      <label>
        Numbers
      </label>
      <div class="numbers">
        <div v-for="number in contact.numbers">
          <div v-for="(key, value) in number" class="number">
            <input v-model="number[value]" type="text" class="form-control">
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ContactListService from "../services/ContactListService";

export default {
  name: "EditContact.vue",
  data: function() {
    return {
      contactId: this.$route.params.contactId,
      contact: {}
    }
  },
  created: async function() {
    try {
      let response = await ContactListService.getContact(this.contactId);
      this.contact = response.data;
    }
    catch (error) {
      this.errorMessage = error;
    }
  },
  methods: {
    editContact: async function() {
      try {
        let response = await ContactListService.editContact(this.contact, this.contactId);
        if (response) {
          return this.$router.push('/');
        } else {
          return this.$router.push(`/edit/${this.contactId}`);
        }
      }
      catch (error) {
        this.errorMessage = error;
      }
    }
  }
}
</script>