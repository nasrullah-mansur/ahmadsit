import{m as p,j as s,L as d}from"./app-DzrhHto8.js";import{I as l}from"./InputError-BnU8tDJo.js";import{I as c}from"./InputLabel-D4-4NqyK.js";import{P as u}from"./PrimaryButton-DxuUfJLZ.js";import{T as x}from"./TextInput-IZPe62Hh.js";import{G as f}from"./GuestLayout-BOftk6AO.js";import"./Footer-ClXcTUtY.js";import"./HeadSection-DaTIbAEn.js";import"./Navbar-D15WqA2M.js";import"./iconBase-ka-p_4ZY.js";import"./index-DIWSSRAH.js";function L(){const{data:a,setData:o,post:e,processing:t,errors:m,reset:i}=p({password:""}),n=r=>{r.preventDefault(),e(route("password.confirm"),{onFinish:()=>i("password")})};return s.jsxs(f,{children:[s.jsx(d,{title:"Confirm Password"}),s.jsxs("div",{className:"mt-[120px] max-w-md mx-auto bg-gray-100 p-4",children:[s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(c,{htmlFor:"password",value:"Password"}),s.jsx(x,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>o("password",r.target.value)}),s.jsx(l,{message:m.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(u,{className:"ms-4",disabled:t,children:"Confirm"})})]})]})]})}export{L as default};
