/*jslint white:true, nomen: true, plusplus: true */
/*global mx, define, require, browser, devel, console, document, jQuery */
/*mendix */
/*
    Lettering
    ========================

    @file      : Lettering.js
    @version   : 1.0
    @author    : Chad Evans, Russel Hite
    @date      : 19 Aug 2015
    @copyright : 2015, Mendix B.v.
    @license   : Apache v2

    Documentation
    ========================
    Adding radical web typography to Mendix.
*/

// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    'dojo/_base/declare', 'mxui/widget/_WidgetBase',
    'mxui/dom', 'dojo/dom', 'dojo/query', 'dojo/dom-prop', 'dojo/dom-geometry', 'dojo/dom-class', 'dojo/dom-style',
    'dojo/dom-construct', 'dojo/_base/array', 'dojo/_base/lang', 'dojo/text', 'dojo/html', 'dojo/_base/event',
    'Lettering/lib/jquery-1.11.2', 'Lettering/lib/jquery.lettering'
], function (declare, _WidgetBase,
    dom, dojoDom, domQuery, domProp, domGeom, domClass, domStyle,
    domConstruct, dojoArray, lang, text, html, event,
    _jQuery, _lettering) {
    'use strict';

    var $ = _jQuery.noConflict(true);

    // Declare widget's prototype.
    return declare('Lettering.widget.Lettering', [_WidgetBase], {

        // Parameters configured in the Modeler.
        className: "",
        splitOn: "chars",

        // Internal variables. Non-primitives created in the prototype are shared between all widget instances.

        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function () {},

        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function () {
            //console.log(this.id + '.postCreate');
        },

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function (obj, callback) {
            //console.log(this.id + '.update');

            if (this.splitOn === "chars") {
                $("." + this.className).lettering();
            } else {
                $("." + this.className).lettering(this.splitOn);
            }

            callback();
        }
    });
});
require(['Lettering/widget/Lettering'], function () {
    'use strict';
});
