<script setup>
import { router } from "@inertiajs/vue3";
import Container from "../../Components/Container.vue";

const props = defineProps({
    listing: Object,
    user: Object,
});

const deleteListing  = () => {
  if (confirm("Êtes vous sûr(e) ?")) {
    router.delete(route('listing.destroy', props.listing.id))
  }
}
</script>

<template>
    <Head title="- Détail Liste" />
    <Container class="flex gap-4">
        <div class="w-1/4 rounded-md overflow-hidden">
            <img
                :src="
                    listing.image
                        ? `/storage/${listing.image}`
                        : '/storage/images/listing/vhs.jpg'
                "
                class="w-full h-full object-cover object-center"
                alt=""
            />
        </div>

        <div class="w-3/4">
            <div class="mb-6">
                <div class="flex items-end justify-between mb-2">
                    <p class="text-slate-400 w-full border-b">Détails Liste</p>
                    <div class="pl-4 flex items-center gap-4">
                        <Link :href="route('listing.edit', listing.id)" class="bg-green-500 rounded-md text-white px-6 py-2 outline-green-500 outline-offset-2"> 
                         Modifier
                        </Link>

                        <button 
                        @click="deleteListing"
                        class="bg-red-500 rounded-md text-white px-6 py-2 outline-red-500 outline-offset-2">
                            Supprimer
                        </button>
                    </div>
                </div>
                <h3 class="font-bold text-2xl mb-4">{{ listing.title }}</h3>
                <p>{{ listing.desc }}</p>
            </div>

            <div class="mb-6">
                <p class="text-slate-400 w-full border-b">Infos de Contact</p>

                <div v-if="listing.email" class="flex items-center mb-2 gap-2">
                    <i class="fa-solid fa-at"></i>
                    <p>Email:</p>
                    <a :href="`mailto:${listing.email}`" class="text-link">
                        {{ listing.email }}
                    </a>
                </div>

                <div v-if="listing.link" class="flex items-center mb-2 gap-2">
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <p>Lien externe:</p>
                    <a :href="listing.link" target="_blank" class="text-link">
                        {{ listing.link }}
                    </a>
                </div>

                <div class="flex items-center mb-2 gap-2">
                    <i class="fa-solid fa-user"></i>
                    <p>Listé par :</p>
                    <Link :href="route('home', { user_id: user.id})" class="text-link">{{ user.name }}</Link>
                </div>
            </div>

            <div v-if="listing.tags" class="mb-6">
                <p class="text-slate-400 w-full border-b mb-2">Tags</p>

                <div class="flex items-center gap-3">
                    <div v-for="tag in listing.tags.split(',')" :key="tag">
                        <Link
                            :href="route('home', { tag })"
                            class="bg-slate-500 text-white px-2 py-px rounded-full hover:bg-slate-700 dark:hover:bg-slate-900"
                        >
                            {{ tag }}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>
