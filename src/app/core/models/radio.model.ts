export interface ServerRadio {
  uid: string;
  name: string;
  vimeoId: number;
  cover: string;
  releaseDate: number;
}

export class Radio {
  uid: string;
  name: string;
  vimeoId: number;
  cover: string;
  releaseDate: number;

  constructor(serverRadio: ServerRadio) {
    Object.assign(this, serverRadio);
  }
}