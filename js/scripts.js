$(document).ready(function() {

 // identify answers as language 1, lan2, lan3...
// totallan1 = how many times was lan1 selected * how strongly user feels about this question
// if totallan1 > totallan2 > totallan3, then suggest lan1
// if totallan 1 = totallan2 && > totallan3, then suggest lan1 and lan2
// if total of all languages is =, then provide link to epicodus.com/blog/what-programming-langauge-should-i-learn (this will also be included in "further reading")


  $("form").submit(function(event) {
    var rubytotal = 0
    var phptotal = 0
    var csharptotal = 0

    $(".ruby").hide();
    $(".php").hide();
    $(".csharp").hide();
    $('#output').hide();
    event.preventDefault();
    var answer1 = $("input:radio[name=question1]:checked").val();
    var answer2 = $("input:radio[name=question2]:checked").val();
    var answer3 = $("input:radio[name=question3]:checked").val();

      if (answer1 === "ruby1") {$(rubytotal =(parseInt(rubytotal)+1))};
      if (answer1 === "php1") {$(phptotal =(parseInt(phptotal)+1))};
      if (answer1 === "csharp1") {$(csharptotal =(parseInt(csharptotal)+1))};

      if (answer2 === "ruby2") {$(rubytotal =(parseInt(rubytotal)+1))};
      if (answer2 === "php2") {$(phptotal =(parseInt(phptotal)+1))};
      if (answer2 === "csharp2") {$(csharptotal =(parseInt(csharptotal)+1))};

      if (answer3 === "ruby3") {$(rubytotal =(parseInt(rubytotal)+1))};
      if (answer3 === "php3") {$(phptotal =(parseInt(phptotal)+1))};
      if (answer3 === "csharp3") {$(csharptotal =(parseInt(csharptotal)+1))};






    if (rubytotal === phptotal && rubytotal ===  csharptotal){
      $('#output').toggle();
      $("#output").text("It looks like you are undecided! Consult Sorting Hat.");
    }
    if (rubytotal === phptotal && rubytotal > csharptotal){
      $('#output').toggle();
      $("#output").text("It looks like you you tied on Ruby and PHP! ");
    }
    if (rubytotal === csharptotal && rubytotal > phptotal){
      $('#output').toggle();
      $("#output").text("It looks like you you tied on Ruby and C#! ");
    }
    if (phptotal === csharptotal && csharptotal > rubytotal){
      $('#output').toggle();
      $("#output").text("It looks like you you tied on PHP and C#! ");
    }
    if (rubytotal > phptotal && rubytotal > csharptotal) {
      $('.ruby').toggle();}
    if (phptotal > csharptotal && phptotal > rubytotal) {
      $('.php').toggle();}
    if (csharptotal > rubytotal && csharptotal > phptotal) {
      $('.csharp').toggle();}

});
});

    // $(".php").hide();
    // $(".csharp").hide();



    // } else if (phptotal > rubytotal && || csharptotal) {
    //   $('.php').toggle();
    // } else if (csharptotal > phptotal && || phptotal){
    //   $('.csharp').toggle();
    // }

    // alert('working!');  debugger
