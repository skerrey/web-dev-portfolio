/*
============================================
; Title: Personal Portfolio
; File Name: footer.js
; Author: Professor Krasso
; Date: 6 February 2022
; Modified By: Seth Kerrey
; Description: 
;   Script for the HTML footer.
; Resources: 
;   	Functions, parameters, classes, constructors 
;		variable names and additional JavaScript 
;       instructions provided by Prof Krasso
;       & Bellevue University.
===========================================
*/

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <p>
                    Copyright &copy; 2021 <a href="#">Bellevue University</a>
                </p>
            </div>
        `;
    }
}

customElements.define("footer-component", Footer);