<template>
    <div class="text-center">

        <v-btn @click="buttonClick" class="mx-6" dark rounded small color="purple">
            <slot></slot>
        </v-btn>
    </div>

</template>



<script>
export default {
    name: 'Button',

    methods: {
        buttonClick() {
            this.$emit('custom-click')
        }
    }

}

</script>