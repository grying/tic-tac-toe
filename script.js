const wrapper = document.querySelector(".wrapper"),
  contentWrapper = document.querySelector(".contnet"),
  modal = document.querySelector(".modal"),
  overlay = document.querySelector(".overlay"),
  exit = document.querySelector(".close"),
  X = document.querySelector("#X span"),
  D = document.querySelector("#D span"),
  O = document.querySelector("#O span");

let move = 0,
  result = "",
  draw = 0,
  win = {
    X: 1,
    O: 1,
    D: 1,
  },
  d = 0;

wrapper.addEventListener("click", (e) => {
  if (e.target.className == "box") {
    if (move % 2 == 0) {
      e.target.innerHTML = '<img class="exet" src="exet.png" alt="">';
      e.target.classList.add("x");
    } else {
      e.target.innerHTML = '<img class="null" src="nole.png" alt="">';
      e.target.classList.add("o");
    }
    move++;
    draw++;
  
    check();
  }
});

const boxes = document.querySelectorAll(".box");
const check = () => {
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].classList.contains("x") &&
      boxes[arr[i][1]].classList.contains("x") &&
      boxes[arr[i][2]].classList.contains("x")
    ) {
      result = "хрестики";
      prepareRuslt(result);
      X.innerHTML = `${win.X++}`;

    } else if (
      boxes[arr[i][0]].classList.contains("o") &&
      boxes[arr[i][1]].classList.contains("o") &&
      boxes[arr[i][2]].classList.contains("o")
    ) {
      result = "нолики";

      O.innerHTML = `${win.O++}`;
      prepareRuslt(result);
     
    } else if (draw == boxes.length) {
      result = "ничия";
      D.innerText = `${win.D++}`;
    
      prepareRuslt(result);
      return;
    }
   
  }
};

const prepareRuslt = (winner) => {
  contentWrapper.innerHTML = `Виграли ${winner}`;
  modal.style.display = "block";
};
const closeModal = () => {
  modal.style.display = "none";
  boxes.forEach((item) => {
    item.innerHTML = "";
    item.classList.remove("x");
    item.classList.remove("o");
  });
  move = 0;
  draw = 0;
};
overlay.addEventListener("click", closeModal);
exit.addEventListener("click", closeModal);



