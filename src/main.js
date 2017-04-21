import Vue from 'vue'
import App from './App'
import routes from './routerMap.js'
// 插件
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
// mint-ui组件
import {
	Header,
	Button,
	Cell,
	Actionsheet,
	Popup,
	TabContainer,
	TabContainerItem,
	Navbar,
	TabItem,
	Search,
	Badge,
	DatetimePicker,
	Switch,
	Range,
	Picker,
	InfiniteScroll,
	Field,
	Loadmore,
	CellSwipe
} from 'mint-ui';
Vue.component(CellSwipe.name, Cell);
Vue.use(InfiniteScroll);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Popup.name, Popup);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Search.name, Search);
Vue.component(Badge.name, Badge);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Switch.name, Switch);
Vue.component(Range.name, Range);
Vue.component(Picker.name, Picker);
Vue.component(Field.name, Field);
Vue.component(Loadmore.name, Loadmore);



// LESS,CSS样式
import './css/common.less'

/* eslint-disable no-new */
const router = new VueRouter({
	//mode: 'history',
	base: __dirname,
	routes
})

new Vue({
	router,
	el: '#app',
	render: h => h(App)
})