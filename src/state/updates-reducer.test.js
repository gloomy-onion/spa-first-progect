import updatesReducer , { addPost, deletePost }from "./updates-reducer"

  const state = {
    postsData: [
      { message: 'Hi', id: 1, likesCount: 20 },
      { message: 'bye', id: 2, likesCount: 0 },
      { message: 'bye', id: 3, likesCount: 88 },
    ],
  };

it( 'new post should be added', () => {
  const action = addPost( 'blablabla' );
  const newState = updatesReducer( state, action )
  expect(newState.postsData.length).toBe(4)
} )

it('message of new post should be correct', () => {
  const action = addPost('blablabla');
  const newState = updatesReducer(state, action);
  expect(newState.postsData[4].message).toBe('blablabla');
});

it('after deleting lenght  should be decrement', () => {
  const action = deletePost(1);

  const newState = updatesReducer(state, action);
  expect(newState.postsData.length).toBe(3);
} );

it('after deleting lenght shouldnt be decrement if id is incorrect', () => {
  const action = deletePost(1000);

  const newState = updatesReducer(state, action);
  expect(newState.postsData.length).toBe(4);
});