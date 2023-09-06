import axios from "axios";

// 비동기 방식
function fetchPost1() {
  const result = axios.get("https://koreanjson.com/posts/1");
  console.log(result);
}

fetchPost1();

// 동기 방식
async function fetchPost2() {
  const result = axios.get("https://koreanjson.com/posts/1");
  console.log(result);
}

fetchPost2();
