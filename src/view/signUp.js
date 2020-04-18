export default () => {
    const viewSignUp = `
    <div class=header>
    <img src="https://raw.githubusercontent.com/IrisFyD/CDMX009-Social-Network/master/src/img/LogoBlancoDigiTarea.png">
    <h4>Regístrate para interactuar</br>con la comunidad escolar</h4>
    <div class="form">
    <input type="text" placeholder="Nombre completo">
    <input type="email" placeholder="Correo electrónico">
    <input type="password" placeholder="Contraseña">
    <input type="password" placeholder="Confirmar contraseña">
    <button class="sign-btn">Regístrate</button>
    <p class="terms">Al registrarte aceptas nuestros <br><a href="#">términos y condiciones</a></p>
    </div>
    </div>
        `
    const divElement = document.createElement('div')
    divElement.innerHTML = viewSignUp;
  
    return divElement;
  }
  