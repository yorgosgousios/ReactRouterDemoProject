(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__1m44e"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(2),r=c(37),a=c(20),s=c(41),i=c.n(s),u=c(1),l=function(e){return Object(u.jsx)("div",{className:i.a.card,children:e.children})},d=c(15),j=c(42),b=c.n(j),f=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),s=c[0],i=c[1],j=Object(n.useRef)(),f=Object(n.useRef)();return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(o.a,{when:s,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(u.jsx)(l,{children:Object(u.jsxs)("form",{onFocus:function(){i(!0)},className:b.a.form,onSubmit:function(t){t.preventDefault();var c=j.current.value,n=f.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(u.jsx)("div",{className:b.a.loading,children:Object(u.jsx)(d.a,{})}),Object(u.jsxs)("div",{className:b.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:j})]}),Object(u.jsxs)("div",{className:b.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:f})]}),Object(u.jsx)("div",{className:b.a.actions,children:Object(u.jsx)("button",{onClick:function(){i(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(35),m=c(36);t.default=function(){var e=Object(h.a)(m.a),t=e.sendRequest,c=e.status,r=Object(o.h)();Object(n.useEffect)((function(){"completed"===c&&r.push("/quotes")}),[c,r]);return Object(u.jsx)(f,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.3b76f90d.chunk.js.map