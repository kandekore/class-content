function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var character = string.charAt(i);
    if (
      string.indexOf(character) == i &&
      string.indexOf(character, i + 1) == -1
    ) {
      return character;
    }
  }
  return null;
}

var someString = "the quick brown fox jumps over the calm kitten quietly";
console.log(firstNonRepeatedCharacter(someString));
