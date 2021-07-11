var player1 = localStorage.getItem("Player 1");
var player2 = localStorage.getItem("Player 2");

var player1_score = 0
var player2_score = 0

function player1_update(){
    player1_score = player1_score + 1;
    document.getElementById("player1_score").innerHTML = player1_score
}

function player2_update(){
    player2_score = player2_score + 1;
    document.getElementById("player2_score").innerHTML = player2_score
}

document.getElementById("player1_name").innerHTML = player1 + ": ";
document.getElementById("player2_name").innerHTML = player2 + ": ";

document.getElementById("player1_score").innerHTML = 0;
document.getElementById("player2_score").innerHTML = 0;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2;



function send(){
   var get_word = document.getElementById("Word").value;
   word = get_word.toLowerCase();
   charAt1 = word.charAt(1);
   console.log(charAt1);
   
   remove_charAt1 = word.replace(charAt1, "_");

   div_2 = Math.floor(word.length/2);
   charAt2 = word.charAt(div_2);
   console.log(charAt2)
   remove_charAt2 = remove_charAt1.replace(charAt2, "_");

   length_1 = word.length -  1;
   charAt3 = word.charAt(length_1);
   console.log(charAt3)
   remove_charAt3 = remove_charAt2.replace(charAt3, "_")

    ques = "<h4 id='word_display'>Q." +  remove_charAt3 + "</h4>";
    input = "<br>Answer: <input id='input_check_box' type='text'>";
    check_butt = "<br><br><button id='ayo' onclick='check()'>Check</button";
    row = ques + input + check_butt;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Word").value = "";

}
 
answer_turn = "player2";
question_turn = "player1";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(get_answer);
    console.log(answer);
    if (answer == word){
        if (answer_turn == "player2"){
            player2_update()
        }
        else{
            player1_update()
        }
    
    }
    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1;
        
    }
    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1;
    }
    document.getElementById("output").innerHTML = ""
}


