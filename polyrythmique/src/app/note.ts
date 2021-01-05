export class Note {
  private timecode: number;
  private duration: number;


  constructor(timecode: number, duration: number) {
    this.timecode = timecode;
    this.duration = duration;
  }


  getTimecode(): number {
    return this.timecode;
  }
  setTimecode(timecode: number): void {
    this.timecode = timecode;
  }

  getDuration(): number {
    return this.duration;
  }
  setDuration(duration: number): void {
    this.duration = duration;
  }
}
