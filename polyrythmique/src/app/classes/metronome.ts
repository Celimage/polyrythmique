export class Metronome {
  private interval: number;
  private timer: number;

  constructor(bpm: number){
    this.interval = bpm/60;
    this.timer = 0;
    this.start();
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
    this.timer = setInterval(function() {
      console.log("TICK");

    }, this.interval *1000);
  }
}
