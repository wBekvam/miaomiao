<template>
    <div id="main"> 
        <Header title="喵喵影院" />
        <div id="content">
			<div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>
			<div class="cinema_body">
				<ul>
					<li>
						<div>
							<span>大地影院(澳东世纪店)</span>
							<span class="q"><span class="price">22.9</span> 元起</span>
						</div>
						<div class="address">
							<span>金州区大连经济技术开发区澳东世纪3层</span>
							<span>1763.5km</span>
						</div>
						<div class="card">
                			<div>小吃</div>
                			<div>折扣卡</div>
       					</div>
					</li>
					<li>
						<div>
							<span>大地影院(澳东世纪店)</span>
							<span class="q"><span class="price">22.9</span> 元起</span>
						</div>
						<div class="address">
							<span>金州区大连经济技术开发区澳东世纪3层</span>
							<span>1763.5km</span>
						</div>
						<div class="card">
                			<div>小吃</div>
                			<div>折扣卡</div>
       					</div>
					</li>
					<li>
						<div>
							<span>大地影院(澳东世纪店)</span>
							<span class="q"><span class="price">22.9</span> 元起</span>
						</div>
						<div class="address">
							<span>金州区大连经济技术开发区澳东世纪3层</span>
							<span>1763.5km</span>
						</div>
						<div class="card">
                			<div>小吃</div>
                			<div>折扣卡</div>
       					</div>
					</li>
					<li>
						<div>
							<span>大地影院(澳东世纪店)</span>
							<span class="q"><span class="price">22.9</span> 元起</span>
						</div>
						<div class="address">
							<span>金州区大连经济技术开发区澳东世纪3层</span>
							<span>1763.5km</span>
						</div>
						<div class="card">
                			<div>小吃</div>
                			<div>折扣卡</div>
       					</div>
					</li>
					<li>
						<div>
							<span>大地影院(澳东世纪店)</span>
							<span class="q"><span class="price">22.9</span> 元起</span>
						</div>
						<div class="address">
							<span>金州区大连经济技术开发区澳东世纪3层</span>
							<span>1763.5km</span>
						</div>
						<div class="card">
                			<div>小吃</div>
                			<div>折扣卡</div>
       					</div>
					</li>
					<li>
						<div>
							<span>大地影院(澳东世纪店)</span>
							<span class="q"><span class="price">22.9</span> 元起</span>
						</div>
						<div class="address">
							<span>金州区大连经济技术开发区澳东世纪3层</span>
							<span>1763.5km</span>
						</div>
						<div class="card">
                			<div>小吃</div>
                			<div>折扣卡</div>
       					</div>
					</li>
				</ul>
			</div>
		</div>
            <!-- <router-link>
                <router-view />
            </router-link> -->
        </div>
        <TabBar />
    </div>
</template>

<script>

import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import CityList from '@/components/CityList'

export default {
    name: 'Cinema',
    components: {
        Header,
        TabBar
    }
}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}

</style>