<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title') | Design Playground</title>

    {{-- {{ config('app.name', 'DesignPlayground') }} --}}

    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Styles -->
    <link type="text/css" href="{{ asset('css/style.css') }}" rel="stylesheet">

     <!-- Favicons -->
     <link type="favicon" href="{{ asset('img/favicon.png') }}" rel="icon">
     <link type="favicon" href="{{ asset('img/apple-touch-icon.png') }}" rel="apple-touch-icon">

    <!-- Scripts -->
    <script src="{{ asset('../../js/app.js') }}" defer></script>

    <!-- Fonts -->
    {{-- <link type="text/css" rel="dns-prefetch" href="//fonts.gstatic.com">
    <link type="text/css" href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"> --}}
    <link text="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Material Roboto Font -->

    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

    <!-- Material Font Icons -->

    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

    <!-- Material CSS -->

    <link type="text/css" rel="stylesheet" href="{{ asset('css/materialize.min.css')}}"  media="screen,projection"/>

    <!-- Vendor CSS Files -->
    {{-- <link type="text/css" href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet"> --}}
    <link type="text/css" href="{{ asset('vendor/icofont/icofont.min.css') }}" rel="stylesheet">
    <link type="text/css" href="{{ asset('vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
    <link type="text/css" href="{{ asset('vendor/venobox/venobox.css') }}" rel="stylesheet">
    <link type="text/css" href="{{ asset('vendor/owl.carousel/assets/owl.carousel.min.css') }}" rel="stylesheet">
    <link type="text/css" href="{{ asset('vendor/aos/aos.css') }}" rel="stylesheet">




</head>
@include('layouts.includes.nav-menu')
