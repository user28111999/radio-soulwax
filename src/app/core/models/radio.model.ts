export interface ServerRadio {
  uid: string;
  name: string;
  vimeoId: number;
  cover: string;
  description: string;
  credits: string[];
  releaseDate: number;
}

export class Radio {
  uid: string;
  name: string;
  vimeoId: number;
  cover: string;
  description: string;
  credits: string[];
  releaseDate: number;

  constructor(serverRadio: ServerRadio) {
    Object.assign(this, serverRadio);
  }
}
