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

/*test
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
*/

// 함수 호출
//saveGenre();
//test 서버
//comment대신
const BASE_URL = 'https://learn.codeit.kr/0915';
export async function getReviews() {
  const response = await fetch(`${BASE_URL}/film-reviews`);
  const body = await response.json();
  return body;
}

export async function createReview(formData) {
  const response = await fetch(`${BASE_URL}/film-reviews`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('리뷰를 생성하기를 실패했습니다');
  }
  const body = await response.json();
  return body;
}
//Reply대신
export async function getFoods() {
  const response = await fetch(`${BASE_URL}/foods`);
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function createFood(formData) {
  const response = await fetch(`${BASE_URL}/foods`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('데이터를 생성하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function deleteFood(id) {
  const response = await fetch(`${BASE_URL}/foods/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('데이터를 삭제하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}
