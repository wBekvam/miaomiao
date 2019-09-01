<template>
    <div id="main"> 
        <Header />
        <TapBar />
    </div>
</template>


<script>

import Header from '@/components/Header'
import TapBar from '@/components/TapBar'

export default {
    name: 'Mine',
    // 局部组件注册
    components: {
        Header,
        TapBar
    }
}
</script>

<style scoped>

</style>