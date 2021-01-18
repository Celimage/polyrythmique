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
  private soundName;
  /**
   * Create a metronome which beats the given BPM with the specified sound
   */
  constructor(bpm: number, soundPath: Metronome.Sound = Metronome.Sound.TOC) {
    this.interval = 1 / (bpm / 60);
    this.sound = new Audio(soundPath);
    this.soundName = Sound.getSoundNameByPath(soundPath);
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

  getSoundName(): String {
    return this.soundName;
  }

  setSound(sound: Metronome.Sound): void {
    this.sound = new Audio(sound);
    this.soundName = Sound.getSoundNameByPath(sound);
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
  export namespace Sound {
    export function values(): string[] {
      return ["TOC","CLOCK_1","CLOCK_2"];
    }

    export function getPath(soundName: String) : Metronome.Sound {
      if(soundName === "TOC"){
        return Metronome.Sound.TOC;
      }else if(soundName === "CLOCK_1"){
          return Metronome.Sound.CLOCK_1;
      }else {
        return Metronome.Sound.CLOCK_2;
      }
    }

    export function getSoundNameByPath(soundPath: Metronome.Sound): String{
      console.log(soundPath);

      if(soundPath === "../../assets/sounds/metronome/toc.wav"){
        return "TOC";
      }else if(soundPath === "../../assets/sounds/metronome/clock-1.wav"){
        return "CLOCK_1";
      }else {
        return "CLOCK_2";
      }
    }
  }
