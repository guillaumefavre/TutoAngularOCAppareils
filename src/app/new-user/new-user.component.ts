import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
  			  private userService: UserService,
  			  private router: Router) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm() {
  	this.userForm = this.formBuilder.group({
  		firstNameForm: ['', Validators.required],
  		lastNameForm: ['', Validators.required],
  		emailForm: ['', [Validators.required, Validators.email]],
  		drinkPreferenceForm: ['', Validators.required],
  		hobbiesForm: this.formBuilder.array([])
  	});
  }

  onSubmitForm() {
  	const formValue = this.userForm.value;
  	const newUser = new User(
  		formValue['firstNameForm'], 
  		formValue['lastNameForm'], 
  		formValue['emailForm'], 
  		formValue['drinkPreferenceForm'],
  		formValue['hobbiesForm'] ? formValue['hobbiesForm'] : []
  	);
  	this.userService.addUser(newUser);
  	this.router.navigate(['/users']);
  }

  getHobbies() {
  	// Récupérer le formArray des hobbies, depuis le template
  	return this.userForm.get('hobbiesForm') as FormArray;
  }

  onAddHobby() {
  	const newHobbyControl = this.formBuilder.control('', Validators.required);
  	// Ajout du contrôle au formArray
  	this.getHobbies().push(newHobbyControl);
  }

}
