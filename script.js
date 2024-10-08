// 개인 학습 : 랜덤 친구 찾기 페이지 만들기

let beforeNumber = 0;

const datas = [
  {
    image: "./profile2.jpg",
    name: "조유리",
    intro: "저는 백엔드 개발자입니다. 커피, 게임, 코딩을 좋아합니다.",
    skills: [`Java`, `Node.js`, `Go`, `AWS`],
  },
  {
    image: "./profile.png",
    name: "차은우",
    intro:
      "저는 동적 웹 애플리케이션을 만드는 것을 좋아하는 프론트엔드 개발자입니다, 저는 독서, 하이킹, 전 세계 여행을 즐깁니다.",
    skills: [`Javascript`, `HTML`, `CSS`],
  },
  {
    image: "./profile3.jpg",
    name: "장원영",
    intro:
      "저는 다양한 분야의 경험을 좋아하는 풀스택 개발자입니다, 저는 클라이밍, 댄스, 국내 여행을 즐깁니다.",
    skills: [`Javascript`, `HTML`, `CSS`, "React.js", "Node.js"],
  },
  {
    image: "./profile4.jpg",
    name: "김세정",
    intro:
      "저는 사용자 편의성을 고려하는 앱 개발자입니다, 저는 베이킹, 사진 촬영, 영화 감상을 즐깁니다.",
    skills: ["Swift", "Flutter", `Javascript`, `HTML`, `CSS`],
  },
];

function updateInfo(data) {
  const { image, name, intro, skills } = data;
  const imageElement = document.getElementById("profile-image");
  const nameElement = document.getElementById("name");
  const introElement = document.getElementById("intro");
  const skillsBoxElement = document.getElementById("skills-box");
  imageElement.src = image;
  nameElement.textContent = name;
  introElement.textContent = intro;
  const skillsHTML = skills
    .map((skill) => `<li class="small-box">${skill}</li>`)
    .join("");
  skillsBoxElement.innerHTML = skillsHTML;
}

function rotation() {
  while (beforeNumber > -1) {
    const randomNumber = Math.floor(Math.random() * datas.length);
    if (beforeNumber !== randomNumber) {
      updateInfo(datas[randomNumber]);
      beforeNumber = randomNumber;
      break;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateInfo(datas[beforeNumber]);
});
