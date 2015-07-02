$(document).on('ready',function() {

  // var questions = {
  //  answers: {
  //    first: "Green ",
  //    second: "Red",
  //    third: "Blue",
  //    fourth: "Yellow2"

  $('#howTo').click(function() {
    $("#info p").removeClass('hide').show()
  })

  var answers = [
    'Question Answers',
  {
  one: 'Brown',
  two: 'Spotted',    
  three: 'Black',
  four: 'White'
  },
  {
  one: 'England',
  two: 'Brazil',    
  three: 'Japan',
  four: 'India'
  },
  {
  one: 'Red',
  two: 'Blue',    
  three: 'Green',
  four: 'Yellow'
  },
  {
  one: 'Red',
  two: 'Blue',    
  three: 'Green',
  four: 'Yellow'
  }]

  console.log(answers);


  var count = 1;
  var hearts = 3;

  $('.fa-check').css('display', 'none');
  $('.fa-times').css('display', 'none');
  $('#next').css('display', 'none');



  $('#current-question').html("You're on question #" + count);

  var answer1 = $('#q' + count + 'answer1').html(answers[count].one),
    answer2 = $('#q' + count + 'answer2').html(answers[count].two),
    answer3 = $('#q' + count + 'answer3').html(answers[count].three),
    answer4 = $('#q' + count + 'answer4').html(answers[count].four);

  var correctAnswerCount;

  $('.answers input[type="radio"]').click(function() {

    var type = $(this).data('type');


   correctAnswerCount = $('.answers input[type="radio"]:checked[data-type="1"]').length;

    if( type === 1) {
       playMoo();
       // alert("Well done!")
       $('.fa-check').show();
       $('.fa-times').hide();
       $('#next').show();
    }
    else {
      playMooWrong()
      // alert("That's wrong!")
      $('.heart3').hide();
      $('.fa-times').show();
      $('.fa-check').hide();
      hearts = hearts - 1

    }
     console.log('correctAnswerCount:', correctAnswerCount);

 });
  });

$('#next').on('click',function(){
  var count = 1;
   if (count < 4) {
      $('.question' + count).addClass('hide').hide();
      count++;
      $('#current-question').html("You're on question #" + count);
      $('.question' + count).removeClass('hide').show();
    }
    else {
      $('#current-question').html("You scored " + correctAnswerCount + "out of 10");
      return false;
    }
})

    // alert(type === 1 ? 'Woo!' : 'wah!');

    function playMoo() {
        $('#moo')[0].volume = 0.3;
        $('#moo')[0].load();
        $('#moo')[0].play();
    }
     function playMooWrong() {
        $('#mooWrong')[0].volume = 0.5;
        $('#mooWrong')[0].load();
        $('#mooWrong')[0].play();
    }


   

    




    // if(hearts === 0) {
    //  alert('Game over sonny')
    // }
 
  

  






  // $('#answer1').click(function() {
  //  if('#input#answer1:checked[data-type="1"]'){
  //    alert('correct!');
  //  }
  //  else {
  //    alert('false!')
  //  }
  //  // $('.speech').hide();
  // })
