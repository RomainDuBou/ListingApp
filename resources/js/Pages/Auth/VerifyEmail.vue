<script setup>
import {useForm} from "@inertiajs/vue3";
import Container from "../../Components/Container.vue";
import PrimaryBtn from "../../Components/PrimaryBtn.vue";
import SessionMessages from "../../Components/SessionMessages.vue";


const form = useForm({});

defineProps({
    status: String,
});

const submit = () => {
    form.post(route("verification.send"));
};
</script>

<template>
    <Head title="- Email Verification" />

    <Container class="w-1/2">
        <div class="mb-8">
            <p>
                Merci pour votre inscription ! Avant de continuer, pouvez-vous
                vérifier votre email en cliquant sur le lien que nous vous avons
                envoyé par email ? Si vous n'avez pas reçu d'email, nous pouvons
                vous en renvoyer un nouveau.
            </p>
        </div>
        
        <SessionMessages :status="status"/>

        <form @submit.prevent="submit">
            <PrimaryBtn :disabled="form.processing"
                >Renvoyer un email de vérification</PrimaryBtn
            >
        </form>
    </Container>
</template>
