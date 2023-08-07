<template>
  <div class="row">
    <button class="mobile-nav" @click="openNav()">
      <i class="fa fa-bars"></i>
    </button>

    <div class="col-lg-2 col-xs-12" id="sidebar">
      <div class="header">
        <img src="/src/assets/revendo.png" class="logo" alt="Logo" />
        <button class="mobile-nav" @click="closeNav()">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>

      <router-link to="/add" class="new">
        <i class="fa fa-plus" aria-hidden="true"></i>
        New contact
      </router-link>

      <router-link to="/" class="all">
        <i class="fa fa-home" aria-hidden="true"></i>
        All contacts
      </router-link>

      <router-link to="/favorites" class="favorites">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
        My favorites
      </router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      openNav: function() {
        var x = document.getElementById("sidebar");
        x.style.display = "flex";
      },
      closeNav: function() {
        var x = document.getElementById("sidebar");
        x.style.display = "none";
      }
    }
  }
</script>
