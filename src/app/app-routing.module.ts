import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpokenLanguagesComponent} from './spoken-languages/spoken-languages.component';
import { ProgrammingLanguagesComponent} from './programming-languages/programming-languages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'spoken', component:SpokenLanguagesComponent},
  {path: 'programming', component:ProgrammingLanguagesComponent},
  {path: '', redirectTo: '/spoken' , pathMatch: 'full'},
  // Wildcard must go last
  {path: '**', component:PageNotFoundComponent}
]
@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
