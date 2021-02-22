

// Crée une "const" de 'p' pour l'utilisé avec Typescript
const txtAnim = document.querySelector('p');

// Créeune fonction "Typewriter"
new Typewriter (txtAnim, {
    // vitesse à laquel le texte s'efface pour faire apparaitre le prochain
    deleteSpeed:50
})
//  Une manière d'écrire la méthode
 // changer la vitesse d'écriture:
.changeDelay(70)
 //  on marque ce que l'on souhaite écrire:
.typeString('Nous sommes la pour vivre')
 //  on met une pause entre chaque élément:
.pauseFor (300)
 //  on place une balise puis on écrit
.typeString('<strong>, en nous battant</strong>')
.pause(1000)
 //  On efface le nombre de lettre et d'space en fonction du nombre écrit entre parenthèse
.deleteChars(13)
.typeString('<span style= "color: #a8a8a8"> respectant la justice</span>')
.pause(1000)
.deleteChars(21)
.typeString('<span style= "color: yellow"> protégeant les notres</span>')
.pause(1000)
.deleteChars(25)
.typeString('<span style= "color: orange"> meme si pour cela...</span>')
.pause(1000)
.deleteChars(22)
.typeString('<span style= "color: red"> on doit faire couler le sang</span>')
// Une fois la composition fini, on met :
.start()
