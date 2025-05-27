function criarHeader(){

    document.getElementById("header").innerHTML = `
    
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="aboutUs.html">Sobre nós</a></li>
                <li><a href="produtos.html">Loja</a></li>
                <li><a href="login.html">Login</a></li>
            </ul>
        </nav>
        <hr>
    
    `

}

function criarFooter(){

    document.getElementById("footer").innerHTML = `
    
        <hr>
        <ul>
            <li><a href="https://www.instagram.com/"><img src="../img/instaIcon.png" alt="link do instagram da empresa"></a></li>
            <li>12 12345-6789</li>
            <li>OPLoja@email.com</li>
        </ul>
    
    `

}

function linkarStyles(){

    document.head.innerHTML += `<link rel="stylesheet" href="../css/headerFooter.css">`

}

function criarHeaderFooter(){

    criarHeader()
    criarFooter()
    linkarStyles()

}