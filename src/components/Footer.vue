<template>
    <footer class="footer">
        <span>Produced by Anton Belous</span>
        <ul>
            <li>
                <a href="https://t.me/tony_9lives" target="_blank">
                    <fa-icon :icon="['fab', 'telegram-plane']"></fa-icon>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/anton-belous-597098173/" target="_blank">
                    <fa-icon :icon="['fab', 'linkedin-in']"></fa-icon>
                </a>
            </li>
            <li>
                <a href="skype:tony_jelax" target="_blank">
                    <fa-icon :icon="['fab', 'skype']"></fa-icon>
                </a>
            </li>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>
