import {
  Mood1,
  Mood2,
  Mood3,
  Mood4,
  Mood5,
  Mood6,
  Mood7,
  Mood8,
  SoundImg1,
  SoundImg2,
  SoundImg3,
  SoundImg4,
  SoundImg5,
  SoundImg6,
  SoundImg7,
  SoundImg8,
} from ".";

export const listTextTutorialDJ = [
  "Write down the details of your dream",
  "select the date when the dream occurred",
  "press the Get Interpretation button and the results will appear",
  "You can see all your dream interpretation result history ",
];

export const listTextTutorialBreathing = [
  "Choose how many minutes you want to do the breathing",
  "Audio Will Automatically Play",
  "Follow the instructions on the screen",
];

export const listMood = [
  {
    id: 1,
    numberImg: Mood1,
    delay: 50,
    name: "Anxious",
  },
  {
    id: 2,
    numberImg: Mood2,
    delay: 150,
    name: "Calm",
  },
  {
    id: 3,
    numberImg: Mood3,
    delay: 250,
    name: "Fear",
  },
  {
    id: 4,
    numberImg: Mood4,
    delay: 350,
    name: "Frustated",
  },
  {
    id: 5,
    numberImg: Mood5,
    delay: 450,
    name: "Happy",
  },
  {
    id: 6,
    numberImg: Mood6,
    delay: 550,
    name: "Loneliness",
  },
  {
    id: 7,
    numberImg: Mood7,
    delay: 650,
    name: "Sad",
  },
  {
    id: 8,
    numberImg: Mood8,
    delay: 750,
    name: "Tired",
  },
];

// delays for page breathing
export const delays = [0, 50, 100, 150];

// data for: diaphragmatic breathing
export const datasd: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 5) {
  if (i % 10 < 5) {
    datasd.push({
      start: i,
      end: i + 4,
      text: "inhale through the nose, squeeze your abs",
    });
  } else {
    datasd.push({
      start: i,
      end: i + 4,
      text: "exhale through your nose, let your belly",
    });
  }
}

// data for: reverse breathing
export const datasrb: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 5) {
  if (i % 10 < 5) {
    datasrb.push({
      start: i,
      end: i + 4,
      text: "inhale through the nose, squeeze your abs",
    });
  } else {
    datasrb.push({
      start: i,
      end: i + 4,
      text: "exhale through your nose, let your belly",
    });
  }
}

// data for: three dimensional breathing
export const datastd: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 5) {
  if (i % 15 < 5) {
    datastd.push({
      start: i,
      end: i + 4,
      text: "inhale through the nose, squeeze your abs",
    });
  } else if (i % 15 < 10) {
    datastd.push({ start: i, end: i + 4, text: "hold your breath" });
  } else {
    datastd.push({
      start: i,
      end: i + 4,
      text: "exhale through your nose, let your belly",
    });
  }
}

// data for: 4-7-8 breathing
export const datas478: { start: number; end: number; text: string }[] = [];
for (let i = 0; i < 300; i += 19) {
  datas478.push({
    start: i,
    end: i + 3,
    text: "inhale through the nose, squeeze your abs",
  });
  datas478.push({ start: i + 4, end: i + 10, text: "hold your breath" });
  datas478.push({
    start: i + 11,
    end: i + 18,
    text: "exhale through your nose, let your belly",
  });
}

export const dataCardBreath = [
  {
    id: 0,
    title: "Diaphragmatic Breathing",
    description:
      "Diaphragmatic breathing, also known as deep or abdominal breathing, involves using the diaphragm to take deep breaths, causing the abdomen to rise while keeping the chest still. This technique promotes full oxygen exchange, which can reduce stress and anxiety by activating the parasympathetic nervous system. Benefits include improved lung function, increased oxygen supply to the body, lower blood pressure, and enhanced core muscle stability. It is commonly used in practices like yoga and meditation to support overall physical and mental well-being.",
    timeRanges: datasd,
  },
  {
    id: 1,
    title: "Reverse Breathing",
    description:
      "Reverse breathing, also known as Taoist breathing, is a technique where the abdomen contracts during inhalation and expands during exhalation, the opposite of normal diaphragmatic breathing. This method is often used in martial arts, qigong, and certain forms of meditation. The primary benefit of reverse breathing is to strengthen the core muscles and improve internal energy flow, which is believed to enhance overall vitality and resilience. It can also help improve focus and mental clarity by promoting a heightened awareness of the breath and body. Additionally, reverse breathing can aid in developing greater control over the body's respiratory and abdominal muscles, contributing to improved posture and stability.",
    timeRanges: datasrb,
  },
  {
    id: 2,
    title: "Three Dimensional Breathing",
    description:
      "Three-dimensional breathing is a technique that involves expanding the breath into three dimensions: front to back, side to side, and top to bottom. This method ensures that the entire lung capacity is utilized, promoting full and deep breaths. The primary focus is on the lateral (side-to-side) and posterior (back) expansion, which is often neglected in shallow breathing. Benefits of three-dimensional breathing include enhanced oxygen intake, improved respiratory efficiency, and reduced stress. This technique can also support better posture and core strength by engaging the diaphragm and intercostal muscles. It is commonly practiced in yoga, Pilates, and physical therapy to increase body awareness and overall respiratory health",
    timeRanges: datastd,
  },
  {
    id: 3,
    title: "4-7-8 Breathing Technique",
    description:
      "The 4-7-8 Breathing Technique, developed by Dr. Andrew Weil, is a simple yet powerful relaxation exercise. It involves inhaling through the nose for 4 seconds, holding the breath for 7 seconds, and exhaling slowly through the mouth for 8 seconds. This practice helps calm the nervous system and reduce stress by promoting oxygen exchange and regulating breath. The technique can improve sleep quality, reduce anxiety, and lower blood pressure by encouraging a slower, more deliberate breathing pattern. Additionally, it can help manage cravings and control emotional responses, making it a valuable tool for overall mental and physical health.",
    timeRanges: datas478,
  },
];

export const soundList = [
  {
    id: 1,
    name: "Bird Song",
    img: SoundImg1,
    delay: 50,
    audio: "/assets/audio/birdsong.mp3",
  },
  {
    id: 2,
    name: "Forest Lullaby",
    img: SoundImg2,
    delay: 150,
    audio: "/assets/audio/forest-lullaby.mp3",
  },
  {
    id: 3,
    name: "Night Sound",
    img: SoundImg3,
    delay: 250,
    audio: "/assets/audio/night-sound.mp3",
  },
  {
    id: 4,
    name: "Ocean Waves",
    img: SoundImg4,
    delay: 350,
    audio: "/assets/audio/ocean-waves.mp3",
  },
  {
    id: 5,
    name: "Sleepy Rain",
    img: SoundImg5,
    delay: 450,
    audio: "/assets/audio/sleepy-rain.mp3",
  },
  {
    id: 6,
    name: "Stream",
    img: SoundImg6,
    delay: 550,
    audio: "/assets/audio/stream.mp3",
  },
  {
    id: 7,
    name: "Waterfall",
    img: SoundImg7,
    delay: 650,
    audio: "/assets/audio/waterfall.mp3",
  },
  {
    id: 8,
    name: "Wind",
    img: SoundImg8,
    delay: 750,
    audio: "/assets/audio/wind.mp3",
  },
];
