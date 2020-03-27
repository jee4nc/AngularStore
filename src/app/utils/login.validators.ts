import { AbstractControl } from '@angular/forms';

export class loginVali {
    static isUserValue(control: AbstractControl) {

        const value = control.value;
        console.log(value);
        if (value > 13000) {
            return {price_invalid: true};
        }
        return null;
    }
}
