<script setup>
import Container from "../../Components/Container.vue";
import Title from "../../Components/Title.vue";
import InputField from "../../Components/InputField.vue";
import PrimaryBtn from "../../Components/PrimaryBtn.vue";
import ErrorMessages from "../../Components/ErrorMessages.vue";
import { useForm } from "@inertiajs/vue3";

const props = defineProps({
    token: String,
    email: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("password.update"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <Head title="- Nouveau mot de passe" />

    <Container class="w-1/2">
        <div class="mb-8 text-center">
            <Title>Entrez votre nouveau mot de passe</Title>
        </div>

        <ErrorMessages :errors="form.errors" />

        <form @submit.prevent="submit" class="space-y-6">
            <InputField
                label="Email"
                type="email"
                icon="at"
                v-model="form.email"
            />

            <InputField
                label="Mot de passe"
                type="password"
                icon="key"
                v-model="form.password"
            />

            <InputField
                label="Confirmation du  mot de passe"
                type="password"
                icon="key"
                v-model="form.password_confirmation"
            />

            <PrimaryBtn :disabled="form.processing"
                >Réinitialiser le mot de passe</PrimaryBtn
            >
        </form>
    </Container>
</template>
