import{inject as r}from"@angular/core";import{AuthService as p}from"@demo/auth";import*as e from"@angular/core";var c=(()=>{class n{constructor(){}auth=r(p);ngOnInit(){console.log("userName",this.auth.userName)}search(){alert("Not implemented in this demo!")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-root"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:12,vars:0,consts:[["id","container"],["src","../../../assets/angular.png","width","50"],["type","text","placeholder","From"],["type","text","placeholder","To"],[3,"click"]],template:function(t,i){t&1&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div"),e.\u0275\u0275element(2,"img",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"h1"),e.\u0275\u0275text(4,"Select a Flight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div"),e.\u0275\u0275element(6,"input",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"div"),e.\u0275\u0275element(8,"input",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"div")(10,"button",4),e.\u0275\u0275listener("click",function(){return i.search()}),e.\u0275\u0275text(11,"Search"),e.\u0275\u0275elementEnd()()())},styles:[`

input[type=text][_ngcontent-%COMP%] {
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid silver;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}
button[_ngcontent-%COMP%] {
  border: 2px solid silver;
  background-color: white;
  font-size: 16px;
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  cursor: pointer;
}
button[_ngcontent-%COMP%]:active {
  border-color: black;
}
#container[_ngcontent-%COMP%] {
  border: 2px darkred dashed;
  padding: 20px;
}
.top-nav[_ngcontent-%COMP%] {
  margin-bottom: 20px;
}`]})}return n})();export{c as AppComponent};
