import { components } from "../view/index.js";

const changeView = (route) => {
<<<<<<< HEAD
    const root = document.getElementById('root')
    //const footer = document.getElementById('footer')
    root.innerHTML = '';
    //footer.innerHTML = '';
switch (route){
    case '':
          return components.Login()
    case '#calendar':
          return components.Calendar()
    case '#homework':
          return components.Homework()
    case '#parentPanel':
          return components.ParentPanel()
    case '#releases':
          return components.Releases()
    case '#home':
          return components.Home() 
    case '#signUp':
          return components.SignUp() 
    case '#profile':
          return components.Profile() 

  /*switch (route){
    case '#/':
    {
=======
  const root = document.getElementById("root");
  const footer = document.getElementById("footer-container");
  const header = document.getElementById("header-container");
  root.innerHTML = "";
  footer.innerHTML = "";
  header.innerHTML = "";
  switch (route) {
    case "#/": {
      header.appendChild(components.Header());
>>>>>>> development
      root.appendChild(components.Home());
      return footer.appendChild(components.Footer());
    }
    case "": {
      root.appendChild(components.Splash());
    }
    case "#/calendar": {
      header.appendChild(components.Header());
      root.appendChild(components.Calendar());
      return footer.appendChild(components.Footer());
    }
    case "#/homework": {
      header.appendChild(components.Header());
      root.appendChild(components.Homework());
      return footer.appendChild(components.Footer());
    }
    case "#/parentPanel": {
      header.appendChild(components.Header());
      root.appendChild(components.ParentPanel());
      return footer.appendChild(components.Footer());
    }
    case "#/releases": {
      header.appendChild(components.Header());
      root.appendChild(components.Releases());
      return footer.appendChild(components.Footer());
    }
    case "#/login": {
      root.appendChild(components.Login());
      return footer.appendChild(components.Footer());
    }
    case "#/SignUp": {
      root.appendChild(components.SignUp());
      return footer.appendChild(components.Footer());
    }
    case "#/profile": {
      header.appendChild(components.Header());
      root.appendChild(components.Profile());
<<<<<<< HEAD
       return footer.appendChild(components.Footer());
      }*/
=======
      return footer.appendChild(components.Footer());
    }
>>>>>>> development
    default:
      break;
  }
};

export { changeView };
