<template>
    <div class="result-section">
        <span
            v-show="pendingRequestStatus"
            class="spinner-border text-dark spinner-border"
            role="status"
        >
            <span class="sr-only">Loading...</span>
        </span>
        <div class="result-section__wrapper" ref="wrapper">
            <div class="result-section__row">
                <div v-for="(item, index) in searchResult" class="result-section__col" :key="index">
                    <div class="result-item">
                        <h5 class="mb-0"><a @click.prevent="openModal(index)" data-toggle="modal" data-target="#exampleModalCenter" href="">{{ item.package.name }}</a></h5>
                        <span>Version: {{ item.package.version }}</span>
                        <p class="result-section__info-text">{{ item.package.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ResultSection",
        computed: {
            searchResult() {
                return this.$store.getters.getSearchResult;
            },
            pendingRequestStatus() {
                return this.$store.getters.getPendingRequestStatus;
            }
        },
        methods: {
            openModal(index) {
                this.$store.dispatch('openModal', index);
            }
        },
        watch: {
            pendingRequestStatus() {
                if (this.pendingRequestStatus) this.$refs.wrapper.scrollTo(0, 0);
            }
        }
    }
</script>
