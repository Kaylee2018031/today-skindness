const dailyPrompts = [
  {
    sentence: "작은 다정함은 하루의 온도를 오래 바꿉니다.",
    kindness: "가장 가까운 사람에게 고마웠던 일을 구체적으로 말해보세요.",
    reflection: "오늘 내가 받은 친절 하나를 떠올리고, 그때의 표정을 기록해보세요.",
  },
  {
    sentence: "서두르지 않는 마음에도 충분한 힘이 있습니다.",
    kindness: "엘리베이터, 문, 길 위에서 누군가의 속도에 한 걸음 맞춰주세요.",
    reflection: "내가 나에게 조금 더 너그러워질 수 있는 순간은 언제였나요?",
  },
  {
    sentence: "좋은 말 한마디는 마음의 창문을 조용히 엽니다.",
    kindness: "동료나 친구의 노력 중 평소 지나쳤던 부분을 칭찬해보세요.",
    reflection: "오늘의 말들 중 다시 건네고 싶은 말과 거두고 싶은 말은 무엇인가요?",
  },
  {
    sentence: "나를 돌보는 일은 세상을 향한 친절의 시작입니다.",
    kindness: "바쁜 사람에게 ‘제가 도울 수 있는 일이 있을까요?’라고 물어보세요.",
    reflection: "오늘 내 몸과 마음이 가장 필요로 하는 쉼은 어떤 모습인가요?",
  },
  {
    sentence: "햇빛처럼 조용한 친절도 분명히 닿습니다.",
    kindness: "감사의 메시지를 짧게 보내고 답장을 재촉하지 말아보세요.",
    reflection: "아무도 알아주지 않아도 계속하고 싶은 좋은 습관은 무엇인가요?",
  },
];

const formatter = new Intl.DateTimeFormat("ko-KR", {
  dateStyle: "full",
});

let offset = 0;

const getPromptIndex = () => {
  const startOfYear = new Date(new Date().getFullYear(), 0, 0);
  const today = new Date();
  const dayOfYear = Math.floor((today - startOfYear) / 86_400_000);
  return (dayOfYear + offset) % dailyPrompts.length;
};

const renderPrompt = () => {
  const prompt = dailyPrompts[getPromptIndex()];

  document.querySelector("#today-label").textContent = formatter.format(new Date());
  document.querySelector("#sentence-text").textContent = prompt.sentence;
  document.querySelector("#kindness-text").textContent = prompt.kindness;
  document.querySelector("#reflection-text").textContent = prompt.reflection;
};

document.querySelector("#refresh-button").addEventListener("click", () => {
  offset += 1;
  renderPrompt();
});

renderPrompt();
