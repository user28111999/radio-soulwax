export interface ServerRadio {
  uid: string;
  name: string;
  vimeoId: number;
  cover: string;
  description: string;
  credits: string[];
  releaseDate: number;
  popularity: number;
}

export class Radio {
  uid: string;
  name: string;
  vimeoId: number;
  cover: string;
  description: string;
  credits: string[];
  releaseDate: number;
  popularity: number;

  constructor(serverRadio: ServerRadio) {
    Object.assign(this, serverRadio);
  }
}
