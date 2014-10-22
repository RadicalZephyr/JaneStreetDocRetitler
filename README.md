Jane Street Documentation Retitler
==================================

Userscript for "fixing" the Jane Street ocaml documentation page titles.

As it stands, each documentation page has the page title "core" or
whatever the name of the package the module resides in is.

This is a simple userscript meant for use with [Greasemonkey] or
[Tampermonkey] or similar.  All it does is extract the package and
module names from the breadcrumb and change the document title to the
appropriate thing.

[Greasemonkey]: http://www.greasespot.net/
[Tampermonkey]: http://tampermonkey.net/
