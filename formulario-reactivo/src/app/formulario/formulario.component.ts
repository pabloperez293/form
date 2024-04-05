import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required]],
    apellido: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    archivoPDF: [null, [Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    };
  }

  onSubmit(){
    // Logica para enviar form
    console.log(this.formulario.value);
  }
}
