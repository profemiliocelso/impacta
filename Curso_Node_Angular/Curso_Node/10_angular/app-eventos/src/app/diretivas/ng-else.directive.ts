import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  constructor(
    private template: TemplateRef<any>,     //conteúdo a ser manipulado pela diretiva
    private view: ViewContainerRef) { }     //elemento que executa a diretiva (container)

  @Input() set ngElse(condicao: boolean){
    if(!condicao){
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }
}
