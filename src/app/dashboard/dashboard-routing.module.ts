import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'students',
        loadChildren: () => import('./students/students.module').then((module) => module.StudentsModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('./courses/courses.module').then((module) => module.CoursesModule)
      },
      {
        path: 'registrations',
        loadChildren: () => import('./registrations/registrations.module').then((module) => module.RegistrationsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then((module) => module.UsersModule)
      },
      {
        path: 'my-profile',
        component: MyProfileComponent
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }