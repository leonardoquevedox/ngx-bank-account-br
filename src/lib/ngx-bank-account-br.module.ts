/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgxBankAccountComponent } from './ngx-bank-account-br.component'

export const Directive = [NgxBankAccountComponent];

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [Directive],
    exports: [Directive]
})
export class NgxBankAccountModule { }