<script setup>
import Container from "../../Components/Container.vue";
import Title from "../../Components/Title.vue";
import TextLink from "../../Components/TextLink.vue";
import InputField from "../../Components/InputField.vue";
import PrimaryBtn from "../../Components/PrimaryBtn.vue";
import ErrorMessages from "../../Components/ErrorMessages.vue";
import CheckBox from "../../Components/CheckBox.vue";
import SessionMessages from "../../Components/SessionMessages.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    email: "",
    password: "",
    remember: null,
});

defineProps({
    status: String,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <Head title="- Connexion" />
    <Container class="w-1/2">
        <div class="mb-8 text-center">
            <Title>Se connecter</Title>
            <p>
                Pas encore de compte ?
                <TextLink routeName="register" label="S'inscrire" />
            </p>
        </div>

        <ErrorMessages :errors="form.errors" />

        <SessionMessages :status="status" />

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

            <div class="flex items-center justify-between">
                <CheckBox name="remember" v-model="form.remember"
                    >Se souvenir de moi</CheckBox
                >

                <TextLink
                    routeName="password.request"
                    label="Mot de passe oublié ?"
                />
            </div>

            <PrimaryBtn :disabled="form.processing">Se connecter</PrimaryBtn>
        </form>
    </Container>
</template>
