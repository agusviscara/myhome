import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchViewPage } from './search-view';

import { RatingModule } from "ngx-rating";

@NgModule({
  declarations: [
    SearchViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchViewPage),
    RatingModule
  ],
})
export class SearchViewPageModule {}
