<template>
    <div class="info-modal modal fade" id="exampleModalCenter" tabindex="-1" role="document" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="info-modal__modal-header modal-header">
                    <div class="modal-title" id="exampleModalCenterTitle">
                        <h4 v-if="name">{{ name }}</h4>
                        <span v-if="version">Version: {{ version }}</span>
                    </div>
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        @click="closeModal()"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="info-modal__info-block">
                        <h5>Author:</h5>
                        <ul>
                            <li v-if="author">
                                <b>Name:</b>
                                <span>{{ author }}</span>
                            </li>
                            <li v-if="username">
                                <b>Username:</b>
                                <span>{{ username }}</span>
                            </li>
                            <li v-if="email">
                                <b>Email:</b>
                                <span>{{ email }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="info-modal__info-block" v-if="description">
                        <h5>Description:</h5>
                        <p>{{ description }}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <ul class="info-modal__public-list">
                        <li v-if="homepage">
                            <a :href="homepage" target="_blank">
                                <fa-icon icon="home" />
                            </a>
                        </li>
                        <li v-if="gitHub">
                            <a :href="gitHub" target="_blank">
                                <fa-icon :icon="['fab', 'github']"></fa-icon>
                            </a>
                        </li>
                        <li v-if="npm">
                            <a :href="npm" target="_blank">
                                <fa-icon :icon="['fab', 'npm']"></fa-icon>
                            </a>
                        </li>
                        <li v-if="debug">
                            <a :href="debug" target="_blank">
                                <fa-icon icon="bug" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        data() {
            return {
                name: '',
                version: '',
                author: '',
                username: '',
                email: '',
                description: '',
                homepage: '',
                gitHub: '',
                npm: '',
                debug: ''
            }
        },
        computed: {
            modalData() {
                return this.$store.getters.getModalData;
            },
            modalState() {
                return this.$store.getters.getModalState;
            }
        },
        methods: {
            closeModal() {
                this.$store.dispatch('closeModal');
            },
        },
        watch: {
            modalData() {
                let plugin = this.modalData.package;

                function has(object, key) {
                    return object ? Object.hasOwnProperty.call(object, key) : false;
                }

                this.name = has(plugin, 'name') ? plugin.name : '';
                this.version = has(plugin, 'version') ? plugin.version : '';
                this.author = has(plugin.author, 'name') ? plugin.author.name : '';
                this.username = has(plugin.publisher, 'username') ? plugin.publisher.username : '';
                this.email = has(plugin.publisher, 'email') ? plugin.publisher.email : '';
                this.description = has(plugin, 'description') ? plugin.description : '';
                this.homepage = has(plugin.links, 'homepage') ? plugin.links.homepage : '';
                this.gitHub = has(plugin.links, 'repository') ? plugin.links.repository : '';
                this.npm = has(plugin.links, 'npm') ? plugin.links.npm : '';
                this.debug = has(plugin.links, 'bugs') ? plugin.links.bugs : '';
            }
        }
    }
</script>
