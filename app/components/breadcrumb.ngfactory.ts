/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './breadcrumb';
import * as import3 from '@angular/router';
import * as import4 from './breadcrumbService';
const styles_BreadcrumbComponent:any[] = ([] as any[]);
export const RenderType_BreadcrumbComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_BreadcrumbComponent,
  data: {}
}
);
function View_BreadcrumbComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',[[
        'role',
        'button'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.navigateTo('/')) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = (<any>v.parent).context.$implicit;
    ck(v,1,0,currVal_0);
  });
}
function View_BreadcrumbComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',[[
        'role',
        'button'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.navigateTo((<any>v.parent).context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.friendlyName((<any>v.parent).context.$implicit);
    ck(v,1,0,currVal_0);
  });
}
function View_BreadcrumbComponent_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.friendlyName((<any>v.parent).context.$implicit);
    ck(v,1,0,currVal_0);
  });
}
function View_BreadcrumbComponent_5(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.friendlyName('/');
    ck(v,1,0,currVal_0);
  });
}
function View_BreadcrumbComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),16,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import0.ɵpod([
      'breadcrumb-item',
      'active'
    ]
    ),
    (l()(),import0.ɵted((null as any),[' '])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_BreadcrumbComponent_2)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_BreadcrumbComponent_3)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_BreadcrumbComponent_4)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_BreadcrumbComponent_5)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n            ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,2,0,co.useBootstrap,v.context.last);
    ck(v,1,0,currVal_0);
    const currVal_1:boolean = (!v.context.last && (v.context.$implicit == co.prefix));
    ck(v,6,0,currVal_1);
    const currVal_2:boolean = (!v.context.last && (v.context.$implicit != co.prefix));
    ck(v,9,0,currVal_2);
    const currVal_3:any = v.context.last;
    ck(v,12,0,currVal_3);
    const currVal_4:any = (v.context.last && (v.context.$implicit == co.prefix));
    ck(v,15,0,currVal_4);
  },(null as any));
}
export function View_BreadcrumbComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'ul',([] as any[]),[[
        2,
        'breadcrumb',
        (null as any)
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_BreadcrumbComponent_1)),
    import0.ɵdid(401408,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:import2.BreadcrumbComponent = v.component;
    const currVal_1:any = co._urls;
    ck(v,4,0,currVal_1);
  },(ck,v) => {
    var co:import2.BreadcrumbComponent = v.component;
    const currVal_0:any = co.useBootstrap;
    ck(v,1,0,currVal_0);
  });
}
function View_BreadcrumbComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'breadcrumb',([] as any[]),(null as any),(null as any),(null as any),View_BreadcrumbComponent_0,RenderType_BreadcrumbComponent)),
    import0.ɵdid(385024,(null as any),0,import2.BreadcrumbComponent,[
      import3.Router,
      import4.BreadcrumbService
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const BreadcrumbComponentNgFactory:import0.ComponentFactory<import2.BreadcrumbComponent> = import0.ɵccf('breadcrumb',import2.BreadcrumbComponent,View_BreadcrumbComponent_Host_0,{
  useBootstrap: 'useBootstrap',
  prefix: 'prefix'
}
,{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvZ21vc3QvRG9jdW1lbnRzL0dpdEh1Yi9uZzItYnJlYWRjcnVtYi9hcHAvY29tcG9uZW50cy9icmVhZGNydW1iLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL2dtb3N0L0RvY3VtZW50cy9HaXRIdWIvbmcyLWJyZWFkY3J1bWIvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYi50cyIsIm5nOi8vL0M6L1VzZXJzL2dtb3N0L0RvY3VtZW50cy9HaXRIdWIvbmcyLWJyZWFkY3J1bWIvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYi50cy5CcmVhZGNydW1iQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9DOi9Vc2Vycy9nbW9zdC9Eb2N1bWVudHMvR2l0SHViL25nMi1icmVhZGNydW1iL2FwcC9jb21wb25lbnRzL2JyZWFkY3J1bWIudHMuQnJlYWRjcnVtYkNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8dWwgW2NsYXNzLmJyZWFkY3J1bWJdPVwidXNlQm9vdHN0cmFwXCI+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHVybCBvZiBfdXJsczsgbGV0IGxhc3QgPSBsYXN0XCIgW25nQ2xhc3NdPVwieydicmVhZGNydW1iLWl0ZW0nOiB1c2VCb290c3RyYXAsICdhY3RpdmUnOiBsYXN0fVwiPiA8IS0tIGRpc2FibGUgbGluayBvZiBsYXN0IGl0ZW0gLS0+XG4gICAgICAgICAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwiIWxhc3QgJiYgdXJsID09IHByZWZpeFwiIChjbGljayk9XCJuYXZpZ2F0ZVRvKCcvJylcIj57e3VybH19PC9hPlxuICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cIiFsYXN0ICYmIHVybCAhPSBwcmVmaXhcIiAoY2xpY2spPVwibmF2aWdhdGVUbyh1cmwpXCI+e3tmcmllbmRseU5hbWUodXJsKX19PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibGFzdFwiPnt7ZnJpZW5kbHlOYW1lKHVybCl9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImxhc3QgJiYgdXJsID09IHByZWZpeFwiPnt7ZnJpZW5kbHlOYW1lKCcvJyl9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgIiwiPGJyZWFkY3J1bWI+PC9icmVhZGNydW1iPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNHZ0I7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFnRDtRQUFBO1FBQUE7TUFBQTtNQUFoRDtJQUFBO0lBQTBFO01BQUE7TUFBQTtJQUFBO0lBQUE7OztJQUFBO0lBQUE7Ozs7O01BQzFFO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBZ0Q7UUFBQTtRQUFBO01BQUE7TUFBaEQ7SUFBQTtJQUEwRTtNQUFBO01BQUE7SUFBQTtJQUFBOzs7O0lBQUE7SUFBQTs7Ozs7SUFDMUU7SUFBbUI7TUFBQTtNQUFBO0lBQUE7SUFBQTs7OztJQUFBO0lBQUE7Ozs7O0lBQ25CO0lBQW9DO01BQUE7TUFBQTtJQUFBO0lBQUE7Ozs7SUFBQTtJQUFBOzs7OztJQUp4QztnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQStDO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBOEQ7SUFBbUM7SUFDNUk7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFxRjtJQUNyRjtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW1HO0lBQ25HO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBK0M7SUFDL0M7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFnRTs7OztJQUpyQjtJQUEvQyxTQUErQyxTQUEvQztJQUNxQjtJQUFqQixTQUFpQixTQUFqQjtJQUNpQjtJQUFqQixTQUFpQixTQUFqQjtJQUNNO0lBQU4sVUFBTSxTQUFOO0lBQ007SUFBTixVQUFNLFNBQU47Ozs7O0lBTmhCO01BQ1E7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXNDO0lBQ2xDO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBS0s7SUFDSjs7OztJQU5HO0lBQUosU0FBSSxTQUFKOzs7SUFEQTtJQUFKLFNBQUksU0FBSjs7Ozs7SUNEUjtnQkFBQTs7O0lBQUE7S0FBQTs7O0lBQUE7Ozs7Ozs7In0=
