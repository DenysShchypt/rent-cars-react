import{u as h,j as e,a as r,b,c as M,r as f,s as g,f as v,d as m,L as S,e as y}from"./index-q4worcir.js";import{s as F,a as w,b as E,c as T,d as q,S as u,F as D,C as x,M as I}from"./Filter-BmO4osRo.js";const O=h.div`
display: flex;
flex-wrap: wrap;
row-gap: 50px;
column-gap:29px;
`,R=h.button`
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 100px;
margin-bottom: 150px;
background-color:#fff;
border: none;
text-align: center;
font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 1.5;
text-decoration: underline;
text-decoration-skip-ink: none;
color: #3470ff;
`,z=({handlePage:o})=>e.jsx(R,{onClick:o,type:"button",children:"Load more"}),A=()=>{const o=r(F),d=r(w),s=r(E),c=r(T),C=r(q),a=b(),[p,j]=M(),i=p.get("make"),l=p.get("rentPrice");f.useEffect(()=>{if(!i||!l){a(g(s));return}const t=s.filter(n=>n.make===i&&+n.rentalPrice.slice(1)<Number(l));a(g(t))},[a,i,s,l]),f.useEffect(()=>{a(v()),a(m(1))},[a]);const k=t=>{t.preventDefault();const n=t.currentTarget.elements.make.value,L=t.currentTarget.elements.rentPrice.value;j({make:n,rentPrice:L})},P=()=>{a(m(c+1)),a(y(c+1))};return e.jsxs("div",{children:[e.jsx(u,{children:e.jsx(D,{handleSearchCar:k})}),e.jsxs(u,{children:[C&&e.jsx(S,{}),e.jsx(O,{children:d.length===0&&s.length!==0?s.map(t=>e.jsx(x,{oneCar:t},t.id)):d.map(t=>e.jsx(x,{oneCar:t},t.id))})]}),e.jsx(u,{children:c<=3&&e.jsx(z,{handlePage:P})}),o&&e.jsx(I,{})]})};export{A as default};
