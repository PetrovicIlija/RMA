"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(v,l,r)=>{r.r(l),r.d(l,{HomePageModule:()=>H});var c=r(4755),o=r(5562),u=r(5030),g=r(3693),e=r(3020),m=r(4831),d=r(2891);function p(n,i){1&n&&(e.TgZ(0,"ion-button",8),e._uU(1,"Login"),e.qZA())}function h(n,i){1&n&&(e.TgZ(0,"ion-button",9),e._uU(1,"Register"),e.qZA())}function f(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",1),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.logout())}),e._uU(1,"Logout"),e.qZA()}}function b(n,i){if(1&n&&(e.TgZ(0,"ion-item")(1,"ion-thumbnail",10),e._UZ(2,"img",11),e.qZA(),e.TgZ(3,"ion-label")(4,"h3"),e._uU(5),e.qZA(),e._UZ(6,"div",12),e.TgZ(7,"button",13),e._uU(8," Read more "),e.qZA()()()),2&n){const t=i.$implicit;e.xp6(2),e.Q6J("src",t.images.small,e.LSH),e.xp6(3),e.Oqu(t.name),e.xp6(1),e.Q6J("innerHTML",t.description,e.oJD),e.xp6(1),e.MGl("routerLink","/game-details/",t.id,"")}}const P=[{path:"",component:(()=>{class n{constructor(t,a,s){this.boardGameService=t,this.authService=a,this.router=s,this.isLoggedIn=!1}ngOnInit(){this.authService.isLoggedIn().then(t=>{this.isLoggedIn=!0}),this.boardGameService.getHighestRankedGames().subscribe(t=>{this.featuredGames=t.games})}onSearch(t){this.boardGameService.searchGames(t.target.value).subscribe(s=>{this.featuredGames=s.games.slice(0,3)},s=>{console.error(s)})}toggleDescription(t){t.collapsed=!t.collapsed}openGames(){this.router.navigate(["/games-list"])}logout(){throw new Error("Method not implemented.")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.o),e.Y36(d.e),e.Y36(g.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:19,vars:4,consts:[[1,"header-container"],[3,"click"],["slot","end"],["routerLink","/login",4,"ngIf"],["routerLink","/register",4,"ngIf"],[3,"click",4,"ngIf"],["placeholder","Search for board games",3,"ionChange"],[4,"ngFor","ngForOf"],["routerLink","/login"],["routerLink","/register"],["slot","start"],["alt","Game Image",3,"src"],[1,"game-description",3,"innerHTML"],["ion-button","","color","primary",1,"ion-padding",3,"routerLink"]],template:function(t,a){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-header")(3,"ion-toolbar")(4,"div",0)(5,"ion-title"),e._uU(6,"Home"),e.qZA(),e.TgZ(7,"ion-button",1),e.NdJ("click",function(){return a.openGames()}),e._uU(8,"Open saved games"),e.qZA()()()(),e.TgZ(9,"ion-buttons",2),e.YNc(10,p,2,0,"ion-button",3),e.YNc(11,h,2,0,"ion-button",4),e.YNc(12,f,2,0,"ion-button",5),e.qZA()()(),e.TgZ(13,"ion-content")(14,"ion-searchbar",6),e.NdJ("ionChange",function(Z){return a.onSearch(Z)}),e.qZA(),e.TgZ(15,"h2"),e._uU(16,"Featured Games"),e.qZA(),e.TgZ(17,"ion-list"),e.YNc(18,b,9,4,"ion-item",7),e.qZA()()),2&t&&(e.xp6(10),e.Q6J("ngIf",!a.isLoggedIn),e.xp6(1),e.Q6J("ngIf",!a.isLoggedIn),e.xp6(1),e.Q6J("ngIf",a.isLoggedIn),e.xp6(6),e.Q6J("ngForOf",a.featuredGames))},dependencies:[c.sg,c.O5,o.YG,o.Sm,o.W2,o.Gu,o.Ie,o.Q$,o.q_,o.VI,o.Bs,o.wd,o.sr,o.j9,o.YI,g.rH],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.game-description[_ngcontent-%COMP%]{max-height:2.4em;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.header-container[_ngcontent-%COMP%]{display:flex;align-items:center}ion-title[_ngcontent-%COMP%]{flex:1;text-align:left}ion-button[_ngcontent-%COMP%]{margin-left:10px}"]}),n})()}];let _=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(P),g.Bz]}),n})(),H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,u.u5,o.Pc,_]}),n})()}}]);