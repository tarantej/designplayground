@include('layouts.includes.site-header')
<body>
    <header id="header" class="white-text">
        {{-- @include('layouts.includes.nav-menu') --}}
        <div id="nav"></div>
    </header>

    <div id="app">


        <main class="py-4 container-fluid">
            @yield('content')
        </main>
    </div>
    @include('layouts.includes.footer')
