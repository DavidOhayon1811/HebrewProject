var
  words = ['שם המספר', 'שם המספר'], 
  words1 = ['תפקידים תחביריים בלשון', 'תפקידים תחביריים בלשון'],
  words2 = ['דו-משמעות – תחבירית', 'דו-משמעות – תחבירית'],
  words3 = ['קפ״ה', 'קפ״ה'],
  part,
  part1,
  part2,
  part3,
  i = 0,
  i1 = 0,
  i2 = 0,
  i3 = 0,
  offset = 0,
  offset1 = 0,
  offset2 = 0,
  offset3 = 0,
  len = words.length,
  len1 = words1.length,
  len2 = words2.length,
  len3 = words3.length,
  forwards = true,
  forwards1 = true,
  forwards2 = true,
  forwards3 = true,
  skip_count = 0,
  skip_count1 = 0,
  skip_count2 = 0,
  skip_count3 = 0,
  skip_delay = 5,
  skip_delay1 = 5,
  skip_delay2 = 5,
  skip_delay3 = 5,
  speed = 100,
  speed1 = 100,
  speed2 = 100,
  speed3 = 100;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
    	$("#content-3 .wrapper .page.page1 h1").text(part);
  },speed);
};

$(document).ready(function(){
  wordflick();
});


var wordflick2 = function(){
  setInterval(function(){
      if (forwards1) {
        if(offset1 >= words1[i1].length){
          ++skip_count1;
          if (skip_count1 == skip_delay1) {
            forwards1 = false;
            skip_count1 = 0;
          }
        }
      }
      else {
         if(offset1 == 0){  
            forwards1 = true;
            i1++;
            offset1 = 0;
            if(i1 >= len1){
              i1=0;
            } 
         }
      }
      part1 = words1[i1].substr(0, offset1);
      if (skip_count1 == 0) {
        if (forwards1) {
          offset1++;
        }
        else {
          offset1--;
        }
      }
    	$("#content-5 .wrapper .page.page1 h1").text(part1);
  },speed1);
};

$(document).ready(function(){
  wordflick2();
});


var wordflick3 = function(){
  setInterval(function(){
      if (forwards2) {
        if(offset2 >= words2[i2].length){
          ++skip_count2;
          if (skip_count2 == skip_delay2) {
            forwards2 = false;
            skip_count2 = 0;
          }
        }
      }
      else {
         if(offset2 == 0){  
            forwards2 = true;
            i2++;
            offset2 = 0;
            if(i2 >= len2){
              i2=0;
            } 
         }
      }
      part2 = words2[i2].substr(0, offset2);
      if (skip_count2 == 0) {
        if (forwards2) {
          offset2++;
        }
        else {
          offset2--;
        }
      }
    	$("#content-4 h1").text(part2);
  },speed2);
};

$(document).ready(function(){
  wordflick3();
});


var wordflick4 = function(){
  setInterval(function(){
      if (forwards3) {
        if(offset3 >= words3[i3].length){
          ++skip_count3;
          if (skip_count3 == skip_delay3) {
            forwards3 = false;
            skip_count3 = 0;
          }
        }
      }
      else {
         if(offset3 == 0){
            forwards3 = true;
            i3++;
            offset3 = 0;
            if(i3 >= len3){
              i3=0;
            } 
         }
      }
      part3 = words3[i3].substr(0, offset3);
      if (skip_count3 == 0) {
        if (forwards3) {
          offset3++;
        }
        else {
          offset3--;
        }
      }
    	$("#content-6 .wrapper .page.page1 h1").text(part3);
  },speed3);
};

$(document).ready(function(){
  wordflick4();
});