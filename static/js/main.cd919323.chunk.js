(this["webpackJsonpreet-website"]=this["webpackJsonpreet-website"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(6),i=c.n(n),o=(c(11),c(2)),r=c(0),l=function(e){var t=e.id,c=e.text,s=e.section,a=e.clickStatus,n=e.handleClick;return Object(r.jsx)("a",{id:t,className:a?"nav-bar-link-mobile":"nav-bar-link",href:s,onClick:n,children:c})},d=function(e){var t=e.clickStatus,c=e.handleClick;return Object(r.jsxs)("div",{id:t?"nav-bar-links-mobile":"nav-bar-links",className:"d-flex justify-content-around",children:[Object(r.jsx)(l,{id:"home-button",text:"Home",section:"#home",clickStatus:t,handleClick:c}),Object(r.jsx)(l,{id:"about-button",text:"About",section:"#about",clickStatus:t,handleClick:c}),Object(r.jsx)(l,{id:"projects-button",text:"Projects",section:"#projects",clickStatus:t,handleClick:c}),Object(r.jsx)(l,{id:"services-button",text:"Services",section:"#services",clickStatus:t,handleClick:c}),Object(r.jsx)(l,{id:"contact-button",text:"Contact",section:"#contact",clickStatus:t,handleClick:c})]})},j=function(e){var t=e.logo,c=e.id,s=e.section;return Object(r.jsx)("div",{id:"reet-logo",children:Object(r.jsx)("a",{id:c,href:s,children:Object(r.jsx)("img",{id:"nav-bar-logo",src:t,alt:"Reet Property Services Company Logo"})})})},b=function(e){var t=e.handleClick,c=e.clickStatus;return Object(r.jsx)("div",{id:"mobile-menu-button",onClick:t,children:Object(r.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})})},m=function(e){var t=e.logo,c=Object(s.useState)(!1),a=Object(o.a)(c,2),n=a[0],i=a[1],l=function(){i(!n)};return Object(r.jsxs)("nav",{id:"nav-bar",className:"d-flex justify-content-between align-items-center",children:[Object(r.jsx)(j,{logo:t,id:"logo-button",section:"#home"}),Object(r.jsx)(b,{clickStatus:n,handleClick:l}),Object(r.jsx)(d,{clickStatus:n,handleClick:l})]})},h=function(e){var t=e.id,c=e.BootstrapClassName,s=e.caption;return Object(r.jsx)("div",{id:t,className:"home-footer-icon d-flex justify-content-center align-items-center",children:Object(r.jsxs)("figure",{className:"home-footer-fig d-flex flex-column justify-content-center align-items-center",children:[Object(r.jsxs)("div",{className:"row fa-stack fa-3x",children:[Object(r.jsx)("i",{className:"fas fa-circle fa-stack-2x"}),Object(r.jsx)("i",{className:c})]}),Object(r.jsx)("figcaption",{className:"row",children:s})]})})},u=function(){return Object(r.jsxs)("div",{id:"home-footer-icons",className:"d-flex justify-content-around align-items-center",children:[Object(r.jsx)(h,{id:"roof-plumbing-icon",BootstrapClassName:"fas fa-wrench fa-stack-1x fa-xs",caption:"Roofing"}),Object(r.jsx)(h,{id:"carpentry-icon",BootstrapClassName:"fas fa-hammer fa-stack-1x fa-xs",caption:"Carpentry"}),Object(r.jsx)(h,{id:"renovations-icon",BootstrapClassName:"fas fa-paint-roller fa-stack-1x fa-xs",caption:"Renovations"}),Object(r.jsx)(h,{id:"handyman-icon",BootstrapClassName:"fas fa-toolbox fa-stack-1x fa-xs",caption:"Handyman"}),Object(r.jsx)(h,{id:"general-upkeep-icon",BootstrapClassName:"fas fa-screwdriver fa-stack-1x fa-xs",caption:"Maintenance"})]})},f=function(){return Object(r.jsx)("div",{id:"home-footer",children:Object(r.jsx)(u,{})})},x=function(){var e=Object(s.useState)(1),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){console.log(c),"undefined"!==typeof window&&(window.onscroll=function(){var e=window.pageYOffset,t=document.body.scrollHeight-window.innerHeight;console.log(t),e>0&&e<=t?(a(0),console.log(e)):a(1)}),console.log(c)}),[c]),Object(r.jsxs)("div",{className:"arrow",style:{opacity:c,transition:"all 1000ms ease-in-out"},children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})},p=function(e){var t=e.logo;return Object(r.jsxs)("div",{id:"home",children:[Object(r.jsx)(m,{logo:t}),Object(r.jsx)("div",{id:"home-main-logo",children:Object(r.jsx)("img",{className:"img-fluid",src:t,alt:"Reet Property Services Company Logo - A Coffs Harbour local company offering quality at affordable rates."})}),Object(r.jsx)(f,{}),Object(r.jsx)(x,{})]})},O=function(){return Object(r.jsxs)("div",{id:"about-text",children:[Object(r.jsx)("h2",{style:{marginInline:"auto",marginBottom:"2em",border:"solid 7px rgba(141, 139, 139, 0.7)",width:"fit-content",padding:"0.2em 1em",letterSpacing:"0.5em"},children:"About"}),Object(r.jsxs)("p",{style:{margin:0},children:["At Reet we take a fresh approach to property service and maintenance, whether it be residential or commercial. We are constantly seeking ways to incorporate the industry's latest trends and ideas into our proven and tested delivery in order to offer a service dedicated to satisfying our clients' needs.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"With over 18 years experience in the construction and property service industry, at Reet we have the skill set to turn your projects into realities.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Our aim is to provide a headache-free experience for all parties involved, allowing our clients to spend more time enjoying the results of their projects, regardless of magnitude.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"We are a small local business with big ideas and want to deliver long lasting, quality projects for our clients. Servicing Coffs Harbour and surrounds, we wish to improve local home and business standards. Please contact us for a free quote."]})]})},g=function(){return Object(r.jsx)("div",{id:"about",children:Object(r.jsx)(O,{})})},v=c.p+"static/media/KitchenRenovation.99545377.jpg",y=c.p+"static/media/SchoolMaintenance.6df8f360.jpg",N=c.p+"static/media/ShopFitOut.73e1110d.jpg",k=c.p+"static/media/ColorbondRoof.80acecae.jpg",w=c.p+"static/media/BedroomRenovation.d8d52d86.jpg",S=c.p+"static/media/ShopDisplay.1865f192.jpg",C=c.p+"static/media/SunroomRenovation.308e4a43.jpg",F=c.p+"static/media/MerbauDeck.80344c52.jpg",R=[{img:"".concat(v),title:"Kitchen Makeover",description:"Full kitchen renovation, including the installation of new cabinetry, sink, designer splashback tiles and canopy."},{img:"".concat(y),title:"Roof Cleanup",description:"Roof and general maintenance at school grounds."},{img:"".concat(N),title:"Shop Fit Out",description:"Blank canvas turned into a modern AFL store. Stud walls and columns framed, plastered and slat panels installed."},{img:"".concat(k),title:"Roof Install",description:"COLORBOND\xae roof installed on stunning house."},{img:"".concat(w),title:"Bedroom Revamp",description:"Kids bedroom renovation. New skirting boards and a fresh paint job gave this room a brand new face."},{img:"".concat(S),title:"Retail Emergency",description:"Broken checkout desk repaired within the hour."},{img:"".concat(C),title:"Lounge Away",description:"Sun room modernised. New tiles and a fresh paint job made this room a weekend favourite."},{img:"".concat(F),title:"Summer Ready",description:"Merbau decking fitted around garden with a raised platform for chilling or entertaining."}],P=function(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(r.jsxs)("div",{id:"slider",children:[R.map((function(e,t){return Object(r.jsxs)("div",{id:"slides-container",children:[Object(r.jsx)("div",{className:t===c?"project-slide-c current":"project-slide-c",style:{backgroundImage:"url(".concat(R[c].img,")")},children:Object(r.jsxs)("div",{className:t===c?"project-description":"hidden-project-description",children:[Object(r.jsx)("h3",{children:R[c].title}),Object(r.jsx)("p",{children:R[c].description})]})}),Object(r.jsx)("div",{className:t===c?"project-slide-l left":"project-slide-l",style:{backgroundImage:"url(".concat(R[0===c?R.length-1:c-1].img,")")}}),Object(r.jsx)("div",{className:t===c?"project-slide-r right":"project-slide-r",style:{backgroundImage:"url(".concat(R[c===R.length-1?0:c+1].img,")")}})]})})),Object(r.jsxs)("div",{className:"arrow-buttons",children:[Object(r.jsx)("button",{id:"prev",onClick:function(){a(0===c?R.length-1:c-1)},children:Object(r.jsx)("i",{className:"fas fa-arrow-left"})}),Object(r.jsx)("button",{id:"next",onClick:function(){c===R.length-1?a(0):a(c+1)},children:Object(r.jsx)("i",{className:"fas fa-arrow-right"})})]})]})},B=function(){return Object(r.jsx)("div",{id:"projects",children:Object(r.jsx)(P,{})})},L=function(){return Object(r.jsxs)("div",{id:"services",className:"d-flex",children:[Object(r.jsxs)("div",{id:"services-roofing",className:"service-box",children:[Object(r.jsxs)("div",{className:"service-icon row fa-stack fa-3x",children:[Object(r.jsx)("i",{className:"fas fa-circle fa-stack-2x"}),Object(r.jsx)("i",{className:"fas fa-wrench fa-stack-1x fa-xs"})]}),Object(r.jsx)("h4",{children:"Roofing"}),Object(r.jsx)("hr",{style:{width:"50%"}}),Object(r.jsx)("p",{children:"Roofs are our biggest defence against weather conditions. With over 10 years experience in the roof-plumbing sector, leave all your roofing issues to us."}),Object(r.jsx)("hr",{style:{width:"50%"}}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Gutters"}),Object(r.jsx)("li",{children:"Laser lights"}),Object(r.jsx)("li",{children:"Roof cleaning"}),Object(r.jsx)("li",{children:"Down pipes"}),Object(r.jsx)("li",{children:"Flashings"})]})]}),Object(r.jsxs)("div",{id:"services-carpentry",className:"service-box",children:[Object(r.jsxs)("div",{className:"service-icon row fa-stack fa-3x",children:[Object(r.jsx)("i",{className:"fas fa-circle fa-stack-2x"}),Object(r.jsx)("i",{className:"fas fa-hammer fa-stack-1x fa-xs"})]}),Object(r.jsx)("h4",{children:"Carpentry"}),Object(r.jsx)("hr",{style:{width:"50%"}}),Object(r.jsx)("p",{children:"Let us tend to your carpentry needs. Whether you plan to build a brand new deck or wish to hang doors in your home, we will provide a finish you will be proud of."}),Object(r.jsx)("hr",{style:{width:"50%"}}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Decks"}),Object(r.jsx)("li",{children:"Planter boxes"}),Object(r.jsx)("li",{children:"Weatherboards"}),Object(r.jsx)("li",{children:"Arcs and skirts"}),Object(r.jsx)("li",{children:"Fences"})]})]}),Object(r.jsxs)("div",{id:"services-renovations",className:"service-box",children:[Object(r.jsxs)("div",{className:"service-icon row fa-stack fa-3x",children:[Object(r.jsx)("i",{className:"fas fa-circle fa-stack-2x"}),Object(r.jsx)("i",{className:"fas fa-paint-roller fa-stack-1x fa-xs"})]}),Object(r.jsx)("h4",{children:"Renovations"}),Object(r.jsx)("hr",{style:{width:"50%"}}),Object(r.jsx)("p",{children:"Need a new bathroom? Want to freshen up your kitchen or upgrade the bedrooms? Realised you deserve a cinema room? Allow us to help you see your reno through."}),Object(r.jsx)("hr",{style:{width:"50%"}}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Kitchen"}),Object(r.jsx)("li",{children:"Bathrooms"}),Object(r.jsx)("li",{children:"Outdoor areas"}),Object(r.jsx)("li",{children:"Living spaces"}),Object(r.jsx)("li",{children:"Bedrooms"})]})]}),Object(r.jsxs)("div",{id:"services-handyman",className:"service-box",children:[Object(r.jsxs)("div",{className:"service-icon row fa-stack fa-3x",children:[Object(r.jsx)("i",{className:"fas fa-circle fa-stack-2x"}),Object(r.jsx)("i",{className:"fas fa-toolbox fa-stack-1x fa-xs"})]}),Object(r.jsx)("h4",{children:"Handyman"}),Object(r.jsx)("hr",{style:{width:"50%"}}),Object(r.jsx)("p",{children:"As the saying goes, no job too big or too small. We are here to assist with all your needs. Our handymen are friendly, professional, and always up to the task."}),Object(r.jsx)("hr",{style:{width:"50%"}}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Tiling"}),Object(r.jsx)("li",{children:"Gardening"}),Object(r.jsx)("li",{children:"Furniture assembly"}),Object(r.jsx)("li",{children:"Lock repair"}),Object(r.jsx)("li",{children:"Painting"})]})]}),Object(r.jsxs)("div",{id:"services-maintenance",className:"service-box",children:[Object(r.jsxs)("div",{className:"service-icon row fa-stack fa-3x",children:[Object(r.jsx)("i",{className:"fas fa-circle fa-stack-2x"}),Object(r.jsx)("i",{className:"fas fa-screwdriver fa-stack-1x fa-xs"})]}),Object(r.jsx)("h4",{children:"Maintenance"}),Object(r.jsx)("hr",{style:{width:"50%"}}),Object(r.jsx)("p",{children:"It is smarter to maintain your property than to do nothing and pay for big repairs later. We offer all-round residential and commercial building maintenance."}),Object(r.jsx)("hr",{style:{width:"50%"}}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Yearly checks"}),Object(r.jsx)("li",{children:"Bi-annual checks"}),Object(r.jsx)("li",{children:"Bathroom regrouting"}),Object(r.jsx)("li",{children:"Fascia and gutters"}),Object(r.jsx)("li",{children:"Tap Leaks"})]})]})]})},I=c(3),M=c(5),W=function(e){var t=e.nextStep,c=e.handleChange,a=e.values,n=e.step,i=Object(s.useState)({}),l=Object(o.a)(i,2),d=l[0],j=l[1],b=Object(s.useState)(!1),m=Object(o.a)(b,2),h=m[0],u=m[1];Object(s.useEffect)((function(){console.log(d),0===Object.keys(d).length&&h&&(t(),console.log(a))}),[d,h,a,t]);var f=function(e){var t={};return e.name?(e.name.length<2||!/^[a-z ,.'-]+$/i.test(e.name))&&(t.name="Please enter a valid name"):t.name="Please enter your name",e.email?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e.email)||(t.email="Please enter a valid email address"):t.email="Please enter your email address",e.phoneNumber?/^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/.test(e.phoneNumber)||(t.phoneNumber="Please enter a valid phone number"):t.phoneNumber="Please enter your phone number",e.postcode?/^[0-9]{4}$/.test(e.postcode)||(t.postcode="Please enter a valid postcode"):t.postcode="Please enter your postcode",e.message||(t.message="Please tell us what your enquiry is about"),t};return Object(r.jsxs)("form",{id:"contact-form-".concat(n),className:"contact-form",children:[Object(r.jsxs)("div",{className:"wide-fields",children:[Object(r.jsx)("input",{id:"name-".concat(n),className:"form-input name",type:"text",placeholder:" ",name:"name",value:a.name,onChange:c,form:"contact-form-".concat(n)}),Object(r.jsx)("label",{htmlFor:"name-".concat(n),className:"form-label",children:"Name"}),Object(r.jsx)("label",{htmlFor:"name-".concat(n),className:"form-placeholder",children:"John Doe"}),d.name&&Object(r.jsx)("label",{htmlFor:"name-".concat(n),className:"form-error-message",children:d.name})]}),Object(r.jsxs)("div",{className:"wide-fields",children:[Object(r.jsx)("input",{id:"email-".concat(n),className:"form-input email",type:"email",placeholder:" ",name:"email",value:a.email,onChange:c,form:"contact-form-".concat(n)}),Object(r.jsx)("label",{htmlFor:"email-".concat(n),className:"form-label",children:"Email"}),Object(r.jsx)("label",{htmlFor:"email-".concat(n),className:"form-placeholder",children:"johndoe@email.com"}),d.email&&Object(r.jsx)("label",{htmlFor:"email-".concat(n),className:"form-error-message",children:d.email})]}),Object(r.jsxs)("div",{className:"double-field",children:[Object(r.jsxs)("div",{className:"narrow-fields",children:[Object(r.jsx)("input",{id:"phone-number-".concat(n),className:"form-input phone-number",type:"text",placeholder:" ",min:"3",max:"14",name:"phoneNumber",value:a.phoneNumber,onChange:c,form:"contact-form-".concat(n)}),Object(r.jsx)("label",{htmlFor:"phone-number-".concat(n),className:"form-label",children:"Phone Number"}),Object(r.jsx)("label",{htmlFor:"phone-number-".concat(n),className:"form-placeholder",children:"0432 123 432"}),d.phoneNumber&&Object(r.jsx)("label",{htmlFor:"phone-number-".concat(n),className:"form-error-message",children:d.phoneNumber})]}),Object(r.jsxs)("div",{className:"narrow-fields",children:[Object(r.jsx)("input",{id:"postcode-".concat(n),className:"form-input postcode",type:"text",placeholder:" ",min:"4",max:"10",name:"postcode",value:a.postcode,onChange:c,form:"contact-form-".concat(n)}),Object(r.jsx)("label",{htmlFor:"postcode-".concat(n),className:"form-label",children:"Postcode"}),Object(r.jsx)("label",{htmlFor:"postcode-".concat(n),className:"form-placeholder",children:"1234"}),d.postcode&&Object(r.jsx)("label",{htmlFor:"postcode-".concat(n),className:"form-error-message",children:d.postcode})]})]}),Object(r.jsxs)("div",{className:"wide-fields",children:[Object(r.jsx)("textarea",{id:"message-".concat(n),className:"form-input message",placeholder:" ",name:"message",rows:"3",value:a.message,onChange:c,form:"contact-form-".concat(n)}),Object(r.jsx)("label",{htmlFor:"message-".concat(n),className:"form-label",children:"Message"}),Object(r.jsxs)("label",{htmlFor:"message-".concat(n),className:"form-placeholder",children:["Hi, ",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"I was wondering..."]}),d.message&&Object(r.jsx)("label",{htmlFor:"message-".concat(n),className:"form-error-message-textarea",children:d.message})]}),Object(r.jsx)("button",{id:"continue",type:"button",onClick:function(e){e.preventDefault(),u(!0),j(f(a))},form:"contact-form-".concat(n),children:"Continue"})]})},A=function(e){var t=e.nextStep,c=e.prevStep,s=e.values,a=e.step,n=e.errorStep;return Object(r.jsxs)("form",{id:"contact-form-".concat(a),className:"contact-form",onSubmit:function(e){e.preventDefault();var c={service_id:"service_250kjte",template_id:"contact-form-enquiry",user_id:"user_6LMG3zdIbnw6nMwtXsMxm",template_params:{name:s.name,email:s.email,phoneNumber:s.phoneNumber,postcode:s.postcode,message:s.message}};fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(c)}).then((function(e){console.log("".concat(e.status," ").concat(e.statusText)),e.ok?t():n()})).catch((function(e){console.log("".concat(e," ").concat(e)),n()}))},style:{backgroundColor:"#f5f5f5"},children:[Object(r.jsxs)("div",{className:"wide-fields",children:[Object(r.jsx)("input",{id:"name-".concat(a),className:"form-input disabled name",type:"text",name:"name",value:s.name,form:"contact-form-".concat(a),disabled:!0}),Object(r.jsx)("label",{htmlFor:"name-".concat(a),className:"form-label disabled",children:"Name"})]}),Object(r.jsxs)("div",{className:"wide-fields",children:[Object(r.jsx)("input",{id:"email-".concat(a),className:"form-input disabled",type:"email",name:"email",value:s.email,form:"contact-form-".concat(a),disabled:!0}),Object(r.jsx)("label",{htmlFor:"email-".concat(a),className:"form-label disabled",children:"Email"})]}),Object(r.jsxs)("div",{className:"double-field",children:[Object(r.jsxs)("div",{className:"narrow-fields",children:[Object(r.jsx)("input",{id:"phone-number-".concat(a),className:"form-input disabled phone-number",type:"text",name:"phoneNumber",value:s.phoneNumber,form:"contact-form-".concat(a),disabled:!0}),Object(r.jsx)("label",{htmlFor:"phone-number-".concat(a),className:"form-label disabled",children:"Phone Number"})]}),Object(r.jsxs)("div",{className:"narrow-fields",children:[Object(r.jsx)("input",{id:"postcode-".concat(a),className:"form-input disabled postcode",type:"text",name:"postcode",value:s.postcode,form:"contact-form-".concat(a),disabled:!0}),Object(r.jsx)("label",{htmlFor:"postcode-".concat(a),className:"form-label disabled",children:"Postcode"})]})]}),Object(r.jsxs)("div",{className:"wide-fields",children:[Object(r.jsx)("textarea",{id:"message-".concat(a),className:"form-input disabled message",name:"message",rows:"3",value:s.message,form:"contact-form-".concat(a),disabled:!0}),Object(r.jsx)("label",{htmlFor:"message-".concat(a),className:"form-label disabled",children:"Message"})]}),Object(r.jsxs)("div",{id:"form-confirm-buttons",className:"double-field",children:[Object(r.jsx)("button",{id:"edit",type:"button",onClick:function(e){e.preventDefault(),c()},form:"contact-form-".concat(a),children:"Edit"}),Object(r.jsx)("button",{id:"confirm",type:"submit",form:"contact-form-".concat(a),children:"Confirm"})]})]})},T=function(e){var t=e.values,c=e.step;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{id:"contact-form-".concat(c),className:"contact-form",style:{backgroundColor:"transparent",border:"1px solid #f5f5f5",color:"white",textAlign:"center"},children:[Object(r.jsx)("h2",{style:{fontSize:"3em"},children:"Success!"}),Object(r.jsx)("div",{children:Object(r.jsx)("i",{style:{fontSize:"4em",color:"#9aeba6"},className:"fa-regular fa-circle-check"})}),Object(r.jsxs)("p",{style:{fontSize:"1.1em",padding:"1em"},children:["Thank you for getting in touch with us,"," ",Object(r.jsx)("span",{style:{color:"#9aeba6"},children:t.name}),"!",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"We'll be in touch with you shortly."]})]})})},D=function(e){var t=e.step;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{id:"contact-form-".concat(t),className:"contact-form",style:{backgroundColor:"transparent",border:"1px solid #f5f5f5",color:"white",textAlign:"center"},children:[Object(r.jsx)("h2",{style:{fontSize:"3em"},children:"Oops..."}),Object(r.jsx)("div",{children:Object(r.jsx)("i",{style:{fontSize:"4em",color:"#eba69a"},className:"fas fa-exclamation-triangle"})}),Object(r.jsxs)("p",{style:{fontSize:"1.1em",padding:"1em"},children:["We apologise but something went wrong.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"We'll be solving this shortly.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"For now, please contact us via email or call.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Thank you for your understanding and patience!"]})]})})},E=c.p+"static/media/CoffsHarbourMapShot.da67522b.jpg",H=function(){return Object(r.jsxs)("div",{id:"contact-card",children:[Object(r.jsx)("h2",{id:"contact-title",children:"GET IN TOUCH"}),Object(r.jsx)("div",{id:"map-shot",style:{backgroundImage:"url(".concat(E,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),Object(r.jsxs)("div",{id:"contact-details",children:[Object(r.jsxs)("div",{id:"contact-details-phone-number",children:[Object(r.jsx)("i",{className:"fas fa-mobile-alt"}),Object(r.jsx)("a",{href:"tel:0413777667",children:"0413 777 667"})]}),Object(r.jsxs)("div",{id:"contact-details-email-address",children:[Object(r.jsx)("i",{className:"far fa-envelope"}),"info@reetpropertyservices.com.au"]})]})]})},z=function(){var e=Object(s.useState)(1),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)({name:"",email:"",phoneNumber:"",postcode:"",message:""}),i=Object(o.a)(n,2),l=i[0],d=i[1],j=function(){a(c+1)},b=function(){a(c-1)},m=function(){a(4)},h=function(e){var t=e.target,c=t.name,s=t.value;d((function(e){return Object(M.a)(Object(M.a)({},e),{},Object(I.a)({},c,s))}))};return Object(r.jsxs)("div",{id:"contact",children:[function(e){switch(e){case 1:return Object(r.jsx)(W,{nextStep:j,handleChange:h,values:l,step:e});case 2:return Object(r.jsx)(A,{nextStep:j,prevStep:b,values:l,step:e,errorStep:m});case 3:return Object(r.jsx)(T,{values:l,step:e});case 4:return Object(r.jsx)(D,{step:e});default:return Object(r.jsx)("h1",{children:"Give us a call!"})}}(c),Object(r.jsx)(H,{})]})},_=function(e){var t=e.logo;return Object(r.jsxs)("div",{id:"footer",children:[Object(r.jsxs)("div",{id:"copyright-notice",children:[Object(r.jsx)("span",{children:Object(r.jsx)("a",{id:"footer-logo-button",href:"#home",children:Object(r.jsx)("img",{id:"footer-logo",src:t,alt:"Reet Property Services Company Logo",style:{height:"20px",marginInlineEnd:"10px"}})})}),"Copyright \xa9 2022 Reet Property Services"]}),Object(r.jsxs)("div",{id:"website-author",children:["Website by"," ",Object(r.jsx)("a",{href:"https://www.linkedin.com/in/eisaaccura/",target:"_blank",rel:"noreferrer",children:"Ernesto Isaaccura"})]})]})},q=c.p+"static/media/ReetLogo.66c9c497.svg",G=c.p+"static/media/ReetLogoBlack.4b8cab99.svg",J=function(){return Object(r.jsxs)("div",{className:"site",children:[Object(r.jsx)(p,{logo:q}),Object(r.jsx)(g,{}),Object(r.jsx)(B,{}),Object(r.jsx)(L,{}),Object(r.jsx)(z,{}),Object(r.jsx)(_,{logo:G})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root")),K()}},[[13,1,2]]]);
//# sourceMappingURL=main.cd919323.chunk.js.map