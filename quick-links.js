/*
============================================
; Title: Personal Portfolio
; File Name: quick-links.js
; Author: Professor Krasso
; Date: 6 February 2022
; Modified By: Seth Kerrey
; Description: 
;   Script for the HTML quick links.
; Resources: 
;   	Functions, parameters, classes, constructors 
;		variable names and additional JavaScript 
;       instructions provided by Prof Krasso
;       & Bellevue University.
===========================================
*/

class QuickLinks extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="quick-links">
                <h2>
                    Quick Links
                </h2>
                <ul>
                    <li>
                        <a href="https://github.com/skerrey?tab=repositories" target="_blank">GitHub Repositories</a>
                    </li>
                    <li>
                        <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue Web Development Degree</a>
                    </li>
                    <li>
                        <a href="#" target="_blank">Bellevue Web Development YouTube</a>
                    </li>
                    <li>
                        <a href="https://github.com/buwebdev/" target="_blank">buwebdev Repository</a>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define("quick-links-component", QuickLinks);