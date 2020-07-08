<template>
    <div class="pagination-section">
        <nav class="mb-2" v-show="totalPageAmount > 1">
            <ul class="pagination">
                <li
                    @click="setPrevPage()"
                    class="page-item"
                >
                    <button class="page-link" aria-label="Previous">
                        <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-caret-left-fill" fill="#6c757d" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                        </svg>
                    </button>
                </li>
                <li
                    class="page-item"
                    v-for="(page, index) in totalPageAmount"
                    @click="changeActivePage(index)"
                    :key="index"
                    :class="{
                        'active': index === paginationPage,
                        'd-block': displayItem(index)
                    }"
                >
                    <button class="page-link">{{ index + 1 }}</button>
                </li>
                <li
                    @click="setNextPage()"
                    class="page-item"
                >
                    <button class="page-link" aria-label="Next">
                        <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" fill="#6c757d" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
        <span class="pagination-section__total-text" v-html="infoText"></span>
    </div>
</template>

<script>
    export default {
        name: "PaginationSection",
        computed: {
            searchTotalAmount() {
                return this.$store.getters.getSearchTotalAmount;
            },
            totalPageAmount() {
                let itemsPerPage = this.searchTotalAmount / 10;

                if (itemsPerPage.toString().split('.')[1]) return Math.ceil(itemsPerPage);
                else return itemsPerPage;
            },
            paginationPage() {
                return this.$store.getters.getPaginationPage;
            },
            infoText() {
                let page = this.paginationPage,
                    total = this.searchTotalAmount,
                    min = page * 10 + 1,
                    max = page * 10 + 10 >= total ? total : page * 10 + 10,
                    borders = max > 1 ? `${min}-${max}` : '1';

                if (total) return `<b>${borders}</b> from <b>${this.searchTotalAmount}</b>`;
                else return '';
            }
        },
        methods: {
            changeActivePage(index) {
                this.$store.dispatch('setPaginationPage', index);
            },
            setPrevPage() {
                if (this.paginationPage) this.$store.dispatch('setPaginationPage', this.paginationPage - 1);
            },
            setNextPage() {
                if (this.paginationPage + 1 < this.totalPageAmount) this.$store.dispatch('setPaginationPage', this.paginationPage + 1);
            },
            displayItem(index) {
                let page = this.paginationPage,
                    total = this.totalPageAmount;
                if (!page) return index === page + 1 || index === page + 2 || index === page + 3 || index === page + 4 || index === page - 1;
                if (page + 1 === total) return index === page - 1 || index === page - 2 || index === page - 3 || index === page - 4;
                if (page + 1 === total - 1) return index === page - 1 || index === page - 2 || index === page - 3 || index === page + 1;
                if (page === 1) return index === page + 1 || index === page + 2 || index === page + 3 || index === page - 1;
                if (page + 1 < total || page + 1 > 1) return index === page - 1 || index === page - 2 || index === page + 1 || index === page + 2;
            }
        }
    }
</script>
