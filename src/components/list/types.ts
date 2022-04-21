import {User} from '../../global/types/redux';

interface SponsorData {
  name: string;
}

export interface CandidacyData {
  id: number;
  accounts_accountsTomatch_idSponsor: SponsorData;
  accept: boolean | undefined;
}

export interface TransUserData {
  id: number;
  accounts_accountsTomatch_idUser: User;
  accept: boolean | undefined;
}
