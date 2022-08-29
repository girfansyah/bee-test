let words = 'beever';

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

for (let i = 0; i <= words.length - 1; i++) {
  let result = '';
  for (let j = 0; j <= i; j++) {
    result += words[j];
  }
  console.log(result);
}
