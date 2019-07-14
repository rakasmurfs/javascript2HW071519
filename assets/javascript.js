//create an array of questions with their answers.
//Create start button
//When start button is pressed display time remaining, first question, and options for answers as buttons.
//When timer hits 0, display "you ran out of time" along with the correct answer and a GIF related to the answer.
//When user selects a answer display whether or not the answer was correct as well as a gif related to answer.
// Create a countdown for 3-5 seconds to move on to next question after result is displayed.
// Once player cycles through all answers, display amount they got right and amount incorrect.
// Add a try again button at end screen


var questionsArr = 
    [
        one = 
            {
                question:'Who sings the "Gilmore Girls" theme song?',
                rightAnswer: "Carole King",
                optionA:"Stevie Nicks",
                optionB:"Carole King",
                optionC:"Mariah Carey",
                optionD:"Katy Perry",
                gif: '<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><img src="https://media.giphy.com/media/xUPOqov5zNNx8FyHS0/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>',
            },
        two = 
            {
                question:'What is the name of the private school Rory attends?',
                rightAnswer:"Chilton",
                optionA: "Tipton",
                optionB: "Harvard",
                optionC: "Overbrook",
                optionD: "Chilton",
                gif: '<div style="width:100%;height:0;padding-bottom:76%;position:relative;"><img src="https://media.giphy.com/media/xUySTzIRIjwV2pHMkM/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>',
            },
        three = 
            {
                question: "What are the first words in the pilot episode?",
                rightAnswer:'"Please Luke. Please, please, please."',
                optionA:'"Please Luke. Please, please, please."',
                optionB: '"Coffee coffee coffee!"',
                optionC: "Watch out!",
                optionD: '"Did I put on underwear?"',
                gif: '<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><img src="https://media.giphy.com/media/xUySTPAS9poVD23jCo/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>',
            },
        four = 
            {
                question: "What is the name of the inn where Lorelai works in the early seasons?",
                rightAnswer: 'The Independence Inn',
                optionA:"Freedom Inn",
                optionB:"The Patriot Inn",
                optionC:'The Independence Inn',
                optionD:"The Chilton",
                gif: '<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><img src="https://media.giphy.com/media/l1L0gM1jJiWskWt8I/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>',
            },
        five = 
            {
                question:"What day of the week is dinner with the grandparents on?",
                rightAnswer:"Friday",
                optionA:"Friday",
                optionB:"Sunday",
                optionC:"Thursday",
                optionD:"Saturday",
                gif: '<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><img src="https://media.giphy.com/media/xUPOqrPftTyi8zq848/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>',
            },
        six = 
            {
                question:"Who is Rory's nemesis when she first starts at Chilton?",
                rightAnswer:"Paris",
                optionA:"Morgan",
                optionB:"Emily",
                optionC:"Paris",
                optionD:"Lorelai",
                gif: '<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><img src="https://media.giphy.com/media/3ofT5OGmdbeaMtUSYg/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>',
            },
        seven = 
            {
                question:"What does Lorelai have a keen sense of smell for?",
                rightAnswer:"Snow",
                optionA:"Rain",
                optionB:"Snow",
                optionC:"Coffee",
                optionD:"Lying",
                gif: '<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><img src="https://media.giphy.com/media/l0ErAPxo8r9aXLSH6/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>',
            },
        eight = 
            {
                question:"What is the name of the Chilton school newspaper?",
                rightAnswer:"The Franklin",
                optionA:"The Gazette",
                optionB:"The Herald",
                optionC:"The Daily",
                optionD:"The Franklin",
                gif: '<div style="width:100%;height:0;padding-bottom:76%;position:relative;"><img src="https://media.giphy.com/media/xUySTN0WMbFqv1DcIM/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>',   
            },
    ]
$( document ).ready(function() 
    {
        function start()
            {
                var i = 0;
                var timeRemaining = 31;
                var gameStarted = false;
                var questionsWrong = 0;
                var questionsRight = 0;
                var selection="";
                var objectPos = questionsArr[i];
                function grabSelection() 
                    {
                        selection=$(this).text();
                        console.log(selection)
                        console.log(i);
                        if(selection == objectPos.rightAnswer)
                            {
                                i++
                                console.log(i);
                                generateQuestions();
                            }
                    }
                $("#questionsBox").html("");
                //If statement below starts the game from the first question immediately.
                if(i===0)
                    {
                        gameStarted=true;
                        //var objectPos = questionsArr[i];
                        timeRemaining=31; 
                        $("#questionsBox").html('<span id="timeLeft"></span><br>'+'<span class="question">' + objectPos.question + '</span> <button class="answer"id="'+ objectPos.optionA + '">' + objectPos.optionA + ' </button>' + '<button class="answer" id="'+ objectPos.optionB + '" >' + objectPos.optionB + ' </button>' + '<button class="answer" id="'+ objectPos.optionC + '">' + objectPos.optionC + '  </button>' + '<button class="answer" id="'+ objectPos.optionD + '">' + objectPos.optionD + '  </button>' + objectPos.gif);   
                    }
                //Self calling function below to generate my questions
                    function generateQuestions() 
                        {
                            setTimeout(function () 
                                {
    // Below dynamically generates my trivia questions && buttons.
                                    if(i<=7 && i!=0)
                                        {
                                            //var objectPos = questionsArr[i];
                                            timeRemaining=31;
                                            $("#questionsBox").html('<span id="timeLeft"></span><br>'+'<span class="question">' + objectPos.question + '</span> <button class="answer" id="'+ objectPos.optionA + '">' + objectPos.optionA + ' </button>' + '<button class="answer" id="'+ objectPos.optionB + '" >' + objectPos.optionB + ' </button>' + '<button class="answer" id="'+ objectPos.optionC + '">' + objectPos.optionC + '  </button>' + '<button class="answer" id="'+ objectPos.optionD + '">' + objectPos.optionD + '  </button>' + objectPos.gif);   
                                        }
                                    if(i<8)
                                        {
                                            i++;
                                        }
                                    if(i>=8)
                                        {
                                            i = 8;
                                        }
                                    generateQuestions();
                                }, 31000);
                        }
                    //Below writes down time remaining to my html
                    function writeTime()
                        {
                            setTimeout(function ()
                            {
                                timeRemaining--
                                $("#timeLeft").text("You have: " + timeRemaining +" seconds remaining.");
                                //below prevents negative countdown timer
                                if(timeRemaining < 0)
                                    {
                                        timeRemaining=0;
                                    }
                                if(timeRemaining === 0)
                                    {
                                        $("#timeLeft").text("You ran out of time.");
                                        if(i===8 && timeRemaining === 0)
                                            {
                                                $("#timeLeft").text("Game Over.");
                                                $("#questionsBox").html("");
                                                $("#questionsBox").append("<button id='startGame'>Play Again</button>")
                                                $("#startGame").on("click", start);
                                                gameStarted=false;
                                                return;
                                            }
                                    }
                                writeTime();
                            }, 1000)
                        }
                        //Below initiates the function to write time remaining to html
                    if(timeRemaining <= 31 && timeRemaining > 0 && gameStarted===true)
                        {
                            writeTime();
                        }    
                    generateQuestions();
                    if(gameStarted === true)
                        {
                            $(document).on("click", ".answer", grabSelection);
                        }

            }






// This is a self calling/looping function below
            function test() {
                setTimeout(function () {
                    // Do Something Here
                    // Then recall the parent function to
                    // create a recursive loop.
                    console.log("test")
                    test();
                }, 1000);
            }
// End reference function




$("#startGame").on("click", start);

test();












    });