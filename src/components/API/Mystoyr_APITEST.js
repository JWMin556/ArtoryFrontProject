import axios from 'axios';
const URL = localStorage.getItem('URL');

const BASE_URL = `${URL}/api/`;
const token = localStorage.getItem('Token');

export const createStory = async (
  exhibitionId,
  data,
  title,
  viewingTime,
  companion,
  genre1,
  genre2,
  genre3,
  satisfactionLevel,
  weather,
  isOpen,
  year,
  month,
  date,
  keyword,
  picturesUrl
) => {
  // console.log(exhibitionId);
  // console.log(data);
  // console.log(title);
  // console.log(companion);
  // console.log(genre1);
  // console.log(genre2);
  // console.log(genre3);
  // console.log(satisfactionLevel);
  // console.log(weather);
  // console.log(year);
  // console.log(month);
  // console.log(date);
  console.log('선택된 사진', picturesUrl);
  try {
    const response = await axios.post(
      `${BASE_URL}stories/save`,

      {
        exhibitionId: exhibitionId,
        storyTitle: title,
        storySatisfactionLevel: satisfactionLevel,
        storyWeather: weather,
        storyCompanion: companion,
        storyKeyword: keyword,
        storyViewingTime: viewingTime,
        year: year,
        month: month,
        day: date,
        storyContext: data,
        genre1: genre1,
        genre2: genre2,
        genre3: genre3,
        isOpen: isOpen,
        picturesUrl: picturesUrl,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    //return response;
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
};
