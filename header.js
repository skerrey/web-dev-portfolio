/*
============================================
; Title: Personal Portfolio
; File Name: header.js
; Author: Professor Krasso
; Date: 6 February 2022
; Modified By: Seth Kerrey
; Description: 
;   Script for the HTML header.
; Resources: 
;   	Functions, parameters, classes, constructors 
;		variable names and additional JavaScript 
;       instructions provided by Prof Krasso
;       & Bellevue University.
===========================================
*/

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            
    
        <div class="d-flex justify-content-between flex-row-reverse">
            <div class="pr-5 pt-5" style="font-size:2em;">Seth Kerrey's Portoflio</div>
            <img src="./img/logo_100x100.png" alt="logo" class=" pt-2 img-fluid">
        </div>


        <ul class="navbar nav justify-content-end pr-5 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" href="./">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="project-tab" href="projects.html" onclick="$('#second_tab').trigger('click')">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="database-tab" href="database-diagrams.html">Database Diagrams</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="api-tab" href="api-unit-tests.html">API Unit Tests</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="resume-tab" href="resume.html">Resume</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="about-tab" href="about.html">About</a>
            </li>
        </ul>
        `;
    }
}

customElements.define("header-component", Header);

$(".nav .nav-link").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
 });