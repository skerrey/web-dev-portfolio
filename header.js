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
        <div class="header">
            <div class="header-logo">
                <img src="img/test.png" alt="header logo" height="70" width="70">
            </div>

            <ul class="navbar nav justify-content-end pr-5 pt-4">
                <li class="nav-link active">
                    <a href="./">Home</a>
                </li>
                <li class="nav-link">
                    <a href="projects.html">Projects</a>
                </li>
                <li class="nav-link">
                    <a href="database-diagrams.html">Database Diagrams</a>
                </li>
                <li class="nav-link">
                    <a href="api-unit-tests.html">API Unit Tests</a>
                </li>
                <li class="nav-link">
                    <a href="resume.html">Resume</a>
                </li>
                <li class="nav-link">
                    <a href="about.html">About</a>
                </li>
            </ul>
        </div>
        
        `;
    }
}

customElements.define("header-component", Header);