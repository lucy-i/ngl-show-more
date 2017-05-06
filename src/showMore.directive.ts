import { Component, Inject, ElementRef, ViewChild, HostListener, Directive, Input, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Directive({
  selector: 'show-more,[show-more]',
})
export class ShowMoreDirective implements OnInit, AfterViewInit {
  pseudostyle: string = "pseudoStyle" + UID.getNew();
  @Input("min-height")
  minHeight: number;
  @Input("max-height")
  maxHeight: number;
  showless = false;
  constructor(private child: ElementRef) {

  }

  ngOnInit(): void {
    this.child.nativeElement.style.height = this.minHeight + 'px';
    this.child.nativeElement.style.overflow = 'hidden';

  }

  ngAfterViewInit() {
    if (this.child.nativeElement.scrollHeight > this.child.nativeElement.offsetHeight) {
      this.pseudoStyle("after", `{top: ` + (this.child.nativeElement.offsetTop + parseInt(+this.minHeight + '') - 2) + `px;left: ` + this.child.nativeElement.offsetLeft + `px;content: 'more...' !important}`);
    }
  }
  /**
   *     content: 'Show More';
      position: absolute;
      top: 110px;
      left: 0px;
   */
  @HostListener('click', ['$event'])
  onClick(evt: MouseEvent) {
    var tt = this.child.nativeElement as HTMLElement;
    if (tt.style.pointerEvents != 'auto') {
      this.child.nativeElement.style.height = this.maxHeight + 'px';
      this.child.nativeElement.style.overflow = "auto";
      tt.style.pointerEvents = 'auto';
      this.pseudoStyle("after", `{top: ` + (this.child.nativeElement.offsetTop + parseInt(this.maxHeight + '') - 2) + `px;left: ` + this.child.nativeElement.offsetLeft + `px;content: 'less...' !important}`);
      this.showless = true;
    }
    else if(this.showless){// (this.child.nativeElement.scrollHeight > this.child.nativeElement.offsetHeight) 
      this.showless = false;
      var trg = evt.target as HTMLElement;
      if (evt.clientY < this.minHeight + 30 && evt.clientY > + this.minHeight) {
        this.child.nativeElement.style.height = this.minHeight + 'px';
        this.child.nativeElement.style.overflow = "hidden";
        tt.style.pointerEvents = 'none';
        tt.scrollTop = 0;
        this.pseudoStyle("after", `{top: ` + (this.child.nativeElement.offsetTop + parseInt(this.minHeight + '') - 2) + `px;left: ` + this.child.nativeElement.offsetLeft + `px;content: 'more...' !important}`);

      }
    }

  }

  pseudoStyle(element, prop): void {
    this;
    var _sheetId = this.pseudostyle;
    var _head = document.head || document.getElementsByTagName('head')[0];
    var _sheet = document.getElementById(_sheetId) || document.createElement('style');
    _sheet.id = _sheetId;
    var className = "pseudoStyle" + UID.getNew();
    if (this.pseudostyle)
      className = this.pseudostyle
    else
      this.pseudostyle = className;
    var tt = this.child.nativeElement as HTMLElement;
    if (!tt.classList.contains(className))
      tt.classList.add(className);
    let oldIndex = _sheet.innerHTML.indexOf("." + className) == -1 ? _sheet.innerHTML.length : _sheet.innerHTML.indexOf("." + className);
    _sheet.innerHTML = _sheet.innerHTML.substring(oldIndex + 1) + " ." + className + ":" + element + prop;//"{" + prop + ":" + value + "}";
    _head.appendChild(_sheet);
  };

}

var UID = {
  _current: 0,
  getNew: function () {
    this._current++;
    return this._current;
  }
};
/**
 * export declare let ExtHtmlElement: {
  prototype: ExtHtmlElement;
  new (): ExtHtmlElement;
}

interface ExtHtmlElement extends HTMLElement {
  pseudoStyle(element: string, prop: string, value: string): void;
}

ExtHtmlElement.prototype.pseudoStyle = (element, prop, value): void => {
  this;
  var _sheetId = "pseudoStyles";
  var _head = document.head || document.getElementsByTagName('head')[0];
  var _sheet = document.getElementById(_sheetId) || document.createElement('style');
  _sheet.id = _sheetId;
  var className = "pseudoStyle" + UID.getNew();

  this.className += " " + className;

  _sheet.innerHTML += " ." + className + ":" + element + "{" + prop + ":" + value + "}";
  _head.appendChild(_sheet);
  return this;
};
 */
