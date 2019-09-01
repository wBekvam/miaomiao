<template>
    <div id="main"> 
        <!-- 头部 -->
        <Header title="喵喵电影" />
        <!-- 主体 -->
        <div id="content">
            <!-- 二级导航 -->
			<div class="movie_menu">
				<div class="city_name">
					<span>大连</span><i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="hot_swtich">
					<div class="hot_item active">正在热映</div>
					<div class="hot_item">即将上映</div>
				</div>
				<div class="search_entry">
					<i class="iconfont icon-sousuo"></i>
				</div>
			</div>
            <!-- 内容 -->
            <keep-alive>
                <router-view />
            <keep-alive>
        </div>
        <!-- 底部导航 -->
        <TabBar />
    </div>
</template>


<script>

import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

export default {
    name: 'Movie',
    // 局部组件注册
    components: {
        Header,
        TabBar
    }
}
</script>

<style scoped>

</style>