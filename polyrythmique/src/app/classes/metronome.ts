export class Metronome {
  private interval: number;
  private timer: number = 0;
  private sound = new Audio(Metronome.Sound.TOC);

  constructor(bpm: number, soundPath: Metronome.Sound = Metronome.Sound.TOC) {
    this.interval = bpm/60;
    /*if(Metronome.Sound != null) {
      this.sound = new Audio(soundPath);
    } else {
      this.sound = new Audio(Metronome.Sound.TOC);
    }*/
  }

  start(): void {
    this.tick();
  }

  stop() {
    clearInterval(this.timer);
  }

  getBpm(){
    return this.interval*60;
  }

  setBpm(bpm: number){
    this.interval = bpm/60;
  }

  private tick() {
    this.timer = setInterval(function(sound: any) {
      sound.play();
    }, this.interval *1000, this.sound);
  }
}

export namespace Metronome {
  export enum Sound {
    TOC = "../../assets/sounds/metronome/toc.wav",
    CLOCK_1 = "../../assets/sounds/metronome/clock-1.wav",
    CLOCK_2 = "../../assets/sounds/metronome/clock-2.wav"
  }
}
