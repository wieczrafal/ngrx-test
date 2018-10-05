import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-phrase-editor',
  templateUrl: './phrase-editor.component.html',
})
export class PhraseEditorComponent {
  @Output() formSubmit = new EventEmitter<number>();

  public form: FormGroup = new FormGroup({
    phrase: new FormControl('', Validators.required)
  });

  public resetForm() {
    this.form.setValue({ phrase: '' });
  }
}
