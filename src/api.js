import axios from 'axios';
//비동기
const apiUrl = 'http://3.39.39.6:8080/api/member/save/age-gender';

export const updateUserInfo = async (gender, birthYear) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gender,
        age: new Date().getFullYear() - parseInt(birthYear),
      }),
    });

    if (response.ok) {
      return true; // 성공적으로 업데이트된 경우
    } else {
      const errorText = await response.text();
      console.error('API 요청 실패:', response.statusText, errorText);
      return false; // 업데이트 실패
    }
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    return false; // 업데이트 실패
  }
};

const newMember = {
  name: 'Jerry',
  email: 'jerry@codeitmall.kr',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

const newInfo = {
  gender: 'MALE',
  age: 22,
};

fetch('http://3.39.39.6:8080/api/member/save/age-gender', {
  method: 'POST',
  body: JSON.stringify(newInfo),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

const memberNickname = {
  nickname: 'dfs',
  image: 'Dsdf',
};

fetch('http://3.39.39.6:8080/api/member/save/age-gender', {
  method: 'POST',
  body: JSON.stringify(memberNickname),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

export const saveGenre = async () => {
  const apiUrl = 'http://3.39.39.6:8080/api/member/save/genre';

  try {
    const response = await axios.post(apiUrl, {
      genre1: 'MEDIA',
      genre2: 'MEDIA',
      genre3: 'MEDIA',
    });

    // 서버 응답에 대한 처리
    console.log('서버 응답:', response.data);
  } catch (error) {
    // 오류 처리
    console.error('오류 발생:', error);
  }
};

// 함수 호출
saveGenre();

export async function getReviews() {
  const response = await fetch('https://learn.codeit.kr/0916/film-reviews/');
  const body = await response.json();
  return body;
}
