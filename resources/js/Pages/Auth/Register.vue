<script setup>
import Container from "../../Components/Container.vue";
import Title from "../../Components/Title.vue";
import TextLink from "../../Components/TextLink.vue";
import InputField from "../../Components/InputField.vue";
import PrimaryBtn from "../../Components/PrimaryBtn.vue";
import ErrorMessages from "../../Components/ErrorMessages.vue";
import { useForm } from "@inertiajs/vue3"

const form = useForm({
    name:"",
    email:"",
    password:"",
    password_confirmation: "",
});

const submit = () => {
    form.post(route('register'), {
         onFinish: () => form.reset('password', 'password_confirmation'),
    })
}
</script>

<template>
 <Head title="- Inscription"/>

    <Container class="w-1/2">
        <div class="mb-8 text-center">
            <Title>Créer un nouveau compte</Title>
            <p>Déjà un compte ? <TextLink routeName="login" label="Se connecter" /></p>
        </div>

        <ErrorMessages :errors="form.errors" />


        <form @submit.prevent="submit" class="space-y-6">
            
            <InputField label="Nom" icon="id-badge" v-model="form.name" />

            <InputField label="Email" type="email" icon="at" v-model="form.email" />

            <InputField label="Mot de passe" type="password" icon="key" v-model="form.password"/>

            <InputField label="Confirmation du  mot de passe" type="password" icon="key" v-model="form.password_confirmation" />

            <p class="text-slate-500 text-sm dark:text-slate-400">
                En créant votre compte, vous acceptez les Conditions
                d'utilisation et la Politique de Confidentialité.
            </p>

            <PrimaryBtn :disabled="form.processing">S'inscrire</PrimaryBtn>

            
        </form>
    </Container>
</template>
