// ==UserScript==
// @name         Jane Street Doc Headers
// @namespace    http://zephyrizing.net/
// @version      0.1
// @description  Put the name of the current library in the page title
// @author       Geoff Shannon
// @match        https://ocaml.janestreet.com/ocaml-core/111.28.00/doc/*
// @grant        none
// ==/UserScript==


// Ids:
// #bccurpkg

// #bccurpkgmod

// This can guard the text
if ("undefined" === typeof (document.getElementById("bccurpkg").firstChild.text)) {

    var pkg = document.getElementById("bccurpkg").firstChild.text;
    var module = document.getElementById("bccurpkgmod").firstChild;

    document.title = pkg + "/" + module;

}
