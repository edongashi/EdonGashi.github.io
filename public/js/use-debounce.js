define(["react"],function(e){"use strict";var u="default"in e?e.default:e;function r(u,r,t={}){const n=t.maxWait,c=e.useRef(null),l=e.useRef([]),a=e.useRef(null),s=e.useRef(!1),f=u,o=e.useCallback(()=>{clearTimeout(a.current),clearTimeout(c.current),c.current=null,l.current=[],a.current=null},[]);e.useEffect(()=>()=>{s.current=!0},[]);return[e.useCallback(function(){l.current=arguments,clearTimeout(a.current),a.current=setTimeout(()=>{o(),s.current||f.apply(null,arguments)},r),n&&!c.current&&(c.current=setTimeout(()=>{const e=l.current;o(),s.current||f.apply(null,e)},n))},[f,n,r,o]),o,()=>{a.current&&(f.apply(null,l.current),o())}]}return{useDebounce:function(e,t,n={}){const[c,l]=u.useState(e),[a,s]=r(u.useCallback(e=>l(e),[]),t,n),f=u.useRef(e);return u.useEffect(()=>{f.current!==e&&(a(e),f.current=e)},[e,a]),[c,s]},useDebouncedCallback:r}});