import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';


const scrollTracker = document.querySelector('.scroll-tracker');

scrollTracker.animate(
    { transform: ['translateX(0)', 'translateX(1)']},
    { duration: 10000, // Totally arbitrary!
      fill: 'both',
      timeline: new ScrollTimeline({
          scrollOffsets: [
              new CSSUnitValue(0, 'px'),
              new CSSUnitValue(200, 'px')
          ]
      })
    });

// const scrollTrackerTimeline = new ScrollTimeline({
//     source: document.scrollingElement,
//     orientation: "block",
//     scrollOffsets: [CSS.percent(0), CSS.percent(100)]
// })

// scrollTracker.animate(
//     {
//         transform: ["scaleX(0)", "scaleX(1)"]
//     },
//     {
//         duration:1,
//         timeline:scrollTrackerTimeline,
//     }
// );