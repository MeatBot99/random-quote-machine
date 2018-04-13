/*The javascript to run a simple random quote machine.*/

var statement=["\"To beer, the cause and solution to all of life's problems\"-Homer Simpson",
"\"I want you to hit me as hard as you can.\"-Tyler Durden",
"\"The Snozberries taste like Snozberries\"-Stoner Kid",
"\"Zug-Zug!\"-Every Orc Ever",
"\"Four score and 7 years ago...\"-Abraham Lincoln"
]

var quote=function(){
  var randomNum= Math.floor(Math.random() * statement.length)
  
  document.getElementById("textField").innerHTML=(statement[randomNum])
}
