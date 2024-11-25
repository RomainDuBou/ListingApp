<script setup>
import Container from "../../Components/Container.vue";
import InputField from "../../Components/InputField.vue";
import PrimaryBtn from "../../Components/PrimaryBtn.vue";
import SessionMessages from "../../Components/SessionMessages.vue";
import ErrorMessages from "../../Components/ErrorMessages.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    email: "",
});

defineProps({
    status: String
})

const submit = () => {
    form.post(route("password.email"), {
    });
};
</script>

<template>
    <Head title="- Mot de passe oublié" />
    <Container class="w-1/2">
        <div class="mb-8 text-center">
            <p>
               Mot de passe oublié ? Pas de problème. Entrez votre adresse mail et nous vous enverrons un email de réinitialisation de mot de passe qui vous permettra d'en choisir un nouveau.
            </p>
        </div>

        <ErrorMessages :errors="form.errors" />

        <SessionMessages :status="status"/>

        <form @submit.prevent="submit" class="space-y-6">
            <InputField
                label="Email"
                type="email"
                icon="at"
                v-model="form.email"
            />

            <PrimaryBtn :disabled="form.processing">Envoyer un lien de réinitialisation</PrimaryBtn>
        </form>
    </Container>
</template>
