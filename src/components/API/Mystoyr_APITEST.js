import axios from 'axios';
const BASE_URL = 'http://3.39.39.6:8080/api/';
const token = localStorage.getItem('Token');

//저장 (storyId 존재o)
export const createStory1 = async (
  storyId,
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
  date
) => {
  console.log(exhibitionId);
  console.log(data);
  console.log(title);
  console.log(companion);
  console.log(genre1);
  console.log(genre2);
  console.log(genre3);
  console.log(satisfactionLevel);
  console.log(weather);
  console.log(year);
  console.log(month);
  console.log(date);
  try {
    const response = await axios.post(
      `${BASE_URL}stories/save?storyId=${storyId}`,
      {
        exhibitionId: exhibitionId,
        storyTitle: title,
        storySatisfactionLevel: satisfactionLevel,
        storyWeather: weather,
        storyCompanion: companion,
        storyKeyword: 'string',
        storyViewingTime: viewingTime,
        year: year,
        month: month,
        day: date,
        storyContext: data,
        genre1: genre1,
        genre2: genre2,
        genre3: genre3,
        isOpen: isOpen,
        picturesUrl: ['string'],
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
//저장 (storyId 존재x)
export const createStory2 = async (
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
  date
) => {
  console.log(exhibitionId);
  console.log(data);
  console.log(title);
  console.log(companion);
  console.log(genre1);
  console.log(genre2);
  console.log(genre3);
  console.log(satisfactionLevel);
  console.log(weather);
  console.log(year);
  console.log(month);
  console.log(date);
  try {
    const response = await axios.post(
      `${BASE_URL}stories/save?storyId`,
      {
        exhibitionId: exhibitionId,
        storyTitle: title,
        storySatisfactionLevel: satisfactionLevel,
        storyWeather: weather,
        storyCompanion: companion,
        storyKeyword: 'string',
        storyViewingTime: viewingTime,
        year: year,
        month: month,
        day: date,
        storyContext: data,
        genre1: genre1,
        genre2: genre2,
        genre3: genre3,
        isOpen: isOpen,
        picturesUrl: ['string'],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    //return response;
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
};