
let state = {
    updates: {
        postsData: [
            { message: 'Hi', id: 1, likesCount: 20 },
            { message: 'bye', id: 2, likesCount: 0 },
            { message: 'bye', id: 2, likesCount: 88 },
        ]
    },
    
    chat :  { dialogueInfo: [
        { userName: 'Color', id: '1' },
        { userName: 'Floor', id: '2' },
        { userName: 'Furniture', id: '3' },
        { userName: 'Workers', id: '4' },
        { userName: 'Light', id: '5' },
    ],
        messageContent: [
            { messageText: 'Your workers are ready to start' },
            { messageText: 'Your order is delayed' },
            { messageText: 'Your color has been changed' },
        ] }
}
export default state;