(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(6),i=c.n(a),s=(c(12),c(13),c(7)),d=c(3),j=c(17),o=c(0),u=function(e){var t=e.children;return Object(o.jsx)("div",{className:"container",children:t})},m=function(e){var t=e.hiddenMenu,c=e.setHiddenMenu,r=e.itemCount;return Object(o.jsx)("nav",{children:Object(o.jsxs)(u,{children:[Object(o.jsxs)("h2",{children:["Shoe ",Object(o.jsx)("span",{children:"."})]}),Object(o.jsxs)("div",{className:"menuWrapper",onClick:function(){return c(!t)},children:[Object(o.jsx)("i",{className:t?"fas fa-times fa-lg":"fas fa-shopping-cart fa-lg"}),Object(o.jsx)("p",{children:r>0&&r})]})]})})},l=function(e){var t=e.shoeImg;return Object(o.jsx)("div",{className:"cardBg",children:Object(o.jsx)("img",{src:t,alt:"shoe"})})},b=function(e){var t=e.addItem;return Object(o.jsx)("button",{onClick:t,children:"Add to Cart "})},h=function(e){var t=e.shoePrice,c=e.updateCart;return Object(o.jsxs)("div",{className:"cardInfo",children:[Object(o.jsxs)("p",{children:["$",t]}),Object(o.jsx)(b,{addItem:c})]})},O=[{cardImg:c.p+"static/media/shoe1.a8975f4a.png",cardPrice:699},{cardImg:c.p+"static/media/shoe2.133cb4f8.png",cardPrice:899},{cardImg:c.p+"static/media/shoe3.d239bf08.png",cardPrice:999},{cardImg:c.p+"static/media/shoe4.b2ba221d.png",cardPrice:599},{cardImg:c.p+"static/media/shoe5.79f18e3e.png",cardPrice:299},{cardImg:c.p+"static/media/shoe6.a8f133d9.png",cardPrice:499}],p=function(e){var t=e.updateCart;return Object(o.jsx)(o.Fragment,{children:O.map((function(e,c){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)(l,{shoeImg:e.cardImg}),Object(o.jsx)(h,{shoePrice:e.cardPrice,updateCart:function(){t(e.cardImg,e.cardPrice)}})]},c)}))})},f=function(e){var t=e.updateCart;return Object(o.jsx)("div",{className:"cardContainer",children:Object(o.jsx)(p,{updateCart:t})})},x=function(e){var t=e.cartItem,c=e.removeItem;return Object(o.jsx)("div",{className:"shoppingCart",children:t.map((function(e){return Object(o.jsxs)("div",{className:"cardRow",children:[Object(o.jsxs)("div",{className:"cardImg",children:[Object(o.jsx)("p",{children:e.cartCount}),Object(o.jsx)("img",{src:e.img,alt:"shoe"})]}),Object(o.jsxs)("div",{className:"cardPrice",children:[Object(o.jsx)("p",{children:e.price}),Object(o.jsx)("i",{onClick:function(){return c(e.id)},className:"fas fa-times"})]})]},e.id)}))})},g=function(e){var t=e.totalPrice,c=e.itemCount;return Object(o.jsxs)("div",{className:"shoppingCartPrice",children:[Object(o.jsxs)("h2",{children:["Total Price: $",t," "]}),Object(o.jsx)("div",{className:"allCartItems",style:{background:"url($CartImg) no-repeat center/cover"},children:Object(o.jsx)("div",{className:"itemsAmountWrap",children:Object(o.jsx)("p",{children:c})})})]})},v=function(e){var t=e.hiddenMenu,c=e.cartItem,r=e.totalPrice,n=e.itemCount,a=e.removeItem;return Object(o.jsxs)("div",{className:"shoppingCartContainer ".concat(t?"hidden":""," "),children:[Object(o.jsx)(x,{cartItem:c,removeItem:a}),Object(o.jsx)(g,{totalPrice:r,itemCount:n})]})},C=function(){var e=Object(r.useState)(0),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(0),i=Object(d.a)(a,2),l=i[0],b=i[1],h=Object(r.useState)([]),O=Object(d.a)(h,2),p=O[0],x=O[1],g=Object(r.useState)(!1),C=Object(d.a)(g,2),I=C[0],N=C[1];return Object(o.jsxs)("section",{className:"hero",children:[Object(o.jsx)(m,{hiddenMenu:I,setHiddenMenu:N,itemCount:l}),Object(o.jsxs)(u,{children:[Object(o.jsx)(f,{updateCart:function(e,t){(b((function(e){return e+1})),n((function(e){return e+t})),p.find((function(t){return t.img===e})))?p.find((function(t){return t.img===e})).cartCount++:x([].concat(Object(s.a)(p),[{img:e,price:t,id:Object(j.a)(),cartCount:1}]))}}),Object(o.jsx)(v,{hiddenMenu:I,cartItem:p,totalPrice:c,itemCount:l,removeItem:function(e){var t=p.filter((function(t){return t.id!==e}));x(t);var c=t.reduce((function(e,t){return e+t.cartCount}),0);b(c);var r=t.reduce((function(e,t){return e+t.price*t.cartCount}),0);n(r)}})]})]})},I=function(){return Object(o.jsx)(C,{})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e87f455c.chunk.js.map