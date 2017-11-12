((d)=>{
 function f(e){e.preventDefault()}

 function g(e){
	function h(a,b){if(e.ctrlKey){const m=A(t.getElementsByClassName(a)),l=m.length;let i=0;while(i<l){const o=m[i].classList;o.remove(a);o.add(b);++i}}}
	e.stopPropagation();
	const t=e.target;
	if(t.collapsable && e.offsetY<15 && e.offsetX<25){
	 const o=t.classList,c='collapsed',x=p;
	 if(o.toggle(c)){o.remove(x);h(x,c)}else{h(c,x);o.add(x)}
	}
 }

 const p='expanded',A=Array.from,m=A(d.body.getElementsByClassName('tree')),l=m.length;
 let x,i=0;
 while(i<l){
	x=m[i];//console.log('tree',i,x);
	if(x.children.length>0){
	 const o=x.style,n=A(x.getElementsByTagName('li')),t=n.length;
	 let j=0;
	 o.visibility='hidden';
	 x.addEventListener('mousedown',f,false);
	 x.addEventListener('click',g,false);
	 while(j<t){x=n[j];if(x.children.length>0 && x.querySelector('li>ul')!==null){x.collapsable=true;x.classList.add(p)};++j};
	 o.visibility='visible'
	};
	++i;
 }
})(document);