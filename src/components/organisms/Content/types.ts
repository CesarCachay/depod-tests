export type Initiatives = {
  id: string | number;
  name: string;
  author: string;
  description: string;
  objetive: string;
  mnemonic: string;
  neccesity: string;
  status: string;
  managers: string[];
  created: string;
};

export type InitiativesListHeaders = {
  id: string | number;
  name: string;
  author: string;
  description: string;
  created: string;
  mnemonic: string;
  status: string;
};
