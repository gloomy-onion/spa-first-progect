import updatesReducer , { addPost, deletePost }from "./updates-reducer"

  const state = {
    postsData: [
      { message: 'Hi', id: 1, likesCount: 20 },
      { message: 'bye', id: 2, likesCount: 0 },
      { message: 'bye', id: 3, likesCount: 88 },
    ],
  };

test( 'new post should be added', () => {
  const action = addPost( 'blablabla' );
  const newState = updatesReducer( state, action )
  expect(newState.postsData.length).toBe(4)
} )

test('message of new post should be correct', () => {
  const action = addPost('blablabla');
  const newState = updatesReducer(state, action);
  expect(newState.postsData[3].message).toBe('blablabla');
});

test('after deleting length  should be decrement', () => {
  const action = deletePost(1);

  const newState = updatesReducer(state, action);
  expect(newState.postsData.length).toBe(3);
} );

test('after deleting length shouldnt be decrement if id is incorrect', () => {
  const action = deletePost(4);

  const newState = updatesReducer(state, action);
  expect(newState.postsData.length).toBe(3);
});

test("test", () => {
  expect(true).toBe(true);
});
