<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    data: {
        type: Object,
        default: () => ({}),
    },
});

// const nextPageLink = computed(() => {
//     const url = new URL(document.location);
//     url.searchParams.set("page", props.data.currentPage + 1);
//     return url.href;
//     // return url + '&page=' + (Number(props.data.currentPage) + 1);
// });
// const prevPageLink = computed(() => {
//     const url = new URL(document.location);
//     url.searchParams.set("page", props.data.currentPage - 1);
//     return url.href;
//     // return url + '&page=' + (props.data.currentPage - 1);
// });
const toPage = computed(() => {
    const currentPage = props.data.currentPage;
    const perPage = props.data.perPage;

    if (props.data.currentPage == props.data.lastPage) {
        return props.data.total;
    } else {
        return currentPage * perPage;
    }
});
const fromPage = computed(() => {
    const currentPage = props.data.currentPage;
    const perPage = props.data.perPage;
    return currentPage * perPage - (perPage - 1);
});

const emit = defineEmits(["menu-click"]);

const nextClick = () => {
    const nextPage = props.data.currentPage + 1;
    emit("menu-click", nextPage);
};
const prevClick = () => {
    const prevPage = props.data.currentPage - 1;
    emit("menu-click", prevPage);
};
</script>

<template>
    <!-- <nav v-if="data.links.length > 3" -->
    <nav v-if="data.total > 3" role="navigation" aria-label="Pagination Navigation" class="flex items-center justify-between">
        <div id="mobileMenu" class="flex justify-between flex-1 sm:hidden">
            <span
                v-if="data.currentPage <= 1"
                aria-disabled="true"
                class="cursor-not-allowed opacity-50 relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md"
            >
                Previous
            </span>
            <!-- v-bind:href="data.previousPageUrl" -->
            <a
                v-else
                class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                @click="prevClick"
            >
                Previous
            </a>

            <!-- v-bind:href="data.nextPageUrl" -->
            <a
                v-if="data.currentPage < data.lastPage"
                class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                @click="nextClick"
            >
                Next
            </a>
            <span
                v-else
                aria-disabled="true"
                class="cursor-not-allowed opacity-50 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md"
            >
                Next
            </span>
        </div>

        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div id="frontText">
                <p class="text-sm text-gray-700 leading-5">
                    Showing
                    <span class="font-medium">{{ fromPage }}</span>
                    to
                    <span class="font-medium">{{ toPage }}</span>
                    of
                    <span class="font-medium">{{ data.total }}</span>
                    results
                </p>
            </div>

            <div>
                <span class="relative z-0 inline-flex shadow-sm rounded-md">
                    <!-- previous button -->
                    <span v-if="props.data.currentPage <= 1" aria-disabled="true" aria-label="Previous">
                        <span
                            aria-disabled="true"
                            class="bg-gray-300 cursor-not-allowed opacity-50 relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default rounded-l-md leading-5"
                            aria-hidden="true"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </span>
                    <!-- v-bind:href="prevPageLink" -->
                    <a
                        v-else
                        rel="prev"
                        class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                        aria-label="Previous"
                        @click="prevClick"
                    >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>

                    <!-- <template v-for="(link, key) in data.links">
                        <template v-if="key > 0 && key < data.lastPage + 1">
                            <span v-if="!link.active && link.url === null" :key="key" aria-disabled="true">
                                <span class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 cursor-default leading-5">{{ link.label }}</span>
                            </span>

                            <span v-else-if="link.active" :key="`current-${key}`" aria-current="page">
                                <span class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5">{{ link.label }}</span>
                            </span>

                            <Link v-else :key="`link-${key}`" :href="link.url" v-html="link.label" class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150" aria-label="`Go to page ${link.label}`" />
                        </template>
                    </template> -->

                    <!-- next button -->
                    <!-- v-bind:href="nextPageLink" -->
                    <a
                        v-if="props.data.currentPage < props.data.lastPage"
                        rel="next"
                        class="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                        aria-label="Next"
                        @click="nextClick"
                    >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                    <!-- else disabled link -->
                    <span v-else aria-disabled="true" aria-label="Next">
                        <span
                            aria-disabled="true"
                            class="bg-gray-300 cursor-not-allowed relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default rounded-r-md leading-5"
                            aria-hidden="true"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    </nav>
</template>
