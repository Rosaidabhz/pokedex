import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    var boton = document.getElementById('boton')
    var nav = document.getElementById('nav')

  boton!
  .addEventListener('click', function(){
  nav!
  .classList.toggle('activo')

    console.log(boton)
    console.log(nav)
  })
 }
}