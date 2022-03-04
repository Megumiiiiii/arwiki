"use strict";(self.webpackChunkarwiki=self.webpackChunkarwiki||[]).push([[409],{93409:(At,S,l)=>{l.r(S),l.d(S,{UserPanelModule:()=>wt});var p=l(69808),y=l(60870),w=l(68555),b=l(70655),g=l(42654),M=l(5254),u=l(48966),s=l(93075),v=l(89716),t=l(5e3),x=l(46649),k=l(32094),Z=l(50384),C=l(57261),_=l(25245),m=l(67322),D=l(77531),T=l(85899),f=l(47423);function I(a,o){if(1&a){const n=t.EpF();t.ynx(0),t.TgZ(1,"mat-form-field",7)(2,"mat-label"),t._uU(3,"Recipient"),t.qZA(),t._UZ(4,"input",8),t.qZA(),t.TgZ(5,"mat-form-field",9)(6,"mat-label"),t._uU(7,"Transfer amount"),t.qZA(),t._UZ(8,"input",10),t.TgZ(9,"span",11),t._uU(10,"$WIKI"),t.qZA(),t.TgZ(11,"mat-hint",12),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return i.amount.setValue(i.data.balance)}),t._uU(12,"Use max"),t.qZA()(),t.BQk()}if(2&a){const n=t.oxw();t.xp6(5),t.MGl("hintLabel","Total $WIKI available: ",n.data.balance,""),t.xp6(3),t.Q6J("max",n.data.balance)}}function B(a,o){1&a&&(t.TgZ(0,"div",14),t._UZ(1,"mat-progress-bar",15),t._uU(2," \u{1f680} Sending tokens, please hold on ... "),t.qZA())}function Y(a,o){if(1&a&&(t.TgZ(0,"div")(1,"div"),t._uU(2," \u{1f973} Tokens sent! You can follow your tx status here: "),t.TgZ(3,"a",16),t._uU(4),t.qZA()(),t.TgZ(5,"div"),t._uU(6,"You can close this window now."),t.qZA()()),2&a){const n=t.oxw(2);t.xp6(3),t.MGl("href","https://viewblock.io/arweave/tx/",n.transferTX,"",t.LSH),t.xp6(1),t.hij("https://viewblock.io/arweave/tx/",n.transferTX," ")}}function V(a,o){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,B,3,0,"div",13),t.YNc(2,Y,7,2,"div",3),t.qZA()),2&a){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",!n.transferTX),t.xp6(1),t.Q6J("ngIf",n.transferTX)}}let O=(()=>{class a{constructor(n,e,i,c,h,d){this.data=n,this._arweave=e,this._arwikiTokenContract=i,this._auth=c,this._snackBar=h,this._dialogRef=d,this.frmTransfer=new s.cw({recipient:new s.NI("",[s.kI.required]),amount:new s.NI("0",[s.kI.required,s.kI.min(1)])}),this.loadingSendTokens=!1,this.transferTX="",this.transferSubscription=g.w.EMPTY}ngOnInit(){}ngOnDestroy(){this.transferSubscription&&this.transferSubscription.unsubscribe()}get amount(){return this.frmTransfer.get("amount")}get recipient(){return this.frmTransfer.get("recipient")}onSubmit(){this.transferTokens(this.recipient.value,+this.amount.value)}transferTokens(n,e){this.loadingSendTokens=!0,this.transferSubscription=this._arwikiTokenContract.transferTokens(n,this._auth.getPrivateKey(),e,v.y[0]).subscribe({next:i=>{this.transferTX=`${i}`},error:i=>{this.message(`${i}`,"error"),this._dialogRef.close()}})}message(n,e="",i){this._snackBar.open(n,"X",{duration:5e3,horizontalPosition:"center",verticalPosition:i,panelClass:e})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(u.WI),t.Y36(x.N),t.Y36(k.d),t.Y36(Z.e),t.Y36(C.ux),t.Y36(u.so))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-dialog-transfer-tokens"]],decls:16,vars:4,consts:[["mat-dialog-title",""],[1,"title-icon"],[3,"formGroup","ngSubmit"],[4,"ngIf"],["align","end"],["mat-button","","type","submit",3,"disabled"],["mat-flat-button","","mat-dialog-close","","cdkFocusInitial",""],["appearance","outline"],["matInput","","placeholder","Arweave address","autocomplete","off","formControlName","recipient"],["appearance","outline",3,"hintLabel"],["matInput","","placeholder","$WIKI amount","type","number","min","0","formControlName","amount","autocomplete","off",3,"max"],["matSuffix",""],["align","end",1,"link",3,"click"],["class","text-center",4,"ngIf"],[1,"text-center"],["mode","indeterminate"],["mat-button","","target","_blank",1,"text-center",3,"href"]],template:function(n,e){1&n&&(t.TgZ(0,"h2",0)(1,"mat-icon",1),t._uU(2,"send"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Transfer $WIKI tokens"),t.qZA()(),t.TgZ(5,"form",2),t.NdJ("ngSubmit",function(){return e.onSubmit()}),t.TgZ(6,"mat-dialog-content"),t.YNc(7,I,13,2,"ng-container",3),t.YNc(8,V,3,2,"div",3),t.qZA(),t.TgZ(9,"mat-dialog-actions",4)(10,"button",5)(11,"mat-icon"),t._uU(12,"send"),t.qZA(),t._uU(13," Send "),t.qZA(),t.TgZ(14,"button",6),t._uU(15,"Close"),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("formGroup",e.frmTransfer),t.xp6(2),t.Q6J("ngIf",!e.loadingSendTokens),t.xp6(1),t.Q6J("ngIf",e.loadingSendTokens),t.xp6(2),t.Q6J("disabled",!e.frmTransfer.valid||e.loadingSendTokens))},directives:[u.uh,_.Hw,s._Y,s.JL,s.sg,u.xY,p.O5,m.KE,m.hX,D.Nt,s.Fj,s.JJ,s.u,s.qQ,s.wV,s.Fd,m.R9,m.bx,T.pW,f.zs,u.H8,f.lW,u.ZT],styles:[".title-icon[_ngcontent-%COMP%]{font-size:40px;line-height:40px;width:40px;height:40px;vertical-align:middle}.mat-dialog-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:12px;vertical-align:middle;font-size:26px;font-family:Roboto Mono,monospace;line-height:38px}.mat-form-field[_ngcontent-%COMP%]{width:100%}.link[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}"]}),a})();var A=l(86087),r=l(32075),U=l(53251);function q(a,o){1&a&&(t.TgZ(0,"div",25),t._UZ(1,"mat-progress-bar",26),t._uU(2," \u{1f510} Locking tokens, please hold on ... "),t.qZA())}function N(a,o){if(1&a&&(t.TgZ(0,"div")(1,"div"),t._uU(2," \u{1f973} Tokens locked! You can follow your tx status here: "),t.TgZ(3,"a",27),t._uU(4),t.qZA()(),t.TgZ(5,"div"),t._uU(6,"You can close this window now."),t.qZA()()),2&a){const n=t.oxw(2);t.xp6(3),t.MGl("href","https://viewblock.io/arweave/tx/",n.transferTX,"",t.LSH),t.xp6(1),t.hij("https://viewblock.io/arweave/tx/",n.transferTX," ")}}function L(a,o){if(1&a&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&a){const n=t.oxw(2);t.xp6(1),t.hij(" Error: ",n.errorMsg," ")}}function J(a,o){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,q,3,0,"div",24),t.YNc(2,N,7,2,"div",4),t.YNc(3,L,2,1,"div",4),t.qZA()),2&a){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",!n.transferTX),t.xp6(1),t.Q6J("ngIf",n.transferTX),t.xp6(1),t.Q6J("ngIf",n.errorMsg)}}function Q(a,o){if(1&a){const n=t.EpF();t.ynx(0),t.TgZ(1,"mat-form-field",28)(2,"mat-label"),t._uU(3,"Block length"),t.qZA(),t._UZ(4,"input",29),t.TgZ(5,"mat-hint",30),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return i.lockLength.setValue(i.data.lockMaxLength)}),t._uU(6,"Use max"),t.qZA()(),t.TgZ(7,"mat-form-field",28)(8,"mat-label"),t._uU(9,"Amount"),t.qZA(),t._UZ(10,"input",31),t.TgZ(11,"span",32),t._uU(12,"$WIKI"),t.qZA(),t.TgZ(13,"mat-hint",30),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return i.amount.setValue(i.data.balance)}),t._uU(14,"Use max"),t.qZA()(),t.BQk()}if(2&a){const n=t.oxw();t.xp6(1),t.hYB("hintLabel","Min lock length: ",n.data.lockMinLength," blocks ",n.formatBlocks(n.data.lockMinLength),""),t.xp6(3),t.Q6J("max",n.data.lockMaxLength),t.xp6(3),t.MGl("hintLabel","Total $WIKI available: ",n.data.balance,""),t.xp6(3),t.Q6J("max",n.data.balance)}}function $(a,o){1&a&&(t.TgZ(0,"th",33),t._uU(1," Balance "),t.qZA())}function R(a,o){if(1&a&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&a){const n=o.$implicit;t.xp6(1),t.hij(" ",n.balance," ")}}function X(a,o){1&a&&(t.TgZ(0,"th",33),t._uU(1," Locked Length "),t.qZA())}function H(a,o){if(1&a&&(t.TgZ(0,"td",34),t._uU(1),t._UZ(2,"br"),t._uU(3),t.qZA()),2&a){const n=o.$implicit;t.xp6(1),t.hij(" Start: ",n.start," "),t.xp6(2),t.hij(" End: ",n.end," ")}}function W(a,o){1&a&&(t.TgZ(0,"th",33),t._uU(1," Page Data "),t.qZA())}function j(a,o){if(1&a&&(t.ynx(0),t._uU(1),t.BQk()),2&a){const n=t.oxw().$implicit;t.xp6(1),t.lnq(" ",n.lang,"/",n.slug," (",n.action,") ")}}function z(a,o){if(1&a&&(t.TgZ(0,"td",34),t.YNc(1,j,2,3,"ng-container",4),t.qZA()),2&a){const n=o.$implicit;t.xp6(1),t.Q6J("ngIf",n.slug)}}function F(a,o){1&a&&(t.TgZ(0,"th",33),t._uU(1," Status "),t.qZA())}function E(a,o){if(1&a&&(t.TgZ(0,"div",37),t._uU(1),t.qZA()),2&a){const n=t.oxw().$implicit,e=t.oxw();t.xp6(1),t.hij(" Locked! (",e.formatBlocks(n.end-e.data.currentHeight),") ")}}function K(a,o){1&a&&(t.TgZ(0,"div",38),t._uU(1," Tokens can be unlocked! "),t.qZA())}function G(a,o){if(1&a&&(t.TgZ(0,"td",34),t.YNc(1,E,2,1,"div",35),t.YNc(2,K,2,0,"div",36),t.qZA()),2&a){const n=o.$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngIf",n.end>=e.data.currentHeight),t.xp6(1),t.Q6J("ngIf",n.end<e.data.currentHeight)}}function tt(a,o){1&a&&t._UZ(0,"tr",39)}function nt(a,o){1&a&&t._UZ(0,"tr",40)}function at(a,o){1&a&&(t.TgZ(0,"div",25),t._UZ(1,"mat-progress-bar",26),t._uU(2," \u{1f511} Unlocking vault, please hold on ... "),t.qZA())}function et(a,o){if(1&a&&(t.TgZ(0,"div")(1,"div"),t._uU(2," \u{1f973} Tokens unlocked! You can follow your tx status here: "),t.TgZ(3,"a",27),t._uU(4),t.qZA()(),t.TgZ(5,"div"),t._uU(6,"You can close this window now."),t.qZA()()),2&a){const n=t.oxw(2);t.xp6(3),t.MGl("href","https://viewblock.io/arweave/tx/",n.unlockVaultTX,"",t.LSH),t.xp6(1),t.hij("https://viewblock.io/arweave/tx/",n.unlockVaultTX," ")}}function ot(a,o){if(1&a&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&a){const n=t.oxw(2);t.xp6(1),t.hij(" Error: ",n.errorMsg," ")}}function it(a,o){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,at,3,0,"div",24),t.YNc(2,et,7,2,"div",4),t.YNc(3,ot,2,1,"div",4),t.qZA()),2&a){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",!n.unlockVaultTX),t.xp6(1),t.Q6J("ngIf",n.unlockVaultTX),t.xp6(1),t.Q6J("ngIf",n.errorMsg)}}const lt=function(){return[5,10,20]};let st=(()=>{class a{constructor(n,e,i,c,h,d){this.data=n,this._arweave=e,this._arwikiTokenContract=i,this._auth=c,this._snackBar=h,this._dialogRef=d,this.frmTransfer=new s.cw({lockLength:new s.NI(this.data.lockMinLength,[s.kI.required]),amount:new s.NI("0",[s.kI.required,s.kI.min(1)])}),this.loadingSendTokens=!1,this.transferTX="",this.errorMsg="",this.columnsToDisplay=["balance","lockedLength","page","status"],this.loadingUnlockVault=!1,this.unlockVaultTX="",this.lockVaultSubscription=g.w.EMPTY,this.unlockVaultSubscription=g.w.EMPTY}ngOnInit(){this.dataSource=new r.by(this.data.vault)}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnDestroy(){this.lockVaultSubscription&&this.lockVaultSubscription.unsubscribe(),this.unlockVaultSubscription&&this.unlockVaultSubscription.unsubscribe()}get amount(){return this.frmTransfer.get("amount")}get lockLength(){return this.frmTransfer.get("lockLength")}onSubmit(){this.lockTokensInVault(+this.lockLength.value,+this.amount.value)}lockTokensInVault(n,e){return(0,b.mG)(this,void 0,void 0,function*(){this.loadingSendTokens=!0,this.lockVaultSubscription=this._arwikiTokenContract.lockTokensInVault(n,e,this._auth.getPrivateKey(),v.y[0]).subscribe({next:i=>{this.transferTX=`${i}`},error:i=>{this.errorMsg=`${i}`,this.message(`${i}`)}})})}message(n,e="",i){this._snackBar.open(n,"X",{duration:5e3,horizontalPosition:"center",verticalPosition:i,panelClass:e})}formatBlocks(n){return this._arweave.formatBlocks(n)}unlockVault(){this.loadingUnlockVault=!0,this.unlockVaultSubscription=this._arwikiTokenContract.unlockVault(this._auth.getPrivateKey(),v.y[0]).subscribe({next:n=>{this.unlockVaultTX=`${n}`},error:n=>{this.errorMsg=`${n}`,this.message(`${n}`,"error")}})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(u.WI),t.Y36(x.N),t.Y36(k.d),t.Y36(Z.e),t.Y36(C.ux),t.Y36(u.so))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-dialog-vault"]],viewQuery:function(n,e){if(1&n&&t.Gf(A.NW,5),2&n){let i;t.iGM(i=t.CRH())&&(e.paginator=i.first)}},decls:43,vars:11,consts:[["mat-dialog-title",""],[1,"title-icon","yellow"],["animationDuration","0ms"],["label","Lock balance",1,"tab-container"],[4,"ngIf"],[1,"frm-transfer",3,"formGroup","ngSubmit"],["mat-button","","type","submit",1,"big-btn",3,"disabled"],["label","View vault"],[1,"tab-container"],["mat-table","",3,"dataSource"],["matColumnDef","balance"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","lockedLength"],["matColumnDef","page"],["matColumnDef","status"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of vault",3,"pageSizeOptions"],["label","Unlock vault"],["mat-button","","type","button",1,"big-btn",3,"disabled","click"],[1,"yellow"],["align","end"],["mat-flat-button","","mat-dialog-close","","cdkFocusInitial",""],["class","text-center",4,"ngIf"],[1,"text-center"],["mode","indeterminate"],["mat-button","","target","_blank",1,"text-center",3,"href"],["appearance","outline",3,"hintLabel"],["matInput","","type","number","min","data.lockMinLength","placeholder","Time that balance must be locked","autocomplete","off","formControlName","lockLength",3,"max"],["align","end",1,"link",3,"click"],["matInput","","placeholder","$WIKI amount","type","number","min","0","formControlName","amount","autocomplete","off",3,"max"],["matSuffix",""],["mat-header-cell",""],["mat-cell",""],["class","red",4,"ngIf"],["class","green",4,"ngIf"],[1,"red"],[1,"green"],["mat-header-row",""],["mat-row",""]],template:function(n,e){1&n&&(t.TgZ(0,"h2",0)(1,"mat-icon",1),t._uU(2,"vpn_key"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Vault"),t.qZA()(),t.TgZ(5,"mat-dialog-content")(6,"mat-tab-group",2)(7,"mat-tab",3),t.YNc(8,J,4,3,"div",4),t.TgZ(9,"form",5),t.NdJ("ngSubmit",function(){return e.onSubmit()}),t.YNc(10,Q,15,5,"ng-container",4),t.TgZ(11,"button",6)(12,"mat-icon"),t._uU(13,"lock"),t.qZA(),t._uU(14," Lock balance "),t.qZA()()(),t.TgZ(15,"mat-tab",7)(16,"div",8)(17,"table",9),t.ynx(18,10),t.YNc(19,$,2,0,"th",11),t.YNc(20,R,2,1,"td",12),t.BQk(),t.ynx(21,13),t.YNc(22,X,2,0,"th",11),t.YNc(23,H,4,2,"td",12),t.BQk(),t.ynx(24,14),t.YNc(25,W,2,0,"th",11),t.YNc(26,z,2,1,"td",12),t.BQk(),t.ynx(27,15),t.YNc(28,F,2,0,"th",11),t.YNc(29,G,3,2,"td",12),t.BQk(),t.YNc(30,tt,1,0,"tr",16),t.YNc(31,nt,1,0,"tr",17),t.qZA(),t._UZ(32,"mat-paginator",18),t.qZA()(),t.TgZ(33,"mat-tab",19)(34,"div",8),t.YNc(35,it,4,3,"div",4),t.TgZ(36,"button",20),t.NdJ("click",function(){return e.unlockVault()}),t.TgZ(37,"mat-icon",21),t._uU(38,"vpn_key"),t.qZA(),t._uU(39," Unlock vault "),t.qZA()()()()(),t.TgZ(40,"mat-dialog-actions",22)(41,"button",23),t._uU(42,"Close"),t.qZA()()),2&n&&(t.xp6(8),t.Q6J("ngIf",e.loadingSendTokens),t.xp6(1),t.Q6J("formGroup",e.frmTransfer),t.xp6(1),t.Q6J("ngIf",!e.loadingSendTokens),t.xp6(1),t.Q6J("disabled",!e.frmTransfer.valid||e.loadingSendTokens),t.xp6(6),t.Q6J("dataSource",e.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",e.columnsToDisplay),t.xp6(1),t.Q6J("matRowDefColumns",e.columnsToDisplay),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(10,lt)),t.xp6(3),t.Q6J("ngIf",e.loadingUnlockVault),t.xp6(1),t.Q6J("disabled",e.loadingUnlockVault))},directives:[u.uh,_.Hw,u.xY,U.SP,U.uX,p.O5,T.pW,f.zs,s._Y,s.JL,s.sg,m.KE,m.hX,D.Nt,s.qQ,s.wV,s.Fd,s.Fj,s.JJ,s.u,m.bx,m.R9,f.lW,r.BZ,r.w1,r.fO,r.ge,r.Dz,r.ev,r.as,r.XQ,r.nj,r.Gk,A.NW,u.H8,u.ZT],styles:[".title-icon[_ngcontent-%COMP%]{font-size:40px;line-height:40px;width:40px;height:40px;vertical-align:middle}.mat-dialog-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:12px;vertical-align:middle;font-size:26px;font-family:Roboto Mono,monospace;line-height:38px}.mat-form-field[_ngcontent-%COMP%]{width:100%}.link[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}.big-btn[_ngcontent-%COMP%]{width:100%;margin-top:20px}.tab-container[_ngcontent-%COMP%]{max-width:500px}table[_ngcontent-%COMP%]{width:100%}.frm-transfer[_ngcontent-%COMP%]{padding-top:20px}"]}),a})();var rt=l(69817),ct=l(34594),P=l(9224);function ut(a,o){1&a&&t._UZ(0,"mat-progress-bar",5)}function dt(a,o){if(1&a&&(t.TgZ(0,"mat-icon",6),t._uU(1),t.qZA()),2&a){const n=t.oxw();t.xp6(1),t.Oqu(n.icon)}}let gt=(()=>{class a{constructor(){this.loading=!1,this.balance="",this.label="",this.unit="",this.icon=""}ngOnInit(){}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-balance-card"]],inputs:{loading:"loading",balance:"balance",label:"label",unit:"unit",icon:"icon"},decls:10,vars:5,consts:[["mode","indeterminate","class","fadeIn",4,"ngIf"],[1,"text-center"],[1,"bn"],["class","lh-icon",4,"ngIf"],[1,"lbl-card"],["mode","indeterminate",1,"fadeIn"],[1,"lh-icon"]],template:function(n,e){1&n&&(t.YNc(0,ut,1,0,"mat-progress-bar",0),t.TgZ(1,"mat-card")(2,"div",1)(3,"span",2),t._uU(4),t.qZA(),t._uU(5),t.qZA(),t.TgZ(6,"div",1),t.YNc(7,dt,2,1,"mat-icon",3),t.TgZ(8,"strong",4),t._uU(9),t.qZA()()()),2&n&&(t.Q6J("ngIf",e.loading),t.xp6(4),t.Oqu(e.balance),t.xp6(1),t.hij(" ",e.unit," "),t.xp6(2),t.Q6J("ngIf",e.icon),t.xp6(2),t.Oqu(e.label))},directives:[p.O5,T.pW,P.a8,_.Hw],styles:[".bn[_ngcontent-%COMP%]{font-size:40px;padding-bottom:10px}.lh-icon[_ngcontent-%COMP%]{line-height:20px;vertical-align:middle}.lbl-card[_ngcontent-%COMP%]{margin-left:4px}"]}),a})();var mt=l(97134),pt=l(41496);function ht(a,o){1&a&&t._UZ(0,"mat-progress-bar",34)}function ft(a,o){1&a&&(t.TgZ(0,"th",35),t._uU(1," Label "),t.qZA())}function bt(a,o){if(1&a&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&a){const n=o.$implicit;t.xp6(1),t.hij(" ",n.label," ")}}function _t(a,o){1&a&&(t.TgZ(0,"th",35),t._uU(1," Value "),t.qZA())}function Tt(a,o){if(1&a&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&a){const n=o.$implicit;t.xp6(1),t.hij(" ",n.specialValue+" ("+n.value+")"," ")}}function vt(a,o){1&a&&t._UZ(0,"tr",37)}function xt(a,o){1&a&&t._UZ(0,"tr",38)}const Ct=[{path:"",component:(()=>{class a{constructor(n,e,i,c,h,d,Dt){this._snackBar=n,this._arweave=e,this._auth=i,this._userSettings=c,this._location=h,this._arwikiTokenContract=d,this._dialog=Dt,this.mainAddress=this._auth.getMainAddressSnapshot(),this.balance="",this.balancePST="",this.balancePSTVault="",this.balancePSTStaked="",this.balanceSubscription=g.w.EMPTY,this.balancePSTSubscription=g.w.EMPTY,this.pstSettingsSubscription=g.w.EMPTY,this.allBalancesSubscription=g.w.EMPTY,this.networkInfoSubscription=g.w.EMPTY,this.pstSettings=[],this.loadingBalance=!1,this.loadingBalancePST=!1,this.loadingSettings=!1,this.loadingAllBalances=!1,this.txmessage="",this.lastTransactionID=this._arweave.getLastTransactionID(this.mainAddress),this.daoSettings=[],this.displayedColumnsDaoSettings=["label","value"],this.loadingTotalSupply=!1,this.totalSupplySubscription=g.w.EMPTY,this.totalSupply=0,this.lockMinLength=0,this.lockMaxLength=0,this.vault=null,this.currentHeight=0}ngOnInit(){this.loadingBalance=!0,this.balanceSubscription=this._arweave.getAccountBalance(this.mainAddress).subscribe({next:n=>{this.balance=n,this.loadingBalance=!1},error:n=>{this.message(n,"error"),this.loadingBalance=!1}}),this.loadingBalancePST=!0,this.balancePSTSubscription=this._arwikiTokenContract.getBalance(this.mainAddress,this._auth.getPrivateKey()).subscribe({next:n=>{const i=+n.vaultBalance,c=+n.stakingBalance;this.balancePST=""+ +n.unlockedBalance,this.balancePSTVault=`${i}`,this.balancePSTStaked=`${c}`,this.loadingBalancePST=!1},error:n=>{this.message(n,"error"),this.loadingBalancePST=!1}}),this.loadingSettings=!0,this.pstSettingsSubscription=this._arwikiTokenContract.getSettings().subscribe({next:n=>{this.pstSettings=n,this.daoSettings=[];const e=[{key:"quorum",label:"Quorum",formatFunction:this.decimalToPercentage},{key:"support",label:"Support",formatFunction:this.decimalToPercentage},{key:"lockMinLength",label:"Lock minimum length",formatFunction:i=>this.formatBlocks(i)},{key:"lockMaxLength",label:"Lock maximum length",formatFunction:i=>this.formatBlocks(i)},{key:"voteLength",label:"Vote length",formatFunction:i=>this.formatBlocks(i)},{key:"pageApprovalLength",label:"Page approval length",formatFunction:i=>this.formatBlocks(i)}];for(const i in e){const c=e[i].key,h=e[i].formatFunction,d=this.pstSettings.get(c);"lockMinLength"===c&&(this.lockMinLength=d),"lockMaxLength"===c&&(this.lockMaxLength=d),this.daoSettings.push({position:i+1,label:c,value:d,specialValue:h(d)})}this.loadingSettings=!1},error:n=>{this.message(n,"error"),this.loadingSettings=!1}}),this.loadingTotalSupply=!0,this.totalSupplySubscription=this._arwikiTokenContract.getTotalSupply().subscribe({next:n=>{this.totalSupply=+n,this.loadingTotalSupply=!1},error:n=>{this.message(n,"error"),this.loadingTotalSupply=!1}}),this.loadingAllBalances=!0,this.allBalancesSubscription=this._arwikiTokenContract.getAllBalances().subscribe({next:n=>{this.vault=Object.prototype.hasOwnProperty.call(n.vault,this.mainAddress)?n.vault[this.mainAddress]:[],this.loadingAllBalances=!1},error:n=>{this.message(n,"error"),this.loadingAllBalances=!1}}),this.networkInfoSubscription=(0,M.D)(this._arweave.arweave.network.getInfo()).subscribe({next:n=>{this.currentHeight=n.height},error:n=>{this.message(n,"error")}})}ngOnDestroy(){this.balanceSubscription&&this.balanceSubscription.unsubscribe(),this.balancePSTSubscription&&this.balancePSTSubscription.unsubscribe(),this.pstSettingsSubscription&&this.pstSettingsSubscription.unsubscribe(),this.allBalancesSubscription&&this.allBalancesSubscription.unsubscribe(),this.networkInfoSubscription&&this.networkInfoSubscription.unsubscribe()}message(n,e="",i){this._snackBar.open(n,"X",{duration:4e3,horizontalPosition:"center",verticalPosition:i,panelClass:e})}goBack(){this._location.back()}getPSTContractAddress(){return this._arwikiTokenContract.contractAddress}formatBlocks(n){return this._arweave.formatBlocks(n)}decimalToPercentage(n){return 100*n+"%"}transferTokensDialog(){const n=this._userSettings.getDefaultLang();this._dialog.open(O,{data:{langCode:n.code,balance:this.balancePST},direction:"LTR"===n.writing_system?"ltr":"rtl",disableClose:!0}).afterClosed().subscribe(c=>(0,b.mG)(this,void 0,void 0,function*(){}))}vaultDialog(){return(0,b.mG)(this,void 0,void 0,function*(){let e="LTR"===this._userSettings.getDefaultLang().writing_system?"ltr":"rtl";this._dialog.open(st,{data:{balance:this.balancePST,lockMinLength:this.lockMinLength,lockMaxLength:this.lockMaxLength,vault:this.vault,currentHeight:this.currentHeight},direction:e,disableClose:!0}).afterClosed().subscribe(c=>(0,b.mG)(this,void 0,void 0,function*(){}))})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(C.ux),t.Y36(x.N),t.Y36(Z.e),t.Y36(rt.s),t.Y36(p.Ye),t.Y36(k.d),t.Y36(u.uw))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-dashboard"]],decls:80,vars:27,consts:[[1,"mt-main"],["mode","indeterminate","class","fadeIn",4,"ngIf"],["color","default",1,"fadeIn","mb20"],["aria-hidden","false","aria-label","Dashboard"],[1,"menu-spacer"],[1,"text-right","page-title-buttons"],["type","button","mat-button","","color","default",3,"click"],[1,"container","scoreboards-container","fadeIn"],[1,"row"],[1,"col-12","col-md-6"],[1,"col-12","col-md-6","dashboard-toolbar"],["mat-flat-button","","type","button","color","primary",1,"btn-toolbar",3,"disabled","click"],[1,"yellow"],[1,"col-12","col-md-6","scoreboard"],["label","Total AR balance","icon","account_balance","unit","AR",3,"balance","loading"],["label","$WIKI unlocked","icon","lock_open","unit","$WIKI",3,"balance","loading"],["label","$WIKI in vault","icon","lock","unit","$WIKI",3,"balance","loading"],["label","$WIKI staked","icon","casino","unit","$WIKI",3,"balance","loading"],[1,"container","dashboard-container","fadeIn"],[1,"col-12","mini-text","mb20"],[1,"addressurl",3,"address"],[1,"addressurl",3,"address","isAddress"],[1,"addressurl","text-center"],[1,"addressurl"],[1,"card-row-container","text-center"],[1,"ellipsis","text-center"],["target","_blank",3,"href"],["mat-table","",1,"mat-elevation-z8","settings-table",3,"dataSource"],["matColumnDef","label"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","value"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mode","indeterminate",1,"fadeIn"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(n,e){1&n&&(t._UZ(0,"div",0),t.YNc(1,ht,1,0,"mat-progress-bar",1),t.TgZ(2,"mat-toolbar",2)(3,"mat-icon",3),t._uU(4,"dashboard"),t.qZA(),t.TgZ(5,"span"),t._uU(6,"\xa0Dashboard"),t.qZA(),t._UZ(7,"div",4),t.TgZ(8,"div",5)(9,"button",6),t.NdJ("click",function(){return e.goBack()}),t.TgZ(10,"mat-icon"),t._uU(11,"navigate_before"),t.qZA(),t._uU(12),t.ALo(13,"translate"),t.qZA()()(),t.TgZ(14,"div",7)(15,"div",8)(16,"div",9)(17,"h1"),t._uU(18,"My account"),t.qZA()(),t.TgZ(19,"div",10)(20,"button",11),t.NdJ("click",function(){return e.transferTokensDialog()}),t.TgZ(21,"mat-icon"),t._uU(22,"send"),t.qZA(),t._uU(23," Transfer tokens "),t.qZA(),t.TgZ(24,"button",11),t.NdJ("click",function(){return e.vaultDialog()}),t.TgZ(25,"mat-icon",12),t._uU(26,"vpn_key"),t.qZA(),t._uU(27," Vault "),t.qZA()()(),t.TgZ(28,"div",8)(29,"div",13),t._UZ(30,"app-balance-card",14),t.qZA(),t.TgZ(31,"div",13),t._UZ(32,"app-balance-card",15),t.qZA(),t.TgZ(33,"div",13),t._UZ(34,"app-balance-card",16),t.qZA(),t.TgZ(35,"div",13),t._UZ(36,"app-balance-card",17),t.qZA()()(),t.TgZ(37,"div",18)(38,"div",8)(39,"div",19)(40,"mat-card")(41,"app-arweave-address",20),t._uU(42," Wallet: "),t.qZA(),t.TgZ(43,"app-arweave-address",21),t.ALo(44,"async"),t._uU(45," My last TX processed: "),t.qZA(),t.TgZ(46,"div",22)(47,"strong"),t._uU(48,"Current height:"),t.qZA(),t._uU(49),t.qZA()()()(),t.TgZ(50,"h1"),t._uU(51,"DAO Settings"),t.qZA(),t.TgZ(52,"div",8)(53,"div",19)(54,"mat-card")(55,"div",23)(56,"div",24)(57,"span",25)(58,"strong"),t._uU(59,"Total Supply: "),t.qZA(),t._uU(60),t.qZA()()(),t.TgZ(61,"div",23)(62,"div",24)(63,"span",25)(64,"strong"),t._uU(65,"Visit Community: "),t.qZA(),t.TgZ(66,"a",26),t._uU(67),t.qZA()()()(),t.TgZ(68,"app-arweave-address",20),t._uU(69," PST contract address: "),t.qZA()()(),t.TgZ(70,"div",19)(71,"table",27),t.ynx(72,28),t.YNc(73,ft,2,0,"th",29),t.YNc(74,bt,2,1,"td",30),t.BQk(),t.ynx(75,31),t.YNc(76,_t,2,0,"th",29),t.YNc(77,Tt,2,1,"td",30),t.BQk(),t.YNc(78,vt,1,0,"tr",32),t.YNc(79,xt,1,0,"tr",33),t.qZA()()()()),2&n&&(t.xp6(1),t.Q6J("ngIf",e.loadingBalance||e.loadingSettings),t.xp6(11),t.hij(" ",t.lcZ(13,23,"GENERAL.BUTTONS.GO_BACK")," "),t.xp6(8),t.Q6J("disabled",e.loadingBalancePST),t.xp6(4),t.Q6J("disabled",e.loadingBalancePST),t.xp6(6),t.Q6J("balance",e.balance)("loading",e.loadingBalance),t.xp6(2),t.Q6J("balance",e.balancePST)("loading",e.loadingBalancePST),t.xp6(2),t.Q6J("balance",e.balancePSTVault)("loading",e.loadingBalancePST),t.xp6(2),t.Q6J("balance",e.balancePSTStaked)("loading",e.loadingBalancePST),t.xp6(5),t.Q6J("address",e.mainAddress),t.xp6(2),t.s9C("address",t.lcZ(44,25,e.lastTransactionID)),t.Q6J("isAddress",!1),t.xp6(6),t.hij(" ",e.currentHeight," "),t.xp6(11),t.hij(" ",e.totalSupply," $WIKI "),t.xp6(6),t.MGl("href","https://community.xyz/#",e.getPSTContractAddress(),"",t.LSH),t.xp6(1),t.hij("https://community.xyz/#",e.getPSTContractAddress(),""),t.xp6(1),t.s9C("address",e.getPSTContractAddress()),t.xp6(3),t.Q6J("dataSource",e.daoSettings),t.xp6(7),t.Q6J("matHeaderRowDef",e.displayedColumnsDaoSettings),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumnsDaoSettings))},directives:[p.O5,T.pW,ct.Ye,_.Hw,f.lW,gt,P.a8,mt.N,r.BZ,r.w1,r.fO,r.ge,r.Dz,r.ev,r.as,r.XQ,r.nj,r.Gk],pipes:[pt.X$,p.Ov],styles:[".mt-main[_ngcontent-%COMP%]{height:10px;margin-top:47px}@media (min-width: 600px){.mt-main[_ngcontent-%COMP%]{margin-top:54px}}.page-title[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:50px;font-size:34px;line-height:34px;height:50px}.page-title-icon[_ngcontent-%COMP%]{font-size:42px;height:100%;width:42px;vertical-align:middle}.dashboard-container[_ngcontent-%COMP%]{min-height:440px}.scoreboard[_ngcontent-%COMP%]{padding:10px}.scoreboard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.bn2[_ngcontent-%COMP%]{font-size:20px;text-overflow:ellipsis}.txurl[_ngcontent-%COMP%]{text-decoration:none;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.addressurl[_ngcontent-%COMP%], .daosettings[_ngcontent-%COMP%]{justify-content:center}.bn3[_ngcontent-%COMP%]{font-size:16px;overflow:hidden;text-overflow:ellipsis}.scoreboards-container[_ngcontent-%COMP%]{margin-bottom:20px}mat-toolbar[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace}.mb20[_ngcontent-%COMP%]{margin-bottom:20px}.card-row-container[_ngcontent-%COMP%]{display:flex;justify-content:inherit;margin-top:5px}.address-tx[_ngcontent-%COMP%]{margin-right:10px}.settings-table[_ngcontent-%COMP%]{width:100%;margin-bottom:40px}.btn-toolbar[_ngcontent-%COMP%]{margin-left:10px;padding-right:10px;padding-left:10px}.dashboard-toolbar[_ngcontent-%COMP%]{text-align:right;padding-top:26px}.dashboard-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}"]}),a})(),canActivate:[l(3870).a]}];let St=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[w.Bz.forChild(Ct)],w.Bz]}),a})(),wt=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[p.ez,St,y.m]]}),a})()}}]);