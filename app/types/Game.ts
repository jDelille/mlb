export type Game = {
 homeTeam: string;
 awayTeam: string;
 homeScore: number;
 awayScore: number;
 name: string;
 shortName: string;
 id: string;
 date: string;
 competitions: {
   id: string;
   status: {
     type: string;
     detail: string;
   };
   competitors: [
     {
       id: string;
       name: string;
       score: string;
       homeAway: string;
       team: {
         abbreviation: string;
         logo: string;
       };
     },
     {
       id: string;
       name: string;
       score: string;
       homeAway: string;
       team: {
         abbreviation: string;
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
