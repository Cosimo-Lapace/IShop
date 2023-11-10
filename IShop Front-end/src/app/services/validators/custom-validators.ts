import { FormControl, ValidationErrors } from "@angular/forms";
export class CustomValidators {


  //Check if fields contain invalid spaces
  static notEmptySpace(control: FormControl):ValidationErrors{
    if((control.value !== null) && (control.value.trim().length === 0)){
      return {'misEmptySpace': true};
    }else{
      return null
    }

  }
//------------------------
  static emailEqualsValidator(control: FormControl): ValidationErrors {
    //custom validator for group form parent
      const customerGroup = control.parent;
      //check group parent exist
      if (customerGroup) {
        //get email and confirm email
        const email = customerGroup.get('email').value;
        const confirmEmail = control.value;
        //Check that email and confirmation email are the same
        return email === confirmEmail ? null : { 'misConfirmEmail': true };
      }

      return null;
    };
    //--------------------
  }

