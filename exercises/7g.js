function convertLength(length, from, to) {
  if (from === 'miles') {
    console.log(`${length * 1.6} ${to}`);
  } else {
    console.log(`${length * 0.625} ${to}`);
  }
}

convertLength(50, 'miles', 'km');
convertLength(32, 'km', 'miles');

