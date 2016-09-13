import { Directive, Input, ElementRef, OnInit } from '@angular/core';

declare var require;

@Directive({
    selector: '[focus]'
})


export class FocusDirective implements OnInit {
    @Input()
    focus:Boolean;
    constructor(private element: ElementRef) {}
    protected ngOnChanges() {
        this.element.nativeElement.focus();
    }


    ngOnInit(): void {

    }
}
