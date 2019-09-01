<template>
    <div id="main"> 
        <Header />
        <TapBar />
    </div>
</template>


<script>

import Header from '@/components/Header/index.vue'
import TapBar from '@/components/TapBar'

export default {
    name: 'Moive',
    // 局部组件注册
    components: {
        Header,
        TapBar
    }
}
</script>

<style scoped>

</style>