import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {path:'groups/:username', component:GroupsComponent},
  {path: '', component:LoginComponent},
  {path: 'chat', component:ChatComponent},
  {path: 'config', component:ConfigComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
