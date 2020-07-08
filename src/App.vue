<template>
    <div
        id="app"
        class="container"
        :class="{'disabled': pendingRequestStatus}"
    >
        <SearchSection/>
        <PaginationSection/>
        <ResultSection/>
        <Footer/>
        <Modal/>
    </div>
</template>

<script>
    import SearchSection from './components/SearchSection.vue'
    import PaginationSection from './components/PaginationSection.vue'
    import ResultSection from './components/ResultSection.vue'
    import Footer from './components/Footer.vue'
    import Modal from './components/Modal.vue'

    export default {
        name: 'App',
        components: {
            SearchSection,
            PaginationSection,
            ResultSection,
            Footer,
            Modal
        },
        computed: {
            pendingRequestStatus() {
                return this.$store.getters.getPendingRequestStatus;
            }
        }
    }
</script>
