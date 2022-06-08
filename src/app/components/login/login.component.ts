import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginMensaje: string = '';
  listaUsuario: any[] = [
    { usuario:'Richard Perez', contrasena:'123456'}
  ]

  form: FormGroup;

  constructor(private router: Router,
    public uService: UsuarioService, private fb: FormBuilder) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  menuOpciones(){
    this.router.navigate([ '/menu_opciones' ])
  }

  ingresoUsuario(){
     var consultarUsuario: any = {
       usuario: this.form.get('usuario')?.value,
       password: this.form.get('contrasena')?.value
      }
      
      this.uService.login(consultarUsuario).subscribe(result => {
        this.loginMensaje = result ? 'Login Exitoso' : 'Credenciales Invalidas';
        console.log(result);
      });

    console.log(consultarUsuario)
    }

}
