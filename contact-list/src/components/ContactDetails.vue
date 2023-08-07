<template>
  <div class="col-lg-10 col-xs-12 details">
    <router-link to="/">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
    </router-link>

    <div class="contact">
      <div class="header">
        <img v-bind:src="contact.image" />
        <div class="name">
          <p>
            {{ contact.name }}
          </p>
          <p class="email">
            {{ contact.email }}
          </p>
          <i v-if="contact.isFavorite === 1" class="fa fa-heart" aria-hidden="true"></i>
          <i v-else class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <router-link :to="`/edit/${contact.id}`" class="edit">
          Edit
        </router-link>
      </div>

      <div class="email-wrapper">
        <label>
          Email address
        </label>
        <p>
          {{ contact.email }}
        </p>
      </div>

      <div class="mobile-btn-fav">
        <router-link :to="`/edit/${contact.id}`" class="edit">
          Edit
        </router-link>
        <i v-if="contact.isFavorite === 1" class="fa fa-heart" aria-hidden="true"></i>
        <i v-else class="fa fa-heart-o" aria-hidden="true"></i>
      </div>

      <label>
        Numbers
      </label>
      <div class="mobile-numbers">
        <p>
          Numbers
        </p>
        <p>
          Label
        </p>
      </div>

      <div class="numbers">
        <div v-for="number in contact.numbers">
          <div v-for="(key, value) in number" class="number">
            <div>{{ key }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactListService from "../services/ContactListService";

export default {
  name: "ContactDetails.vue",
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
  }
}
</script>