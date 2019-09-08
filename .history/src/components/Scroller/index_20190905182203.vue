<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Scroller",
    props:{
        handleToScroll: {
            type: Function,
            default: function(){}
        },
        handleToTouchEnd:{
            type: Function,
            default: function(){}
        }
    },
    mounted(){
        const scroll = new BScroll(this.$refs.scroll, {
            tap: true,
            peobeType: 1
        })
    }
    
}
</script>

<style scoped>
    .wrapper{height: 100%;}
</style>