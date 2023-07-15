"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6260],{6260:(M,u,s)=>{s.r(u),s.d(u,{HomePageModule:()=>T});var l=s(6814),o=s(7852),m=s(95),g=s(8234),d=s(5861),f=s(2644),e=s(6689),p=s(7081),h=s(6466);function b(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",7),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.openGames())}),e._uU(1,"Open saved games"),e.qZA()}}function _(n,r){1&n&&(e.TgZ(0,"ion-button",8),e._uU(1,"Login"),e.qZA())}function P(n,r){1&n&&(e.TgZ(0,"ion-button",9),e._uU(1,"Register"),e.qZA())}function v(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",7),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.logout())}),e._uU(1,"Logout"),e.qZA()}}function H(n,r){if(1&n&&(e.TgZ(0,"ion-item")(1,"ion-thumbnail",10),e._UZ(2,"img",11),e.qZA(),e.TgZ(3,"ion-label")(4,"h3"),e._uU(5),e.qZA(),e._UZ(6,"div",12),e.TgZ(7,"button",13),e._uU(8," Read more "),e.qZA()()()),2&n){const t=r.$implicit;e.xp6(2),e.Q6J("src",t.images.small,e.LSH),e.xp6(3),e.Oqu(t.name),e.xp6(1),e.Q6J("innerHTML",t.description,e.oJD),e.xp6(1),e.MGl("routerLink","/game-details/",t.id,"")}}const Z=[{path:"",component:(()=>{class n{constructor(t,i,a){this.boardGameService=t,this.authService=i,this.router=a,this.isLoggedIn=!1}ngOnInit(){var t=this;const i=this.authService.getAuth();(0,f.Aj)(i,function(){var a=(0,d.Z)(function*(c){t.isLoggedIn=!!c});return function(c){return a.apply(this,arguments)}}()),this.boardGameService.getHighestRankedGames().subscribe(a=>{this.featuredGames=a.games})}onSearch(t){this.boardGameService.searchGames(t.target.value).subscribe(a=>{this.featuredGames=a.games.slice(0,3)},a=>{console.error(a)})}toggleDescription(t){t.collapsed=!t.collapsed}openGames(){this.router.navigate(["/games-list"])}logout(){this.authService.logout(),this.router.navigate(["/login"])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.o),e.Y36(h.e),e.Y36(g.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:18,vars:5,consts:[[1,"header-container"],[3,"click",4,"ngIf"],["slot","end"],["routerLink","/login",4,"ngIf"],["routerLink","/register",4,"ngIf"],["placeholder","Search for board games",3,"ionChange"],[4,"ngFor","ngForOf"],[3,"click"],["routerLink","/login"],["routerLink","/register"],["slot","start"],["alt","Game Image",3,"src"],[1,"game-description",3,"innerHTML"],["ion-button","","color","primary",1,"ion-padding",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-header")(3,"ion-toolbar")(4,"div",0)(5,"ion-title"),e._uU(6,"Home"),e.qZA(),e.YNc(7,b,2,0,"ion-button",1),e.qZA()()(),e.TgZ(8,"ion-buttons",2),e.YNc(9,_,2,0,"ion-button",3),e.YNc(10,P,2,0,"ion-button",4),e.YNc(11,v,2,0,"ion-button",1),e.qZA()()(),e.TgZ(12,"ion-content")(13,"ion-searchbar",5),e.NdJ("ionChange",function(c){return i.onSearch(c)}),e.qZA(),e.TgZ(14,"h2"),e._uU(15,"Featured Games"),e.qZA(),e.TgZ(16,"ion-list"),e.YNc(17,H,9,4,"ion-item",6),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("ngIf",i.isLoggedIn),e.xp6(2),e.Q6J("ngIf",!i.isLoggedIn),e.xp6(1),e.Q6J("ngIf",!i.isLoggedIn),e.xp6(1),e.Q6J("ngIf",i.isLoggedIn),e.xp6(6),e.Q6J("ngForOf",i.featuredGames))},dependencies:[l.sg,l.O5,o.YG,o.Sm,o.W2,o.Gu,o.Ie,o.Q$,o.q_,o.VI,o.Bs,o.wd,o.sr,o.j9,o.YI,g.rH],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.game-description[_ngcontent-%COMP%]{max-height:2.4em;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.header-container[_ngcontent-%COMP%]{display:flex;align-items:center}ion-title[_ngcontent-%COMP%]{flex:1;text-align:left}ion-button[_ngcontent-%COMP%]{margin-left:10px}"]}),n})()}];let x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(Z),g.Bz]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,m.u5,o.Pc,x]}),n})()}}]);