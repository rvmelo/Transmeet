import {User} from '../global/types/redux';

export type RegisterStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  Onboarding: undefined;
};

export type TransTabParamList = {
  TransHomeRoutes: undefined;
  CandidaciesScreen: undefined;
};

export type TransStackParamList = {
  TransHomeScreen: undefined;
  SponsorProfileScreen: {user: User};
};

export type SponsorTabParamList = {
  SponsorHomeRoutes: undefined;
  CandidatesScreen: undefined;
};

export type SponsorStackParamList = {
  SponsorHomeScreen: undefined;
  TransProfileScreen: undefined;
};
