/**
 * Represents a metronome
 */
export class Metronome {
  /**
   * The interval between each tick
   */
  private interval: number;
  /**
   * The timer used for playing the metronome
   *
   * @example
   * this.timer = setInterval(function() {}, time);
   */
  private timer: number = 0;
  /**
   * The audio player for the metronome. The sound is one of those defined in the {@link Metronome.Sound|metronome sound enum}
   */
  private sound;

  /**
   * Create a metronome which beats the given BPM with the specified sound
   */
  constructor(bpm: number, soundPath: Metronome.Sound = Metronome.Sound.TOC) {
    this.interval = 1 / (bpm / 60);
    this.sound = new Audio(soundPath);
  }

  /**
   * Start the metronome
   */
  start(): void {
    this.tick();
  }

  /**
   * Start the metronome for a given number of tick
   *
   * @param {number} nbTicks The number of ticks that should be played
   * @returns A promise that allows to wait until the metronome stop
   */
  async startFor(nbTicks: number): Promise<any> {
    let time = ((nbTicks - 1) * this.interval) * 1000;
    this.tick();
    await new Promise<any>(function(resolve) {
      setTimeout(function () {
        resolve();
      }, time);
    });
    clearInterval(this.timer);
    return true;
  }

  /**
   * Stop the metronome
   */
  stop():void {
    clearInterval(this.timer);
  }

  /**
   * Get the BPM associated to the metronome
   * @returns The BPM of the metronome
   */
  getBPM(): number {
    return 1 / (this.interval * 60);
  }

  /**
   * Set the BPM associated to the metronome
   * @param {number} bpm The new BPM of the metronome
   */
  setBPM(bpm: number): void {
    this.interval = 1 / (bpm / 60);
  }

  getSoundName(): string {
    return "Toc";
  }
  setSound(sound: Metronome.Sound): void {

  }

  /**
   *
   */
  private tick(): void {
    this.sound.play();
    this.timer = setInterval(function(sound: any) {
      sound.play();
    }, this.interval * 1000, this.sound);
  }
}

/**
 *
 */
export namespace Metronome {
  /**
   *
   */
  export const enum Sound {
    TOC = "../../assets/sounds/metronome/toc.wav",
    CLOCK_1 = "../../assets/sounds/metronome/clock-1.wav",
    CLOCK_2 = "../../assets/sounds/metronome/clock-2.wav"
  }
}
