/*! For license information please see 5598.20991a2b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcollaboratory=self.webpackChunkcollaboratory||[]).push([[5598],{5598:(e,t,n)=>{n.r(t),n.d(t,{CompletionAdapter:()=>Wt,DefinitionAdapter:()=>Zt,DiagnosticsAdapter:()=>Ot,DocumentColorAdapter:()=>ln,DocumentFormattingEditProvider:()=>un,DocumentHighlightAdapter:()=>Jt,DocumentLinkAdapter:()=>sn,DocumentRangeFormattingEditProvider:()=>cn,DocumentSymbolAdapter:()=>rn,FoldingRangeAdapter:()=>gn,HoverAdapter:()=>qt,ReferenceAdapter:()=>tn,RenameAdapter:()=>nn,SelectionRangeAdapter:()=>fn,WorkerManager:()=>Nt,fromPosition:()=>Ht,fromRange:()=>Xt,setupMode:()=>hn,toRange:()=>zt,toTextEdit:()=>$t});var r,i,o=n(9708),a=Object.defineProperty,s=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,d=(e,t,n,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let i of u(t))c.call(e,i)||i===n||a(e,i,{get:()=>t[i],enumerable:!(r=s(t,i))||r.enumerable});return e},l={};d(l,r=o,"default"),i&&d(i,r,"default");var g,f,h,p,m,v,b,_,k,y,w,x,I,E,A,C,S,R,L,T,M,D,P,F,j,N,U,V,O,K,W,H,X,z,B,$,q,Q,G,J,Y,Z,ee,te,ne,re,ie,oe,ae,se,ue,ce,de,le,ge,fe,he,pe,me,ve,be,_e,ke,ye,we,xe,Ie,Ee,Ae,Ce,Se,Re,Le,Te,Me,De,Pe,Fe,je,Ne,Ue,Ve,Oe,Ke,We,He,Xe,ze,Be,$e,qe,Qe,Ge,Je,Ye,Ze,et,tt,nt,rt,it,ot,at,st,ut,ct,dt,lt,gt,ft,ht,pt,mt,vt,bt,_t,kt,yt,wt,xt,It,Et,At,Ct,St,Rt,Lt,Tt,Mt,Dt,Pt,Ft,jt,Nt=class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=l.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let r;return this._getClient().then((e=>{r=e})).then((e=>{if(this._worker)return this._worker.withSyncedResources(t)})).then((e=>r))}};(g||(g={})).is=function(e){return"string"===typeof e},(f||(f={})).is=function(e){return"string"===typeof e},(p=h||(h={})).MIN_VALUE=-2147483648,p.MAX_VALUE=2147483647,p.is=function(e){return"number"===typeof e&&p.MIN_VALUE<=e&&e<=p.MAX_VALUE},(v=m||(m={})).MIN_VALUE=0,v.MAX_VALUE=2147483647,v.is=function(e){return"number"===typeof e&&v.MIN_VALUE<=e&&e<=v.MAX_VALUE},(_=b||(b={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=m.MAX_VALUE),t===Number.MAX_VALUE&&(t=m.MAX_VALUE),{line:e,character:t}},_.is=function(e){let t=e;return Ut.objectLiteral(t)&&Ut.uinteger(t.line)&&Ut.uinteger(t.character)},(y=k||(k={})).create=function(e,t,n,r){if(Ut.uinteger(e)&&Ut.uinteger(t)&&Ut.uinteger(n)&&Ut.uinteger(r))return{start:b.create(e,t),end:b.create(n,r)};if(b.is(e)&&b.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments[".concat(e,", ").concat(t,", ").concat(n,", ").concat(r,"]"))},y.is=function(e){let t=e;return Ut.objectLiteral(t)&&b.is(t.start)&&b.is(t.end)},(x=w||(w={})).create=function(e,t){return{uri:e,range:t}},x.is=function(e){let t=e;return Ut.objectLiteral(t)&&k.is(t.range)&&(Ut.string(t.uri)||Ut.undefined(t.uri))},(E=I||(I={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},E.is=function(e){let t=e;return Ut.objectLiteral(t)&&k.is(t.targetRange)&&Ut.string(t.targetUri)&&k.is(t.targetSelectionRange)&&(k.is(t.originSelectionRange)||Ut.undefined(t.originSelectionRange))},(C=A||(A={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},C.is=function(e){const t=e;return Ut.objectLiteral(t)&&Ut.numberRange(t.red,0,1)&&Ut.numberRange(t.green,0,1)&&Ut.numberRange(t.blue,0,1)&&Ut.numberRange(t.alpha,0,1)},(R=S||(S={})).create=function(e,t){return{range:e,color:t}},R.is=function(e){const t=e;return Ut.objectLiteral(t)&&k.is(t.range)&&A.is(t.color)},(T=L||(L={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},T.is=function(e){const t=e;return Ut.objectLiteral(t)&&Ut.string(t.label)&&(Ut.undefined(t.textEdit)||$.is(t))&&(Ut.undefined(t.additionalTextEdits)||Ut.typedArray(t.additionalTextEdits,$.is))},(D=M||(M={})).Comment="comment",D.Imports="imports",D.Region="region",(F=P||(P={})).create=function(e,t,n,r,i,o){const a={startLine:e,endLine:t};return Ut.defined(n)&&(a.startCharacter=n),Ut.defined(r)&&(a.endCharacter=r),Ut.defined(i)&&(a.kind=i),Ut.defined(o)&&(a.collapsedText=o),a},F.is=function(e){const t=e;return Ut.objectLiteral(t)&&Ut.uinteger(t.startLine)&&Ut.uinteger(t.startLine)&&(Ut.undefined(t.startCharacter)||Ut.uinteger(t.startCharacter))&&(Ut.undefined(t.endCharacter)||Ut.uinteger(t.endCharacter))&&(Ut.undefined(t.kind)||Ut.string(t.kind))},(N=j||(j={})).create=function(e,t){return{location:e,message:t}},N.is=function(e){let t=e;return Ut.defined(t)&&w.is(t.location)&&Ut.string(t.message)},(V=U||(U={})).Error=1,V.Warning=2,V.Information=3,V.Hint=4,(K=O||(O={})).Unnecessary=1,K.Deprecated=2,(W||(W={})).is=function(e){const t=e;return Ut.objectLiteral(t)&&Ut.string(t.href)},(X=H||(H={})).create=function(e,t,n,r,i,o){let a={range:e,message:t};return Ut.defined(n)&&(a.severity=n),Ut.defined(r)&&(a.code=r),Ut.defined(i)&&(a.source=i),Ut.defined(o)&&(a.relatedInformation=o),a},X.is=function(e){var t;let n=e;return Ut.defined(n)&&k.is(n.range)&&Ut.string(n.message)&&(Ut.number(n.severity)||Ut.undefined(n.severity))&&(Ut.integer(n.code)||Ut.string(n.code)||Ut.undefined(n.code))&&(Ut.undefined(n.codeDescription)||Ut.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(Ut.string(n.source)||Ut.undefined(n.source))&&(Ut.undefined(n.relatedInformation)||Ut.typedArray(n.relatedInformation,j.is))},(B=z||(z={})).create=function(e,t){let n={title:e,command:t};for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];return Ut.defined(i)&&i.length>0&&(n.arguments=i),n},B.is=function(e){let t=e;return Ut.defined(t)&&Ut.string(t.title)&&Ut.string(t.command)},(q=$||($={})).replace=function(e,t){return{range:e,newText:t}},q.insert=function(e,t){return{range:{start:e,end:e},newText:t}},q.del=function(e){return{range:e,newText:""}},q.is=function(e){const t=e;return Ut.objectLiteral(t)&&Ut.string(t.newText)&&k.is(t.range)},(G=Q||(Q={})).create=function(e,t,n){const r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},G.is=function(e){const t=e;return Ut.objectLiteral(t)&&Ut.string(t.label)&&(Ut.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(Ut.string(t.description)||void 0===t.description)},(J||(J={})).is=function(e){const t=e;return Ut.string(t)},(Z=Y||(Y={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},Z.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},Z.del=function(e,t){return{range:e,newText:"",annotationId:t}},Z.is=function(e){const t=e;return $.is(t)&&(Q.is(t.annotationId)||J.is(t.annotationId))},(te=ee||(ee={})).create=function(e,t){return{textDocument:e,edits:t}},te.is=function(e){let t=e;return Ut.defined(t)&&fe.is(t.textDocument)&&Array.isArray(t.edits)},(re=ne||(ne={})).create=function(e,t,n){let r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},re.is=function(e){let t=e;return t&&"create"===t.kind&&Ut.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||Ut.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||Ut.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||J.is(t.annotationId))},(oe=ie||(ie={})).create=function(e,t,n,r){let i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},oe.is=function(e){let t=e;return t&&"rename"===t.kind&&Ut.string(t.oldUri)&&Ut.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||Ut.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||Ut.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||J.is(t.annotationId))},(se=ae||(ae={})).create=function(e,t,n){let r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},se.is=function(e){let t=e;return t&&"delete"===t.kind&&Ut.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||Ut.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||Ut.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||J.is(t.annotationId))},(ue||(ue={})).is=function(e){let t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((e=>Ut.string(e.kind)?ne.is(e)||ie.is(e)||ae.is(e):ee.is(e))))},(de=ce||(ce={})).create=function(e){return{uri:e}},de.is=function(e){let t=e;return Ut.defined(t)&&Ut.string(t.uri)},(ge=le||(le={})).create=function(e,t){return{uri:e,version:t}},ge.is=function(e){let t=e;return Ut.defined(t)&&Ut.string(t.uri)&&Ut.integer(t.version)},(he=fe||(fe={})).create=function(e,t){return{uri:e,version:t}},he.is=function(e){let t=e;return Ut.defined(t)&&Ut.string(t.uri)&&(null===t.version||Ut.integer(t.version))},(me=pe||(pe={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},me.is=function(e){let t=e;return Ut.defined(t)&&Ut.string(t.uri)&&Ut.string(t.languageId)&&Ut.integer(t.version)&&Ut.string(t.text)},(be=ve||(ve={})).PlainText="plaintext",be.Markdown="markdown",be.is=function(e){const t=e;return t===be.PlainText||t===be.Markdown},(_e||(_e={})).is=function(e){const t=e;return Ut.objectLiteral(e)&&ve.is(t.kind)&&Ut.string(t.value)},(ye=ke||(ke={})).Text=1,ye.Method=2,ye.Function=3,ye.Constructor=4,ye.Field=5,ye.Variable=6,ye.Class=7,ye.Interface=8,ye.Module=9,ye.Property=10,ye.Unit=11,ye.Value=12,ye.Enum=13,ye.Keyword=14,ye.Snippet=15,ye.Color=16,ye.File=17,ye.Reference=18,ye.Folder=19,ye.EnumMember=20,ye.Constant=21,ye.Struct=22,ye.Event=23,ye.Operator=24,ye.TypeParameter=25,(xe=we||(we={})).PlainText=1,xe.Snippet=2,(Ie||(Ie={})).Deprecated=1,(Ae=Ee||(Ee={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},Ae.is=function(e){const t=e;return t&&Ut.string(t.newText)&&k.is(t.insert)&&k.is(t.replace)},(Se=Ce||(Ce={})).asIs=1,Se.adjustIndentation=2,(Re||(Re={})).is=function(e){const t=e;return t&&(Ut.string(t.detail)||void 0===t.detail)&&(Ut.string(t.description)||void 0===t.description)},(Le||(Le={})).create=function(e){return{label:e}},(Te||(Te={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(De=Me||(Me={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},De.is=function(e){const t=e;return Ut.string(t)||Ut.objectLiteral(t)&&Ut.string(t.language)&&Ut.string(t.value)},(Pe||(Pe={})).is=function(e){let t=e;return!!t&&Ut.objectLiteral(t)&&(_e.is(t.contents)||Me.is(t.contents)||Ut.typedArray(t.contents,Me.is))&&(void 0===e.range||k.is(e.range))},(Fe||(Fe={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(je||(je={})).create=function(e,t){let n={label:e};Ut.defined(t)&&(n.documentation=t);for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];return Ut.defined(i)?n.parameters=i:n.parameters=[],n},(Ue=Ne||(Ne={})).Text=1,Ue.Read=2,Ue.Write=3,(Ve||(Ve={})).create=function(e,t){let n={range:e};return Ut.number(t)&&(n.kind=t),n},(Ke=Oe||(Oe={})).File=1,Ke.Module=2,Ke.Namespace=3,Ke.Package=4,Ke.Class=5,Ke.Method=6,Ke.Property=7,Ke.Field=8,Ke.Constructor=9,Ke.Enum=10,Ke.Interface=11,Ke.Function=12,Ke.Variable=13,Ke.Constant=14,Ke.String=15,Ke.Number=16,Ke.Boolean=17,Ke.Array=18,Ke.Object=19,Ke.Key=20,Ke.Null=21,Ke.EnumMember=22,Ke.Struct=23,Ke.Event=24,Ke.Operator=25,Ke.TypeParameter=26,(We||(We={})).Deprecated=1,(He||(He={})).create=function(e,t,n,r,i){let o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(Xe||(Xe={})).create=function(e,t,n,r){return void 0!==r?{name:e,kind:t,location:{uri:n,range:r}}:{name:e,kind:t,location:{uri:n}}},(Be=ze||(ze={})).create=function(e,t,n,r,i,o){let a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},Be.is=function(e){let t=e;return t&&Ut.string(t.name)&&Ut.number(t.kind)&&k.is(t.range)&&k.is(t.selectionRange)&&(void 0===t.detail||Ut.string(t.detail))&&(void 0===t.deprecated||Ut.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},(qe=$e||($e={})).Empty="",qe.QuickFix="quickfix",qe.Refactor="refactor",qe.RefactorExtract="refactor.extract",qe.RefactorInline="refactor.inline",qe.RefactorRewrite="refactor.rewrite",qe.Source="source",qe.SourceOrganizeImports="source.organizeImports",qe.SourceFixAll="source.fixAll",(Ge=Qe||(Qe={})).Invoked=1,Ge.Automatic=2,(Ye=Je||(Je={})).create=function(e,t,n){let r={diagnostics:e};return void 0!==t&&null!==t&&(r.only=t),void 0!==n&&null!==n&&(r.triggerKind=n),r},Ye.is=function(e){let t=e;return Ut.defined(t)&&Ut.typedArray(t.diagnostics,H.is)&&(void 0===t.only||Ut.typedArray(t.only,Ut.string))&&(void 0===t.triggerKind||t.triggerKind===Qe.Invoked||t.triggerKind===Qe.Automatic)},(et=Ze||(Ze={})).create=function(e,t,n){let r={title:e},i=!0;return"string"===typeof t?(i=!1,r.kind=t):z.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},et.is=function(e){let t=e;return t&&Ut.string(t.title)&&(void 0===t.diagnostics||Ut.typedArray(t.diagnostics,H.is))&&(void 0===t.kind||Ut.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||z.is(t.command))&&(void 0===t.isPreferred||Ut.boolean(t.isPreferred))&&(void 0===t.edit||ue.is(t.edit))},(nt=tt||(tt={})).create=function(e,t){let n={range:e};return Ut.defined(t)&&(n.data=t),n},nt.is=function(e){let t=e;return Ut.defined(t)&&k.is(t.range)&&(Ut.undefined(t.command)||z.is(t.command))},(it=rt||(rt={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},it.is=function(e){let t=e;return Ut.defined(t)&&Ut.uinteger(t.tabSize)&&Ut.boolean(t.insertSpaces)},(at=ot||(ot={})).create=function(e,t,n){return{range:e,target:t,data:n}},at.is=function(e){let t=e;return Ut.defined(t)&&k.is(t.range)&&(Ut.undefined(t.target)||Ut.string(t.target))},(ut=st||(st={})).create=function(e,t){return{range:e,parent:t}},ut.is=function(e){let t=e;return Ut.objectLiteral(t)&&k.is(t.range)&&(void 0===t.parent||ut.is(t.parent))},(dt=ct||(ct={})).namespace="namespace",dt.type="type",dt.class="class",dt.enum="enum",dt.interface="interface",dt.struct="struct",dt.typeParameter="typeParameter",dt.parameter="parameter",dt.variable="variable",dt.property="property",dt.enumMember="enumMember",dt.event="event",dt.function="function",dt.method="method",dt.macro="macro",dt.keyword="keyword",dt.modifier="modifier",dt.comment="comment",dt.string="string",dt.number="number",dt.regexp="regexp",dt.operator="operator",dt.decorator="decorator",(gt=lt||(lt={})).declaration="declaration",gt.definition="definition",gt.readonly="readonly",gt.static="static",gt.deprecated="deprecated",gt.abstract="abstract",gt.async="async",gt.modification="modification",gt.documentation="documentation",gt.defaultLibrary="defaultLibrary",(ft||(ft={})).is=function(e){const t=e;return Ut.objectLiteral(t)&&(void 0===t.resultId||"string"===typeof t.resultId)&&Array.isArray(t.data)&&(0===t.data.length||"number"===typeof t.data[0])},(pt=ht||(ht={})).create=function(e,t){return{range:e,text:t}},pt.is=function(e){const t=e;return void 0!==t&&null!==t&&k.is(t.range)&&Ut.string(t.text)},(vt=mt||(mt={})).create=function(e,t,n){return{range:e,variableName:t,caseSensitiveLookup:n}},vt.is=function(e){const t=e;return void 0!==t&&null!==t&&k.is(t.range)&&Ut.boolean(t.caseSensitiveLookup)&&(Ut.string(t.variableName)||void 0===t.variableName)},(_t=bt||(bt={})).create=function(e,t){return{range:e,expression:t}},_t.is=function(e){const t=e;return void 0!==t&&null!==t&&k.is(t.range)&&(Ut.string(t.expression)||void 0===t.expression)},(yt=kt||(kt={})).create=function(e,t){return{frameId:e,stoppedLocation:t}},yt.is=function(e){const t=e;return Ut.defined(t)&&k.is(e.stoppedLocation)},(xt=wt||(wt={})).Type=1,xt.Parameter=2,xt.is=function(e){return 1===e||2===e},(Et=It||(It={})).create=function(e){return{value:e}},Et.is=function(e){const t=e;return Ut.objectLiteral(t)&&(void 0===t.tooltip||Ut.string(t.tooltip)||_e.is(t.tooltip))&&(void 0===t.location||w.is(t.location))&&(void 0===t.command||z.is(t.command))},(Ct=At||(At={})).create=function(e,t,n){const r={position:e,label:t};return void 0!==n&&(r.kind=n),r},Ct.is=function(e){const t=e;return Ut.objectLiteral(t)&&b.is(t.position)&&(Ut.string(t.label)||Ut.typedArray(t.label,It.is))&&(void 0===t.kind||wt.is(t.kind))&&void 0===t.textEdits||Ut.typedArray(t.textEdits,$.is)&&(void 0===t.tooltip||Ut.string(t.tooltip)||_e.is(t.tooltip))&&(void 0===t.paddingLeft||Ut.boolean(t.paddingLeft))&&(void 0===t.paddingRight||Ut.boolean(t.paddingRight))},(St||(St={})).createSnippet=function(e){return{kind:"snippet",value:e}},(Rt||(Rt={})).create=function(e,t,n,r){return{insertText:e,filterText:t,range:n,command:r}},(Lt||(Lt={})).create=function(e){return{items:e}},(Mt=Tt||(Tt={})).Invoked=0,Mt.Automatic=1,(Dt||(Dt={})).create=function(e,t){return{range:e,text:t}},(Pt||(Pt={})).create=function(e,t){return{triggerKind:e,selectedCompletionInfo:t}},(Ft||(Ft={})).is=function(e){const t=e;return Ut.objectLiteral(t)&&f.is(t.uri)&&Ut.string(t.name)},function(e){function t(e,n){if(e.length<=1)return e;const r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);let a=0,s=0,u=0;for(;a<i.length&&s<o.length;){let t=n(i[a],o[s]);e[u++]=t<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new Vt(e,t,n,r)},e.is=function(e){let t=e;return!!(Ut.defined(t)&&Ut.string(t.uri)&&(Ut.undefined(t.languageId)||Ut.string(t.languageId))&&Ut.uinteger(t.lineCount)&&Ut.func(t.getText)&&Ut.func(t.positionAt)&&Ut.func(t.offsetAt))},e.applyEdits=function(e,n){let r=e.getText(),i=t(n,((e,t)=>{let n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length;for(let t=i.length-1;t>=0;t--){let n=i[t],a=e.offsetAt(n.range.start),s=e.offsetAt(n.range.end);if(!(s<=o))throw new Error("Overlapping edit");r=r.substring(0,a)+n.newText+r.substring(s,r.length),o=a}return r}}(jt||(jt={}));var Ut,Vt=class{constructor(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content}update(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0}getLineOffsets(){if(void 0===this._lineOffsets){let e=[],t=this._content,n=!0;for(let r=0;r<t.length;r++){n&&(e.push(r),n=!1);let i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return b.create(0,e);for(;n<r;){let i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}let i=n-1;return b.create(i,e-t[i])}offsetAt(e){let t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;let n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)}get lineCount(){return this.getLineOffsets().length}};!function(e){const t=Object.prototype.toString;e.defined=function(e){return"undefined"!==typeof e},e.undefined=function(e){return"undefined"===typeof e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.numberRange=function(e,n,r){return"[object Number]"===t.call(e)&&n<=e&&e<=r},e.integer=function(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647},e.uinteger=function(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647},e.func=function(e){return"[object Function]"===t.call(e)},e.objectLiteral=function(e){return null!==e&&"object"===typeof e},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(Ut||(Ut={}));var Ot=class{constructor(e,t,n){this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{l.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(l.editor.onDidCreateModel(r)),this._disposables.push(l.editor.onWillDisposeModel(i)),this._disposables.push(l.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{l.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{l.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),l.editor.getModels().forEach(r)}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((e=>function(e,t){let n="number"===typeof t.code?String(t.code):t.code;return{severity:Kt(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)));let i=l.editor.getModel(e);i&&i.getLanguageId()===t&&l.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function Kt(e){switch(e){case U.Error:return l.MarkerSeverity.Error;case U.Warning:return l.MarkerSeverity.Warning;case U.Information:return l.MarkerSeverity.Info;case U.Hint:return l.MarkerSeverity.Hint;default:return l.MarkerSeverity.Info}}var Wt=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),Ht(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new l.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:Bt(e.kind)};var n,r;return e.textEdit&&("undefined"!==typeof(r=e.textEdit).insert&&"undefined"!==typeof r.replace?t.range={insert:zt(e.textEdit.insert),replace:zt(e.textEdit.replace)}:t.range=zt(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map($t)),e.insertTextFormat===we.Snippet&&(t.insertTextRules=l.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function Ht(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function Xt(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function zt(e){if(e)return new l.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function Bt(e){const t=l.languages.CompletionItemKind;switch(e){case ke.Text:return t.Text;case ke.Method:return t.Method;case ke.Function:return t.Function;case ke.Constructor:return t.Constructor;case ke.Field:return t.Field;case ke.Variable:return t.Variable;case ke.Class:return t.Class;case ke.Interface:return t.Interface;case ke.Module:return t.Module;case ke.Property:return t.Property;case ke.Unit:return t.Unit;case ke.Value:return t.Value;case ke.Enum:return t.Enum;case ke.Keyword:return t.Keyword;case ke.Snippet:return t.Snippet;case ke.Color:return t.Color;case ke.File:return t.File;case ke.Reference:return t.Reference}return t.Property}function $t(e){if(e)return{range:zt(e.range),text:e.newText}}var qt=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),Ht(t)))).then((e=>{if(e)return{range:zt(e.range),contents:Gt(e.contents)}}))}};function Qt(e){return"string"===typeof e?{value:e}:(t=e)&&"object"===typeof t&&"string"===typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function Gt(e){if(e)return Array.isArray(e)?e.map(Qt):[Qt(e)]}var Jt=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),Ht(t)))).then((e=>{if(e)return e.map((e=>({range:zt(e.range),kind:Yt(e.kind)})))}))}};function Yt(e){switch(e){case Ne.Read:return l.languages.DocumentHighlightKind.Read;case Ne.Write:return l.languages.DocumentHighlightKind.Write;case Ne.Text:return l.languages.DocumentHighlightKind.Text}return l.languages.DocumentHighlightKind.Text}var Zt=class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),Ht(t)))).then((e=>{if(e)return[en(e)]}))}};function en(e){return{uri:l.Uri.parse(e.uri),range:zt(e.range)}}var tn=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),Ht(t)))).then((e=>{if(e)return e.map(en)}))}},nn=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),Ht(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=l.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:zt(i.range),text:i.newText}})}return{edits:t}}(e)))}};var rn=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>"children"in e?on(e):{name:e.name,detail:"",containerName:e.containerName,kind:an(e.kind),range:zt(e.location.range),selectionRange:zt(e.location.range),tags:[]}))}))}};function on(e){var t,n,r;return{name:e.name,detail:null!==(t=e.detail)&&void 0!==t?t:"",kind:an(e.kind),range:zt(e.range),selectionRange:zt(e.selectionRange),tags:null!==(n=e.tags)&&void 0!==n?n:[],children:(null!==(r=e.children)&&void 0!==r?r:[]).map((e=>on(e)))}}function an(e){let t=l.languages.SymbolKind;switch(e){case Oe.File:return t.File;case Oe.Module:return t.Module;case Oe.Namespace:return t.Namespace;case Oe.Package:return t.Package;case Oe.Class:return t.Class;case Oe.Method:return t.Method;case Oe.Property:return t.Property;case Oe.Field:return t.Field;case Oe.Constructor:return t.Constructor;case Oe.Enum:return t.Enum;case Oe.Interface:return t.Interface;case Oe.Function:return t.Function;case Oe.Variable:return t.Variable;case Oe.Constant:return t.Constant;case Oe.String:return t.String;case Oe.Number:return t.Number;case Oe.Boolean:return t.Boolean;case Oe.Array:return t.Array}return t.Function}var sn=class{constructor(e){this._worker=e}provideLinks(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:zt(e.range),url:e.target})))}}))}},un=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,dn(t)).then((e=>{if(e&&0!==e.length)return e.map($t)}))))}},cn=class{constructor(e){this._worker=e,this.canFormatMultipleRanges=!1}provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),Xt(t),dn(n)).then((e=>{if(e&&0!==e.length)return e.map($t)}))))}};function dn(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var ln=class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:zt(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,Xt(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=$t(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map($t)),t}))}))}},gn=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(t.kind=function(e){switch(e){case M.Comment:return l.languages.FoldingRangeKind.Comment;case M.Imports:return l.languages.FoldingRangeKind.Imports;case M.Region:return l.languages.FoldingRangeKind.Region}return}(e.kind)),t}))}))}};var fn=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(Ht)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:zt(e.range)}),e=e.parent;return t}))}))}};function hn(e){const t=[],n=[],r=new Nt(e);t.push(r);const i=function(){return r.getLanguageServiceWorker(...arguments)};return function(){const{languageId:t,modeConfiguration:r}=e;mn(n),r.completionItems&&n.push(l.languages.registerCompletionItemProvider(t,new Wt(i,["/","-",":"]))),r.hovers&&n.push(l.languages.registerHoverProvider(t,new qt(i))),r.documentHighlights&&n.push(l.languages.registerDocumentHighlightProvider(t,new Jt(i))),r.definitions&&n.push(l.languages.registerDefinitionProvider(t,new Zt(i))),r.references&&n.push(l.languages.registerReferenceProvider(t,new tn(i))),r.documentSymbols&&n.push(l.languages.registerDocumentSymbolProvider(t,new rn(i))),r.rename&&n.push(l.languages.registerRenameProvider(t,new nn(i))),r.colors&&n.push(l.languages.registerColorProvider(t,new ln(i))),r.foldingRanges&&n.push(l.languages.registerFoldingRangeProvider(t,new gn(i))),r.diagnostics&&n.push(new Ot(t,i,e.onDidChange)),r.selectionRanges&&n.push(l.languages.registerSelectionRangeProvider(t,new fn(i))),r.documentFormattingEdits&&n.push(l.languages.registerDocumentFormattingEditProvider(t,new un(i))),r.documentRangeFormattingEdits&&n.push(l.languages.registerDocumentRangeFormattingEditProvider(t,new cn(i)))}(),t.push(pn(n)),pn(t)}function pn(e){return{dispose:()=>mn(e)}}function mn(e){for(;e.length;)e.pop().dispose()}}}]);
//# sourceMappingURL=5598.20991a2b.chunk.js.map