<script setup>
import Container from "../../Components/Container.vue";
import InputField from "../../Components/InputField.vue";
import PrimaryBtn from "../../Components/PrimaryBtn.vue";
import ErrorMessages from "../../Components/ErrorMessages.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    password: "",
});

const submit = () => {
    form.post(route("password.confirm"), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <Head title="- Confirmation mot de passe" />
    <Container class="w-1/2">
        <div class="mb-8 text-center">
-            <p>
                Vous êtes dans un endroit sécurisé de l'application. Merci de
                confirmer votre mot de passe avant de continuer.
            </p>
        </div>

        <ErrorMessages :errors="form.errors" />

        <form @submit.prevent="submit" class="space-y-6">

            <InputField
                label="Mot de passe"
                type="password"
                icon="key"
                v-model="form.password"
            />

            <PrimaryBtn :disabled="form.processing">Confirmer</PrimaryBtn>
        </form>
    </Container>
</template>
