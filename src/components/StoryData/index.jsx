export const storyData = {
    start: {
        id: 1,
        text: "You're standing at the edge of a forest...",
        options: [
            { text: "You go in", nextScene: 'goIn' },
            { text: "You turn around and head toward the meadow", nextScene: 'meadow' },
        ],
    },
    goIn: {
        id: 2,
        text: "text",
        options: [
            { text: "texxxxxt", nextScene: 'darkPath' },
            { text: "more text", nextScene: 'sunnyPath' },
        ]
    },
    meadow: {

    }
};
//more questions