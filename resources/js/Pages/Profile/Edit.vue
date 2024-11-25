<script setup>
import UpdatePassword from './Sections/UpdatePassword.vue';
import DeleteAccount from './Sections/DeleteAccount.vue';
import UpdateInfo from './Sections/UpdateInfo.vue';

defineProps({
  user: Object,
  status: String
})
</script>


<template>
    <Head title="- Profil"/>
    <UpdateInfo :user="user" :status="status"/>
    <UpdatePassword/>
    <DeleteAccount/>
</template>