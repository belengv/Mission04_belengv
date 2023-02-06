$("#btnCalc").click(function () {
    //declaring variables and calculating weighted grades
    var assignment = ((parseInt($('#txtA').val())) * 50)/100;
    var groupPr = ((parseInt($('#txtGP').val())) * 10)/100;
    var quizzes = ((parseInt($('#txtQ').val())) * 10) / 100;
    var midterm = ((parseInt($('#txtM').val())) * 10) / 100;
    var finamExam = ((parseInt($('#txtF').val())) * 10) / 100;
    var intex = ((parseInt($('#txtI').val())) * 10) / 100;

    //Calculating final total percentage by adding up our variables
    var totalPercent = assignment + groupPr + quizzes + midterm + finamExam + intex;

    //Calculating final Letter grade based on total percentage
    if (totalPercent >= 94) {
        var finalLetterG = 'A'
    }
    else if (totalPercent >= 90) {
        finalLetterG = 'A-'
    }
    else if (totalPercent >= 87) {
        finalLetterG = 'B+'
    }
    else if (totalPercent >= 84) {
        finalLetterG = 'B'
    }
    else if (totalPercent >= 80) {
        finalLetterG = 'B-'
    }
    else if (totalPercent >= 77) {
        finalLetterG = 'C+'
    }
    else if (totalPercent >= 74) {
        finalLetterG = 'C'
    }
    else if (totalPercent >= 70) {
        finalLetterG = 'C-'
    }
    else if (totalPercent >= 67) {
        finalLetterG = 'D+'
    }
    else if (totalPercent >= 64) {
        finalLetterG = 'D'
    }
    else if (totalPercent >= 60) {
        finalLetterG = 'D-'
    }
    else {
        finalLetterG = 'E'
    }

    alert("Final Percent Grade: " + totalPercent + "%" +
        "\nFinal Letter Grade:  " + finalLetterG);
})