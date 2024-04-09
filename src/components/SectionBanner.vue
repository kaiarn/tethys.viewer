<script setup lang="ts">
import { computed } from "vue";
import { gradientBgPurplePink, gradientBgPinkRed, gradientBgGreenBlue } from "@/colors";

const props = defineProps({
    bg: {
        type: String,
        required: true,
        validator: (value) => ["purplePink", "pinkRed", "greenBlue"].includes(value),
    },
});

const colorClass = computed(() => {
    switch (props.bg) {
        case "purplePink":
            return gradientBgPurplePink;
        case "pinkRed":
            return gradientBgPinkRed;
        case "greenBlue":
            return gradientBgGreenBlue;
    }

    return "";
});
</script>
<template>
    <div v-bind:class="colorClass" class="mt-6 mb-6 rounded-2xl py-12 px-6 text-center">
        <slot />
    </div>
</template>
