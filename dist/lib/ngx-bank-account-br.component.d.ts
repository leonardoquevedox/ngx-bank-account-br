/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Bank account card component.
 */
import { NgForm } from '@angular/forms';
export declare class NgxBankAccountBrComponent {
    account: any;
    form: NgForm;
    banks: {
        'label': string;
        'value': string;
    }[];
    constructor();
    ngOnInit(): void;
}
