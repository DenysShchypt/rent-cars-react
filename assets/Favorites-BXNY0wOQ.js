import{u as i,j as s,a as e,b as c,r as p,g as x,L as d}from"./index-q4worcir.js";import{s as h,a as f,d as j,S as o,F as g,C as m,M as u}from"./Filter-BmO4osRo.js";const v=t=>t.favorite.listFavoriteCars,C=i.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap:29px;
`,F=i.p`
text-align: center;
margin-top: 100px;
font-weight: 700;
font-size: 56px;
line-height: 1.07;
letter-spacing: 0.02em;
`,L=()=>s.jsx(F,{children:"Will make his choice"}),M=()=>{const t=e(h),a=e(v),n=c();e(f);const l=e(j);return p.useEffect(()=>{n(x("Enter to text"))},[]),s.jsxs("div",{children:[s.jsx(o,{children:s.jsx(g,{})}),s.jsxs(o,{children:[l&&s.jsx(d,{}),a.length===0?s.jsx(L,{}):s.jsx(C,{children:a.map(r=>s.jsx(m,{oneCar:r},r.id))})]}),t&&s.jsx(u,{})]})};export{M as default};
