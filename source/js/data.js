const CURRENT_USERS_COUNT = 15;

const DATES = [
  '26.11.2021',
  '26.11.2021',
  '26.11.2021',
  '27.11.2021',
  '27.11.2021',
  '27.11.2021',
  '28.11.2021',
  '28.11.2021',
  '28.11.2021',
  '28.11.2021',
  '29.11.2021',
  '29.11.2021',
  '29.11.2021',
  '29.11.2021',
  '30.11.2021'
];

const NAMES = [
  'Cristina Mendoza',
  'Carolina Martín',
  'María Flores',
  'Ramona Márquez',
  'Mariela Benítez',
  'Ana Barco',
  'Roxana Pérez',
  'Juliana Miranda',
  'Andrea Díaz',
  'Alexandra Sánchez',
  'Gina Rodríguez',
  'Teo Torrente',
  'Marta Cáceres',
  'Sofía Valverde',
  'Elena'
];

const MESSAGES = [
  '¡Querida Adamari, estoy muy agradecida por su recomendación! He leído mucho sobre <a class="comments__link" href="#order">Biolica</a> pero tenía miedo y no pensé que funcionaría. Solo lo pedí después de leer su publicación.Han pasado nueve semanas desde que terminé la dieta completa con <a class="comments__link" href="#order">Biolica</a> . ¡Perdí 21 kg!¡GRACIAS!',
  'Desde peque soñaba con un cuerpo delgado. Me enteré sobre <a class="comments__link" href="#order">Biolica</a> hace tres meses. Dudaba en pedirlo, pero mi madre me convenció. ¡No es realmente costoso hacer realidad tu sueño! Ahora ambas estamos perdiendo peso. Ella también pudo perder peso más que yo, pero los resultados siguen siendo increíbles.',
  '¡Estoy tan contenta de haberme topado con tu publicación!Definitivamente probaré también <a class="comments__link" href="#order">Biolica</a>',
  '¡Hola, Adamari! Yo ya probé <a class="comments__link" href="#order">Biolica</a>, yahorapuedo decirte que salvaste a mi familia y mi matrimonio:) mi esposo comenzó a ver a una mujer en mí otra vez, me hace confiar en mí misma.Me siento ahora mejor, ¡gracias! :)',
  'Cariño, Adamari, tienes un blog maravilloso y todo lo que recomiendas realmente funciona. También probé docenas de dietas y programas de pérdida de peso, pero los resultados siempre estuvieron por debajo de mis expectativas. Peso 85 kg y mi estatura es 1.63 cm. Ordené <a class="comments__link" href="#order">Biolica</a> justo después de leer tu publicación. Espero que esto me ayude a perder 26 kg.Prometo que te comentaré mis resultados.',
  'Recibí el paquete ayer. Estoy muy emocionada, no puedo esperar los primeros resultados.',
  '¡Cariño, Adamari! ¡Gracias! Bajé mis kilos de más tan rápido y sin mucho esfuerzo.¡Es un verdadero milagro, gracias por contarnos todo sobre este producto!',
  'Siempre supe que la tecnología moderna no fallaría y que se encontraría una solución al problema de la obesidad :) Mañana tengo una reunión en un restaurante, por primera vez en muchos años.Hasta hace poco yo era como un mismo restaurante: llena de grasa y olor a carne frita:) Con la ayuda de <a class="comments__link" href="#order">Biolica</a> perdí 23 kg en 2 meses. ¡Gracias, Adamari!',
  '¡Guau, muchacha!Adamari, ¿has tenido un resultado tan impresionante en un mes??? ¡Creo que también lo voy a pedir! Ayer me paré en la balanza, mi situación no es tan optimista :(',
  '¡Adamari, recibe de mi parte mis más inmensos agradecimientos!',
  'Finalmente ordené <a class="comments__link" href="#order">Biolica</a> .¡Gracias, Adamari! Como prometí, ¡comparto los resultados!',
  'Jesús, eso es realmente impresionante. Mi amigo perdió 16 kg con <a class="comments__link" href="#order">Biolica</a> en 1,5 meses. ¡ni siquiera su madre lo reconoció!',
  'Gracias por el apoyo.Tengo un nuevo peso, una nueva vida , todo es verdad.He perdido solo 5 kg, pero constantemente pierdo peso, así que estoy feliz.',
  'Tres de mis amigos perdieron peso con <a class="comments__link" href="#order">Biolica</a> y el resto ya no los reconocían porque antes siempre eran gorditos y ahora parecen maniquíes. También pedí este remedio, porque no quiero ser el menos atractivo del grupo.',
  'Adamari, como pediste, escribo sobre mis resultados. !!! ¡Estoy tan feliz que ni siquiera te imaginas!'
];

const createComments = () => {
  const commentsArray = [];
  for (let i = 1; i <= CURRENT_USERS_COUNT; i++) {
    commentsArray.push({
      avatarWebp: `img/content/comments/avatar/image-${i}.webp`,
      avatar: `img/content/comments/avatar/image-${i}.jpg`,
      name: NAMES [i - 1],
      date: DATES [i - 1],
      message: MESSAGES [i - 1],
      userPhotoWebp: `img/content/comments/user-photo/image-${i}.webp`,
      userPhoto: `img/content/comments/user-photo/image-${i}.jpg`,
    });
  }
  return commentsArray;
};

export {createComments};
