(function(t){function e(e){for(var i,l,s=e[0],o=e[1],c=e[2],v=0,p=[];v<s.length;v++)l=s[v],r[l]&&p.push(r[l][0]),r[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},r={app:0},n=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"05e0":function(t,e,a){t.exports=a.p+"img/shop-6.8acab3e4.jpg"},"0f33":function(t,e,a){t.exports=a.p+"img/shop-2.7b4f5a4c.jpg"},"48e5":function(t,e,a){t.exports=a.p+"img/shop-4.7948ac29.jpg"},"54a2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),r=a("bb71");a("da64");i["a"].use(r["a"],{iconfont:"md"});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("top-line"),a("v-content",[a("v-container",[a("router-view")],1)],1)],1)},l=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.links,function(e){return a("v-list-tile",{key:e.title,attrs:{to:e.url}},[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.links,function(e){return a("v-btn",{key:e.title,attrs:{to:e.url,flat:""}},[t._v("\n          "+t._s(e.title)+"\n        ")])})),a("v-spacer")],1)],1)},o=[],c={data(){return{drawer:!1,links:[{title:"Главная",url:"/"},{title:"Клинки",url:"/blades"},{title:"Материалы",url:"/materials"},{title:"Оплата и доставка",url:"/delivery"},{title:"Ножи",url:"/knives"},{title:"Видео",url:"/video"},{title:"Обо мне",url:"/about"},{title:"Контакты",url:"/contacts"}]}}},u=c,v=a("2877"),p=a("6544"),d=a.n(p),m=a("8336"),f=a("8860"),_=a("ba95"),b=a("5d23"),x=a("f774"),h=a("9910"),g=a("71d9"),y=a("2a7f"),C=a("706c"),V=Object(v["a"])(u,s,o,!1,null,null,null);V.options.__file="TopLine.vue";var w=V.exports;d()(V,{VBtn:m["a"],VList:f["a"],VListTile:_["a"],VListTileContent:b["a"],VListTileTitle:b["b"],VNavigationDrawer:x["a"],VSpacer:h["a"],VToolbar:g["a"],VToolbarItems:y["a"],VToolbarSideIcon:C["a"]});var j={name:"App",components:{TopLine:w},data(){return{}}},k=j,T=a("7496"),S=a("a523"),O=a("549c"),L=Object(v["a"])(k,n,l,!1,null,null,null);L.options.__file="App.vue";var E=L.exports;d()(L,{VApp:T["a"],VContainer:S["a"],VContent:O["a"]});var P=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("top-line"),a("v-carousel",t._l(t.items,function(t){return a("v-carousel-item",{key:t.url,attrs:{src:t.url}})})),a("v-flex",{staticClass:"mt-3 font-weight-bold headline",attrs:{xs12:""}},[a("p",{staticClass:"text-xs-center"},[t._v("Представленные ножи не являются холодным оружием и не требуют специального разрешения.")]),a("p",{staticClass:"text-xs-center"},[t._v("Сделаны в соответствии с ГОСТами РФ : Ножи хозяйственно-бытового назначения.")])])],1)},F=[],M={components:{TopLine:w},data(){return{items:[{url:"http://ножи-смолин.рф/wp-content/uploads/2018/05/vN_vFNhv3kA.jpg"}]}}},R=M,H=a("5e66"),A=a("3e35"),B=a("0e8f"),G=Object(v["a"])(R,$,F,!1,null,null,null);G.options.__file="Home.vue";var z=G.exports;d()(G,{VCarousel:H["a"],VCarouselItem:A["a"],VFlex:B["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("p",[t._v("Здравствуйте, меня зовут Смолин Сергей Евгеньевич.")]),a("p",[t._v("В 2005 году я закончил Техникум народных художественных промыслов России (ПТНХПР) '05, по направлению Изготовитель художественных изделий из металла.")]),a("p",[t._v("В данный момент занимаюсь\n\t\t\tиготовлением охотничьих и туристических ножей ручной работы.")]),a("p",[t._v("Примеры моих работ вы можете увидеть в разделе "),a("router-link",{attrs:{to:"/knives"}},[t._v("«ножи»")])],1),a("p",[t._v("Для заказов, пожалуйста "),a("router-link",{attrs:{to:"/contacts"}},[t._v("Напишите мне")])],1)])],1)],1)},I=[],K=(a("5a51"),a("a722")),q={},N=Object(v["a"])(q,D,I,!1,null,"7df5b504",null);N.options.__file="About.vue";var J=N.exports;d()(N,{VContainer:S["a"],VFlex:B["a"],VLayout:K["a"]});var Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Клинки")])])}],U={},W=Object(v["a"])(U,Q,X,!1,null,null,null);W.options.__file="Blades.vue";var Y=W.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",[a("v-flex",{attrs:{xs12:"",sm6:"","offset-md3":""}},[a("v-form",{attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:[function(t){return!!t||"Это поле обязательно для заполнения"}],label:"Ваше имя",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-textarea",{attrs:{rules:[function(t){return!!t||"Это поле обязательно для заполнения"}],label:"Сообщение","no-resize":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("input",{attrs:{type:"hidden",name:"project_name",value:"Knives"}}),a("input",{attrs:{type:"hidden",name:"admin_email",value:"gospelwork@yandex.ru"}}),a("input",{attrs:{type:"hidden",name:"form_subject",value:"Заказ"}}),a("v-btn",{staticClass:"success",attrs:{required:""},on:{click:t.submit}},[t._v("Отправить")])],1)],1)],1)],1)},tt=[],et=a("1157"),at={data(){return{valid:!1,name:"",email:"",message:"",emailRules:[t=>!!t||"Это поле обязательно для заполнения",t=>/.+@.+/.test(t)||"Неверный e-mail"]}},methods:{submit(){let t=et;t("form").submit(function(){var e=t(this);return t.ajax({type:"POST",url:"../mail.php",data:e.serialize()}).done(function(){setTimeout(function(){e.trigger("reset")},1e3)}),console.log("data"),!1}),this.modal=!1}},components:{jQuery:et}},it=at,rt=a("4bd4"),nt=a("2677"),lt=a("a844"),st=Object(v["a"])(it,Z,tt,!1,null,null,null);st.options.__file="Contacts.vue";var ot=st.exports;d()(st,{VBtn:m["a"],VContainer:S["a"],VFlex:B["a"],VForm:rt["a"],VLayout:K["a"],VTextField:nt["a"],VTextarea:lt["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-flex",{attrs:{xs12:""}},[a("v-layout",[a("h2",{staticClass:"pr-2",staticStyle:{"border-right":"3px solid grey"}},[t._v("Размещение заказа")]),a("p",{staticClass:"mt-2 pl-3 subheading"},[t._v("Вы можете заказать изделие по образцу в каталоге . Все заказы выполняются штучно и я не могу гарантировать идеальное сходство с образцом, но всегда делаю максимально близко к нему.")])])],1),a("v-flex",{attrs:{xs12:""}},[a("h2",{staticClass:"pr-1 mr-3 mt-3"},[t._v("Оплата товаров")]),a("ol",{staticClass:"mt-2 pl-3 subheading"},[a("li",[t._v("оплата банковским переводом")]),a("li",[t._v('оплата на почте при получении заказа "Наложенный платеж"')]),a("li",[t._v('При выборе первого способа оплаты "Банковский перевод" - стоимость доставки любого количества товара в любой регион России 250 руб.')])]),a("h3",{staticClass:"mt-3"},[t._v('Оплата на почте при получении заказа "Наложенный платеж":')]),a("p",[t._v("При выборе второго способа Вы производите оплату на почте при получении своего заказа (получили почтовое извещение, пошли на почту, заплатили деньги и забрали посылку). Минимальная стоимость доставки наложенным платежом составляет 250 руб.")]),a("p",{staticClass:"error"},[t._v("ВНИМАНИЕ! Почта России за перевод денег берет комиссию 4-6%. Эта сумма не входит в стоимость заказа.")])]),a("v-flex",{attrs:{xs12:""}},[a("v-layout",[a("h2",{staticClass:"pr-2",staticStyle:{"border-right":"3px solid grey"}},[t._v("Доставка")]),a("p",{staticClass:"subheading pl-3"},[t._v("Почта России")])])],1)],1)},ut=[],vt=(a("ba24"),{}),pt=Object(v["a"])(vt,ct,ut,!1,null,"4642fde2",null);pt.options.__file="Delivery.vue";var dt=pt.exports;d()(pt,{VFlex:B["a"],VLayout:K["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("h2",{staticClass:"text-xs-center mt-3"},[t._v("Уважаемые покупатели, каждый нож представлен для примера, Вы можете заказать похожий нож из данной коллекции. Точное повторение не всегда возможно из за наличия не всех нужных материалов. Срок изготовления от 10 дней.")]),a("h3",{staticClass:"text-xs-center mt-3 pb-3"},[t._v("Каждый заказ обговаривается индивидуально.")]),a("v-divider")],1)],1),a("v-container",{attrs:{"grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.cards,function(e){return a("v-flex",{key:e.id,attrs:{xs12:"",sm6:"",md4:""}},[a("v-card",[a("v-img",{attrs:{src:e.imgSrc,height:"275px"}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.title))]),a("div",{staticClass:"mb-3"},[t._v("Цена "+t._s(e.price)+" руб.")]),a("v-divider"),a("div",{staticClass:"mt-3"},[t._v(t._s(e.description))])],1)]),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"success mr-1",attrs:{to:"/knife/"+e.id}},[t._v("Подробнее")]),a("BuyModal")],1)],1)],1)}))],1)],1)},ft=[],_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"400px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-btn",{staticClass:"warning",attrs:{slot:"activator"},slot:"activator"},[t._v("Купить")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card",[a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",[a("h1",{staticClass:"text--primary"},[t._v("Купить?")])])],1)],1),a("v-divider"),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-text",[a("v-text-field",{attrs:{name:"name",label:"Ваше имя",type:"text",rules:[function(t){return!!t||"Это поле обязательно"}]},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{name:"phone",label:"Номер телефона",type:"tel",rules:[function(t){return!!t||"Это поле обязательно"}]},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),a("input",{attrs:{type:"hidden",name:"project_name",value:"Knives"}}),a("input",{attrs:{type:"hidden",name:"admin_email",value:"gospelwork@yandex.ru"}}),a("input",{attrs:{type:"hidden",name:"form_subject",value:"Заказ"}})],1)],1)],1),a("v-divider"),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:""},on:{click:t.onCancel}},[t._v("Закрыть")]),a("v-btn",{staticClass:"success submit",on:{click:t.submit}},[t._v("Отправить")])],1)],1)],1)],1)],1)],1)],1)},bt=[],xt={data(){return{modal:!1,name:"",phone:"",valid:!0}},methods:{onCancel(){this.name="",this.phone="",this.modal=!1},submit(){et("form").submit(function(){var t=et(this);return et["ajax"]({type:"POST",url:"../mail.php",data:t.serialize()}).done(function(){setTimeout(function(){t.trigger("reset")},1e3)}),console.log("data"),!1}),this.modal=!1}}},ht=xt,gt=a("b0af"),yt=a("99d9"),Ct=a("12b2"),Vt=a("169a"),wt=a("ce7e"),jt=Object(v["a"])(ht,_t,bt,!1,null,null,null);jt.options.__file="BuyModal.vue";var kt=jt.exports;d()(jt,{VBtn:m["a"],VCard:gt["a"],VCardActions:yt["a"],VCardText:yt["b"],VCardTitle:Ct["a"],VContainer:S["a"],VDialog:Vt["a"],VDivider:wt["a"],VFlex:B["a"],VForm:rt["a"],VLayout:K["a"],VSpacer:h["a"],VTextField:nt["a"]});var Tt={data(){return{cards:[{imgSrc:a("d9e2"),title:"Модель №1",description:"Сталь: М390 длина клинка 130 мм, Ширина клинка: 30 мм, Толщина обуха (стали): 3,5 мм, Длина рукояти: 127 мм, Поверхность клинка: заполированный пескоструй, Больстер Нейзильбер, Материал рукояти: G10, Микарта. Твердость 62-63 HRC.",price:"10 000",id:"1"},{imgSrc:a("0f33"),title:"Модель №1",description:"Сталь CPM S110V, длина клинка: 150 мм. Ширина клинка: 35 мм. Поверхность клинка: заполированный пескоструй. Толщина обуха: 4 мм. Сведение клинка: 0.3-0.4 мм. Спуски: прямые. Длина рукояти: 130 мм. Монтаж рукояти: сквозной. Материал рукояти: Микарта. Твердость: 63-64 HRC",price:"10 000",id:"2"},{imgSrc:a("93da"),title:"Модель №1",description:"Сталь: М390, длина клинка 128 мм, Ширина клинка: 30 мм, Толщина обуха (стали): 3,2 мм, Длина рукояти: 125 мм, Поверхность клинка: заполированный пескоструй, Больстер Нейзильбер, Материал рукояти: G10, Твердость 62-63 HRC. Стабилизированный карельская береза.",price:"10 000",id:"3"},{imgSrc:a("48e5"),title:"Модель №1",description:"Сталь кованая Х12МФ,длина клинка: 130 мм. Ширина клинка: 24 мм. Поверхность клинка: заполированный пескоструй. Толщина обуха (стали): 3,5 мм. Спуски: прямые. Сведение 0.2-0.3. Длина рукояти: 125±3 мм. Монтаж рукояти: сквозной. Материал рукояти: микарта , мельхиор, G10. Твердость 61-62 HRC.",price:"10 000",id:"4"},{imgSrc:a("fab4"),title:"Модель №1",description:"Сталь: ELMAX, длина клинка 130 мм. Ширина клинка: 25 мм, Толщина обуха (стали): 3,6 мм, Длина рукояти: 127 мм, Поверхность клинка: заполированный пескоструй, Больстер Нейзильбер, Материал рукояти: G10, Аризонское железное дерево Ironwood, Твердость 60-61 HRC.",price:"10 000",id:"5"},{imgSrc:a("05e0"),title:"Модель №1",description:"Сталь кованая Х12МФ, длина клинка 127 мм. Ширина клинка: 28 мм, Толщина обуха (стали): 3.6 мм, Длина рукояти: 127 мм, Поверхность клинка: заполированный пескоструй, Больстер Незельбер, Материал рукояти: стабилизированная карельская береза, Твердость 61-62 HRC.",price:"10 000",id:"6"},{imgSrc:a("5b03"),title:"Модель №1",description:"Сталь кованая Х12МФ, длина клинка 127мм, ширина клинка 28мм, поверхность клинка заполированный пескоструй, тольщина обуха стали 3,6мм, сведение 0.3-0.4, длина рукояти 125мм, монтаж рукояти сквозной, материал рукояти: Незельбер, G10, бронза, микарта. Твердость 61-62 HRC.",price:"10 000",id:"7"},{imgSrc:a("99da"),title:"Модель №1",description:"Сталь кованая Х12МФ, длина клинка 127мм, ширина клинка 28мм, поверхность клинка заполированный пескоструй, толщина обуха стали 3,6мм, сведение 0.3-0.4, длина рукояти 125мм, монтаж рукояти сквозной, материал рукояти: Незельбер, G10, стабелизированная карельская береза Твердость 61-62 HRC.",price:"10 000",id:"8"},{imgSrc:a("7bd4"),title:"Модель №1",description:"Сталь кованая Х12МФ, длина клинка 120мм, ширина клинка 30мм, поверхность клинка заполированный пескоструй, тольщина обуха стали 3,6мм, сведение 0.3-0.4, длина рукояти 123мм, монтаж рукояти накладной, материал рукояти: Микарта,фибра,нержавеющий пины, темлячная трубка нержавейка . Твердость 61-62 HRC.",price:"10 000",id:"9"}]}},components:{BuyModal:kt}},St=Tt,Ot=a("adda"),Lt=Object(v["a"])(St,mt,ft,!1,null,null,null);Lt.options.__file="Knives.vue";var Et=Lt.exports;d()(Lt,{VBtn:m["a"],VCard:gt["a"],VCardActions:yt["a"],VCardTitle:Ct["a"],VContainer:S["a"],VDivider:wt["a"],VFlex:B["a"],VImg:Ot["a"],VLayout:K["a"],VSpacer:h["a"]});var Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Knife")])},$t=[],Ft={},Mt=Object(v["a"])(Ft,Pt,$t,!1,null,null,null);Mt.options.__file="Knife.vue";var Rt=Mt.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"text-xs-center mb-4"},[t._v("Приветствую вас, дорогие покупатели!")]),a("h3",{staticClass:"text-xs-center"},[t._v("Здесь будет описано, из каких сталей можно заказать нож.")]),a("v-list",t._l(t.items,function(e){return a("v-list-tile",{key:e.title},[a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"text-xs-center",domProps:{textContent:t._s(e.title)}})],1)],1)})),a("h2",{staticClass:"text-xs-center"},[t._v("Материалы рукояти:")]),a("v-list",t._l(t.materials,function(e){return a("v-list-tile",{key:e.title},[a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"text-xs-center",domProps:{textContent:t._s(e.title)}})],1)],1)}))],1)},At=[],Bt={data(){return{items:[{title:"Сталь М390"},{title:"Сталь CPM-S125V"},{title:"Сталь CPM 3V"},{title:"Сталь Х12МФ"},{title:"Сталь 95х18"}],materials:[{title:"Дерево"},{title:"Стабилизированная карельская береза"},{title:"Стабилизированный граб"},{title:"Железное аризонское дерево Айронвуд"},{title:"Микарта"},{title:"G10"}]}}},Gt=Bt,zt=Object(v["a"])(Gt,Ht,At,!1,null,null,null);zt.options.__file="Materials.vue";var Dt=zt.exports;d()(zt,{VList:f["a"],VListTile:_["a"],VListTileContent:b["a"],VListTileTitle:b["b"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:"",pt4:""}},[a("iframe",{attrs:{height:"300",width:"auto",src:"http://www.metacafe.com/embed/11766640/video-16/",frameborder:"0",allowfullscreen:""}})]),a("v-flex",{attrs:{xs12:"",sm6:"",md4:"",pt4:""}},[a("iframe",{attrs:{height:"300",width:"auto",src:"http://www.metacafe.com/embed/11766641/video-22/",frameborder:"0",allowfullscreen:""}})]),a("v-flex",{attrs:{xs12:"",sm6:"",md4:"",pt4:""}},[a("iframe",{attrs:{width:"auto",height:"300",src:"http://www.metacafe.com/embed/11766647/video-222/",frameborder:"0",allowfullscreen:""}})])],1)],1)},Kt=[],qt={data(){return{}}},Nt=qt,Jt=Object(v["a"])(Nt,It,Kt,!1,null,null,null);Jt.options.__file="Video.vue";var Qt=Jt.exports;d()(Jt,{VContainer:S["a"],VFlex:B["a"],VLayout:K["a"]}),i["a"].use(P["a"]);var Xt=new P["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:J},{path:"/blades",name:"blades",component:Y},{path:"/contacts",name:"contacts",component:ot},{path:"/delivery",name:"delivery",component:dt},{path:"/knives",name:"knives",component:Et},{path:"/knife/:id",name:"knife",component:Rt},{path:"/materials",name:"materials",component:Dt},{path:"/video",name:"video",component:Qt}]}),Ut=a("2f62");i["a"].use(Ut["a"]);var Wt=new Ut["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,new i["a"]({router:Xt,store:Wt,render:t=>t(E)}).$mount("#app")},"5a51":function(t,e,a){"use strict";var i=a("54a2"),r=a.n(i);r.a},"5b03":function(t,e,a){t.exports=a.p+"img/shop-7.1a96016f.jpg"},"7bd4":function(t,e,a){t.exports=a.p+"img/shop-9.d38a1b61.jpg"},"93da":function(t,e,a){t.exports=a.p+"img/shop-3.9e78cc7e.jpg"},"99da":function(t,e,a){t.exports=a.p+"img/shop-8.75fc6fbd.jpg"},ba24:function(t,e,a){"use strict";var i=a("dd06"),r=a.n(i);r.a},d9e2:function(t,e,a){t.exports=a.p+"img/shop-1.e421a87a.jpg"},dd06:function(t,e,a){},fab4:function(t,e,a){t.exports=a.p+"img/shop-5.ac32bc93.jpg"}});
//# sourceMappingURL=app.ff4de960.js.map