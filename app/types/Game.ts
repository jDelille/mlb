export type Game = {
 homeTeam: string;
 awayTeam: string;
 homeScore: number;
 awayScore: number;
 name: string;
 shortName: string;
 id: string;
 date: string;
 season: {
  slug: string
};
 competitions: {
   id: string;
   status: {
     type: {
      description: string;
    }
  }
   competitors: [
     {
       id: string;
       name: string;
       score: string;
       homeAway: string;
       winner: boolean;
       team: {
         abbreviation: string;
         displayName: string;
         shortDisplayName: string;
         logo: string;
       };
     },
     {
       id: string;
       name: string;
       score: string;
       homeAway: string;
       winner: boolean;
       team: {
        abbreviation: string;
         displayName: string;
         shortDisplayName: string;
         logo: string;
       };
     }
   ];
   venue: {
     fullName: string;
     address: {
       city: string;
       state: string;
       country: string;
     };
   };
 }[];
};
