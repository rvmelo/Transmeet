interface SponsorData {
  name: string;
}

export interface CandidacyData {
  id: number;
  accounts_accountsTomatch_idSponsor: SponsorData;
  accept: boolean | undefined;
}
