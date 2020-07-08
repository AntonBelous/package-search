<template>
    <div class="search-section">
        <form @submit.prevent="submitForm()" class="search-form">
            <input
                class="form-control form-control-lg text-center shadow-sm mb-2 font-weight-bold"
                type="text"
                placeholder="Search"
                v-model="searchInputText"
                :disabled="pendingRequestStatus"
            >
            <button
                type="submit"
                class="search-form__submit-btn btn btn-secondary"
                :disabled="pendingRequestStatus"
            >
                <span
                    v-show="pendingRequestStatus"
                    class="spinner-border text-light spinner-border-sm"
                    role="status"
                >
                    <span class="sr-only">Loading...</span>
                </span>
                <span v-show="!pendingRequestStatus">Submit</span>
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SearchSection",
        data() {
            return {
                searchInputText: '',
            }
        },
        computed: {
            paginationPage() {
                return this.$store.getters.getPaginationPage;
            },
            pendingRequestStatus() {
                return this.$store.getters.getPendingRequestStatus;
            }
        },
        methods: {
            _getItems() {
                let url = `https://registry.npmjs.org/-/v1/search?text=${this.searchInputText}&size=10&from=${this.paginationPage * 10}&quality=1&popularity=1&maintenance=1`;
                this.$store.dispatch('setPendingRequestStatus', true);
                this.$axios.get(url).then((response) => {
                    this.$store.dispatch('setSearchResult', response.data.objects);
                    this.$store.dispatch('setSearchTotalAmount', response.data.total);
                    this.$store.dispatch('setPendingRequestStatus', false);
                });
            },
            submitForm() {
                if (this.paginationPage !== 0) this.$store.dispatch('setPaginationPage', 0);
                this._getItems();
            }
        },
        watch: {
            paginationPage() {
                this._getItems();
            },
        }
    }
</script>
