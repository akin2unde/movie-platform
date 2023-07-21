import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { TreeSelectModule } from 'primeng/treeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PaginatorModule } from "primeng/paginator";
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    // BusyIndicatorModule,
    CommonModule,
    ToastModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    PasswordModule,
    CardModule,
    SidebarModule,
    DialogModule,
    CalendarModule,
    ButtonModule,
    DropdownModule,
    ConfirmDialogModule,
    CheckboxModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    MultiSelectModule,
    TreeSelectModule,
    TreeTableModule,
    TableModule,
    MenuModule,
    RadioButtonModule,
    OverlayPanelModule,
    FileUploadModule,
    SkeletonModule,
    TooltipModule,
    InputSwitchModule,
    PaginatorModule,
    PanelModule
  ],
  providers: [

  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
      ],
    };
  }
}
