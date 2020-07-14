import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective implements OnInit{

  constructor() { }

  @HostBinding('style.backgroundColor') corDeFundo: string;

  ngOnInit(): void {
    this.corDeFundo = 'transparent';
  }

  @HostListener('mouseover') entrarMouse(){
    this.corDeFundo = 'gray';
  }

  @HostListener('mouseout') retirarMouse(){
    this.corDeFundo = 'transparent';
  }
}
