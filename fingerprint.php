<?php

/*
* Plugin Name: FingerPrint
* Author: Fatih Intekin
* Description: Plugin for getting browser fingerprint.
* Version:     1.0.0
* Author URI:  https://github.com/fatihint
*/


// Exit if file is accessed directly
if ( !defined('ABSPATH') ) {
    exit;
}

define( 'FINGERPRINT__PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

// Enqueue scripts for client-ui
function fp_enqueue_ui_scripts() {
    wp_enqueue_script( 'fingerprint-library', 'https://cdn.jsdelivr.net/npm/fingerprintjs2@1.8.0/dist/fingerprint2.min.js', true,true);
    wp_enqueue_script( 'core-fingerprint-js', plugins_url('public/js/fingerprint.js', __FILE__ ), array( 'jquery'), false, true );
    wp_enqueue_script( 'edit-slider-fingerprint-js', plugins_url('public/js/edit-slider.js', __FILE__ ), false, false, true);
}

add_action( 'wp_enqueue_scripts', 'fp_enqueue_ui_scripts');

?>