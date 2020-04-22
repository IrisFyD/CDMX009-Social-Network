export default () => {
    const root = document.getElementById('root')
    const viewHome = `
    <header>
    <img src="https://raw.githubusercontent.com/IrisFyD/CDMX009-Social-Network/master/src/img/LogoBlancoDigiTarea.png" alt="" class="home">
    <a href="#/profile"><img src="img/User.svg" alt="" class="imagenUser"></a>
</header>

<div class="DegreeAndGroup">
<select class="degree" name="">
<option value="">1ro</option>
<option value="">2do</option>
<option value="">3ro</option>
<option value="">4to</option>
<option value="">5to</option>
<option value="">6to</option>
</select>
<select class="group" name="">
<option value="">A</option>
<option value="">B</option>
</select>
</div>

<div class="mainConteiner">
<div class="releases">
<a href="#releases"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0%0D%0Ab3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl%0D%0AcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93%0D%0Ad3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEy%0D%0ALjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUx%0D%0AMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDQ2%0D%0ALjk3NywyMDEuOTE0TDI3Ny4zMTYsMzIuMjUzYy0xNy41MzktMTcuNTQtNDYuMDgxLTE3LjU0MS02%0D%0AMy42MjIsMGMtMTUuNzY4LDE1Ljc2Ny0xNy4xMjYsMzkuODE0LTUuNDgyLDU2Ljk4NQ0KCQkJbC0w%0D%0ALjIzNiwxLjE4MWMtMTIuMjMyLDYxLjE2NS00Mi4wMTEsMTE2LjgwOS04Ni4xMiwxNjAuOTE3bC03%0D%0ANy44MTksNzcuODE5Yy0xNy41ODIsMTcuNTgzLTE3LjU4NSw0Ni4wMzksMCw2My42MjJsNDIuNDE0%0D%0ALDQyLjQxNA0KCQkJYzE3LjU4MSwxNy41ODIsNDYuMDM5LDE3LjU4Myw2My42MjIsMGwxMC42MDQt%0D%0AMTAuNjA0bDc0LjIyNiw3NC4yMjZjMTcuNTgyLDE3LjU4Myw0Ni4wMzgsMTcuNTg0LDYzLjYyMSww%0D%0ADQoJCQljMTcuNTQxLTE3LjU0LDE3LjU0MS00Ni4wODEsMC02My42MjFsLTMxLjgxMS0zMS44MTFs%0D%0AMTAuNjA0LTEwLjYwNGMxNy41ODItMTcuNTgxLDE3LjU4NC00Ni4wMzcsMC02My42MjFsLTcuMjA2%0D%0ALTcuMjA3DQoJCQljMzUuNDQ5LTI0LjgxOSw3NS43MDgtNDIuMDk4LDExOC43MDEtNTAuNjk3bDEu%0D%0AMTk2LTAuMjM5YzE3LjU1MywxMS44NTEsNDEuNTQ0LDkuOTQ2LDU2Ljk2OS01LjQ3OWgwLjAwMQ0K%0D%0ACQkJQzQ2NC41MTYsMjQ3Ljk5NSw0NjQuNTE2LDIxOS40NTUsNDQ2Ljk3NywyMDEuOTE0eiBNMTI4%0D%0ALjg2Niw0MTMuOTg0Yy01Ljg2LDUuODU5LTE1LjM0OCw1Ljg2LTIxLjIwOC0wLjAwMWwtNDIuNDE0%0D%0ALTQyLjQxNA0KCQkJYy01Ljg2MS01Ljg2Mi01Ljg2MS0xNS4zNDYsMC0yMS4yMDdsNzQuMjI1LTc0%0D%0ALjIyNmw2My42MjIsNjMuNjIyQzE5NS44MjksMzQ3LjAyLDEzNi4zMDcsNDA2LjU0MiwxMjguODY2%0D%0ALDQxMy45ODR6DQoJCQkgTTI3Ny4zMTYsNDU2LjM5OGM1Ljg0Niw1Ljg0Niw1Ljg0NiwxNS4zNiww%0D%0ALDIxLjIwN2MtNS44NDYsNS44NDYtMTUuMzYxLDUuODQ2LTIxLjIwNywwbC03NC4yMjYtNzQuMjI2%0D%0AbDIxLjIwOC0yMS4yMDcNCgkJCUwyNzcuMzE2LDQ1Ni4zOTh6IE0yMjQuMjk4LDM2MC45NjVjNC41%0D%0AMDgtNC41MDgsMTEuMjU2LTExLjQxMywyMS45MDYtMjAuNTA5bDkuOTA1LDkuOTA2YzUuODYxLDUu%0D%0AODYxLDUuODYxLDE1LjM0NSwwLDIxLjIwNw0KCQkJbC0xMC42MDQsMTAuNjA0TDIyNC4yOTgsMzYw%0D%0ALjk2NXogTTIyNC45MzUsMzE5LjE4OWwtNjQuODk4LTY0Ljg5OGMzNC43NzktNDAuMTU5LDU5LjY4%0D%0ANS04Ny41NjQsNzMuMDEtMTM5LjA2NGwxMzAuOTUyLDEzMC45NTINCgkJCUMzMTIuNDk5LDI1OS41%0D%0AMDMsMjY1LjA5NSwyODQuNDA5LDIyNC45MzUsMzE5LjE4OXogTTQyNS43NjcsMjQ0LjMyNmMtNS44%0D%0ANjEsNS44Ni0xNS4zNDYsNS44Ni0yMS4yMDcsMEwyMzQuOTAxLDc0LjY2Nw0KCQkJYy01Ljg2MS01%0D%0ALjg2Mi01Ljg2MS0xNS4zNDYsMC0yMS4yMDdjNS44NjEtNS44NjEsMTUuMzQ3LTUuODYxLDIxLjIw%0D%0AOCwwbDE2OS42NTgsMTY5LjY1OA0KCQkJQzQzMS42MTMsMjI4Ljk2NSw0MzEuNjEzLDIzOC40Nzgs%0D%0ANDI1Ljc2NywyNDQuMzI2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJN%0D%0AMTUwLjA3MiwzMjkuMTU0Yy01Ljg1NS01Ljg1Ni0xNS4zNTEtNS44NTYtMjEuMjA3LDBsLTIxLjIw%0D%0ANywyMS4yMDdjLTUuODU2LDUuODU2LTUuODU2LDE1LjM1MSwwLDIxLjIwNw0KCQkJYzUuODU1LDUu%0D%0AODU2LDE1LjM1Miw1Ljg1NiwyMS4yMDcsMGwyMS4yMDctMjEuMjA3QzE1NS45MjgsMzQ0LjUwNSwx%0D%0ANTUuOTI4LDMzNS4wMSwxNTAuMDcyLDMyOS4xNTR6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+%0D%0ADQoJCTxwYXRoIGQ9Ik0zNDYuMTksMGMtOC4yODIsMC0xNC45OTYsNi43MTQtMTQuOTk2LDE0Ljk5%0D%0ANnYyOS45OTJjMCw4LjI4Miw2LjcxNCwxNC45OTYsMTQuOTk2LDE0Ljk5NnMxNC45OTYtNi43MTQs%0D%0AMTQuOTk2LTE0Ljk5Ng0KCQkJVjE0Ljk5NkMzNjEuMTg2LDYuNzE0LDM1NC40NzIsMCwzNDYuMTks%0D%0AMHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ2Ni4xNTcsMTE5Ljk2%0D%0ANmgtMjkuOTkyYy04LjI4MiwwLTE0Ljk5Niw2LjcxNC0xNC45OTYsMTQuOTk2czYuNzE0LDE0Ljk5%0D%0ANiwxNC45OTYsMTQuOTk2aDI5Ljk5Mg0KCQkJYzguMjgyLDAsMTQuOTk2LTYuNzE0LDE0Ljk5Ni0x%0D%0ANC45OTZTNDc0LjQzOCwxMTkuOTY2LDQ2Ni4xNTcsMTE5Ljk2NnoiLz4NCgk8L2c+DQo8L2c+DQo8%0D%0AZz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ0Ni43NjksMzQuMzgzYy01Ljg1NS01Ljg1Ni0xNS4zNTEt%0D%0ANS44NTYtMjEuMjA3LDBMMzk1LjU3LDY0LjM3NWMtNS44NTYsNS44NTYtNS44NTYsMTUuMzUxLDAs%0D%0AMjEuMjA3DQoJCQljNS44NTUsNS44NTYsMTUuMzUxLDUuODU3LDIxLjIwNywwbDI5Ljk5Mi0yOS45%0D%0AOTJDNDUyLjYyNSw0OS43MzQsNDUyLjYyNSw0MC4yNCw0NDYuNzY5LDM0LjM4M3oiLz4NCgk8L2c+%0D%0ADQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0K%0D%0APC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwv%0D%0AZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+%0D%0ADQo8L3N2Zz4NCg==" alt=""></a>
<p>Comunicado</p>
</div>
<div class="homework">
<a href="#homework"><img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWln%0D%0AaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8v%0D%0Ad3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE5MS43MzMgMjA2LjczM2gxNjAuNjY3Yzgu%0D%0AMjg0IDAgMTUtNi43MTYgMTUtMTVzLTYuNzE2LTE1LTE1LTE1aC0xNjAuNjY3Yy04LjI4NCAwLTE1%0D%0AIDYuNzE2LTE1IDE1czYuNzE2IDE1IDE1IDE1eiIvPjxwYXRoIGQ9Im0xOTEuNzMzIDI3MWgxNjAu%0D%0ANjY3YzguMjg0IDAgMTUtNi43MTYgMTUtMTVzLTYuNzE2LTE1LTE1LTE1aC0xNjAuNjY3Yy04LjI4%0D%0ANCAwLTE1IDYuNzE2LTE1IDE1czYuNzE2IDE1IDE1IDE1eiIvPjxwYXRoIGQ9Im0xOTEuNzMzIDMz%0D%0ANS4yNjdoNjQuMjY3YzguMjg0IDAgMTUtNi43MTYgMTUtMTVzLTYuNzE2LTE1LTE1LTE1aC02NC4y%0D%0ANjdjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTV6Ii8+PHBhdGggZD0ibTQ2%0D%0ANC44NjcgMGgtMzg1LjZjLTguMjg0IDAtMTUgNi43MTYtMTUgMTV2NjUuMzMzaC0xNy4xMzRjLTgu%0D%0AMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTVoMTcuMTMzdjUwLjMzM2gtMTcuMTMz%0D%0AYy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1czYuNzE2IDE1IDE1IDE1aDE3LjEzM3Y1MC4zMzRoLTE3%0D%0ALjEzM2MtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXM2LjcxNiAxNSAxNSAxNWgxNy4xMzN2NTAuMzMz%0D%0AaC0xNy4xMzNjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTVoMTcuMTMzdjUw%0D%0ALjMzM2gtMTcuMTMzYy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1czYuNzE2IDE1IDE1IDE1aDE3LjEz%0D%0AM3Y2NS4zMzRjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNWgzODUuNmM4LjI4NCAwIDE1LTYuNzE2IDE1%0D%0ALTE1di00ODJjLjAwMS04LjI4NC02LjcxNS0xNS0xNC45OTktMTV6bS0xNSA0ODJoLTM1NS42di01%0D%0AMC4zMzNoMTcuMTMzYzguMjg0IDAgMTUtNi43MTYgMTUtMTVzLTYuNzE2LTE1LTE1LTE1aC0xNy4x%0D%0AMzN2LTUwLjMzM2gxNy4xMzNjOC4yODQgMCAxNS02LjcxNiAxNS0xNXMtNi43MTYtMTUtMTUtMTVo%0D%0ALTE3LjEzM3YtNTAuMzM0aDE3LjEzM2M4LjI4NCAwIDE1LTYuNzE2IDE1LTE1cy02LjcxNi0xNS0x%0D%0ANS0xNWgtMTcuMTMzdi01MC4zMzNoMTcuMTMzYzguMjg0IDAgMTUtNi43MTYgMTUtMTVzLTYuNzE2%0D%0ALTE1LTE1LTE1aC0xNy4xMzN2LTUwLjMzM2gxNy4xMzNjOC4yODQgMCAxNS02LjcxNiAxNS0xNXMt%0D%0ANi43MTYtMTUtMTUtMTVoLTE3LjEzM3YtNTAuMzM0aDM1NS42eiIvPjwvc3ZnPg==" alt=""></a>
<p>Tarea</p>
</div>
<div class="parentPanel">
<a href="#parentPanel"><img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIC0yNiA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAw%0D%0AMC9zdmciPjxwYXRoIGQ9Im0yNTYgMTAwYy01LjUxOTUzMSAwLTEwIDQuNDgwNDY5LTEwIDEwczQu%0D%0ANDgwNDY5IDEwIDEwIDEwIDEwLTQuNDgwNDY5IDEwLTEwLTQuNDgwNDY5LTEwLTEwLTEwem0wIDAi%0D%0ALz48cGF0aCBkPSJtOTAgMjgwYzUuNTE5NTMxIDAgMTAtNC40ODA0NjkgMTAtMTBzLTQuNDgwNDY5%0D%0ALTEwLTEwLTEwLTEwIDQuNDgwNDY5LTEwIDEwIDQuNDgwNDY5IDEwIDEwIDEwem0wIDAiLz48cGF0%0D%0AaCBkPSJtMzM2IDBjLTkwLjAyNzM0NCAwLTE2My45MTc5NjkgNjIuMDcwMzEyLTE2OS42MzI4MTIg%0D%0AMTQwLjI1MzkwNi04NS43MzgyODIgNC4zMDA3ODItMTY2LjM2NzE4OCA2Ni4xMjUtMTY2LjM2NzE4%0D%0AOCAxNDkuNzQ2MDk0IDAgMzQuOTQ1MzEyIDEzLjgyODEyNSA2OC44MDQ2ODggMzkgOTUuNjMyODEy%0D%0AIDQuOTgwNDY5IDIwLjUzMTI1LTEuMDY2NDA2IDQyLjI5Mjk2OS0xNi4wNzAzMTIgNTcuMjk2ODc2%0D%0ALTIuODU5Mzc2IDIuODU5Mzc0LTMuNzE0ODQ0IDcuMTYwMTU2LTIuMTY3OTY5IDEwLjg5ODQzNyAx%0D%0ALjU0Njg3NSAzLjczNDM3NSA1LjE5MTQwNiA2LjE3MTg3NSA5LjIzODI4MSA2LjE3MTg3NSAyOC41%0D%0AMTk1MzEgMCA1Ni4wMDM5MDYtMTEuMTgzNTk0IDc2LjQyNTc4MS0zMC44OTA2MjUgMTkuODk0NTMx%0D%0AIDYuNzgxMjUgNDUuODUxNTYzIDEwLjg5MDYyNSA2OS41NzQyMTkgMTAuODkwNjI1IDkwLjAxNTYy%0D%0ANSAwIDE2My44OTg0MzgtNjIuMDU0Njg4IDE2OS42Mjg5MDYtMTQwLjIyMjY1NiAyMC45Mzc1LS45%0D%0AMjk2ODggNDIuNzE0ODQ0LTQuNzk2ODc1IDU5Ljk0NTMxMy0xMC42Njc5NjkgMjAuNDIxODc1IDE5%0D%0ALjcwNzAzMSA0Ny45MDYyNSAzMC44OTA2MjUgNzYuNDI1NzgxIDMwLjg5MDYyNSA0LjA0Njg3NSAw%0D%0AIDcuNjkxNDA2LTIuNDM3NSA5LjIzODI4MS02LjE3MTg3NSAxLjU0Njg3NS0zLjczODI4MS42OTE0%0D%0AMDctOC4wMzkwNjMtMi4xNjc5NjktMTAuODk4NDM3LTE1LjAwMzkwNi0xNS4wMDM5MDctMjEuMDUw%0D%0ANzgxLTM2Ljc2NTYyNi0xNi4wNzAzMTItNTcuMjk2ODc2IDI1LjE3MTg3NS0yNi44MjgxMjQgMzkt%0D%0ANjAuNjg3NSAzOS05NS42MzI4MTIgMC04Ni44ODY3MTktODYuODM5ODQ0LTE1MC0xNzYtMTUwem0t%0D%0AMTYwIDQyMGMtMjMuNjAxNTYyIDAtNTAuNDk2MDk0LTQuNjMyODEyLTY4LjUxMTcxOS0xMS44MDA3%0D%0AODEtMy44NTkzNzUtMS41MzkwNjMtOC4yNjk1MzEtLjUyNzM0NC0xMS4wNzgxMjUgMi41MzkwNjIt%0D%0AMTIuMDc0MjE4IDEzLjE5OTIxOS0yNy43NzM0MzcgMjIuNDAyMzQ0LTQ0Ljg3ODkwNiAyNi42MzI4%0D%0AMTMgOS40MjU3ODEtMTguMDU4NTk0IDExLjgzMjAzMS0zOS4zNDc2NTYgNi4wOTc2NTYtNTkuNTE5%0D%0ANTMyLS40NTMxMjUtMS41ODk4NDMtMS4yOTI5NjgtMy4wNDI5NjgtMi40NDUzMTItNC4yMjY1NjIt%0D%0AMjIuNjg3NS0yMy4zNjcxODgtMzUuMTgzNTk0LTUzLjA2NjQwNi0zNS4xODM1OTQtODMuNjI1IDAt%0D%0ANzAuNDY4NzUgNzEuNDM3NS0xMzAgMTU2LTEzMCA3OS44NTE1NjIgMCAxNTAgNTUuNTI3MzQ0IDE1%0D%0AMCAxMzAgMCA3MS42ODM1OTQtNjcuMjg5MDYyIDEzMC0xNTAgMTMwem0yODAuODE2NDA2LTE4Ni4z%0D%0ANzVjLTEuMTUyMzQ0IDEuMTg3NS0xLjk5MjE4NyAyLjY0MDYyNS0yLjQ0NTMxMiA0LjIyNjU2Mi01%0D%0ALjczNDM3NSAyMC4xNzE4NzYtMy4zMjgxMjUgNDEuNDYwOTM4IDYuMDk3NjU2IDU5LjUxOTUzMi0x%0D%0ANy4xMDU0NjktNC4yMjY1NjMtMzIuODA0Njg4LTEzLjQzMzU5NC00NC44Nzg5MDYtMjYuNjMyODEz%0D%0ALTIuODA4NTk0LTMuMDYyNS03LjIxODc1LTQuMDc4MTI1LTExLjA3ODEyNS0yLjUzOTA2Mi0xNS42%0D%0AMTMyODEgNi4yMTA5MzctMzcuODg2NzE5IDEwLjUxMTcxOS01OC45MTQwNjMgMTEuNTUwNzgxLTIu%0D%0AOTIxODc1LTM3LjgxNjQwNi0yMS43ODUxNTYtNzMuMzU5Mzc1LTU0LjAzNTE1Ni05OS43NWgxMzAu%0D%0ANDM3NWM1LjUyMzQzOCAwIDEwLTQuNDc2NTYyIDEwLTEwcy00LjQ3NjU2Mi0xMC0xMC0xMGgtMTYx%0D%0ALjE2MDE1NmMtMjIuNjk5MjE5LTExLjU1NDY4OC00OC4xODc1LTE4LjI5Mjk2OS03NC40MjE4NzUt%0D%0AMTkuNzA3MDMxIDUuNzQ2MDkzLTY3LjE2NDA2MyA3MC42NDA2MjUtMTIwLjI5Mjk2OSAxNDkuNTgy%0D%0AMDMxLTEyMC4yOTI5NjkgODQuNTYyNSAwIDE1NiA1OS41MzEyNSAxNTYgMTMwIDAgMzAuNTU4NTk0%0D%0ALTEyLjQ5NjA5NCA2MC4yNTc4MTItMzUuMTgzNTk0IDgzLjYyNXptMCAwIi8+PHBhdGggZD0ibTI1%0D%0ANiAyNjBoLTEyNmMtNS41MjM0MzggMC0xMCA0LjQ3NjU2Mi0xMCAxMHM0LjQ3NjU2MiAxMCAxMCAx%0D%0AMGgxMjZjNS41MjM0MzggMCAxMC00LjQ3NjU2MiAxMC0xMHMtNC40NzY1NjItMTAtMTAtMTB6bTAg%0D%0AMCIvPjxwYXRoIGQ9Im0yNTYgMzIwaC0xNjZjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjItMTAgMTBz%0D%0ANC40NzY1NjIgMTAgMTAgMTBoMTY2YzUuNTIzNDM4IDAgMTAtNC40NzY1NjIgMTAtMTBzLTQuNDc2%0D%0ANTYyLTEwLTEwLTEwem0wIDAiLz48cGF0aCBkPSJtNDIyIDEwMGgtMTI2Yy01LjUyMzQzOCAwLTEw%0D%0AIDQuNDc2NTYyLTEwIDEwczQuNDc2NTYyIDEwIDEwIDEwaDEyNmM1LjUyMzQzOCAwIDEwLTQuNDc2%0D%0ANTYyIDEwLTEwcy00LjQ3NjU2Mi0xMC0xMC0xMHptMCAwIi8+PC9zdmc+" alt=""></a>
<p>Panel de padres</p>
</div>
<div class="calendar">
<a href="#calendar"><img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4%0D%0AbWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00ODIgMjkyLjI1di0y%0D%0ANDYuMjVjMC04LjI4NTE1Ni02LjcxNDg0NC0xNS0xNS0xNWgtNzZ2LTE2YzAtOC4yODUxNTYtNi43%0D%0AMTQ4NDQtMTUtMTUtMTVzLTE1IDYuNzE0ODQ0LTE1IDE1djE2aC02MHYtMTZjMC04LjI4NTE1Ni02%0D%0ALjcxNDg0NC0xNS0xNS0xNXMtMTUgNi43MTQ4NDQtMTUgMTV2MTZoLTYwdi0xNmMwLTguMjg1MTU2%0D%0ALTYuNzE0ODQ0LTE1LTE1LTE1cy0xNSA2LjcxNDg0NC0xNSAxNXYxNmgtNjB2LTE2YzAtOC4yODUx%0D%0ANTYtNi43MTQ4NDQtMTUtMTUtMTVzLTE1IDYuNzE0ODQ0LTE1IDE1djE2aC03NmMtOC4yODUxNTYg%0D%0AMC0xNSA2LjcxNDg0NC0xNSAxNXYzOTFjMCA4LjI4NTE1NiA2LjcxNDg0NCAxNSAxNSAxNWgyNDku%0D%0AODA0Njg4YzI0LjI1IDM2LjE1MjM0NCA2NS40ODgyODEgNjAgMTEyLjE5NTMxMiA2MCA3NC40Mzc1%0D%0AIDAgMTM1LTYwLjU2MjUgMTM1LTEzNSAwLTMyLjA3MDMxMi0xMS4yNS02MS41NjI1LTMwLTg0Ljc1%0D%0Aem0tMzkxLTIzMS4yNXYxNWMwIDguMjg1MTU2IDYuNzE0ODQ0IDE1IDE1IDE1czE1LTYuNzE0ODQ0%0D%0AIDE1LTE1di0xNWg2MHYxNWMwIDguMjg1MTU2IDYuNzE0ODQ0IDE1IDE1IDE1czE1LTYuNzE0ODQ0%0D%0AIDE1LTE1di0xNWg2MHYxNWMwIDguMjg1MTU2IDYuNzE0ODQ0IDE1IDE1IDE1czE1LTYuNzE0ODQ0%0D%0AIDE1LTE1di0xNWg2MHYxNWMwIDguMjg1MTU2IDYuNzE0ODQ0IDE1IDE1IDE1czE1LTYuNzE0ODQ0%0D%0AIDE1LTE1di0xNWg2MXY2MGgtNDIydi02MHptLTYxIDM2MXYtMjcxaDQyMnYxMTMuODA0Njg4Yy0y%0D%0AMS40NjQ4NDQtMTQuMzk0NTMyLTQ3LjI2OTUzMS0yMi44MDQ2ODgtNzUtMjIuODA0Njg4LTQ3LjM5%0D%0AODQzOCAwLTg5LjE2NDA2MiAyNC41NTg1OTQtMTEzLjI1NzgxMiA2MS42MTMyODEtMi4wMjczNDQt%0D%0AMS4wMjM0MzctNC4zMTI1LTEuNjEzMjgxLTYuNzQyMTg4LTEuNjEzMjgxaC0zMGMtOC4yODUxNTYg%0D%0AMC0xNSA2LjcxNDg0NC0xNSAxNXM2LjcxNDg0NCAxNSAxNSAxNWgyMi43MjI2NTZjLTMuMzg2NzE4%0D%0AIDkuNTU0Njg4LTUuNzMwNDY4IDE5LjYwMTU2Mi02Ljg4MjgxMiAzMGgtMTUuODM5ODQ0Yy04LjI4%0D%0ANTE1NiAwLTE1IDYuNzE0ODQ0LTE1IDE1czYuNzE0ODQ0IDE1IDE1IDE1aDE1LjgzOTg0NGMxLjE1%0D%0AMjM0NCAxMC4zOTg0MzggMy40OTIxODcgMjAuNDQ1MzEyIDYuODgyODEyIDMwem0zNDcgNjBjLTU3%0D%0ALjg5ODQzOCAwLTEwNS00Ny4xMDE1NjItMTA1LTEwNXM0Ny4xMDE1NjItMTA1IDEwNS0xMDUgMTA1%0D%0AIDQ3LjEwMTU2MiAxMDUgMTA1LTQ3LjEwMTU2MiAxMDUtMTA1IDEwNXptMCAwIi8+PHBhdGggZD0i%0D%0AbTQzNyAzNjJoLTQ1di00NWMwLTguMjg1MTU2LTYuNzE0ODQ0LTE1LTE1LTE1cy0xNSA2LjcxNDg0%0D%0ANC0xNSAxNXY2MGMwIDguMjg1MTU2IDYuNzE0ODQ0IDE1IDE1IDE1aDYwYzguMjg1MTU2IDAgMTUt%0D%0ANi43MTQ4NDQgMTUtMTVzLTYuNzE0ODQ0LTE1LTE1LTE1em0wIDAiLz48cGF0aCBkPSJtMTM2IDE4%0D%0AMmgtMzBjLTguMjg1MTU2IDAtMTUgNi43MTQ4NDQtMTUgMTVzNi43MTQ4NDQgMTUgMTUgMTVoMzBj%0D%0AOC4yODUxNTYgMCAxNS02LjcxNDg0NCAxNS0xNXMtNi43MTQ4NDQtMTUtMTUtMTV6bTAgMCIvPjxw%0D%0AYXRoIGQ9Im0xMzYgMjQyaC0zMGMtOC4yODUxNTYgMC0xNSA2LjcxNDg0NC0xNSAxNXM2LjcxNDg0%0D%0ANCAxNSAxNSAxNWgzMGM4LjI4NTE1NiAwIDE1LTYuNzE0ODQ0IDE1LTE1cy02LjcxNDg0NC0xNS0x%0D%0ANS0xNXptMCAwIi8+PHBhdGggZD0ibTEzNiAzMDJoLTMwYy04LjI4NTE1NiAwLTE1IDYuNzE0ODQ0%0D%0ALTE1IDE1czYuNzE0ODQ0IDE1IDE1IDE1aDMwYzguMjg1MTU2IDAgMTUtNi43MTQ4NDQgMTUtMTVz%0D%0ALTYuNzE0ODQ0LTE1LTE1LTE1em0wIDAiLz48cGF0aCBkPSJtMjI3IDIxMmgzMGM4LjI4NTE1NiAw%0D%0AIDE1LTYuNzE0ODQ0IDE1LTE1cy02LjcxNDg0NC0xNS0xNS0xNWgtMzBjLTguMjg1MTU2IDAtMTUg%0D%0ANi43MTQ4NDQtMTUgMTVzNi43MTQ4NDQgMTUgMTUgMTV6bTAgMCIvPjxwYXRoIGQ9Im0yMjcgMjcy%0D%0AaDMwYzguMjg1MTU2IDAgMTUtNi43MTQ4NDQgMTUtMTVzLTYuNzE0ODQ0LTE1LTE1LTE1aC0zMGMt%0D%0AOC4yODUxNTYgMC0xNSA2LjcxNDg0NC0xNSAxNXM2LjcxNDg0NCAxNSAxNSAxNXptMCAwIi8+PHBh%0D%0AdGggZD0ibTEzNiAzNjJoLTMwYy04LjI4NTE1NiAwLTE1IDYuNzE0ODQ0LTE1IDE1czYuNzE0ODQ0%0D%0AIDE1IDE1IDE1aDMwYzguMjg1MTU2IDAgMTUtNi43MTQ4NDQgMTUtMTVzLTYuNzE0ODQ0LTE1LTE1%0D%0ALTE1em0wIDAiLz48cGF0aCBkPSJtMzQ3IDIxMmgzMGM4LjI4NTE1NiAwIDE1LTYuNzE0ODQ0IDE1%0D%0ALTE1cy02LjcxNDg0NC0xNS0xNS0xNWgtMzBjLTguMjg1MTU2IDAtMTUgNi43MTQ4NDQtMTUgMTVz%0D%0ANi43MTQ4NDQgMTUgMTUgMTV6bTAgMCIvPjwvc3ZnPg==" alt=""></a>
<p>Calendario</p>
</div>
</div>
    `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewHome;

  root.appendChild(divElement);

  return divElement;
};
