<template>
  <div class="col-lg-10 col-xs-12 add">
    <router-link to="/">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
    </router-link>

    <form @submit.prevent="addNewContact()" class="contact">
      <div class="header">
        <input type="submit" class="btn" value="Save">
        <router-link to="/">
          Cancel
        </router-link>
      </div>

      <label>
        Image
      </label>
      <input v-model="contact.image" type="text" class="form-control" placeholder="Image">
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
      <div class="numbers-wrapper">
        <div class="number-input">
          <input v-model="contact.numbers[0].phoneNumber" type="text" class="form-control" placeholder="phone number">
          <input v-model="contact.numbers[0].details" type="text" class="form-control" placeholder="details">
        </div>
        <div class="number-input">
          <input v-model="contact.numbers[0].optionalPhoneNumber" type="text" class="form-control" placeholder="phone number">
          <input v-model="contact.numbers[0].optionalDetails" type="text" class="form-control" placeholder="details">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ContactListService from "../services/ContactListService";

export default {
  name: "AddContact.vue",
  data: function() {
    return {
      contact: {
        image: '',
        name: '',
        email: '',
        isFavorite: '',
        numbers: [
          {
            phoneNumber: '',
            details: '',
            optionalPhoneNumber: '',
            optionalDetails: ''
          },
        ]
      }
    }
  },
  methods: {
    addNewContact: async function() {
      try {
        let response = await ContactListService.addNewContact(this.contact);
        if (response) {
          return this.$router.push('/');
        } else {
          return this.$router.push('/add');
        }
      }
      catch (error) {
        this.errorMessage = error;
      }
    }
  }
}
</script>