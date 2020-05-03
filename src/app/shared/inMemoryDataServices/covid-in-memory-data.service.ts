import { INewsDetails } from '../interfaces/INewsDetails';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class CovidInMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: IUser[] = [{
      id: 1,
      name: 'Nimit Johri',
      username: 'nimitjohri',
      password: 'pass123'
    },
    {
      id: 2,
      name: 'Sub Admin',
      username: 'subadmin',
      password: 'subadmin'
    }];


    const news: INewsDetails[] = [
      {
        id: '1',
        headline: 'Coronavirus live updates: Total cases jump to 28,380, India sees highest single-day fatalities',
        source: 'News 24',
        summary: '1,463 new cases were reported in the last 24 hours, taking India\'s total to 28,380. The\
        country also saw the highest single-day fatalities at 60.',
        content: '1,463 new cases were reported in the last 24 hours, taking India\'s total to 28,380. The\
          country also saw the highest single-day fatalities at 60. Meanwhile the Centre has cancelled the contract with two Chinese firms that had supplied faulty rapid testing kits. Stay with TOI for all updates.',
        createdAt: new Date(),
      },
      {
        id: '2',
        headline: 'Entire Pune city now containment zone till May 3: Civic chief',
        source: 'Times Now',
        summary: 'Pune city in Maharashtra, which hasreported a rapid spread of coronavirus infection, was on Monday\
        notified as a containment zone till May 3 by the city municipal corporation',
        content: 'Pune city in Maharashtra, which hasreported a rapid spread of coronavirus infection, was on Monday\
          notified as a containment zone till May 3 by the city municipal corporation. In view of the order issued by \
          Pune municipal commissioner Shekhar Gaikwad to this effect, police also extended the restrictions already \
          imposed on residents. "We have already imposed a curfew in Pune city to check the spread of the coronavirus," \
          said Joint Commissioner of Police Ravindra Shisve',
        createdAt: new Date(),
      },
      {
        id: '3',
        headline: 'Covid-19 cases rise to 2,262 in Rajasthan after 77 more people test positive',
        source: 'India Tv',
        summary: 'Death toll now 50 after 9 more fatalities - 6 in Jaipur, 1 each in Jodhpur, Bharatpur \
        & Karauli districts: Health Department',
        content: '',
        createdAt: new Date(),
      },
      {
        id: '4',
        headline: 'Maharashtra permits over 20K industries to open during lockdown',
        source: 'Times Now',
        summary: 'The Maharashtra government has permitted as many 20,037 industries to open during lockdown and\
        start working to gradually kickstart the economy, Industries Minister Subhash Desai said here on Monday.',
        content: 'The Maharashtra government has permitted as many 20,037 industries to open during lockdown and\
          start working to gradually kickstart the economy, Industries Minister Subhash Desai said here on Monday. \
          These include 6,589 industries which are in the essential services category which were permitted before April \
          27 and another 13,448 that were permitted in the past one week, he said.',
        createdAt: new Date(),
      },
      {
        id: '5',
        headline: 'Schools, malls, public transport likely to remain shut beyond May 3; decision on lockdown over weekend',
        source: 'Aaj Tak',
        summary: 'In the green zones districts, limited private vehicles may be allowed to ply but full scale train and air\
        services are unlikely to start anytime soon',
        content: 'In the green zones districts, limited private vehicles may be allowed to ply but full scale train and air\
          services are unlikely to start anytime soon, an official privy to the developments said.There is a possibility of \
          regulated train or air services after mid-May between some designated places depending on the Covid-19 situation',
        createdAt: new Date(),
      },
    ];

    return {news, users};
  }

  genId(news: INewsDetails[]) {
return news.length > 0 ? Math.max(...news.map(n => (n.id as unknown as number))) + 1 : 11;
  }
}
