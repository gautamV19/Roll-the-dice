var map = ["X", "Y", "Z"];
$("button").click(function (e) {
  e.preventDefault();
  let axis1 = Math.floor(Math.random() * 3);
  let axis2 = Math.floor(Math.random() * 3);
  let rotateCount1 = Math.floor(Math.random() * 5);
  let rotateCount2 = Math.floor(Math.random() * 5);
  $(".cube-one").css({
    transform: "rotate" + map[axis1] + "(" + rotateCount1 * 90 + "deg)",
    transition: "1s ",
  });
  $(".cube-two").css({
    transform: "rotate" + map[axis2] + "(" + rotateCount2 * 90 + "deg)",
    transition: "1s ",
  });
});
