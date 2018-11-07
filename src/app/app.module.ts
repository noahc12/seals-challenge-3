import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './filter.pipe';
import {SlideshowModule} from 'ng-simple-slideshow';
import { DescriptionComponent } from './description/description.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { ResultsComponent } from './results/results.component';
import { NgxCarousel3dModule } from './modules/ngx-carousel-3d/ngx-carousel-3d.module';
import { BlogComponent } from './blog/blog.component';




const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'results', component: ResultsComponent},
  { path: 'description', component: DescriptionComponent},
  { path: 'blog', component: BlogComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent },
  { path: '**', component: ResultsComponent },
  { path: '**', component: DescriptionComponent },
  { path: '**', component: BlogComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    FilterPipe,
    DescriptionComponent,
    CategoriesComponent,
    ResultsComponent,
    BlogComponent

  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {  useHash: true } // <-- debugging purposes only
    ),
    FormsModule,
    NgxCarousel3dModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
