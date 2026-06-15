'use client';

export const playSound = (soundName: string) => {
  try {
    const audio = new Audio(`/sounds/${soundName}.mp3`);
    audio.volume = 0.6;
    audio.play().catch(() => {
      // Browser blocked autoplay — ignore silently
      console.log('Sound playback blocked by browser');
    });
  } catch (error) {
    console.log('Sound error:', error);
  }
};

export const playClick = () => playSound('click');
export const playDing = () => playSound('ding');
export const playBuzz = () => playSound('buzz');
export const playSuccess = () => playSound('success');
export const playExcellent = () => playSound('excellent');
