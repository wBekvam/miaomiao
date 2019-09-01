<template>
    <div id="main"> 
        <Header title="喵喵电影" />
        <TabBar />
    </div>
</template>


<script>

import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

export default {
    name: 'Movie',
    // 局部组件注册
    // components: {
    //     Header,
    //     TabBar
    // }
}
</script>

<style scoped>

</style>