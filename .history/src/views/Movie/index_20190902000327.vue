<template>
    <div id="main"> 
        <h1>hahh</h1>
        <Header />
        <TabBar />
    </div>
</template>


<script>

import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

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