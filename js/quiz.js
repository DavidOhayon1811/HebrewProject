var quiz = {
    user: "Users",
    questions: [
      {
        text: '1. באיזו צורה אומרים מספר סתמי ? כתוב את המספר במשפט הבא: "עמוד 351".',
        responses: [
        { text: "שלושה מאות חמישים ואחת." },
        { text: "שלוש מאות חמישים ואחת.", correct: true },
        { text: "שלוש מאות חמישים ואחד." },
        { text: "שלושה מאות חמישים ואחד." }] 
      },

      {
        text: 'כתוב מהו הנשוא ומהו הנושא במשפט הבא: "דוד הלך לקנות ירקות בסופר".',
        responses: [
        { text: "נשוא-הלך לקנות, נושא-דוד.", correct: true },
        { text: "נשוא-הלך, נושא-דוד." },
        { text: "נשוא-סופר, נושא-הלך." },
        { text: "נשוא-הלך לקנות, נושא-ירקות." }] 
      },

      {
        text: 'מצא את הדו משמעות במשפט הבא: "חברו של המהנדס ואחיו הלכו לים".',
        responses: [
        { text: "המהנדס יכול להיות גם החבר." },
        { text: "יכול להיות שהם הלכו לאדם שקוראים לו ים ויכול להיות שהלכו לים." },
        { text: "האח יכול להיות של המהנדס או של החבר.", correct: true },
        { text: "הם כולם שלושה אחים." }] 
      },

      {
        text: "איך ננקד את האות ו' לפני הבהרה מותאמת ?",
        responses: [
        { text: "קמץ", correct: true },
        { text: "חטף פתח" },
        { text: "שורוק" },
        { text: "שווא" }] 
      },

      {
        text: 'באיזו צורה אומרים את המספר שאחרי "פי" ואחרי "פעם" ?',
        responses: [
        { text: "פי-נקבה, פעם-זכר." },
        { text: "פי-נקבה, פעם-נקבה." },
        { text: "פי-זכר, פעם-זכר." },
        { text: "פי-זכר, פעם-נקבה.", correct: true  }] 
      }
    ] 
  },

userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
        this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) 
        this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (typeof this.quiz.questions[i].responses[this.userResponses[i]] !== "undefined" && this.quiz.questions[i].responses[this.userResponses[i]].correct)
          score++;
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    } } });