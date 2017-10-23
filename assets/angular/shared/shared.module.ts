import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RecordsService } from './form/records.service';
import { FieldControlService } from './form/field-control.service';
import { TextFieldComponent, RepeatableTextfieldComponent } from './form/field-textfield.component';
import { DropdownFieldComponent, TabOrAccordionContainerComponent, TextBlockComponent, TextAreaComponent, DateTimeComponent, AnchorOrButtonComponent, HtmlRawComponent, HiddenValueComponent, LinkValueComponent, SelectionFieldComponent } from './form/field-simple.component';
import { VocabField, VocabFieldComponent, VocabFieldLookupService } from './form/field-vocab.component';
import { RepeatableVocabComponent, RepeatableContributorComponent } from './form/field-repeatable.component';
import { ContributorComponent } from './form/field-contributor.component';
import { WorkflowStepButtonComponent } from './form/workflow-button.component';
import { ConfigService } from './config-service';
import { TranslationService } from './translation-service';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { Ng2CompleterModule } from "ng2-completer";
import { TranslateI18NextModule } from 'angular2-i18next';
import { DmpFieldComponent } from './form/dmp-field.component';
import { UserSimpleService } from './user.service-simple';
import { DashboardService } from './dashboard-service';
import { RolesService } from './roles-service';
import { UtilityService } from './util-service';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, NKDatetimeModule, Ng2CompleterModule, TranslateI18NextModule ],
  exports:      [ NKDatetimeModule, Ng2CompleterModule, TranslateI18NextModule, DmpFieldComponent, TextFieldComponent, DropdownFieldComponent, TabOrAccordionContainerComponent, TextBlockComponent, TextAreaComponent, DateTimeComponent, AnchorOrButtonComponent, VocabFieldComponent, RepeatableVocabComponent, ContributorComponent, RepeatableContributorComponent, HtmlRawComponent, HiddenValueComponent, WorkflowStepButtonComponent, LinkValueComponent, SelectionFieldComponent, RepeatableTextfieldComponent ],
  declarations: [ DmpFieldComponent, TextFieldComponent, DropdownFieldComponent, TabOrAccordionContainerComponent, TextBlockComponent, TextAreaComponent, DateTimeComponent, AnchorOrButtonComponent, VocabFieldComponent, RepeatableVocabComponent, ContributorComponent, RepeatableContributorComponent, HtmlRawComponent, HiddenValueComponent, WorkflowStepButtonComponent, LinkValueComponent, SelectionFieldComponent, RepeatableTextfieldComponent ],
  providers:    [ FieldControlService, RecordsService, VocabFieldLookupService, ConfigService, TranslationService, UserSimpleService, DashboardService, RolesService, UtilityService ],
  bootstrap:    [ ],
  entryComponents: [ DmpFieldComponent, TextFieldComponent, DropdownFieldComponent, TabOrAccordionContainerComponent, TextBlockComponent, TextAreaComponent, DateTimeComponent, AnchorOrButtonComponent, VocabFieldComponent, RepeatableVocabComponent, ContributorComponent, RepeatableContributorComponent, HtmlRawComponent, HiddenValueComponent, WorkflowStepButtonComponent, LinkValueComponent, SelectionFieldComponent, RepeatableTextfieldComponent ]
})
export class SharedModule { }