/*
============================================
; Title: Personal Portfolio
; File Name: kerrey-devops.js
; Author: Professor Krasso
; Date: 29 May 2022
; Modified By: Seth Kerrey
; Description: 
;   Script for the horizontal scroll (jQuery)
; Resources: 
;   CSS Trick jQuery Horizontal Scroll
;     https://css-tricks.com/snippets/jquery/horz-scroll-with-mouse-wheel/
===========================================
*/

$(document).ready(function () {
  $(".grid-container-devops").mousewheel(function (e, delta) {
    this.scrollLeft -= delta*50;
    e.preventDefault();
  });
});

