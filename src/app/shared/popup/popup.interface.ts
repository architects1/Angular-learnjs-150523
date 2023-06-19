import {TemplateRef} from '@angular/core';

export interface IPopupContext {
    title: string;
}

export interface IPopup {
    template: TemplateRef<any>;
    context: IPopupContext;
}