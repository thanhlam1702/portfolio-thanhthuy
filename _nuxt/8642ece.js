(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{845:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(5),o=function(t,e,n){r.a.prototype.$swal({position:"top-end",title:t,icon:e,timer:n,showConfirmButton:!1,toast:!0})}},846:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),o=n.n(r);o.a.locale("vi");var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dddd DD/MM/YYYY, HH:mm:ss";return o()(t).format(e)}},916:function(t,e,n){"use strict";n.r(e);n(95),n(29),n(165),n(96);var r=n(33),o=n(846),c=n(845);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={layout:"admin",data:function(){return{articles:[],pagination:{pageSize:10}}},fetch:function(){var t=this;this.$fire.database.ref("articles/").get().then((function(e){if(e.exists()){var n=[];for(var r in e.val())n.push(d(d({},e.val()[r]),{},{id:r}));t.articles=n}else t.articles=[]}))},head:function(){return{title:this.$t("Bài viết")+" | Thanh Thúy"}},computed:{columns:function(){var t=[{title:this.$t("Tiêu đề"),dataIndex:"title",key:"title",scopedSlots:{filterDropdown:"filter",filterIcon:"filterIcon"},onFilter:function(t,e){return e.title.toString().toLowerCase().includes(t.toLowerCase())}},{title:"URL",dataIndex:"slug",key:"slug"},{title:this.$t("Hình ảnh"),dataIndex:"image",key:"image",width:"110px",align:"center"},{title:this.$t("Ngày đăng"),dataIndex:"date",key:"date",width:"180px",align:"center",scopedSlots:{customRender:"date"},defaultSortOrder:"descend",sorter:function(a,b){return parseInt(a.date)-parseInt(b.date)}},{title:this.$t("Thao tác"),key:"action",align:"center",width:"90px",scopedSlots:{customRender:"action"}}];return t}},methods:{formatDate:function(t){return Object(o.a)(t,"dddd DD/MM/YYYY, HH:mm:ss")},onView:function(t){this.$router.push("/articles/"+t)},onDelete:function(t){var e=this;this.$fire.database.ref("articles/"+t).remove().then((function(){e.$fetch(),Object(c.a)(e.$t("Xóa thành công"),"success","2000")})).catch((function(){Object(c.a)(e.$t("Đã có lỗi gì đó xảy ra, Vui lòng thử lại sau"),"error","3000")}))},handleSearch:function(t,e,n){e()},handleReset:function(t){t()}}},h=n(19),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-content"},[n("div",{staticClass:"options"},[n("div",{staticClass:"left"},[n("a-breadcrumb",[n("a-breadcrumb-item",[n("nuxt-link",{attrs:{to:"/dashboard"}},[t._v(t._s(t.$t("Trang chủ")))])],1),t._v(" "),n("a-breadcrumb-item",[t._v(t._s(t.$t("Bài viết")))])],1)],1),t._v(" "),n("div",{staticClass:"right"})]),t._v(" "),n("a-table",{attrs:{bordered:"",columns:t.columns,"data-source":t.articles,scroll:{x:1300},pagination:t.pagination},scopedSlots:t._u([{key:"date",fn:function(e){return[n("p",{staticClass:"text-cap"},[t._v(t._s(t.formatDate(e)))])]}},{key:"action",fn:function(article){return[n("span",{staticClass:"action",on:{click:function(e){return t.onView(article.slug)}}},[n("a-tooltip",{attrs:{placement:"bottom"}},[n("template",{slot:"title"},[n("span",[t._v(t._s(t.$t("Xem")))])]),t._v(" "),n("a-icon",{attrs:{type:"eye"}})],2)],1),t._v(" "),n("span",{staticClass:"action"},[n("a-tooltip",{attrs:{placement:"bottom"}},[n("template",{slot:"title"},[n("span",[t._v(t._s(t.$t("Sửa")))])]),t._v(" "),n("a-icon",{attrs:{type:"edit"}})],2)],1),t._v(" "),n("span",{staticClass:"action",on:{click:function(e){return t.onDelete(article.id)}}},[n("a-tooltip",{attrs:{placement:"bottom"}},[n("template",{slot:"title"},[n("span",[t._v(t._s(t.$t("Xóa")))])]),t._v(" "),n("a-icon",{attrs:{type:"delete"}})],2)],1)]}},{key:"filter",fn:function(e){var r=e.setSelectedKeys,o=e.selectedKeys,c=e.confirm,l=e.clearFilters,d=e.column;return n("div",{staticClass:"contain-filter"},[n("a-input",{staticClass:"input-search",attrs:{placeholder:"Search name",value:o[0],size:"large"},on:{pressEnter:function(){return t.handleSearch(o,c,d.dataIndex)},change:function(t){return r(t.target.value?[t.target.value]:[])}}}),t._v(" "),n("a-button",{attrs:{type:"primary",icon:"search",size:"large"},on:{click:function(){return t.handleSearch(o,c,d.dataIndex)}}},[t._v("\n        "+t._s(t.$t("Tìm kiếm"))+"\n      ")]),t._v(" "),n("a-button",{attrs:{size:"large"},on:{click:function(e){return t.handleReset(l)}}},[t._v(" "+t._s(t.$t("Hủy bỏ"))+" ")])],1)}},{key:"filterIcon",fn:function(t){return n("a-icon",{style:{color:t?"#F7BA02":void 0},attrs:{type:"search"}})}}])})],1)}),[],!1,null,null,null);e.default=component.exports}}]);