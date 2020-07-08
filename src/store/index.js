import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        searchResult: null,
        searchTotalAmount: 0,
        paginationPage: 0,
        pendingRequestStatus: false,
        modalData: null,
        modalState: false
    },

    getters: {
        getSearchResult(state) {
            return state.searchResult;
        },
        getSearchTotalAmount(state) {
            return state.searchTotalAmount;
        },
        getPaginationPage(state) {
            return state.paginationPage;
        },
        getPendingRequestStatus(state) {
            return state.pendingRequestStatus;
        },
        getModalData(state) {
            return state.modalData;
        },
        getModalState(state) {
            return state.modalState;
        }
    },

    mutations: {
        setSearchResult(state, value) {
            state.searchResult = value;
        },
        setSearchTotalAmount(state, value) {
            state.searchTotalAmount = value;
        },
        setPaginationPage(state, value) {
            state.paginationPage = value;
        },
        setPendingRequestStatus(state, value) {
            state.pendingRequestStatus = value;
        },
        openModal(state, obj) {
            state.modalState = true;
            state.modalData = obj;
        },
        closeModal(state) {
            state.modalState = false;
            state.modalData = null;
        }
    },

    actions: {
        setSearchResult(context, value) {
            context.commit('setSearchResult', value);
        },
        setSearchTotalAmount(context, value) {
            context.commit('setSearchTotalAmount', value);
        },
        setPaginationPage(context, value) {
            context.commit('setPaginationPage', value);
        },
        setPendingRequestStatus(context, value) {
            context.commit('setPendingRequestStatus', value);
        },
        openModal(context, index) {
            context.commit('openModal', context.getters.getSearchResult[index]);
        },
        closeModal(context) {
            context.commit('closeModal');
        }
    }
});
