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
                <a href="./"><img src="img/test.png" alt="header logo" height="70" width="70"></a>
            </div>

            <ul class="navbar nav justify-content-end pr-5 pt-4">
                <a href="./">
                    <li class="btn-new btn-new-nav">
                        Home
                    </li>
                </a>
                <a href="projects.html">
                    <li class="btn-new btn-new-nav">
                        Projects
                    </li>
                </a>
                <a href="web-335/kerrey-diagrams.html">
                    <li class="btn-new btn-new-nav">
                        Diagrams
                    </li>
                </a>
                <a href="api-unit-tests.html">
                    <li class="btn-new btn-new-nav">
                        API Unit Tests
                    </li>
                </a>
                <a href="web-430/kerrey-devops.html">
                    <li class="btn-new btn-new-nav">
                        DevOps
                    </li>
                </a>
                <a href="resume.html">
                    <li class="btn-new btn-new-nav">
                        Resume
                    </li>
                </a>
                <a href="about.html">
                    <li class="btn-new btn-new-nav">
                        About
                    </li>
                </a>
            </ul>
        </div>
        
        `;
    }
}

customElements.define("header-component", Header);