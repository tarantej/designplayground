<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'DesignPlayground') }}</title>

    <meta content="" name="description">
    <meta content="" name="keywords">

     <!-- Favicons -->
     <link type="favicon" href="{{ asset('img/favicon.png') }}" rel="icon">
     <link type="favicon" href="{{ asset('img/apple-touch-icon.png') }}" rel="apple-touch-icon">

    <!-- Scripts -->
    <script src="{{ asset('../../js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link type="text/css" rel="dns-prefetch" href="//fonts.gstatic.com">
    <link type="text/css" href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link text="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Material Roboto Font -->

    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

    <!-- Material Font Icons -->

    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

    <!-- Material CSS -->

    <link type="text/css" rel="stylesheet" href="{{ asset('css/materialize.min.css')}}"  media="screen,projection"/>

    <!-- Vendor CSS Files -->
    <link type="text/css" href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link type="text/css" href="{{ asset('vendor/icofont/icofont.min.css') }}" rel="stylesheet">
    <link type="text/css" href="{{ asset('vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
    <link type="text/css" href="{{ asset('vendor/venobox/venobox.css') }}" rel="stylesheet">
    <link type="text/css" href="{{ asset('vendor/owl.carousel/assets/owl.carousel.min.css') }}" rel="stylesheet">
    <link type="text/css" href="{{ asset('vendor/aos/aos.css') }}" rel="stylesheet">


    <!-- Styles -->
    <link type="text/css" href="{{ asset('css/style.css') }}" rel="stylesheet">

</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="#">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="#">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="#" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('projects') }}">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('case-studies') }}">Case Studies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('blog') }}">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

    <!-- Vendor JS Files -->
    <script type="text/javascript" src="{{asset('vendor/jquery/jquery.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('vendor/jquery.easing/jquery.easing.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('vendor/php-email-form/validate.js')}}"></script>
    <script type="text/javascript" src="{{asset('vendor/waypoints/jquery.waypoints.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('vendor/counterup/counterup.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('vendor/isotope-layout/isotope.pkgd.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('vendor/venobox/venobox.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('vendor/owl.carousel/owl.carousel.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('vendor/typed.js/typed.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('vendor/aos/aos.js')}}"></script>

    <!-- Template Main JS File -->
    <script type="text/javascript" src="{{ asset('js/main.js') }}"></script>

     <!-- Material JS -->

     <script type="text/javascript" src="{{ asset('js/materialize.min.js') }}"></script>

    </body>
</body>
</html>
