import { Directive, Input, ElementRef, OnInit } from '@angular/core';

declare var require;
declare var jQuery:any;
declare var $:any;

@Directive({
    selector: '[dropdown]'
})


export class DropdownDirective implements OnInit {

    elementRef: ElementRef;


    @Input('transition') options: string;

    constructor(private element: ElementRef) {
        this.elementRef = element;
        //console.log('dropdown construct');
    }

    ngOnInit(): void {
        jQuery(this.elementRef.nativeElement).dropdown();
        //$('.ui.dropdown').dropdown();
    }
}
