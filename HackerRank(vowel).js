function vowel(string) {
  for (let i = 0; i < string.length; i++) {
    const element = string[i];

    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    ) {
        console.log(element);
      }
      
    }
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
    
        if (
         !( element == "a" ||
          element == "e" ||
          element == "i" ||
          element == "o" ||
          element == "u")
        ) {
            console.log(element);
          }
          
      }
}

const array = "iLoveYouDebarati";
vowel(array);