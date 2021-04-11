@include('layouts.includes.header')
<body>
    <div id="app">


        <main class="py-4">
            @yield('content')
        </main>
    </div>
    @include('layouts.includes.footer')
