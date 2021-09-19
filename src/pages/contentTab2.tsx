import React from 'react';

import '../Styles.scss';

const ContentTab2: React.FC = () => {
  return (
    <section className= 'grid-content'>
        <a target = "_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className = 'grid-image bounce'>
        <img className = 'grid-image bounce' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
        <h2>JAVASCRIPT</h2>
        </a>
        <a target = "_blank" rel="noreferrer" href="https://www.typescriptlang.org/docs/" className = 'grid-image bounce'>
        <img className = 'grid-image bounce' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt="" />
        <h2>TYPESCRIPT</h2>
        </a><a target = "_blank" rel="noreferrer" href="https://dart.dev/guides" className = 'grid-image bounce'>
        <img className = 'grid-image bounce' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="" />
        <h2>DART</h2>
        </a><a target = "_blank" rel="noreferrer" href="https://docs.oracle.com/en/java/" className = 'grid-image bounce'>
        <img className = 'grid-image bounce' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="" />
        <h2>JAVA</h2>
        </a><a target = "_blank" rel="noreferrer" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" className = 'grid-image bounce'>
        <img className = 'grid-image bounce' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="" />
        <h2>HTML5</h2>
        </a>
        <a target = "_blank" rel="noreferrer" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" className = 'grid-image bounce'>
        <img className = 'grid-image bounce' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="" />
        <h2>CSS3</h2>
        </a>
        <a target = "_blank" rel="noreferrer" href="https://sass-lang.com/documentation" className = 'grid-image bounce'>
        <img className = 'grid-image bounce' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
        <h2>SASS</h2>
        </a>
        <a target = "_blank" rel="noreferrer" href="https://vuejs.org/" className = 'grid-image bounce'>
        <img className = 'grid-image bounce' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="" />
        <h2>VUEJS</h2>
        </a>
        <a target = "_blank" rel="noreferrer" href="https://pt-br.reactjs.org/docs/getting-started.html" className = 'grid-image bounce'>
        <img className = 'grid-image bounce' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
        <h2>REACTJS</h2>
        </a>
        <a target = "_blank" rel="noreferrer" href="https://flutter.dev/" className = 'grid-image bounce'>
        <img className = 'grid-image bounce' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="" />
        <h2>FLUTTER</h2>
        </a>
        <a target = "_blank" rel="noreferrer" href="https://nodejs.org/en/docs/" className = 'grid-image bounce'>
        <img className = 'grid-image bounce' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
        <h2>NODEJS</h2>
        </a>
        <a id = "ultima-imagem" target = "_blank" rel="noreferrer" href="https://docs.mongodb.com/" className = 'grid-image bounce'>
        <img className = 'grid-image bounce' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" />
        <h2 className = 'agadois'>MONGODB</h2>
        </a>
    </section>
  );
}

export default ContentTab2;