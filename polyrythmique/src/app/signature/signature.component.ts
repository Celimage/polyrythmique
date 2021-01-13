import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.sass']
})
/**
 * Used to define the signature of a project or measure
 */
export class SignatureComponent implements OnInit {
  /**
   * The number of times of each measure
   */
  private top: number = 4;
  /**
   * The note used as time base
   */
  private bottom: SignatureComponent.SigBottom = SignatureComponent.SigBottom.QUARTER_NOTE;


  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  /**
   * Get the {@link SignatureComponent#top|top}'s value
   */
  getTop(): number {
    return this.top;
  }
  /**
   * Set the {@link SignatureComponent#top|top}'s value
   */
  setTop(top: number): void {
    if(this.isCompatible(top, this.bottom)) {
      this.top = top;
    }
  }

  /**
   * Get the {@link SignatureComponent#bottom|bottom}'s value
   */
  getBottom(): SignatureComponent.SigBottom {
    return this.bottom;
  }

  /**
   * Set the {@link SignatureComponent#bottom|bottom}'s value
   */
  setBottom(bottom: SignatureComponent.SigBottom): void {
    if(this.isCompatible(this.top, bottom)) {
      this.bottom = bottom;
    }
  }

  /**
   * Set both {@link SignatureComponent#top|top} and
   *   {@link SignatureComponent#bottom|bottom} values of the signature
   */
  setTopAndBottom(top: number, bottom: SignatureComponent.SigBottom) {
    if(this.isCompatible(top, bottom)) {
      this.top = top;
      this.bottom = bottom;
    }
  }

  /**
   * Check if the {@link SignatureComponent#top|top} and {@link SignatureComponent#bottom|bottom} number of the signature are compatible<br />
   * NOT FINISHED
   */
  private isCompatible(top: number, bottom: SignatureComponent.SigBottom): boolean {
    if(top >= 1 && top % 1 == 1) {
      return true;
    } else {
      return false;
    }
  }

}

/**
 * @ignore
 */
export namespace SignatureComponent {
  /**
   * Stock the possible values of the signature's {@link SignatureComponent#bottom|bottom} attribute
   */
  export enum SigBottom {
    WHOLE_NOTE = 1,
    HALF_NOTE = 2,
    QUARTER_NOTE = 4,
    HEIGHT_NOTE = 8,
    SIXTEEN_NOTE = 16
  }
}
