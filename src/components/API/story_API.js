import axios from 'axios';

const BASE_URL = 'http://3.39.39.6:8080/api/';
const token = localStorage.getItem('Token');

export const getStoryInfo = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/stories/${id}`, {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
    });

    console.log(response);

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
};

export const searchStory = async (keyword) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/stories/search?page=1&title=${keyword}`,
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
};
//스토리 스크랩 관리
export const storyScrpped = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/scrap-story/story-scrapped?storyId=${id}`,
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
};
export const storyUnScrpped = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/scrap-story/story-unscrapped?storyId=${id}`,
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
};
//스토리 좋아요 관리
export const storyLiked = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/like-story/story-liked?storyId=${id}`,
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
};
export const storyUnLiked = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/like-story/story-unliked?storyId=${id}`,
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
};

//댓글 관리
export const getComments = async (storyId) => {
  try {
    const response = await axios.get(`${BASE_URL}stories/comment/${storyId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
};

export const createComment = async (
  storyId,
  commentSatisfactionLevel,
  commentContext
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/comments/save/{story-id}?storyId=${storyId}`,
      {
        commentSatisfactionLevel: commentSatisfactionLevel,
        commentContext: commentContext,
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
export const patchComment = async (
  storyId,
  commentId,
  commentSatisfactionLevel,
  commentContext
) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}comments/update/${storyId}`,
      {
        commentId: commentId,
        commentSatisfactionLevel: commentSatisfactionLevel,
        commentContext: commentContext,
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

export const deleteComment = async (storyId, commentId) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}comments/delete/${storyId}?commentId=${commentId}`,
      {
        headers: {
          accept: '*/*',
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

//대댓글 추가

export const createReply = async (commentId, commentContext) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/subcomments/save/{comment-id}?commentId=${commentId}`,
      {
        commentContext: commentContext,
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
export const deleteReply = async (commentId, subCommentId) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}subcomments/delete/{comment-id}?commentId=${commentId}`,
      {
        headers: {
          accept: '*/*',
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