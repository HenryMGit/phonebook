(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(16),a=t.n(r),o=t(6),u=t(3),i=t(0),s=function(e){var n=e.searchTerm,t=e.handleSearchTerm;return Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.addName,t=e.newName,c=e.handleNameChange,r=e.newNumber,a=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:c})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:r,onChange:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.persons,t=e.handleDelete;return Object(i.jsx)("div",{children:n.map((function(e){return Object(i.jsxs)("div",{children:[e.name," ",e.number," ",Object(i.jsx)("button",{onClick:function(){return t(e.id)},children:"Delete"})]},e.id)}))})},h=t(4),j=t.n(h),b="/api/persons",f={getAll:function(){return j.a.get(b).then((function(e){return e.data}))},create:function(e){return j.a.post(b,e).then((function(e){return e.data}))},updatePerson:function(e){return j.a.put("".concat(b,"/").concat(e.id),e).then((function(e){return e.data}))},deletePerson:function(e){return j.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))}},m=(t(15),function(e){var n=e.message,t=e.msgType;return null===n?null:Object(i.jsx)("div",{className:"".concat("success"===t?"success":"fail"),children:n})}),O=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),h=Object(u.a)(a,2),j=h[0],b=h[1],O=Object(c.useState)(""),p=Object(u.a)(O,2),v=p[0],x=p[1],g=Object(c.useState)(""),w=Object(u.a)(g,2),N=w[0],C=w[1],S=Object(c.useState)(null),T=Object(u.a)(S,2),y=T[0],k=T[1],D=Object(c.useState)(""),P=Object(u.a)(D,2),A=P[0],E=P[1];Object(c.useEffect)((function(){f.getAll().then((function(e){return r(e)}))}),[]);var I=""===N?t:t.filter((function(e){return e.name.toLowerCase().indexOf(N.toLowerCase())>-1}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(m,{message:y,msgType:A}),Object(i.jsx)(s,{searchTerm:N,handleSearchTerm:function(e){C(e.target.value)}}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(d,{addName:function(e){e.preventDefault();var n=t.find((function(e){return e.name===j}));if(n){if(!window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?")))return;var c=Object(o.a)(Object(o.a)({},n),{},{number:v});f.updatePerson(c).then((function(e){r(t.map((function(n){return n.name===j?e:n}))),b(""),x("")})).catch((function(e){k("Information of ".concat(j," has already been removed from server")),E("fail"),r(t.filter((function(e){return e.name!==j}))),b(""),x(""),setTimeout((function(){return k(null)}),5e3)}))}else{var a={name:j,number:v};f.create(a).then((function(e){r(t.concat(e)),b(""),x(""),k("Added ".concat(e.name)),E("success"),setTimeout((function(){k(null)}),5e3)})).catch((function(e){console.log(e.response.data.error),k(e.response.data.error),E("fail"),setTimeout((function(){k(null)}),500)}))}},newName:j,handleNameChange:function(e){b(e.target.value)},newNumber:v,handleNumberChange:function(e){x(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(l,{persons:I,handleDelete:function(e){window.confirm("Do you really want to delete this person")&&f.deletePerson(e).then((function(n){r(t.filter((function(n){return n.id!==e})))}))}})]})};a.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b7a41535.chunk.js.map