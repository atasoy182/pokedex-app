(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(21),o=n.n(a),i=n(29),s=n(129),u=n(117),l=n(118),d=n(119),j=n(112),p=n(113),h=n(120),b=n(15),f=n(133),m=n(134),O=n(135),v=n(114),g=n(115),x=n(11),y="CHANGE_TYPE",k="GET_TYPES_SUCCESS",C="GET_TYPES_ERROR",_="GET_TYPES_START",T="GET_POKEMONS_SUCCESS",w="GET_POKEMONS_ERROR",E="GET_POKEMONS_START",R="GET_POKEMONS_COUNT",L="ADD_TO_INVENTORY",P="REMOVE_FROM_INVENTORY",N="ADD_OR_REMOVE_FAV",S="GET_POKEMON_SUCCESS",F="GET_POKEMON_FAMILY_SUCCESS",A="GET_POKEMON_CLEAR";function I(e){return{type:L,payload:e}}function M(e){return{type:P,payload:e}}var U=n(22),B=n(3);var G=Object(b.b)((function(e){return{inventory:e.inventoryReducer}}),(function(e){return{actions:{removeFromInventory:Object(x.b)(M,e)}}}))((function(e){return Object(B.jsx)("div",{children:e.inventory.length>0?Object(B.jsxs)(f.a,{nav:!0,inNavbar:!0,children:[Object(B.jsx)(m.a,{nav:!0,caret:!0,children:Object(B.jsx)("span",{className:"effect",children:"Inventory"})}),Object(B.jsxs)(O.a,{right:!0,children:[e.inventory.map((function(t){return Object(B.jsxs)(v.a,{children:[" ",Object(B.jsx)(g.a,{color:"danger",onClick:function(){var n;n=t.pokemon,e.actions.removeFromInventory(n)},children:"X"})," ",t.pokemon.name," ",Object(B.jsx)(g.a,{color:"success",children:t.quantity})]})})),Object(B.jsx)(v.a,{divider:!0}),Object(B.jsxs)(v.a,{children:[" ",Object(B.jsx)(U.b,{to:"/inventory",children:"Inventory"})]})]})]}):Object(B.jsx)(j.a,{children:Object(B.jsx)(p.a,{children:Object(B.jsx)("span",{className:"effect",children:"Inventory Empty"})})})})}));function D(e){return{type:N,payload:e}}var Y=n(18),q=n.n(Y);var K=Object(b.b)((function(e){return{fav:e.favReducer}}),(function(e){return{actions:{addOrRemoveFav:Object(x.b)(D,e)}}}))((function(e){return Object(B.jsx)("div",{children:e.fav.length>0?Object(B.jsxs)(f.a,{nav:!0,inNavbar:!0,children:[Object(B.jsx)(m.a,{nav:!0,caret:!0,children:Object(B.jsx)("span",{className:"effect",children:"Favorites"})}),Object(B.jsx)(O.a,{right:!0,children:e.fav.map((function(t){return Object(B.jsxs)(v.a,{children:[" ",Object(B.jsx)(g.a,{color:"danger",onClick:function(){!function(t){var n=!0;e.fav.find((function(e){return e.id===t.id}))&&(n=!1),e.actions.addOrRemoveFav(t),n?q.a.success(t.name+" added to favorites"):q.a.error(t.name+" removed from favorites")}(t)},children:"X"})," ",t.name]})}))})]}):Object(B.jsx)(j.a,{children:Object(B.jsx)(p.a,{children:Object(B.jsx)("span",{className:"effect",children:"Fav Empty"})})})})})),z=n(116),V=n(136),H=n(66),X=n(67),J=function(e){e.theme;var t=e.toggleTheme;return Object(B.jsxs)(z.a,{style:{padding:5},children:[Object(B.jsx)(H.a,{size:20,style:{marginRight:5}}),Object(B.jsx)(V.a,{bsSize:"lg",onChange:t,type:"switch",id:"exampleCustomSwitch",name:"customSwitch"}),Object(B.jsx)(X.a,{size:20})]})},W=function(e){return Object(B.jsx)("div",{children:Object(B.jsx)(u.a,{light:!0,expand:"md",children:Object(B.jsxs)(l.a,{navbar:!0,children:[Object(B.jsxs)(d.a,{className:"mr-auto",navbar:!0,children:[Object(B.jsx)(j.a,{children:Object(B.jsx)(p.a,{children:Object(B.jsx)(U.b,{to:"/",children:Object(B.jsx)("h5",{children:"Find"})})})}),Object(B.jsx)(G,{}),Object(B.jsx)(K,{})]}),Object(B.jsx)(h.a,{children:Object(B.jsx)(J,{theme:e.themeMode,toggleTheme:e.toggleTheme})})]})})})},Q=n(68),Z=n(69),$=n(77),ee=n(76),te=n(128),ne="https://veekun.com/dex/media/types/en/",ce="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjuWMzNmPYRxOegksXlPtPaiB-4w093AnFg&usqp=CAU",re="https://icon-library.com/images/favorite-icon/favorite-icon-14.jpg";function ae(e,t){return function(n){var c=[],r=function(e){var t=e.map((function(e,t){return new Promise((function(t){fetch(e.url).then((function(e){return e.json()})).then((function(e){c.push({id:e.id,name:e.name,types:e.types.map((function(e){return e.type.name})),imageUrl:e.sprites.other.dream_world.front_default||e.sprites.other["official-artwork"].front_default||ce}),t()}))}))}));Promise.all(t).then((function(){return n(function(e){return{type:T,payload:e}}(c.sort((function(e,t){return e.id-t.id}))))}))};n({type:E});var a="https://pokeapi.co/api/v2/pokemon?offset="+e.toString()+"&limit="+t.toString();return fetch(a).then((function(e){return e.json()})).then((function(e){var t;return n((t=e.count,{type:R,payload:t})),r(e.results)})).catch((function(e){return n({type:w,payload:e})}))}}var oe=n(70),ie=n.n(oe),se=function(e){return Object(B.jsx)(ie.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",pageCount:e.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:e.onPageChange,onPageActive:e.onPageActive,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})},ue=n(14),le=n(121),de=n(62),je=n(122),pe=n(123),he=n(124);var be=Object(b.b)((function(e,t){return{fav:e.favReducer}}),(function(e){return{actions:{addToInventory:Object(x.b)(I,e),addOrRemoveFav:Object(x.b)(D,e)}}}))((function(e){var t=Object(ue.f)(),n=Object(c.useCallback)((function(){return t.push("/"+e.poke.id)}),[t]);return"All"!==e.filter.currentType.name&&!e.poke.types.includes(e.filter.currentType.name.toLowerCase())||""!==e.filter.searchText&&!e.poke.name.toLowerCase().match(e.filter.searchText)?null:Object(B.jsx)("div",{class:"text-center",children:Object(B.jsxs)(le.a,{className:"Regular shadow",children:[Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{children:e.fav.find((function(t){return t.id===e.poke.id}))?Object(B.jsx)("img",{alt:"...",src:re,width:50}):null}),Object(B.jsx)(de.a,{color:".btn-primary-outline",onClick:function(){n()},children:Object(B.jsx)("img",{width:150,height:150,src:e.poke.imageUrl,alt:"...",class:"rounded mx-auto d-block",style:{"object-fit":"contain"}})})]}),Object(B.jsxs)(je.a,{children:[Object(B.jsx)(pe.a,{children:Object(B.jsx)("h5",{children:e.poke.name[0].toUpperCase()+e.poke.name.slice(1).toLowerCase()})}),Object(B.jsx)(he.a,{children:e.poke.types.map((function(e){return Object(B.jsx)("img",{width:40,style:{margin:2},alt:"...",src:ne+e.toLowerCase()+".png"})}))}),Object(B.jsx)(de.a,{color:".btn-primary-outline",onClick:function(){var t;t=e.poke,e.actions.addToInventory({quantity:1,pokemon:t}),q.a.success(t.name+" catched")},children:Object(B.jsx)("img",{alt:"...",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png",width:50})}),Object(B.jsx)(de.a,{color:".btn-primary-outline",onClick:function(){!function(t){var n=!0;e.fav.find((function(e){return e.id===t.id}))&&(n=!1),e.actions.addOrRemoveFav(t),n?q.a.success(t.name+" added to favorites"):q.a.error(t.name+" removed from favorites")}(e.poke)},children:Object(B.jsx)("img",{alt:"...",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/2166px-Heart_icon_red_hollow.svg.png",width:50})})]})]})})})),fe=n(125),me=n(126),Oe=n(127),ve=function(e){return Object(B.jsx)(fe.a,{onSubmit:function(e){e.preventDefault()},children:Object(B.jsx)(me.a,{children:Object(B.jsx)(Oe.a,{onChange:function(t){return e.onChange(t.target.value)},name:"search",placeholder:"Search",className:"rounded"})})})};var ge=Object(b.b)((function(e){return{currentType:e.changeTypeReducer,pokemons:e.pokemonListReducer.allPokemons,isLoading:e.pokemonListReducer.isLoading,count:e.pokemonListReducer.count}}),(function(e){return{actions:{getPokemons:Object(x.b)(ae,e),addToInventory:Object(x.b)(I,e)}}}))((function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){e.actions.getPokemons(0,50)}),[]);return Object(B.jsxs)(s.a,{children:[Object(B.jsx)(ve,{onChange:function(e){return function(e){a(e)}(e)}}),e.isLoading?Object(B.jsx)(te.a,{color:"primary"}):Object(B.jsx)("div",{className:"card-columns",children:e.pokemons.map((function(t,n){return Object(B.jsx)(be,{poke:t,filter:{currentType:e.currentType,searchText:r}},n)}))}),Object(B.jsx)(se,{pageCount:e.count/50,onPageChange:function(t){return n=t.selected,void e.actions.getPokemons(50*n,50);var n}})]})})),xe=n(130),ye=n(131);function ke(e){return{type:y,payload:e}}function Ce(){return function(e){e({type:_});return fetch("https://pokeapi.co/api/v2/type").then((function(e){return e.json()})).then((function(t){return e((n=function(e){return e.map((function(e,t){e.id=t,e.name=e.name[0].toUpperCase()+e.name.slice(1).toLowerCase()})),e.unshift({name:"All"}),e}(t.results),{type:k,payload:n}));var n})).catch((function(t){return e({type:C,payload:t})}))}}var _e,Te=Object(b.b)((function(e){return{currentType:e.changeTypeReducer,types:e.typeListReducer.allTypes,isLoading:e.typeListReducer.isLoading}}),(function(e){return{actions:{getTypes:Object(x.b)(Ce,e),changeType:Object(x.b)(ke,e)}}}))((function(e){Object(c.useEffect)((function(){e.actions.getTypes()}),[]);return Object(B.jsx)(s.a,{children:e.isLoading?Object(B.jsx)(z.a,{children:Object(B.jsx)(te.a,{color:"primary"})}):Object(B.jsx)(xe.a,{flush:!0,children:e.types.map((function(t,n){return Object(B.jsx)(ye.a,{active:t.id===e.currentType.id,onClick:function(){return function(t){e.actions.changeType(t)}(t)},children:Object(B.jsx)("span",{style:{color:"black"},children:t.name})},n)}))})})})),we=n(132),Ee=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){return Object(Q.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"render",value:function(){return Object(B.jsx)("div",{children:Object(B.jsxs)(z.a,{children:[Object(B.jsx)(we.a,{xs:"2",children:Object(B.jsx)(Te,{})}),Object(B.jsx)(we.a,{xs:"10",children:Object(B.jsx)(ge,{})})]})})}}]),n}(c.Component),Re=n(36),Le=n(71),Pe=Object(Re.b)(_e||(_e=Object(Le.a)(["\n  h5, th, td, body, div, .effect {\n    background: ",";\n    color: ",";\n    transition: all 0.50s linear;\n  };\n\n  .chip {\n    display: inline-block;\n    padding: 0 15px;\n    margin: 0 5px;\n    height: 50px;\n    font-size: 16px;\n    line-height: 50px;\n    border-radius: 25px;\n    background-color: ",";\n  };\n\n  .statChip {\n    display: inline-block;\n    padding: 5px;\n    margin: 5px;\n    border-radius: 25px;\n    background-color: ",";\n  };\n\n  "])),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.chipBackground}),(function(e){return e.theme.chipBackground})),Ne={body:"#FFF",text:"#363537",toggleBorder:"#FFF",background:"#363537",chipBackground:"#f1f1f1"},Se={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999",chipBackground:"#c2c0ba"};var Fe=Object(b.b)((function(e){return{inventory:e.inventoryReducer}}),(function(e){return{actions:{removeFromInventory:Object(x.b)(M,e)}}}))((function(e){return Object(B.jsx)("div",{children:Object(B.jsx)("div",{class:"row",children:e.inventory.map((function(t,n){return Object(B.jsxs)(we.a,{xs:"3",children:[Object(B.jsx)(be,{poke:t.pokemon,filter:{currentType:{name:"All"},searchText:""}},n),Object(B.jsxs)("div",{class:"d-flex justify-content-center",children:[Object(B.jsx)(de.a,{color:"danger",onClick:function(){return n=t.pokemon,e.actions.removeFromInventory(n),void q.a.error(n.name+" removed");var n},children:"Release"}),Object(B.jsxs)("span",{children:["Quantity: ",t.quantity]})]}),Object(B.jsx)("p",{})]})}))})})}));function Ae(e){return{type:S,payload:e}}function Ie(e){var t=function(e,t){var n,c=[];if(Object.keys(e.species).length>0){var r=e.species.url.split("/");c.push(r[r.length-2])}return Object.keys(e.evolves_to).length>0&&e.evolves_to.forEach((function(e){if(e.species){var t=e.species.url.split("/");c.push(t[t.length-2])}Object.keys(e.evolves_to).length>0&&e.evolves_to.forEach((function(e){if(e.species){var t=e.species.url.split("/");c.push(t[t.length-2])}}))})),t((n=c,function(e){var t=[],c=n.map((function(e,n){return new Promise((function(n){fetch("https://pokeapi.co/api/v2/pokemon/"+e).then((function(e){return e.json()})).then((function(e){t.push({id:e.id,name:e.name,types:e.types.map((function(e){return e.type.name})),imageUrl:e.sprites.other.dream_world.front_default||e.sprites.other["official-artwork"].front_default||ce}),n()}))}))}));Promise.all(c).then((function(){return e((n=t.sort((function(e,t){return e.id-t.id})),{type:F,payload:n}));var n}))})),c},n=function(e,n){var c="https://pokeapi.co/api/v2/pokemon-species/"+e.id;return fetch(c).then((function(e){return e.json()})).then((function(c){e.details={color:c.color.name,text:c.flavor_text_entries.find((function(e){return"en"===e.language.name})).flavor_text.replace("\f",""),evoUrl:c.evolution_chain.url},function(e,n){var c="";e.details.evoUrl?(c=e.details.evoUrl,fetch(c).then((function(e){return e.json()})).then((function(c){return e.details.evelotions=t(c.chain,n),n(Ae(e))})).catch((function(t){return n(Ae(e))}))):n(Ae(e))}(e,n)})).catch((function(t){return n(Ae(e))}))};return function(t){return fetch("https://pokeapi.co/api/v2/pokemon/"+e).then((function(e){return e.json()})).then((function(e){return n(e,t)})).catch((function(e){}))}}function Me(){return{type:A}}Object(b.b)((function(e,t){var n=t.match.params.pokemon_id;return{pokemon:e.pokemonDetailReducer,id:n,fav:e.favReducer}}),(function(e){return{actions:{getPokemon:Object(x.b)(Ie,e),clearPokemon:Object(x.b)(Me,e),addOrRemoveFav:Object(x.b)(D,e)}}}))((function(e){Object(c.useEffect)((function(){return e.actions.getPokemon(e.id),function(){e.actions.clearPokemon()}}),[]);var t=function(){return e.pokemon.details?e.pokemon.details.color:"black"};return Object(B.jsx)(s.a,{children:Object.keys(e.pokemon).length?Object(B.jsx)("div",{children:Object(B.jsxs)(z.a,{children:[Object(B.jsx)(we.a,{xs:"6",children:Object(B.jsxs)("div",{children:[Object(B.jsx)("img",{width:"60%",src:e.pokemon.sprites.other.dream_world.front_default||e.pokemon.sprites.other["official-artwork"].front_default||ce,alt:"...",class:"rounded mx-auto d-block",style:{"object-fit":"contain"}}),Object(B.jsxs)("div",{class:"text-center",children:[Object(B.jsx)("br",{}),Object(B.jsx)("h4",{children:Object(B.jsx)("b",{children:"ABILITIES"})}),e.pokemon.abilities.map((function(e){return Object(B.jsx)("div",{class:"chip",children:e.ability.name})}))]}),e.pokemon.family?Object(B.jsxs)("div",{class:"text-center",children:[Object(B.jsx)("p",{}),Object(B.jsx)("h4",{children:Object(B.jsx)("b",{children:"FAMILY"})}),Object(B.jsx)("div",{class:"d-flex justify-content-center",children:e.pokemon.family.length>0?e.pokemon.family.map((function(e){return Object(B.jsx)("img",{height:"70",src:e.imageUrl,alt:"...",class:"rounded mx-auto d-block",style:{"object-fit":"contain"}})})):null})]}):null]})}),Object(B.jsxs)(we.a,{xs:"6",children:[Object(B.jsxs)("h1",{className:"display-4",style:{color:t()},children:[e.pokemon.name[0].toUpperCase()+e.pokemon.name.slice(1).toLowerCase(),e.fav.find((function(t){return t.id===e.pokemon.id}))?Object(B.jsx)("img",{onClick:function(){!function(){var t=!0;e.fav.find((function(t){return t.id===e.pokemon.id}))&&(t=!1),e.actions.addOrRemoveFav(e.pokemon),t?q.a.success(e.pokemon.name+" added to favorites"):q.a.error(e.pokemon.name+" removed from favorites")}()},alt:"...",src:re,width:50}):null]}),Object(B.jsxs)("p",{children:[e.pokemon.types.map((function(e){return Object(B.jsx)("img",{width:40,style:{margin:2},alt:"...",src:ne+e.type.name.toLowerCase()+".png"})})),Object(B.jsx)("b",{children:" Height: "})," ",e.pokemon.height," ",Object(B.jsx)("b",{children:" Weight: "})," ",e.pokemon.weight]}),e.pokemon.stats.map((function(e){return Object(B.jsxs)("div",{class:"stats",children:[Object(B.jsx)("b",{style:{color:t()},children:e.stat.name}),Object(B.jsxs)("div",{class:"statChip",children:[" ",e.base_stat]})]})})),Object(B.jsx)("p",{}),Object(B.jsx)("p",{children:e.pokemon.details?e.pokemon.details.text:""})]})]})}):null})}));var Ue=function(){var e=function(){var e=Object(c.useState)("light"),t=Object(i.a)(e,2),n=t[0],r=t[1],a=function(e){window.localStorage.setItem("theme",e),r(e)};return Object(c.useEffect)((function(){var e=window.localStorage.getItem("theme");e&&r(e)}),[]),[n,function(){a("light"===n?"dark":"light")}]}(),t=Object(i.a)(e,2),n=t[0],r=t[1],a="light"===n?Ne:Se;return Object(B.jsxs)(Re.a,{theme:a,children:[Object(B.jsx)(Pe,{}),Object(B.jsxs)(s.a,{children:[Object(B.jsx)(W,{themeMode:a,toggleTheme:r}),Object(B.jsxs)(ue.c,{children:[Object(B.jsx)(ue.a,{path:"/",exact:!0,component:Ee}),Object(B.jsx)(ue.a,{path:"/pokedex-app/",component:Ee}),Object(B.jsx)(ue.a,{path:"/inventory",exact:!0,component:Fe}),Object(B.jsx)(ue.a,{component:Ee})]})]})]})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},Ge=(n(109),{currentType:{name:"All"},types:{isLoading:!1,allTypes:[],message:""},pokemons:{isLoading:!1,allPokemons:[],message:""},inventory:[],pokemon:{},favs:[]});var De=n(12);var Ye=n(32);var qe=Object(x.c)({changeTypeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge.currentType,t=arguments.length>1?arguments[1]:void 0;return t.type===y?t.payload:e},typeListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge.types,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(De.a)(Object(De.a)({},e),{},{isLoading:!0,message:""});case k:return Object(De.a)(Object(De.a)({},e),{},{allTypes:t.payload,isLoading:!1});case C:return Object(De.a)(Object(De.a)({},e),{},{message:t.payload,isLoading:!1});default:return e}},pokemonListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge.pokemons,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(De.a)(Object(De.a)({},e),{},{isLoading:!0,message:""});case R:return Object(De.a)(Object(De.a)({},e),{},{count:t.payload});case T:return Object(De.a)(Object(De.a)({},e),{},{allPokemons:t.payload,isLoading:!1});case w:return Object(De.a)(Object(De.a)({},e),{},{message:t.payload,isLoading:!1});default:return e}},inventoryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge.inventory,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:var n=e.find((function(e){return e.pokemon.id===t.payload.pokemon.id}));if(n){var c=e.map((function(e){return e.pokemon.id===t.payload.pokemon.id?Object.assign({},n,{quantity:n.quantity+1}):e}));return c}return[].concat(Object(Ye.a)(e),[Object(De.a)({},t.payload)]);case P:return e.filter((function(e){return e.pokemon.id!==t.payload.id}));default:return e}},pokemonDetailReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge.pokemon,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(De.a)(Object(De.a)({},e),t.payload);case F:return Object(De.a)(Object(De.a)({},e),{family:t.payload});case A:return{};default:return e}},favReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge.favs,t=arguments.length>1?arguments[1]:void 0;if(t.type===N){var n=e.find((function(e){return e.id===t.payload.id}));if(n){var c=Object(Ye.a)(e);return c.filter((function(e){return e.id!==t.payload.id}))}var r=Object(Ye.a)(e);return r.push(t.payload),r}return e}}),Ke=qe,ze=n(75);n(110);var Ve=Object(x.d)(Ke,Object(x.a)(ze.a));o.a.render(Object(B.jsx)(U.a,{children:Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(b.a,{store:Ve,children:Object(B.jsx)(Ue,{})})})}),document.getElementById("root")),Be()}},[[111,1,2]]]);
//# sourceMappingURL=main.17c9cb74.chunk.js.map