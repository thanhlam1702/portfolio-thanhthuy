(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{845:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(5),r=function(t,e,n){o.a.prototype.$swal({position:"top-end",title:t,icon:e,timer:n,showConfirmButton:!1,toast:!0})}},846:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(4),r=n.n(o);r.a.locale("vi");var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dddd DD/MM/YYYY, HH:mm:ss";return r()(t).format(e)}},917:function(t,e,n){"use strict";n.r(e);n(29),n(78),n(79),n(164),n(547),n(44);var o=n(18),r=n(846),l=n(845),c={layout:"admin",data:function(){var t=this;return{btnPassword:!1,showInfo:!0,displayName:"",visibleModal:!1,disableBtnSubmit:!0,btnLoading:!1,seclectedFile:"",imageUrl:"",form:{password:"",oldPassword:"",confirm:""},rules:{oldPassword:{required:!0,message:this.$t("Vui lòng nhập mật khẩu cũ!")},password:{required:!0,message:this.$t("Vui lòng nhập mật khẩu")},confirm:[{validator:function(e,n,o){n!==t.form.password?o(new Error(t.$t("Mật khẩu không trùng khớp!"))):o()},trigger:"change"},{required:!0,message:this.$t("Vui lòng nhập lại mật khẩu!")}]}}},head:function(){return{title:this.$t("Trang cá nhân")+" | Thanh Thúy"}},methods:{formatDate:function(t){return Object(r.a)(parseInt(t))},openModalAvatar:function(){this.visibleModal=!0},cancelModal:function(){var t=this;setTimeout((function(){t.imageUrl=""}),200),this.visibleModal=!1,this.disableBtnSubmit=!0},dummyRequest:function(t){setTimeout((function(){t.onSuccess("ok")}),0)},handleChooseAvt:function(t){"done"===t.file.status&&(this.disableBtnSubmit=!1,this.seclectedFile=t.file.originFileObj,this.imageUrl=URL.createObjectURL(t.file.originFileObj))},onSubmit:function(){var t=this,e=this.$fire.auth.currentUser;this.btnLoading=!0,this.$fire.storage.ref("user/avatar-"+e.uid).put(this.seclectedFile).then((function(n){n.ref.getDownloadURL().then((function(n){e.updateProfile({photoURL:n}).then((function(e){t.cancelModal(),t.$store.dispatch("fetchUser"),t.btnLoading=!1,Object(l.a)(t.$t("Thay đổi thành công"),"success","2000")})).catch((function(){t.btnLoading=!1,Object(l.a)(t.$t("Thay đổi thất bại, Vui lòng thử lại sau"),"error","3000")}))}))}))},handleEdit:function(){this.showInfo=!1,this.displayName=this.$store.state.user.displayName,this.phoneNumber=this.$store.state.user.phoneNumber},handleCancel:function(){this.showInfo=!0,this.displayName="",this.phoneNumber=""},onSave:function(){var t=this;this.btnLoading=!0,this.$fire.auth.currentUser.updateProfile({displayName:this.displayName}).then((function(e){t.handleCancel(),t.$store.dispatch("fetchUser"),t.btnLoading=!1,Object(l.a)(t.$t("Thay đổi thành công"),"success","2000")})).catch((function(){t.btnLoading=!1,Object(l.a)(t.$t("Thay đổi thất bại, Vui lòng thử lại sau"),"error","3000")}))},validateForm:function(){var t=this;this.$refs.ruleForm.validate((function(e){e&&t.onChangePass()}))},onChangePass:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.btnPassword=!0,n=t.$fire.auth.currentUser,e.next=4,t.$fireModule.auth.EmailAuthProvider.credential(n.email,t.form.oldPassword);case 4:o=e.sent,n.reauthenticateWithCredential(o).then((function(e){n.updatePassword(t.form.password).then((function(){Object(l.a)(t.$t("Thay đổi thành công"),"success","2000"),t.btnPassword=!1,t.form={password:"",oldPassword:"",confirm:""}})).catch((function(){Object(l.a)(t.$t("Đã có lỗi gì đó xảy ra, Vui lòng thử lại sau"),"error","3000"),t.btnPassword=!1}))})).catch((function(){t.btnPassword=!1,Object(l.a)(t.$t("Mật khẩu cũ không đúng, Vui lòng thử lại"),"error","3000")}));case 6:case"end":return e.stop()}}),e)})))()}}},d=n(19),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"admin-content"},[o("div",{staticClass:"profile"},[o("div",{staticClass:"profile__avt"},[o("div",{staticClass:"profile__avt-contain"},[t.$store.state.user.avatar?o("img",{attrs:{src:t.$store.state.user.avatar,alt:"avatar"}}):o("img",{attrs:{src:n(551),alt:"avatar"}})]),t._v(" "),o("div",{staticClass:"profile__avt-edit",on:{click:t.openModalAvatar}},[o("icon-camera",{staticClass:"icon"})],1),t._v(" "),o("a-modal",{staticClass:"modal-avatar",attrs:{title:t.$t("Thay đổi ảnh đại diện")},on:{cancel:t.cancelModal},model:{value:t.visibleModal,callback:function(e){t.visibleModal=e},expression:"visibleModal"}},[o("template",{slot:"closeIcon"},[o("icon-close",{staticClass:"icon"})],1),t._v(" "),o("template",{slot:"footer"},[o("a-button",{key:"submit",attrs:{size:"large",type:"primary",loading:t.btnLoading,disabled:t.disableBtnSubmit},on:{click:t.onSubmit}},[t._v("\n            "+t._s(t.$t("Lưu thay đổi"))+"\n          ")])],1),t._v(" "),o("a-upload",{staticClass:"avt-upload avatar-uploader",attrs:{name:"file",accept:".png, .jpg, .jpeg",multiple:!1,"custom-request":t.dummyRequest,"show-upload-list":!1},on:{change:t.handleChooseAvt}},[t.imageUrl?o("img",{staticClass:"view-img",attrs:{src:t.imageUrl,alt:"review avatar"}}):t._e(),t._v(" "),o("a-button",{attrs:{block:"",size:"large"}},[o("a-icon",{attrs:{type:"upload"}}),t._v("\n            "+t._s(t.$t("Tải ảnh lên"))+"\n          ")],1)],1)],2)],1),t._v(" "),o("div",{staticClass:"profile__info"},[o("div",{staticClass:"profile__info-basic"},[o("div",{staticClass:"title"},[o("h2",[t._v(t._s(t.$t("Thông tin")))]),t._v(" "),o("div",{staticClass:"title-right"},[t.showInfo?o("a-button",{attrs:{size:"large"},on:{click:t.handleEdit}},[t._v(t._s(t.$t("Sửa thông tin")))]):t._e(),t._v(" "),t.showInfo?t._e():o("a-button",{staticClass:"btn-cancel",attrs:{size:"large"},on:{click:t.handleCancel}},[t._v(t._s(t.$t("Hủy")))]),t._v(" "),t.showInfo?t._e():o("a-button",{attrs:{loading:t.btnLoading,size:"large"},on:{click:t.onSave}},[t._v(t._s(t.$t("Lưu thay đổi")))])],1)]),t._v(" "),o("div",{staticClass:"info name"},[o("span",[t._v(t._s(t.$t("Tên hiển thị")))]),t._v(" "),t.showInfo?o("p",[t._v(t._s(t.$store.state.user.displayName))]):o("a-input",{attrs:{size:"large"},model:{value:t.displayName,callback:function(e){t.displayName=e},expression:"displayName"}})],1),t._v(" "),o("div",{staticClass:"info email"},[o("span",[t._v("Email")]),t._v(" "),o("p",[t._v(t._s(t.$store.state.user.email))])]),t._v(" "),o("div",{staticClass:"info date-create"},[o("span",[t._v(t._s(t.$t("Ngày tạo")))]),t._v(" "),o("p",{staticClass:"text-cap"},[t._v(t._s(t.formatDate(t.$store.state.user.createAt)))])]),t._v(" "),o("div",{staticClass:"info last-login"},[o("span",[t._v(t._s(t.$t("Lần đăng nhập cuối")))]),t._v(" "),o("p",{staticClass:"text-cap"},[t._v(t._s(t.formatDate(t.$store.state.user.lastLogin)))])])]),t._v(" "),o("div",{staticClass:"profile__info-pass"},[o("div",{staticClass:"title"},[o("h2",[t._v(t._s(t.$t("Đổi mật khẩu")))])]),t._v(" "),o("a-form-model",{ref:"ruleForm",attrs:{rules:t.rules,model:t.form,"label-align":"left"}},[o("a-form-model-item",{ref:"oldPassword",attrs:{prop:"oldPassword",label:t.$t("Mật khẩu cũ")}},[o("a-input-password",{attrs:{size:"large"},model:{value:t.form.oldPassword,callback:function(e){t.$set(t.form,"oldPassword",e)},expression:"form.oldPassword"}})],1),t._v(" "),o("a-form-model-item",{ref:"password",attrs:{prop:"password",label:t.$t("Mật khẩu mới")}},[o("a-input-password",{attrs:{size:"large"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),o("a-form-model-item",{ref:"confirm",attrs:{prop:"confirm","has-feedback":"",label:t.$t("Xác nhận mật khẩu mới")}},[o("a-input-password",{attrs:{name:"confim",size:"large"},model:{value:t.form.confirm,callback:function(e){t.$set(t.form,"confirm",e)},expression:"form.confirm"}})],1),t._v(" "),o("a-form-model-item",[o("a-button",{attrs:{size:"large",loading:t.btnPassword},on:{click:t.validateForm}},[t._v(t._s(t.$t("Thay đổi mật khẩu")))])],1)],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);