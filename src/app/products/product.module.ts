import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductComponent } from './products.component';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { SharedModule } from '../shared/shared.module';
import { ProductListAltComponent } from './product-list-alt/product-list-alt.component';
@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'alternate',
        component: ProductShellComponent,
      },
    ]),
  ],
  declarations: [
    ProductComponent,
    ProductShellComponent,
    ProductListAltComponent,
    ProductDetailComponent,
  ],
})
export class ProductModule {}
