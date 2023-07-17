function createTokenOfPhone(myphone) {
  // 1. 휴대폰 번호 유효성 확인
  if (myphone.length !== 10 && myphone.length !== 11) {
    console.log("error 발생! 휴대폰 번호를 제대로 입력해주세요");
    return;
  }

  // 2. 인증번호 토큰 6자리 생성
  const aaa = 6;
  if (aaa === undefined) {
    console.log("error 발생! 갯수를 제대로 입력해주세요");
    return;
  } else if (aaa <= 0) {
    console.log("error 발생! 갯수가 너무 적습니다");
    return;
  } else if (aaa >= 10) {
    console.log("error 발생! 갯수가 너무 많습니다");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** aaa)).padStart(
    aaa,
    "0"
  );
  console.log(result);

  // 3. 휴대폰 번호로 토큰 전송
  console.log(`${myphone}번호로 인증번호${result}를 전송합니다`);
}

createTokenOfPhone("01031693179");
