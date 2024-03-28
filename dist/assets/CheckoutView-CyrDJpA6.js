import{a as h}from"./axios-Bo0ATomq.js";import{_ as g,c as m,a as e,F as w,f as V,b as a,w as y,r as n,o as _,t as c,n as f,d as E}from"./index-C64LxqXU.js";var k={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"forest_mind",BASE_URL:"//",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:p,VITE_PATH:b}=k,C={data(){return{cart:{},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},created(){this.getCart()},watch:{"$route.query":{handler(){this.getProducts()},deep:!0}},methods:{getCart(){h.get(`${p}/v2/api/${b}/cart`).then(r=>{this.cart=r.data.data.carts,console.log("cart",this.cart)}).catch(r=>{alert(r.data.message)})},createOrder(){const r=this.form;h.post(`${p}/api/${b}/order`,{data:r}).then(t=>{console.log(t.data),this.$router.push("checkout-success"),this.$refs.form.resetForm()}).catch(t=>{alert(t.response.data.message)})}}},T={class:"container"},j=e("div",{class:"row justify-content-center"},[e("div",{class:"col-md-10"},[e("h3",{class:"fw-bold mb-4 pt-3"},"結帳")])],-1),F={class:"row flex-row-reverse justify-content-center pb-5"},M={class:"col-md-4"},O={class:"d-flex"},N=e("img",{src:"https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80",alt:"",class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,-1),S={class:"w-100"},U={class:"d-flex justify-content-between"},q={class:"mb-0 fw-bold"},B={class:"mb-0"},D={class:"mb-0 fw-bold"},R={class:"table mt-4 border-top border-bottom text-muted"},I=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"小計",-1),L={class:"text-end border-0 px-0 pt-4"},P=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"付款方式"),e("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"線上付款")],-1),$={class:"d-flex justify-content-between mt-4"},A=e("p",{class:"mb-0 h4 fw-bold"},"總金額",-1),H={class:"mb-0 h4 fw-bold"},z={class:"col-md-6"},J=e("p",null,"聯絡資訊",-1),Q={class:"mb-0"},W={class:"mb-3"},G={class:"mb-2"},K=e("label",{for:"name",class:"form-label"},"姓名",-1),X={class:"mb-2"},Y=e("label",{for:"tel",class:"form-label"},"電話",-1),Z=e("label",{for:"ContactMail",class:"text-muted mb-0"},"電子信箱",-1),ee=e("div",{class:"mb-2"},[e("p",{class:"mt-4"},"訂單備註"),e("label",{for:"ContactMessage",class:"text-muted mb-0"},"備註"),e("textarea",{class:"form-control",rows:"3",id:"ContactMessage",placeholder:"有什麼想跟我們說的嗎？"})],-1),te={class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end"},se=e("a",{href:"./product.html",class:"text-dark mt-md-0 mt-3"},[e("i",{class:"fas fa-chevron-left me-2"}),E(" 上一步")],-1);function oe(r,t,le,ae,o,d){const i=n("VeeField"),u=n("error-message"),v=n("ErrorMessage"),x=n("VeeForm");return _(),m("div",T,[j,e("div",F,[e("div",M,[(_(!0),m(w,null,V(o.cart,s=>(_(),m("div",{key:s,class:"border p-4 mb-4"},[e("div",O,[N,e("div",S,[e("div",U,[e("p",q,c(s.product.title),1),e("p",B,"NT$ "+c(s.product.price),1)]),e("p",D,"人數："+c(s.qty)+"位",1)])]),e("table",R,[e("tbody",null,[e("tr",null,[I,e("td",L,"NT$ "+c(s.total),1)]),P])]),e("div",$,[A,e("p",H,"NT$ "+c(s.final_total),1)])]))),128))]),e("div",z,[a(x,{ref:"form",class:"col-md-6",onSubmit:d.createOrder},{default:y(({errors:s})=>[J,e("div",Q,[e("div",W,[e("div",G,[K,a(i,{id:"name",name:"姓名",type:"text",class:f(["form-control",{"is-invalid":s.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":t[0]||(t[0]=l=>o.form.user.name=l)},null,8,["class","modelValue"]),a(u,{name:"姓名",class:"invalid-feedback"})]),e("div",X,[Y,a(i,{id:"tel",name:"電話",type:"text",class:f(["form-control",{"is-invalid":s.電話}]),placeholder:"請輸入電話",rules:"numeric|min:9",modelValue:o.form.user.tel,"onUpdate:modelValue":t[1]||(t[1]=l=>o.form.user.tel=l)},null,8,["class","modelValue"]),a(u,{name:"電話",class:"invalid-feedback"})]),Z,a(i,{id:"email",name:"email",type:"email",class:f(["form-control",{"is-invalid":s.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=l=>o.form.user.email=l)},null,8,["class","modelValue"]),a(v,{name:"email",class:"invalid-feedback"}),ee]),e("div",te,[se,e("button",{type:"submit",onClick:t[3]||(t[3]=(...l)=>d.createOrder&&d.createOrder(...l)),to:"./checkout-success.html"},"確認送出")])])]),_:1},8,["onSubmit"])])])])}const ne=g(C,[["render",oe]]);export{ne as default};
