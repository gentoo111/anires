import Vue from 'vue'
import App from './App'
import Mobile from './Mobile'

function IsPC(){  
   var userAgentInfo = navigator.userAgent;  
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
   var flag = true;  
   for (var v = 0; v < Agents.length; v++) {  
	   if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
   }
   console.log(flag)   
   return flag;  
} 
var width = document.documentElement.clientWidth
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(IsPC() ? App : Mobile)
})
