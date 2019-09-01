<template>
    <div id="main"> 
        <Headers />
        <TapBar />
    </div>
</template>


<script>

import Headers from '@/components/Header'
import TapBar from '@/components/TapBar'

export default {
    name: 'Moive',
    // 局部组件注册
    components: {
        Headers,
        TapBar
    }
}
</script>

<style scoped>

</style>