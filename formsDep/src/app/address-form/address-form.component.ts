import { Component, Input, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting:AddressFormComponent
  }]
})
export class AddressFormComponent implements OnDestroy, ControlValueAccessor{

  @Input()
  legend: string;

  constructor(private fb: FormBuilder){}

  addressForm: FormGroup = this.fb.group({
    addressLine1: [null, [Validators.required]],
    addressLine2: [null, [Validators.required]], 
    zipCode: [null, [Validators.required]],
    city: [null, [Validators.required]],
  })


  writeValue(value: any): void {
    if(value){
      this.addressForm.setValue(value);
    }
  }


  onChange = () => {};

  ngOnDestroy(){
    this.onChangeSubscription.unsubscribe();
  }

  onChangeSubscription: Subscription
  registerOnChange(onChange: any): void {
    // this.onChange = onChange;
    // this.addressForm.valueChanges.subscribe( value => onChange(value))
    this.onChangeSubscription = this.addressForm.valueChanges.subscribe(onChange);
  }

  setDisabledState(disabled: boolean): void {
    if(disabled){
      this.addressForm.disable()
    }
    else{
      this.addressForm.enable();
    }
  }

  onTouched = () => {};
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

}
