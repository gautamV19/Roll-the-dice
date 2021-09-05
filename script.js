//Problems: dice are going out of the screen any way to avoid?

var map = ["X", "Y"];
$("button").click(function (e) {
  e.preventDefault();
  let axis1 = Math.floor(Math.random() * 2);
  let axis2 = Math.floor(Math.random() * 2);
  let rotateCount1 = Math.floor(Math.random() * 4);
  let rotateCount2 = Math.floor(Math.random() * 4);
  $(".cube-one").css({
    transform:
      "rotate" + map[axis1] + "(" + rotateCount1 * 90 + "deg)" + "translate(0)",
    transition: "1s",
  });
  $(".cube-two").css({
    transform:
      "rotate" + map[axis2] + "(" + rotateCount2 * 90 + "deg)" + "translate(0)",
    transition: "1s",
  });

  var scoreOne = getFront(axis1, rotateCount1);
  var scoreTwo = getFront(axis2, rotateCount2);

  console.log("One :", scoreOne, "Two :", scoreTwo);

  $(".one").html(scoreOne);
  $(".two").html(scoreTwo);

  if (scoreOne === scoreTwo) {
    $("#winner").html("This is Tie");
  } else {
    var winner = scoreOne > scoreTwo ? "1" : "2";
    $("#winner").html(winner + " is Winner");
  }
});

const getFront = (axis, rotateCount) => {
  if (!rotateCount) {
    return 6;
  }
  if (rotateCount == 2) {
    return 1;
  }
  switch (map[axis]) {
    case "Y":
      switch (rotateCount) {
        // case 0:
        //   return 6;
        case 1:
          return 4;
        // case 2:
        //   return 1;
        case 3:
          return 3;
      }
      break;
    case "X":
      switch (rotateCount) {
        // case 0:
        // return 6;
        case 1:
          return 5;
        // case 2:
        //   return 1;
        case 3:
          return 2;
      }
      break;
    default:
      return -1;
  }
};
