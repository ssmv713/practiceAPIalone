// Generated by https://quicktype.io

export interface MembersFetchResponse {
  results: Result[];
  info: Info;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface Result {
  name: Name;
  email: string;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
}

export interface ID {
  name: string;
  value: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
