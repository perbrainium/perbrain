<script setup lang="ts">
</script>

<template>
   <div>
    <v-navigation-drawer permanent>
      <v-list>
        <RouterLink to="/notes/1"><v-list-item title="Home" value="home"></v-list-item></RouterLink>

        <v-list-item title="Contacts" value="contacts"></v-list-item>

        <v-list-item title="Settings" value="settings"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-container>

    </v-container>
    <v-main>
      <RouterView></RouterView>
    </v-main>
   </div>

</template>
