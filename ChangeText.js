const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Diagnostics = require('Diagnostics');

// Certifique-se de que todos os elementos de texto 'text0' a 'text7' estão presentes na cena
// para evitar erros. Se qualquer um desses elementos estiver faltando, o código pode não funcionar corretamente.
Promise.all([
    Scene.root.findFirst('text0'),
    Scene.root.findFirst('text1'),
    Scene.root.findFirst('text2'),
    Scene.root.findFirst('text3'),
    Scene.root.findFirst('text4'),
    Scene.root.findFirst('text5'),
    Scene.root.findFirst('text6'),
    Scene.root.findFirst('text7')
])
.then((textObjects) => {
    textObjects = textObjects.filter(obj => obj !== null);

    if (textObjects.length === 0) {
        throw new Error('Nenhum elemento de texto foi encontrado.');
    }

    textObjects.forEach((textObj, index) => {
        textObj.hidden = (index !== 0);
    });

    let currentIndex = 0; 
    textObjects[currentIndex].hidden = false;

    TouchGestures.onTap().subscribe(() => {
        textObjects[currentIndex].hidden = true;

        currentIndex = (currentIndex + 1) % textObjects.length;

        textObjects[currentIndex].hidden = false;

        Diagnostics.log('Texto atual: ' + textObjects[currentIndex].text);
    });
})
.catch((error) => {
    Diagnostics.log('Erro ao encontrar elementos de texto: ' + error.message);
});
