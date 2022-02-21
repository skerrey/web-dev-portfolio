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
        <div class="container mt-5" id="Quick Links">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center text-white">
                        Explore More
                    </h2>
                    <ul class="d-flex justify-content-around" style="list-style-type: none;">
                        <li>
                            <a class="btn btn-primary" href="https://github.com/skerrey?tab=repositories" target="_blank">GitHub Repositories</a>
                        </li>
                        <li>
                            <a class="btn btn-primary" href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue Web Development Degree</a>
                        </li>
                        <li>
                            <a class="btn btn-primary" href="#" target="_blank">Bellevue Web Development YouTube</a>
                        </li>
                        <li>
                            <a class="btn btn-primary" href="https://github.com/buwebdev/" target="_blank">buwebdev Repository</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div class="row" id="footer">
                <div class="col-md-12">
                    <p class="text-center font-italic text-white">
                        Copyright &copy; 2022 <a href="mailto:skerrey@my365.bellevue.edu">Seth Kerrey</a>
                    </p>
                </div>
            </div>
        </div>
        `;
    }
}


customElements.define("footer-component", Footer);