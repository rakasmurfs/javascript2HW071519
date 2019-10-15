//create an array of questions with their answers.
//Create start button
//When start button is pressed display time remaining, first question, and options for answers as buttons.
//When timer hits 0, display "you ran out of time" along with the correct answer and a GIF related to the answer.
//When user selects a answer display whether or not the answer was correct as well as a gif related to answer.
// Create a countdown for 3-5 seconds to move on to next question after result is displayed.
// Once player cycles through all answers, display amount they got right and amount incorrect.
// Add a try again button at end screen



$( document ).ready(function() 
    {
        var counter = 0;
        var clock;
        var time =30;
        var answersRight=0;
        var answersWrong=0;
        var answersIncomplete=0;
        var questionsArr = 
        [
            one = 
                {
                    question:'Who sings the "Gilmore Girls" theme song?',
                    rightAnswer: "Carole King",
                    options:["Stevie Nicks", "Carole King", "Mariah Carey", "Katy Perry"],
                    gif: '<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><img src="https://media.giphy.com/media/xUPOqov5zNNx8FyHS0/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen class="gif"></div>',
                },
            two = 
                {
                    question:'What is the name of the private school Rory attends?',
                    rightAnswer:"Chilton",
                    options:["Tipton", "Harvard", "Overbrook", "Chilton"],
                    gif: '<div style="width:100%;height:0;padding-bottom:76%;position:relative;"><img src="https://media.giphy.com/media/xUySTzIRIjwV2pHMkM/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen class="gif"></div>',
                },
            three = 
                {
                    question: "What are the first words in the pilot episode?",
                    rightAnswer:'"Please Luke. Please, please, please."',
                    options:['"Please Luke. Please, please, please."', '"Coffee coffee coffee!"', '"Watch out!"', '"Did I put on underwear?"'],
                    gif: '<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><img src="https://media.giphy.com/media/xUySTPAS9poVD23jCo/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen class="gif"></div>',
                },
            four = 
                {
                    question: "What is the name of the inn where Lorelai works in the early seasons?",
                    rightAnswer: 'The Independence Inn',
                    options:["Freedom Inn", "The Patriot Inn", "The Independence Inn", "The Chilton"],
                    gif: '<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><img src="https://media.giphy.com/media/l1L0gM1jJiWskWt8I/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen class="gif"></div>',
                },
            five = 
                {
                    question:"What day of the week is dinner with the grandparents on?",
                    rightAnswer:"Friday",
                    options:["Friday", "Sunday", "Thursday", "Saturday"],
                    gif: '<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><img src="https://media.giphy.com/media/xUPOqrPftTyi8zq848/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen class="gif"></div>',
                },
            six = 
                {
                    question:"Who is Rory's nemesis when she first starts at Chilton?",
                    rightAnswer:"Paris",
                    options:["Morgan", "Emily", "Paris", "Lorelai"],
                    gif: '<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><img src="https://media.giphy.com/media/3ofT5OGmdbeaMtUSYg/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen class="gif"></div>',
                },
            seven = 
                {
                    question:"What does Lorelai have a keen sense of smell for?",
                    rightAnswer:"Snow",
                    options:["Rain", "Snow", "Coffee", "Lying"],
                    gif: '<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><img src="https://media.giphy.com/media/l0ErAPxo8r9aXLSH6/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen class="gif"></div>',
                },
            eight = 
                {
                    question:"What is the name of the Chilton school newspaper?",
                    rightAnswer:"The Franklin",
                    options:["The Gazette", "The Herald", "The Daily", "The Franklin"],
                    gif: '<div style="width:100%;height:0;padding-bottom:76%;position:relative;"><img src="https://media.giphy.com/media/xUySTN0WMbFqv1DcIM/giphy.gif" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen class="gif"></div>',   
                },
        ]
        //creates my questions with all possible answers
       // each button is assigned the class "choices" 
        $("#startOver").click(generateQuestions);
        function generateQuestions()
            {
                if(counter < questionsArr.length)
                    {
                        time = 30;
                        $("#questionsBox").html("");
                        $("#questionsBox").append("<p class='timeRemaining'><b>"+time+"</b></p>");
                        $("#questionsBox").append(questionsArr[counter].question);
                        for(i=0; i<questionsArr[counter].options.length; i++)
                            {
                                $("#questionsBox").append("<button class='choices'>" + questionsArr[counter].options[i] + "</button>");
                            }
                        timer();
                        onTimeout();                        
                    }
                else
                    {
                        displayResults();
                    }
            }
        
        function onCorrect()
            {
                $("#questionsBox").html("That is correct!");
                answersRight++
                $("#questionsBox").append("<div class='gif'>" + questionsArr[counter].gif + "</div>");
                counter++
                setTimeout(generateQuestions, 4000);                
            }

        function onWrong()
            {
                $("#questionsBox").html("That is wrong!");
                answersWrong++
                $("#questionsBox").append("<p> The correct answer is: " + questionsArr[counter].rightAnswer + ".</p>");
                $("#questionsBox").append("<div class='gif'>" + questionsArr[counter].gif + "</div>");
                counter++
                setTimeout(generateQuestions, 4000);                
            }

        function onTimeout()
            {
                if (time === 0)
                    {
                        $("#questionsBox").html("<p> You ran out of time!</p>");
                        answersIncomplete++
                        $("#questionsBox").append("<p> The correct answer is: " + questionsArr[counter].rightAnswer + ".</p>");
                        $("#questionsBox").append("<div class='gif'>" + questionsArr[counter].gif + "</div>");
                        counter++
                        setTimeout(generateQuestions, 4000); 
                    }
            }
        // Displays answers right, wrong, and amount of timeouts.
        function displayResults()
            {
                $("#questionsBox").html("Game Over.");
                $("#questionsBox").append("You got " + answersRight + " questions right.");
                $("#questionsBox").append("You got " + answersWrong +" questions wrong");
                $("#questionsBox").append("You left " + answersIncomplete + " questions incomplete because you were slow.");
                $("#questionsBox").append("<h1> Start over? </h1><br>");
                $("#questionsBox").append("<button id='startOver'> New game</button>");
                $("#startOver").click(generateQuestions);
                reset();
            }
        //fucntion to reset my variables before starting new game
        function reset()
            {
                counter = 0;
                time = 30;
                answersRight = 0;
                answersWrong = 0
                answersIncomplete = 0;
            }
        //counts down timeRemaining and calls timeout function
        function timer() 
                {
                    clock = setInterval(countDown, 1000);
                    function countDown()
                        {
                            if(time<1)
                                {
                                    clearInterval(clock);
                                    onTimeout();
                                }   
                            if (time>0)
                                {
                                    time--;
                                    $(".timeRemaining").html("<b>" + time + "</b>");
                                    console.log(time);
                                }
                        }
      
                }
        $("#questionsBox").on("click", ".choices", (function() 
            {
                var userGuess = $(this).text();
                if (userGuess === questionsArr[counter].rightAnswer)
                    {
                        clearInterval(clock);
                        onCorrect();
                    }
                else
                    {
                        clearInterval(clock);
                        onWrong();
                    }
            }))
    });