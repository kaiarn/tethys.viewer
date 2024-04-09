<script setup lang="ts">
import { mdiGithub } from "@mdi/js";
import BaseButton from "@/components/BaseButton.vue";
import SectionBanner from "@/components/SectionBanner.vue";
</script>
<template>
    <SectionBanner bg="greenBlue">
        <h1 class="text-3xl text-white mb-6">Like the project? Please star on <b>Gitea</b>!</h1>
        <div>
            <BaseButton href="https://gitea.geologie.ac.at/geolba/tethys" v-bind:icon="mdiGithub" v-bind:roundedFull="true" label="Gitea" target="_blank" />
        </div>
    </SectionBanner>
</template>
