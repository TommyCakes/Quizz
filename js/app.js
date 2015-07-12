$(document).on('ready',function() {

  // var questions = {
  //  answers: {
  //    first: "Green ",
  //    second: "Red",
  //    third: "Blue",
  //    fourth: "Yellow2"

  // $('#howTo').click(function() {
  //     $(".what").click(function(){
  //     $(".overlay").fadeIn(1000);

  //   });
  // // --- Hide information modal box ---
    
  //   $("a.close").click(function(){
  //     $(".overlay").fadeOut(1000);
  //   });
  // })

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
  one: 'Two',
  two: 'Six',    
  three: 'One',
  four: 'Four'
  },
  {
  one: '100m',
  two: 'Over 1500m',    
  three: '600m',
  four: '15m'
  }];

  console.log(answers);


  var count = 1;
  var hearts = 3;

  $('.fa-check').css('display', 'none');
  $('.fa-times').css('display', 'none');
  $('.fa-thumbs-o-down').css('display', 'none');
  $('#next').css('display', 'none');



  $('#current-question').html("You're on question #" + count);

var answer1 = $('#q' + count + 'answer1').html(answers[count].one),
    answer2 = $('#q' + count + 'answer2').html(answers[count].two),
    answer3 = $('#q' + count + 'answer3').html(answers[count].three),
    answer4 = $('#q' + count + 'answer4').html(answers[count].four);

  var correctAnswerCount;

  $('.answers input[type="radio"]').click(function() {

    var type = $(this).data('type');


   correctAnswerCount = $('answers input[type="radio"]:checked[data-type="1"]').length;

    if( type === 1) {
       playMoo();
       // alert("Well done!")
       $('.fa-check').show();
       $('.fa-times').hide();
       $('.fa-thumbs-o-down').hide();
       $('#next').show();
    }
    else {
      playMooWrong();
      // alert("That's wrong!")
      
      $('.fa-times').show();
      $('.fa-check').hide();
      // hearts === 3
      $('#heart' + hearts).hide();
      hearts--
      if(hearts == 0){
        $('#next').addClass('hide').hide()
        $('#reset').show()
        // alert('No more lives')
        $('.fa-thumbs-o-down').show();
        $('.fa-times').hide();
      // if(correctAnswerCount <= 4) {
      //    $('#current-question').html("You ranked: City Dweller");
      // if(correctAnswerCount > 4) {
      //    $('#current-question').html("You ranked: Farmer");
      // }
    // }

        
      }
      

    }
     console.log('correctAnswerCount:', correctAnswerCount);

 });
  // });

$('#next').on('click',function(){
  // var count = 1;
   if (count < 4) {
      $('.question' + count).addClass('hide').hide();
      count++;
      $('#current-question').html("You're on question #" + count);
      $('.question' + count).removeClass('hide').show();
      answer1 = $('#q' + count + 'answer1').html(answers[count].one),
      answer2 = $('#q' + count + 'answer2').html(answers[count].two),
      answer3 = $('#q' + count + 'answer3').html(answers[count].three),
      answer4 = $('#q' + count + 'answer4').html(answers[count].four);
    }
    else {
      $('#current-question').html("Congratulations! <br>You scored  " + correctAnswerCount + " out of 4");
      $('#next').addClass('hide').hide()
      $('#reset').show()
      return false;
    }
});
//

$('#reset').on('click', function(){
  count = 1
  hearts = 3
  correctAnswerCount = 0
   playNeigh();
  
  $('#current-question').html("You're on question #" + count)
  
  $('.question1').removeClass('hide').show()
  $('.question2').removeClass('hide').addClass('hide').hide()
  $('.question3').removeClass('hide').addClass('hide').hide()
  $('.question4').removeClass('hide').addClass('hide').hide()
  
  $('.question1 input:checked').attr('checked', false)
  $('.question2 input:checked').attr('checked', false)
  $('.question3 input:checked').attr('checked', false)
  $('.question4 input:checked').attr('checked', false)
  
  $('#heart1').show();
  $('#heart2').show();
  $('#heart3').show();
  
  $('.fa-check').hide();
  $('.fa-times').hide();
  $('.fa-thumbs-o-down').hide();
  
  $('#reset').addClass('hide').hide();
});

});


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
    function playNeigh() {
      $('#neigh')[0].volume = 0.7;
      $('#neigh')[0].load();
      $('#neigh')[0].play();
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
