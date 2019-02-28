import { Component, Input, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxBankAccountBrComponent = /** @class */ (function () {
    function NgxBankAccountBrComponent() {
        this.banks = [{ 'label': 'BANCO ABN AMRO REAL S.A. (REAL)', 'value': '356' }, { 'label': 'BANCO ACOMERCIAL E DE INVESTIMENTO SUDAMERIS S.A. (SUDAMERIS)', 'value': '215' }, { 'label': 'BANCO ALFA S.A (ALFA)', 'value': '025' }, { 'label': 'BANCO BBM S.A (BBM)', 'value': '107' }, { 'label': 'BANCO BMG S.A. (BMG)', 'value': '318' }, { 'label': 'BANCO BRADESCO S.A. (BRADESCO)', 'value': '237' }, { 'label': 'BANCO CACIQUE S. A. (CACIQUE)', 'value': '263' }, { 'label': 'BANCO CITIBANK S.A.', 'value': '745' }, { 'label': 'BANCO COOPERATIVO DO BRASIL S.A. - (BANCOOB)', 'value': '756' }, { 'label': 'BANCO COOPERATIVO SICREDI S.A. (SICREDI)', 'value': '748' }, { 'label': 'BANCO CRUZEIRO DO SUL S.A. (CRUZEIRO DO SUL)', 'value': '229' }, { 'label': 'BANCO DA AMAZONIA S.A. (BANCO DA AMAZÔNIA (BASA))', 'value': '003' }, { 'label': 'BANCO DE BRASÍLIA S.A. (BRB)', 'value': '070' }, { 'label': 'BANCO DO BRASIL S.A. (BANCO DO BRASIL)', 'value': '001' }, { 'label': 'BANCO DO ESTADO DE SANTA CATARINA S.A.', 'value': '027' }, { 'label': 'BANCO DO ESTADO DE SERGIPE S.A (BANESE)', 'value': '047' }, { 'label': 'BANCO DO ESTADO DO PARÁ S/A. (BANPARÁ)', 'value': '037' }, { 'label': 'BANCO DO ESTADO DO RIO GRANDE DO SUL S.A. (BANRISUL)', 'value': '041' }, { 'label': 'BANCO DO NORDESTE DO BRASIL S.A (BANCO DO NORDESTE (BNB) )', 'value': '004' }, { 'label': 'BANCO FININVEST S.A. (FININVEST)', 'value': '252' }, { 'label': 'BANCO IBI S.A - BANCO MULTIPLO (BANCO IBI)', 'value': '063' }, { 'label': 'BANCO INTERMEDIUM S.A.', 'value': '077' }, { 'label': 'BANCO ITAU S.A. (ITAÚ)', 'value': '341' }, { 'label': 'BANCO ITAUBANK S.A.', 'value': '479' }, { 'label': 'BANCO MERCANTIL DO BRASIL S.A. (MERCANTIL DO BRASIL)', 'value': '389' }, { 'label': 'BANCO NOSSA CAIXA S.A (NOSSA CAIXA)', 'value': '151' }, { 'label': 'BANCO ORIGINAL', 'value': '212' }, { 'label': 'BANCO PANAMERICANO S.A. (PANAMERICANO)', 'value': '623' }, { 'label': 'BANCO RENDIMENTO S.A. (BANCO RENDIMENTO)', 'value': '633' }, { 'label': 'BANCO SAFRA S.A. (SAFRA)', 'value': '422' }, { 'label': 'BANCO SANTANDER S.A. (SANTANDER BANESPA)', 'value': '033' }, { 'label': 'BANCO SIMPLES S.A. (BANCO SIMPLES)', 'value': '749' }, { 'label': 'BANCO UBS PACTUAL S.A.', 'value': '208' }, { 'label': 'BANCO UNICRED', 'value': '136' }, { 'label': 'BANCO VOTORANTIM S.A (VOTORANTIM)', 'value': '655' }, { 'label': 'BANESTES S.A BANCO DO ESTADO DO ESPIRITO SANTO (BANESTES)', 'value': '021' }, { 'label': 'BANIF - BANCO INTERNACIONAL DO FUNCHAL (BRASIL), S.A. (BANIF)', 'value': '719' }, { 'label': 'BPN BRASIL BANCO MÚLTIPLO S.A. (BPN)', 'value': '069' }, { 'label': 'CAIXA ECONOMICA FEDERAL (CAIXA ECONÔMICA FEDERAL)', 'value': '104' }, { 'label': 'CECRED-COOPERATIVA CENTRAL DE CREDITO URBANO', 'value': '085' }, { 'label': 'CONFEDERAÇÂO NACIONAL DAS COOPERATIVAS CENTRAIS UNICREDS', 'value': '136' }, { 'label': 'HSBC BANK BRASIL S.A.BANCO MULTIPLO (HSBC)', 'value': '399' }, { 'label': 'LEMON BANK BANCO MÚLTIPLO S..A (LEMON BANK)', 'value': '065' }, { 'label': 'UNIBANCO UNIAO DE BANCOS BRASILEIROS S.A. (UNIBANCO)', 'value': '409' }];
    }
    /**
     * @return {?}
     */
    NgxBankAccountBrComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    NgxBankAccountBrComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-bank-account-br',
                    template: "<article bank-account-card max-width-container *ngIf=\"account\">\n    <article card-back>\n        <section card-stripe></section>\n    </article>\n    <article card-front>\n        <form #cardForm=\"ngForm\">\n            <section>\n                <section bank-container>\n                    <label>\n                        Banco:\n                    </label>\n                    <select required account-bank name=\"bankNumber\" [(ngModel)]=\"account.bankNumber\">\n                        <option *ngFor=\"let bank of banks; let index = index;\" [value]=\"bank.value\" [selected]=\"index == 0\">\n                            {{bank.label}}\n                        </option>\n                    </select>\n                </section>\n                <label>\n                    N\u00FAmero da conta:\n                </label>\n                <input required type=\"tel\" account-number name=\"accountNumber\" mask=\"9999999999999999999999999\"\n                    [(ngModel)]=\"account.accountNumber\" placeholder=\"12349123913\">\n                <label account-number-divider>-</label>\n                <input required type=\"tel\" account-check-number name=\"accountCheckNumber\" mask=\"9\" [(ngModel)]=\"account.accountCheckNumber\"\n                    placeholder=\"1\">\n            </section>\n            <section cardholder-container>\n                <label>\n                    Titular:\n                </label>\n                <input required type=\"text\" autocomplete=\"cc-name\" card-holder name=\"holderName\" [(ngModel)]=\"account.holder.fullname\"\n                    placeholder=\"John Hall\" />\n            </section>\n            <section agency-container>\n                <label>\n                    Ag\u00EAncia\n                </label>\n                <input required account-agency-number placeholder=\"1234\" name=\"agencyNumber\" [(ngModel)]=\"account.agencyNumber\"\n                    type=\"tel\">\n                <span agency-number-divider>-</span>\n                <input required account-agency-check placeholder=\"1\" name=\"agencyCheckNumber\" [(ngModel)]=\"account.agencyCheckNumber\"\n                    type=\"tel\">\n            </section>\n        </form>\n    </article>\n</article>",
                    styles: ["[bank-account-card]{padding-bottom:2.5rem;max-width:400px;margin:auto}[bank-account-card] *{transition-property:all;transition-duration:.3s}[bank-account-card] [card-cvc]{width:6rem;margin-bottom:0}[bank-account-card] [card-back],[bank-account-card] [card-front]{background:#1e88e5;background:linear-gradient(to bottom,#1e88e5 0,#1e99e5 100%);min-width:320px;max-width:400px;min-height:230px;border-radius:.6rem;padding:2rem 3rem 0;font-size:1rem;letter-spacing:1px;font-weight:300;color:#fff;box-shadow:1px 1px .2rem rgba(0,0,0,.2)}[bank-account-card] [card-front]{z-index:999;margin-top:-25rem;margin-left:-2rem}[bank-account-card] [card-back]{z-index:-2;padding:2rem 0 0;margin-right:-2rem}[bank-account-card] [account-number]{display:inline-block;width:80%}[bank-account-card] [account-number-divider]{display:inline-block;text-align:center;width:10%}[bank-account-card] [account-check-number]{display:inline-block;width:10%}[bank-account-card] [card-stripe]{width:100%;height:5.5rem;background-color:rgba(0,0,0,.5);right:0}[bank-account-card] [card-token]{display:none}[bank-account-card] [cardholder-container]{width:75%;display:inline-block}[bank-account-card] [cardholder-container] [card-holder]{width:90%}[bank-account-card] [bank-container]{width:100%;display:inline-block}[bank-account-card] [bank-container] select{width:100%}[bank-account-card] [agency-container]{width:25%;display:inline-block}[bank-account-card] [agency-container] [account-agency-number]{text-align:center;max-width:55%;margin-right:5%;padding-left:.5rem;padding-right:.5rem}[bank-account-card] [agency-container] [account-agency-divider]{max-width:2%}[bank-account-card] [agency-container] [account-agency-check]{margin-left:5%;padding-left:.5rem;padding-right:.5rem;text-align:center;max-width:30%}[bank-account-card] [card-button]{border:.2rem solid #fff;display:block;padding:1rem;color:#fff;float:right;border-radius:3rem;background-color:#1e88e5}[bank-account-card] [next-button]{margin-top:2rem}[bank-account-card] [save-button]{border-radius:50%;font-weight:700;margin-top:-1rem}[bank-account-card] input,[bank-account-card] select{border:none;outline:0;background-color:#fff;font-weight:700;height:3rem;line-height:3rem;padding:0 1rem;margin:0 0 .8rem;color:#1e88e5;font-size:1rem;box-sizing:border-box;border-radius:.4rem;letter-spacing:.07rem}[bank-account-card] select{padding:0;text-align:center}[bank-account-card] select option{background-color:#fff;font-weight:700;color:#444}[bank-account-card] input::-webkit-input-placeholder{color:#79c2f0}[bank-account-card] input::-moz-placeholder{color:#79c2f0}[bank-account-card] input:-ms-input-placeholder{color:#79c2f0}[bank-account-card] input:-moz-placeholder{color:#79c2f0}[bank-account-card] label{display:block;margin:0 auto .7rem;color:#fff;font-size:1rem;font-weight:700;text-transform:uppercase}"]
                }] }
    ];
    NgxBankAccountBrComponent.ctorParameters = function () { return []; };
    NgxBankAccountBrComponent.propDecorators = {
        account: [{ type: Input, args: ['account',] }],
        form: [{ type: ViewChild, args: ['accountForm',] }]
    };
    return NgxBankAccountBrComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var Directive = [NgxBankAccountBrComponent];
var NgxBankAccountBrModule = /** @class */ (function () {
    function NgxBankAccountBrModule() {
    }
    NgxBankAccountBrModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [Directive],
                    exports: [Directive]
                },] }
    ];
    return NgxBankAccountBrModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxBankAccountBrComponent, NgxBankAccountBrModule, Directive as ɵa };

//# sourceMappingURL=ngx-bank-account-br.js.map