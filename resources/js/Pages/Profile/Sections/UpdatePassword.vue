<script setup>
import Container from "../../../Components/Container.vue";
import Title from "../../../Components/Title.vue";
import InputField from "../../../Components/InputField.vue";
import PrimaryBtn from "../../../Components/PrimaryBtn.vue";
import ErrorMessages from "../../../Components/ErrorMessages.vue";

import { useForm } from "@inertiajs/vue3";

const form = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.put(route("profile.password"), {
        onSuccess: () => form.reset(),
        onError: () => form.reset(),
        preserveScroll: true,
    });
};
</script>

<template>
    <Container class="mb-6">
        <div class="mb-6">
            <Title>Mettre à jour le mot de passe</Title>
            <p>
                Soyez sûr de mettre un mot de passe long et aléatoire afin
                d'augmenter la sécurité.
            </p>
        </div>

        <ErrorMessages :errors="form.errors" />

        <form @submit.prevent="submit" class="space-y-6">
            <InputField
                label="Mot de passe actuel"
                icon="key"
                class="w-1/2"
                type="password"
                v-model="form.current_password"
            />
            <InputField
                label="Nouveau mot de passe"
                icon="key"
                class="w-1/2"
                type="password"
                v-model="form.password"
            />
            <InputField
                label="Confirmation du mot de passe"
                icon="key"
                class="w-1/2"
                type="password"
                v-model="form.password_confirmation"
            />

            <p
                v-if="form.recentlySuccessful"
                class="text-green-500 font-medium"
            >
                Enregistré!
            </p>

            <PrimaryBtn :disable="form.processing">Enregister</PrimaryBtn>
        </form>
    </Container>
</template>
