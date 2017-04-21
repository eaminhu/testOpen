<template>
	<div :class="{'has-footer':footerVisable}">
		<mt-header :title="title" class="is-fixed">
			<div slot="left">
			    <mt-button icon="back" v-on:click="back">返回</mt-button>
			    <mt-button v-on:click="close">关闭</mt-button>
			</div>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<router-view></router-view>
	</div>
</template>

<script>
import title from './routerMap.js'
import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				title: '表单相关',
				footerVisable: true
			}
		},
		mounted() {
			this.path()
		},
		methods: {
			back(){
					this.$router.go(-1);
			},
			close(){
				
			},
			path(){
				var that = this,
					length = title.length,
					path = that.$route.path;
				if(this.$route.path =='/'||this.$route.path=='/mine'||this.$route.path=='/one'||this.$route.path=='/two'||this.$route.path=='/three'){
					that.footerVisable = true;
				}else{
					that.footerVisable = false;
				}
				for(var i=0;i<length; i++){
					if(path==title[i].path){
						that.title=title[i].meta.title
					}
				}
			}
		},
		watch:{
			$route:'path'
		}
	}
</script>
