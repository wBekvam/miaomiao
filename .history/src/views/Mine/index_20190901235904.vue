<template>
    <div id="main"> 
        <h1>hahh</h1>
        <Header/>
        <TapBar/>
    </div>
</template>


<script>

import Headers from '@/components/Header'
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