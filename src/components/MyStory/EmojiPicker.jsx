// import React, { useState, useEffect, useRef } from 'react';
// import { EmojiButton } from '@joeattardi/emoji-button';

// const EmojiPicker = () => {
//   const [message, setMessage] = useState('');
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     // picker 인스턴스 생성
//     const picker = new EmojiButton({
//       position: 'bottom-start',
//       autoHide: false, // 자동으로 숨기지 않도록 설정할 수 있으나, 이 옵션은 라이브러리 버전에 따라 다를 수 있습니다.
//     });

//     // 이모지 선택 시 메시지 업데이트
//     // 이모지 문자열을 메시지 상태에 추가[Object object]로 뜨는 문제 해결

//     picker.on('emoji', (selection) => {
//       setMessage((prevMessage) => prevMessage + selection.emoji);
//     });

//     const button = buttonRef.current;
//     if (button) {
//       // 버튼 클릭 이벤트 핸들러
//       const togglePicker = () => {
//         picker.togglePicker(button);
//       };
//       // buttonRef가 변경될 때마다 이벤트 리스너를 추가하고 제거

//       button.addEventListener('click', togglePicker);

//       return () => {
//         button.removeEventListener('click', togglePicker);
//       };
//     }
//   }, []);

//   return (
//     <div>
//       <button ref={buttonRef} id="emoji_btn">
//         Emoji
//       </button>
//       <input
//         type="text"
//         id="message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//     </div>
//   );
// };

// export default EmojiPicker;

//이걸로 진행 원래는
// import React, { useEffect, useRef } from 'react';
// import { EmojiButton } from '@joeattardi/emoji-button';

// const EmojiPicker = ({ setData, data }) => {
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const picker = new EmojiButton({
//       position: 'bottom-start',
//       autoHide: false,
//     });

//     picker.on('emoji', (selection) => {
//       setData(data + selection.emoji); // 기존 데이터에 선택한 이모티콘 추가
//     });

//     const button = buttonRef.current;
//     if (button) {
//       const togglePicker = () => {
//         picker.togglePicker(button);
//       };

//       button.addEventListener('click', togglePicker);

//       return () => {
//         button.removeEventListener('click', togglePicker);
//       };
//     }
//   }, [setData, data]); // 의존성 배열에 setData와 data를 추가

//   return (
//     <button
//       style={{ position: 'relative', left: '45%' }}
//       ref={buttonRef}
//       id="emoji_btn"
//     >
//       Emoji
//     </button>
//   );
// };

// export default EmojiPicker;
//d이 위에 주석처리는 일단 놔둬주세요. 설명이 써있는데 정리를 못해서..ㅜ
import React, { useEffect, useRef } from 'react';
import { EmojiButton } from '@joeattardi/emoji-button';
import styled from 'styled-components';
const Button = styled.button`
  background-color: #f4f5f7;
  color: #9ba0ae;
  border: none;
  outline: none;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1002;
  font-weight: 500;
  font-size: 1rem;
  font-family: 'Pretendard';
  padding: 0 10px;
  width: fit-content;
  height: 30px;
`;

const EmojiPicker = ({ setData, data }) => {
  const buttonRef = useRef(null);
  const pickerRef = useRef(null);

  useEffect(() => {
    const picker = new EmojiButton({
      position: 'bottom-start',
      autoHide: false,
    });

    pickerRef.current = picker;

    const button = buttonRef.current;

    if (button) {
      const togglePicker = () => {
        picker.togglePicker(button);
      };

      button.addEventListener('click', togglePicker);

      picker.on('emoji', (selection) => {
        setData((prevData) => prevData + selection.emoji);
      });

      return () => {
        button.removeEventListener('click', togglePicker);
      };
    }
  }, [setData]);

  return (
    <Button ref={buttonRef} id="emoji_btn">
      <img
        style={{ verticalAlign: 'middle' }}
        src="/Img/Story/plus.png"
        alt="이모지추가"
      />{' '}
      이모지
    </Button>
  );
};

export default EmojiPicker;
