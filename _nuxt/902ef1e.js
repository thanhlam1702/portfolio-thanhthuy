(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{902:function(t,e,n){"use strict";n.r(e);n(28),n(77),n(78),n(161),n(409);var o={layout:"admin",data:function(){return{visibleModal:!1,disableBtnSubmit:!0,btnLoading:!1,seclectedFile:"",imageUrl:""}},head:function(){return{title:this.$t("Trang cá nhân")+" | Thanh Thúy"}},methods:{openModalAvatar:function(){this.visibleModal=!0},cancelModal:function(){var t=this;setTimeout((function(){t.imageUrl=""}),200),this.visibleModal=!1,this.disableBtnSubmit=!0},dummyRequest:function(t){setTimeout((function(){t.onSuccess("ok")}),0)},beforeUpload:function(t){var e=t.size/1024/1024<2;return e||this.$message.error("Ảnh phải bé hơn 2MB!"),e},handleChooseAvt:function(t){"done"===t.file.status&&(this.disableBtnSubmit=!1,this.seclectedFile=t.file.originFileObj,this.imageUrl=URL.createObjectURL(t.file.originFileObj))},onSubmit:function(){var t=this;this.btnLoading=!0,this.$fire.storage.ref("user/avatar").put(this.seclectedFile).then((function(e){e.ref.getDownloadURL().then((function(e){t.$fire.auth.currentUser.updateProfile({photoURL:e}).then((function(e){t.cancelModal(),t.$store.dispatch("fetchUser"),t.btnLoading=!1,t.$swal({position:"top-end",title:t.$t("Thay đổi thành công"),icon:"success",timer:"2000",showConfirmButton:!1,toast:!0})})).catch((function(){t.btnLoading=!1,t.$swal({position:"top-end",title:t.$t("Thay đổi thất bại, Vui lòng thử lại sau"),icon:"error",timer:"2000",showConfirmButton:!1,toast:!0})}))}))}))}}},l=n(19),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"admin-content"},[o("div",{staticClass:"profile"},[o("div",{staticClass:"profile__avt"},[o("div",{staticClass:"profile__avt-contain"},[t.$store.state.user.avatar?o("img",{attrs:{src:t.$store.state.user.avatar,alt:"avatar"}}):o("img",{attrs:{src:n(410),alt:"avatar"}})]),t._v(" "),o("div",{staticClass:"profile__avt-edit",on:{click:t.openModalAvatar}},[o("icon-camera",{staticClass:"icon"})],1),t._v(" "),o("a-modal",{staticClass:"modal-avatar",attrs:{title:t.$t("Thay đổi ảnh đại diện")},on:{cancel:t.cancelModal},model:{value:t.visibleModal,callback:function(e){t.visibleModal=e},expression:"visibleModal"}},[o("template",{slot:"closeIcon"},[o("icon-close",{staticClass:"icon"})],1),t._v(" "),o("template",{slot:"footer"},[o("a-button",{key:"submit",attrs:{size:"large",type:"primary",loading:t.btnLoading,disabled:t.disableBtnSubmit},on:{click:t.onSubmit}},[t._v("\n            "+t._s(t.$t("Lưu thay đổi"))+"\n          ")])],1),t._v(" "),o("a-upload",{staticClass:"avt-upload avatar-uploader",attrs:{name:"file",accept:".png, .jpg, .jpeg",multiple:!1,"custom-request":t.dummyRequest,"show-upload-list":!1,"before-upload":t.beforeUpload},on:{change:t.handleChooseAvt}},[t.imageUrl?o("img",{staticClass:"view-img",attrs:{src:t.imageUrl,alt:"review avatar"}}):t._e(),t._v(" "),o("a-button",{attrs:{block:"",size:"large"}},[o("a-icon",{attrs:{type:"upload"}}),t._v("\n            "+t._s(t.$t("Tải ảnh lên"))+"\n          ")],1)],1)],2)],1),t._v(" "),o("div",{staticClass:"profile__info"},[o("div",{staticClass:"profile__info-name"},[t._v("\n        "+t._s(t.$store.state.user.displayName)+"\n      ")]),t._v(" "),o("div",{staticClass:"profile__info-email"},[t._v("\n        "+t._s(t.$store.state.user.email)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);