<script setup>
import Container from "../../Components/Container.vue";
import Title from "../../Components/Title.vue";
import InputField from "../../Components/InputField.vue";
import ErrorMessages from "../../Components/ErrorMessages.vue";
import PrimaryBtn from "../../Components/PrimaryBtn.vue";
import TextArea from "../../Components/TextArea.vue";
import ImageUpload from "../../Components/ImageUpload.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    title: null,
    desc: null,
    tags: null,
    email: null,
    link: null,
    image: null,
});
</script>

<template>
    <Head title="- Nouvelle Liste" />

    <Container>
        <div>
            <Title>Créer une nouvelle liste</Title>
        </div>

        <ErrorMessages :errors="form.errors" />

        <form
            @submit.prevent="form.post(route('listing.store'))"
            class="grid grid-cols-2 gap-6"
        >
            <div class="space-y-6">
                <InputField
                    label="Titre"
                    icon="heading"
                    placeholder="Ma nouvelle liste"
                    v-model="form.title"
                />
                <InputField
                    label="Tags (séparez avec une virgule)"
                    icon="tags"
                    placeholder="one, two, three"
                    v-model="form.tags"
                />

                <TextArea
                    label="Description"
                    icon="newspaper"
                    placeholder="Voici la description de ma liste"
                    v-model="form.desc"
                />
            </div>

            <div class="space-y-6">
                <InputField
                    label="Email"
                    icon="at"
                    placeholder="exemple@email.com"
                    v-model="form.email"
                />
                <InputField
                    label="Lien externe"
                    icon="up-right-from-square"
                    placeholder="https://exemple.com"
                    v-model="form.link"
                />

                <ImageUpload @image="(e) => (form.image = e)" />
            </div>

            <div>
                <PrimaryBtn :disabled="form.processing">Créer</PrimaryBtn>
            </div>
        </form>
    </Container>
</template>
