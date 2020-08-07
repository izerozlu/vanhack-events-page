const EVENT_TYPES = {
  MEETUP: 0,
  LEAP: 1,
  RECRUITING_MISSION: 2,
  VANHACKATHON: 3,
  PREMIUM_WEBINAR: 4,
  OPEN_WEBINAR: 5,
};

const MOCKS = {
  events: [
    {
      id: '67abb5e7-c471-46d9-9f9a-574eff8b2878',
      title: 'International Pandemic Discussion MeetUp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '2020-08-18T18:00:00',
      type: EVENT_TYPES.MEETUP,
      location: 'Online',
    },
    {
      id: 'a3b5ed70-1624-471e-bf69-91337d0bf79b',
      title: 'Toronto VanHackathon 2020',
      description:
        'At auctor urna nunc id cursus metus aliquam eleifend mi. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada.</br>Ac placerat vestibulum lectus mauris ultrices eros. Gravida dictum fusce ut placerat orci. Lobortis feugiat vivamus at augue eget arcu dictum varius duis.</br>Consectetur a erat nam at lectus.',
      date: '2020-08-24T19:30:00',
      type: EVENT_TYPES.LEAP,
      location: 'Online',
    },
    {
      id: 'bcfb97e0-1f00-4c60-b0e2-9f9091ec2d70',
      title: 'Hiring for the 2021 Spring',
      description:
        'Magna fringilla urna porttitor rhoncus. Dictum non consectetur a erat nam at. Aliquam purus sit amet luctus venenatis lectus. Phasellus faucibus scelerisque eleifend donec. Tortor vitae purus faucibus ornare suspendisse.',
      date: '2020-11-06T17:30:00',
      type: EVENT_TYPES.RECRUITING_MISSION,
      location: 'Ontario, Canada',
    },
    {
      id: '2c4ed3c0-8945-466e-89fd-d0e2333b5855',
      title: "Izer's Hiring Success Story",
      description:
        'Mauris augue neque gravida in. Quis vel eros donec ac odio tempor orci. Vitae semper quis lectus nulla at volutpat diam. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Cras sed felis eget velit aliquet sagittis id consectetur purus. Nullam eget felis eget nunc lobortis mattis. Eget sit amet tellus cras adipiscing enim eu turpis egestas.',
      date: '2020-03-18T18:00:00',
      type: EVENT_TYPES.PREMIUM_WEBINAR,
      location: 'Online',
    },
    {
      id: 'a08e0268-1c47-4737-ad31-794012512164',
      title: 'How do VanHack works under the hood?',
      description:
        'Lacinia at quis risus sed vulputate odio ut enim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Dolor morbi non arcu risus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Orci ac auctor augue mauris augue neque.',
      date: '2020-07-21T17:00:00',
      type: EVENT_TYPES.OPEN_WEBINAR,
      location: 'Online',
    },
  ],
};

document.addEventListener('DOMContentLoaded', async () => {
  PageConfiguration.fetchProfileImage();
  const events = await PageConfiguration.appendEvents();

  const eventsModel = new Events(events);
});

// Configuration

class PageConfiguration {
  static fetchProfileImage = async () => {
    const unsplashUrl =
      'https://api.unsplash.com/photos/random?client_id=jRvpHsdConiqCjc_5ol0ihXJwiVB1YEvfZmmYtjpWsE&collections=895539';
    const result = await Fetcher.request({ url: unsplashUrl });
    if (result instanceof Error) {
      console.error('Error in profile image fetch.');
    } else {
      const profilePictureUrl = result.urls.thumb;

      const profileImageElement = document.querySelector('.profile-list__profile-image');
      if (profileImageElement) {
        profileImageElement.setAttribute('src', profilePictureUrl);
      }
    }
  };

  static appendEvents = async () => {
    const events = await Fetcher.fetchMockEvents();
    if (events.length) {
      return events.map((rawEvent) => new Event(rawEvent));
    } else {
      return [];
    }
  };
}

// Utilities

class Fetcher {
  static request = async ({ url, method = 'GET', body }) => {
    const options = { method };
    if (body) {
      options.body = body;
    }
    const response = await fetch(url, options);
    if (response.status === 200) {
      const result = await response.json();
      return result;
    } else {
      return new Error(JSON.stringify(response));
    }
  };

