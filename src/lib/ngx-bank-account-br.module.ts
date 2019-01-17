/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgxBankAccountBrComponent } from './ngx-bank-account-br.component'

export const Directive = [NgxBankAccountBrComponent];

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [Directive],
    exports: [Directive]
})
export class NgxBankAccountBrModule { }