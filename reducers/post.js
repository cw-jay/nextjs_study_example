export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'abccddd',
    },
    content: '첫 번째 게시글',
    Images: [{
      src: 'https://s1.1zoom.me/b7565/735/Germany_Mountains_Sunrises_and_sunsets_Houses_568280_3840x2160.jpg',
    }, {
      src: 'https://s1.1zoom.me/big0/766/New_Zealand_Mountains_Franz_Josef_Glacier_Valley_568320_1280x853.jpg',
    }, {
      src: 'https://s1.1zoom.me/big0/409/England_Sunrises_and_sunsets_Parks_Water_New_567857_1280x853.jpgg',
    }],
    Comments: [{
      User: {
        nickname: 'q1',
      },
      content: 'good',
    }, {
      User: {
        nickname: 'q2',
      },
      content: 'hihi',
    }]
  }],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: 'qwertstyu',
  },
  Images: [],
  Comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
