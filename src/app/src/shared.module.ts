import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MaterialModule } from './app/material/material.module';
import { RegisterComponent } from './app/register/register.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';

const components = [RegisterComponent, HomeComponent, AboutComponent, ContactComponent]
@NgModule({
  imports: [
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    ...components
  ],
  declarations: [...components]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        }
    }
}