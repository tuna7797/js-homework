/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
// 1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
//     1. 이벤트 위임
//     2. 반복문
// 2. 이미지와 색상의 데이터는 `data.js` 에서 불러와주세요.
// 3. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
//     1. 배경색 변경 ( colorB의 기본값은 `#000` 으로 한다 )

//     ```jsx
//     elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;
//     ```

//       b. 이미지 변경

//     ```jsx
//     target.src = `./assets/${data.name}.jpeg`;
//     target.alt = data.alt;
//     ```

// 4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.

//     ```jsx
//     target.textContent = data.name;
//     ```

// 5. 함수를 분리시켜주세요.
//     1. `setBgColor` 함수
//     2. `setImage` 함수
//     3. `setNameText` 함수
// 6. 가독성이 좋은` 코드로 리팩토링 해주세요.

const nav = getNode(".nav");
const nickName = getNode(".nickName");
const subImg = getNode("button img");
const mainImg = getNode(".visual img");
const body = getNode("body");

// function setBgColor(node, colorA, colorB = '#000') {
//   node.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
// }
function setBgColor(node, colors) {
  const [colorA, colorB = "#000"] = colors; // 구조분해할당
  node.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
}
function setImage(node, name, alt) {
  node.src = `./assets/${name.toLowerCase()}.jpeg`;
  node.alt = alt;
}
function setNameText(node, value) {
  node.textContent = value;
}

function handleNav(event) {
  let target = event.target;

  let list = target.closest("li");
  if (!list) return;

  let listItems = getNodes("li");

  const index = list.dataset.index - 1;
  const dataItem = data[index];

  // attr(mainImg, "src", `./assets/${dataItem.name.toLowerCase()}.jpeg`);
  // attr(mainImg, "alt", dataItem.alt);
  // attr(nickName, "textContent", dataItem.name);
  //nickName.textContent = dataItem.name;
  setNameText(nickName, dataItem.name);
  setImage(mainImg, dataItem.name, dataItem.alt);
  setBgColor(body, dataItem.color);

  // attr(
  //   body,
  //   "style",
  //   `background: linear-gradient(to bottom, ${dataItem.color[0]},${dataItem.color[1]})`
  // );

  listItems.forEach((item) => item.classList.remove("is-active"));
  list.classList.add("is-active");
}

nav.addEventListener("click", handleNav);
