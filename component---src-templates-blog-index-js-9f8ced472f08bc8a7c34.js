"use strict";(self.webpackChunkj_blaszyk_me=self.webpackChunkj_blaszyk_me||[]).push([[280],{4826:function(e,t,r){var n=r(4578),A=r(7294),a=r(5713),o=r(6125),i=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return A.createElement("div",{style:{display:"flex",marginBottom:(0,a.qZ)(2)}},A.createElement("div",{style:{marginRight:(0,a.qZ)(.5),marginBottom:0,width:(0,a.qZ)(2),minWidth:(0,a.qZ)(2),height:(0,a.qZ)(2),borderRadius:"50%",overflow:"hidden",transform:"translateZ(0)"}},A.createElement(o.S,{src:"../assets/profile-pic.jpg",alt:"Profile pic",width:90,height:90,__imageData:r(3492)})),A.createElement("p",{style:{maxWidth:380}},"Personal blog by"," ",A.createElement("a",{href:"https://mobile.twitter.com/jedr_blaszyk"},"Jedr Blaszyk"),"."," ","Tech, bikes & travelling."))},t}(A.Component);t.Z=i},2248:function(e,t,r){var n=r(7294),A=r(7701),a=r(5444);function o(e){var t=e.meta,r=e.image,o=e.title,i=e.description,l=e.slug,c=e.lang,s=void 0===c?"en":c;return n.createElement(a.StaticQuery,{query:"4190863273",render:function(e){var a=e.site.siteMetadata,c=i||a.description,p=""+a.siteUrl+a.image,m=""+a.siteUrl+l,g=""+a.siteUrl+r;return n.createElement(A.ZP,Object.assign({htmlAttributes:{lang:s}},o?{titleTemplate:"%s — "+a.title,title:o}:{title:""+a.title},{meta:[{name:"description",content:c},{property:"og:url",content:m},{property:"og:title",content:o||a.title},{property:"og:description",content:c},{property:"robots",content:"index, follow"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.social.twitter},{name:"twitter:title",content:o||a.title},{name:"twitter:description",content:c}].concat(r?[{property:"og:image",content:g},{name:"twitter:image",content:g}]:[{property:"og:image",content:p},{name:"twitter:image",content:p}]).concat(t)}))}})}o.defaultProps={meta:[],title:"",slug:""},t.Z=o},6466:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(4578),A=r(5444),a=r(5867),o=r(4826),i=r(7294),l=r(5713),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return i.createElement("footer",{style:{marginTop:(0,l.qZ)(2.5),paddingTop:(0,l.qZ)(1)}},i.createElement("div",{style:{float:"right"}},i.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),i.createElement("a",{href:"https://mobile.twitter.com/jedr_blaszyk",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",i.createElement("a",{href:"https://github.com/jedrazb",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",i.createElement("a",{href:"https://www.strava.com/athletes/jedrzej_blaszyk",target:"_blank",rel:"noopener noreferrer"},"strava")," ","•"," ",i.createElement("a",{href:"https://www.yelp.com/user_details?userid=iNhtBqAm2UyyIxqZTc5Drg",target:"_blank",rel:"noopener noreferrer"},"yelp"))},t}(i.Component),s=c,p=r(9924),m=r(2248),g=r(7361),u=r.n(g),f=r(6125),d=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=u()(this,"props.data.site.siteMetadata.title"),t=(this.props.pageContext.langKey,u()(this,"props.data.allMdx.edges"));return i.createElement(p.Z,{location:this.props.location,title:e},i.createElement(m.Z,null),i.createElement("aside",null,i.createElement(o.Z,null)),i.createElement("main",null,t.map((function(e){var t=e.node,r=u()(t,"frontmatter.title")||t.fields.slug,n=u()(t,"frontmatter.indexImage");return i.createElement(A.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--textNormal)"},to:t.fields.slug,rel:"bookmark"},i.createElement("article",{key:t.fields.slug},i.createElement("header",null,i.createElement("h3",{style:{color:"var(--textLink)",fontFamily:"Montserrat, sans-serif",fontSize:(0,l.qZ)(1),marginBottom:(0,l.qZ)(1/4)}},r),i.createElement("small",null,(0,a.Po)(t.frontmatter.date)," • "+(0,a.yu)(t.timeToRead)," • ",(0,a.T8)(t.frontmatter))),i.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.spoiler}}),n&&i.createElement(f.G,{image:(0,f.d)(n),alt:"Blog Image"})))}))),i.createElement(s,null))},t}(i.Component),h=d},5867:function(e,t,r){r.d(t,{T8:function(){return g},Po:function(){return m},yu:function(){return p}});var n=r(2982),A=r(7294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,A=function(e,t){if(null==e)return{};var r,n,A={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(A[r]=e[r]);return A}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(A[r]=e[r])}return A}var i=(0,A.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,l=void 0===i?24:i,c=o(e,["color","size"]);return A.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),A.createElement("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),A.createElement("circle",{cx:"12",cy:"13",r:"4"}))}));i.displayName="Camera";var l=i,c=r(7361),s=r.n(c);function p(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function m(e,t){var r;if(void 0===t&&(t="en"),"function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var A=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(r=e).toLocaleDateString.apply(r,(0,n.Z)(A))}function g(e){var t=(s()(e,"images")||[]).length+(s()(e,"blogImages")||[]).length;return t>0&&A.createElement("span",null,A.createElement(l,{size:11})," "+t)}},3492:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAIDAQQFBv/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwT/2gAMAwEAAhADEAAAAdaXPhCtzBU5lBuh6UIf/8QAGxAAAwEAAwEAAAAAAAAAAAAAAQIDBAARFCL/2gAIAQEAAQUCt8ccEIbDu1GiNNiyplq62Ym+VQyYWPn/AP/EABkRAQACAwAAAAAAAAAAAAAAAAEAEBESIf/aAAgBAwEBPwHYwztCz//EABoRAAMAAwEAAAAAAAAAAAAAAAABAhEhMUH/2gAIAQIBAT8BmK0cF4OVk//EAB0QAAIDAQADAQAAAAAAAAAAAAABAhEhEgMxQUL/2gAIAQEABj8C6t8+lQpKcW/tGyNyaIR65/TFJNM8t7pKxaf/xAAbEAEBAQEBAAMAAAAAAAAAAAABEQAhMVFh8f/aAAgBAQABPyEKEg4qagUyqQ1js/ZdIT0/uvvRw7784SEns1n1XuUDYmX4Izf/2gAMAwEAAgADAAAAELMQfv/EABkRAQEBAAMAAAAAAAAAAAAAAAEAETFBUf/aAAgBAwEBPxDF+yNGhewDm//EABkRAQACAwAAAAAAAAAAAAAAAAEAERAhUf/aAAgBAgEBPxBVOxRUu8DbIT//xAAeEAEAAgMAAgMAAAAAAAAAAAABABEhMUFRYXGRwf/aAAgBAQABPxCgsiBXrNaLeS2qKUFxvo4smZdu3f3FuQKbToeHmMq0mQaB8KPT2XejFq14cbiNYEuV4r8l1gAt9MoVBAAaMdn/2Q=="},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/c243d312fc407e62e7a7b7d5101bd5bd/d0a52/profile-pic.png","srcSet":"/static/c243d312fc407e62e7a7b7d5101bd5bd/d0a52/profile-pic.png 90w,\\n/static/c243d312fc407e62e7a7b7d5101bd5bd/f14a1/profile-pic.png 722w","sizes":"(min-width: 90px) 90px, 100vw"},"sources":[{"srcSet":"/static/c243d312fc407e62e7a7b7d5101bd5bd/60c9b/profile-pic.webp 90w,\\n/static/c243d312fc407e62e7a7b7d5101bd5bd/08353/profile-pic.webp 722w","type":"image/webp","sizes":"(min-width: 90px) 90px, 100vw"}]},"width":90,"height":90}')}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-9f8ced472f08bc8a7c34.js.map