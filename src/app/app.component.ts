import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';
import { UserService } from './services/user.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PopupComponent, MatTableModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'resusable-components';
  users: any = []
  displayedColumns = ['id', 'name', 'age', 'address', 'edit']
  displayPopup: boolean = false;
  popupMode: string = ''
  selectedUserDetails: any = {}
  tableData: any = []

  constructor(private _userService: UserService) {

  }

  ngOnInit(): void {
    this._userService.userList.subscribe((data: any) => {
      this.users = data
      this.tableData = new MatTableDataSource(data)
      console.log(this.users)
    })
    console.log('hi')
  }

  addUser() {
    this.popupMode = 'add'
    this.displayPopup = true;
    var container = document.getElementById('main-container')
    container?.classList.add('blur-filter')
  }

  hidePopup() {
    this.displayPopup = false
    var container = document.getElementById('main-container')
    container?.classList.remove('blur-filter')
  }

  editUser(user: any) {
    this.selectedUserDetails = user
    this.popupMode = 'edit'
    this.displayPopup = true;
    var container = document.getElementById('main-container')
    container?.classList.add('blur-filter')
  }

  updateUserDetails(event: any) {
    if (event.id == 'N/A') {
      event['id'] = this.users.length + 1;
      this.users.push(event)
      this._userService.userList.next(JSON.parse(JSON.stringify(this.users)))
    } else {
      let index = this.users.findIndex((user: any) => user.id == event.id)
      this.users[index] = event
      this._userService.userList.next(JSON.parse(JSON.stringify(this.users)))
    }
  }
}
