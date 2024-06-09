import {
  loadRemoteModule
} from "./chunk-2WA32S2B.js";

// projects/shell/src/environments/environment.ts
var environment = {
  production: false
};

// projects/shell/src/bootstrap.ts
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

// projects/shell/src/app/app.component.ts
import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthService } from "@demo/auth";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var AppComponent = class _AppComponent {
  title = "shell";
  auth = inject(AuthService);
  constructor() {
    this.auth.userName = "Jane Doe";
  }
  static \u0275fac = function AppComponent_Factory(t) {
    return new (t || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [i0.\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [["src", "../assets/angular.png", "width", "50"], ["routerLink", "/"], ["routerLink", "/flights"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "ul")(1, "li");
      i0.\u0275\u0275element(2, "img", 0);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(3, "li")(4, "a", 1);
      i0.\u0275\u0275text(5, "Home");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(6, "li")(7, "a", 2);
      i0.\u0275\u0275text(8, "Flights");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275element(9, "router-outlet");
    }
  }, dependencies: [RouterModule, i1.RouterOutlet, i1.RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// projects/shell/src/bootstrap.ts
import { provideRouter } from "@angular/router";

// projects/shell/src/app/home/home.component.ts
import { Component as Component2 } from "@angular/core";
import * as i02 from "@angular/core";
var HomeComponent = class _HomeComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function HomeComponent_Factory(t) {
    return new (t || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [i02.\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "h1");
      i02.\u0275\u0275text(1, "Welcome!");
      i02.\u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();

// projects/shell/src/app/not-found/not-found.component.ts
import { Component as Component3 } from "@angular/core";
import * as i03 from "@angular/core";
var NotFoundComponent = class _NotFoundComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static \u0275fac = function NotFoundComponent_Factory(t) {
    return new (t || _NotFoundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], standalone: true, features: [i03.\u0275\u0275StandaloneFeature], decls: 7, vars: 0, template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275elementStart(0, "h1");
      i03.\u0275\u0275text(1, "Not implemented yet!");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(2, "p");
      i03.\u0275\u0275text(3, "Implementing this will be ");
      i03.\u0275\u0275elementStart(4, "b");
      i03.\u0275\u0275text(5, "your task");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275text(6, " during this exercise.");
      i03.\u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent" });
})();

// projects/shell/src/app/app.routes.ts
var APP_ROUTES = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  // Add this route:
  {
    path: "flights",
    loadComponent: () => loadRemoteModule("mfe1", "./Component").then((m) => m.AppComponent)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];

// projects/shell/src/bootstrap.ts
if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES)
  ]
});
