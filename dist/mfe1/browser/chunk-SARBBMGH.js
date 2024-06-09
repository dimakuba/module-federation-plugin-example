import "./chunk-YLKPTVNE.js";

// projects/mfe1/src/environments/environment.ts
var environment = {
  production: false
};

// projects/mfe1/src/bootstrap.ts
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

// projects/mfe1/src/app/app.component.ts
import { Component, inject } from "@angular/core";
import { AuthService } from "@demo/auth";
import * as i0 from "@angular/core";
var AppComponent = class _AppComponent {
  constructor() {
  }
  auth = inject(AuthService);
  ngOnInit() {
    console.log("userName", this.auth.userName);
  }
  search() {
    alert("Not implemented in this demo!");
  }
  static \u0275fac = function AppComponent_Factory(t) {
    return new (t || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [i0.\u0275\u0275StandaloneFeature], decls: 12, vars: 0, consts: [["id", "container"], ["src", "../../../assets/angular.png", "width", "50"], ["type", "text", "placeholder", "From"], ["type", "text", "placeholder", "To"], [3, "click"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "div", 0)(1, "div");
      i0.\u0275\u0275element(2, "img", 1);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(3, "h1");
      i0.\u0275\u0275text(4, "Select a Flight");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(5, "div");
      i0.\u0275\u0275element(6, "input", 2);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(7, "div");
      i0.\u0275\u0275element(8, "input", 3);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(9, "div")(10, "button", 4);
      i0.\u0275\u0275listener("click", function AppComponent_Template_button_click_10_listener() {
        return ctx.search();
      });
      i0.\u0275\u0275text(11, "Search");
      i0.\u0275\u0275elementEnd()()();
    }
  }, styles: ["\n\ninput[type=text][_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  box-sizing: border-box;\n  border: none;\n  border-bottom: 2px solid silver;\n  font-size: 20px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 2px solid silver;\n  background-color: white;\n  font-size: 16px;\n  padding: 10px;\n  padding-left: 40px;\n  padding-right: 40px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:active {\n  border-color: black;\n}\n#container[_ngcontent-%COMP%] {\n  border: 2px darkred dashed;\n  padding: 20px;\n}\n.top-nav[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// projects/mfe1/src/bootstrap.ts
if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, {
  providers: []
});
