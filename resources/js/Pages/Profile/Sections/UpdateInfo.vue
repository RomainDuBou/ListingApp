<script setup>
import Container from "../../../Components/Container.vue";
import Title from "../../../Components/Title.vue";
import InputField from "../../../Components/InputField.vue";
import PrimaryBtn from "../../../Components/PrimaryBtn.vue";
import ErrorMessages from "../../../Components/ErrorMessages.vue";
import SessionMessages from "../../../Components/SessionMessages.vue";
import { router, useForm } from "@inertiajs/vue3";

const props = defineProps({
    user: Object,
    status: String,
});

const form = useForm({
    name: props.user.name,
    email: props.user.email,
});

const resendEmail = (e) => {
    router.post(
        route("verification.send"),
        {},
        {
            onStart: () => (e.target.disabled = true),
            onFinish: () => (e.target.disabled = false),
        }
    );
};
</script>

<template>
    <Container class="mb-6">
        <div class="mb-6">
            <Title>Modifier les informations</Title>
            <p>
                Mettez à jour vos informations de profil et votre adresse mail
            </p>
        </div>

        <ErrorMessages :errors="form.errors" />

        <form
            @submit.prevent="form.patch(route('profile.info'))"
            class="space-y-6"
        >
            <InputField
                label="Nom"
                icon="id-badge"
                class="w-1/2"
                v-model="form.name"
            />
            <InputField
                label="Email"
                icon="at"
                class="w-1/2"
                v-model="form.email"
            />

            <div
                v-if="user.email_verified_at === null"
                class="flex items-center gap-2"
            >
                <SessionMessages :status="status" />

                <p>
                    Votre adresse mail n'est pas vérifiée.
                    <button
                        @click="resendEmail"
                        class="text-indigo-600 font-medium underline dark:text-indigo-400 dark:hover:text-indigo-500 disabled:text-slate-400 disabled:cursor-wait"
                    >
                        Cliquez ici pour envoyer à nouveau un mail de
                        vérification
                    </button>
                </p>
            </div>

            <PrimaryBtn :disable="form.processing">Enregister</PrimaryBtn>
        </form>
    </Container>
</template>
