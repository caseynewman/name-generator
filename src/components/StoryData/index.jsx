export const storyData = [
    {
        id: 'start',
        text: "You're standing at the edge of a forest. Vines wrap around branches that create an arched opening into the woods. Behind you lies a bright meadow. Where are you heading?",
        options: [
            { text: "You walk confidently into the forest", nextSceneId: 'goIn' },
            { text: "You turn around and run toward the meadow", nextSceneId: 'meadow' },
        ],
    },
    {
        id: 'goIn',
        text: "The light dims and air cools as soon as you step into the forest. You walk forward and see two separate paths lying ahead. The path to the left is dark - did a bat just fly by? In the path to the right, the sun peeks through the trees and birds are chirping.",
        options: [
            { text: "You take a deep breath and head to the left. This is meant to be an adventure after all.", nextSceneId: 'darkPath' },
            { text: "You're more of a 'take a stroll and listen to the birds chirping' kind of explorer. You head to the right.", nextSceneId: 'sunnyPath' },
            { text: "You're not really a path kind of folk anyway - you decide to skip them both and head straight into the trees.", nextSceneId: 'trees' },
        ]
    },
    {
        id: 'darkPath',
        text: "A bat immediately flies right into your head. After a quick reset, you're fine.....",
        options: [
            { text: 'yes', nextSceneId: 'find a stream' },
            { text: 'no', nextSceneId: 'you see a path' },
        ]
    },
    {
        id: 'meadow',
        text: 'you see butterflies. do you follow them?',
        options: [
            { text: 'yes', nextSceneId: 'find a stream' },
            { text: 'no', nextSceneId: 'you see a path' },
        ]
    }
];
//more questions