  static fetchMockEvents = () => {
    return new Promise((resolve) => {
      const delay = Random.positiveInteger(1000);
      setTimeout(() => resolve(MOCKS.events), delay);
    });
  };
}

class Random {
  static positiveInteger = (max = 100, min = 0) => {
    return (Number.parseInt((Math.random() * 1000).toFixed(0)) % max) + min;
  };
}

class ElementHelper {
  static createElement = ({ tag = 'div', className, textContent }) => {
    const element = document.createElement(tag);
    if (className) {
      if (Array.isArray(className)) {
        className.forEach((classNameItem) => {
          element.classList.add(classNameItem);
        });
      } else {
        element.classList.add(className);
      }
    }

    if (textContent) {
      element.textContent = textContent;
    }

    return element;
  };
}

class DateHelper {
  constructor(date) {
    this.date = date;
    return this;
  }

  toHumanReadable = (delimiter = ' ') => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const day = this.date.getDate();
    const month = months[this.date.getMonth()];
    const year = this.date.getFullYear();

    return `${month}${delimiter}${day},${delimiter}${year}`;
  };
}

class EventTypeHelper {
  constructor(eventType) {
    this.eventType = eventType;
    return this;
  }

  toConstant = () => this.eventType;
  toText = () => {
    const events = ['MeetUp', 'Leap', 'Recruiting Mission', 'VanHackathon', 'Premium Webinar', 'Webinar'];
    return events[this.eventType];
  };
}

// Models

class Event {
  constructor({ title, description, date, type, location, id }) {
    this.title = title;
    this.description = description;
    this.date = new Date(date);
    this.type = type;
    this.location = location;
    this.id = id;

    this.eventPhotos = [];
    this.eventCard = null;

    this.configureEventPhotos();
  }

  configureEventPhotos = async () => {
    new Array(Random.positiveInteger(10, 4)).fill(0).forEach(async (item, index) => {
      const height = Random.positiveInteger(400, 200);
      const width = Random.positiveInteger(400, 200);

      const imageUrl = `https://picsum.photos/${height}/${width}?random=${index}`;
      this.eventPhotos.push(imageUrl);
    });
  };

  createEventCard = () => {
    const eventCardTemplate = document.querySelector('[event-card-template]');
    this.eventCard = eventCardTemplate.cloneNode(true);
    this.eventCard.removeAttribute('event-card-template');
    this.eventCard.setAttribute('data-id', this.id);

    this.setCardType();
    this.setCardHeader();
    this.setCardDate();
    this.setCardLocation();

    return this.eventCard;
  };

  setCardType = () => {
    switch (this.type) {
      case EVENT_TYPES.MEETUP:
        this.eventCard.classList.add('event-card--meetup');
        break;
      case EVENT_TYPES.LEAP:
        this.eventCard.classList.add('event-card--leap');
        break;
      case EVENT_TYPES.RECRUITING_MISSION:
        this.eventCard.classList.add('event-card--recruiting-mission');
        break;
      case EVENT_TYPES.VANHACKATHON:
        this.eventCard.classList.add('event-card--vanhackathon');
        break;
      case EVENT_TYPES.PREMIUM_WEBINAR:
        this.eventCard.classList.add('event-card--premium-webinar');
        break;
      case EVENT_TYPES.OPEN_WEBINAR:
        this.eventCard.classList.add('event-card--open-webinar');
        break;
    }
  };

  setCardHeader = () => {
    const cardTitle = this.eventCard.querySelector('.card-header__title');
    const cardSubtitle = this.eventCard.querySelector('.card-header__subtitle');

    cardTitle.textContent = this.title;
    cardSubtitle.textContent = new EventTypeHelper(this.type).toText();
  };

  setCardDate = () => {
    const cardDate = this.eventCard.querySelector('.event-card__date');
    cardDate.textContent = new DateHelper(this.date).toHumanReadable();
  };

  setCardLocation = () => {
    const cardLocation = this.eventCard.querySelector('.event-card__location');
    cardLocation.textContent = this.location;
  };
}

class Events {
  constructor(events) {
    this.events = events;
    this.appendEventsToPageFromTemplate();
  }

  appendEventsToPageFromTemplate = () => {
    const eventList = document.querySelector('.content__event-list');
    const eventCardTemplate = eventList.querySelector('[event-card-template]');

    this.events.forEach((event) => {
      const eventCard = event.createEventCard();
      eventList.append(eventCard);
    });

    eventCardTemplate.remove();
  };
}
