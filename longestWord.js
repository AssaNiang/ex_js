
function longest(str){ 
    // Split the string into array 
    str = str.split(" ") 
    // Return the first sorted item of the Array 
    return str.sort((a, b) => b.length - a.length)[0] 
} 
 
console.log(longest("Bonjour je suis en formation developpeuseWeb")) 

