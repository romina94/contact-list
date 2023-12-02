<template>
  <div class="col-lg-10 col-xs-12 list" v-if="contactList.length > 0">
    <div class="search">
      <i class="fa fa-search" aria-hidden="true"></i>
      <input v-model="search" type="text" class="form-control" placeholder="Search">
    </div>

    <div class="contacts">
      <p>
        Name
      </p>
      <div v-for="contact in contactListFilter" :key="contact" class="contact">
        <router-link :to="`/details/${contact.id}`">
          <img v-bind:src="contact.image" />
          <div class="name-email">
            <span>
              {{ contact.name }}
            </span>
              {{ contact.email }}
          </div>
        </router-link>
        <i class="fa fa-chevron-right"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
        <router-link :to="`/edit/${contact.id}`" class="edit">
          Edit
        </router-link>
        <button @click="deleteContact(contact.id)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ContactListService from '../services/ContactListService.js';

export default {
  name: "Homepage.vue",
  data: function() {
    return {
      search: '',
      contactList: [],
      errorMessage: null
    }
  },
  created: async function() {
    try {
      let response = await ContactListService.getContactList();
      this.contactList = response.data;
    }
    catch (error) {
      this.errorMessage = error;
    }
  },
  computed: {
    contactListFilter() {
      return this.contactList.filter(contact => {
        return contact.name.toLowerCase().includes(this.search) && contact.isFavorite === 1
      })
    }
  },
  methods: {
    deleteContact: async function(contactId) {
      if (confirm ("Do you want to delete this contact?")) {
        try {
          let response = await ContactListService.deleteContact(contactId);
          if (response) {
            let response = await ContactListService.getContactList();
            this.contactList = response.data;
          }
        }
        catch (error) {
          this.errorMessage = error;
        }
      }
    }
  }
}
</script>