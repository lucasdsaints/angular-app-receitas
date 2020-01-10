import { Directive, ElementRef, OnInit, HostBinding, HostListener } from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
    @HostBinding('class.open') isOpen: boolean;

    constructor (private elRef: ElementRef) {}

    ngOnInit() {
        this.isOpen = false;
    }

    @HostListener('click') btnClicked(eventData: Event) {
        this.isOpen = !this.isOpen;
    }

}