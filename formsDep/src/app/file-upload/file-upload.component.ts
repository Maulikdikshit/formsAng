import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FileUploadComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: FileUploadComponent
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor, Validator {

  @Input()
  requiredFileType: string;

  fileName: string = '';

  fileUploadError = false;

  uploadProgress: number;

  onChange = (fileName: string) => {};

  constructor(private http: HttpClient){

  }

  onTouched = () => {}

  onClick(fileUpload: HTMLInputElement){
    this.onTouched();
    fileUpload.click();
  }


  disabled = false;
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  registerOnChange(onChange: any): void {
      this.onChange = onChange;    
  }

  writeValue(value: any): void {
    this.fileName = value;
  }


  onFileSelected(event){
   const file:File =  event.target.files[0];
   if(file){
    this.fileName = file.name;
    console.log(this.fileName);

    const formData = new FormData();
    formData.append('thumbnail',file);
    this.fileUploadError = false;

    this.http.post('/api/thumnail-upload',formData ,{
      reportProgress: true,
      observe: 'events'
      }).pipe(
        catchError(error => {
          this.fileUploadError = true;
          return of(error);
        }),
        finalize(() => {
          this.uploadProgress = null;
        })
      ).subscribe( event => {
        if(event.type == HttpEventType.UploadProgress){
          this.uploadProgress =  Math.round(100 * (event.loaded / event.total));
        }
        else if(event.type == HttpEventType.Response){
          this.fileUploadSuccess = true;
            this.onChange(this.fileName);
            this.onValidatorChange();
        }
    });
   }


  }


  onValidatorChange = () => {}
  registerOnValidatorChange(validatorChange: () => void): void {
    this.onValidatorChange = validatorChange;
  }

  fileUploadSuccess = false;
  validate(control: AbstractControl): ValidationErrors | null {

    if(this.fileUploadSuccess){return null;}
    let errors: any = {
      requiredFileType: this.requiredFileType
    }

  
    if(this.fileUploadError){
      errors.uploadFailed = true;
    }

    return errors;
    
  }

}
