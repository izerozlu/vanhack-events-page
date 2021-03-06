const EVENT_TYPES = {
  MEETUP: 0,
  LEAP: 1,
  RECRUITING_MISSION: 2,
  VANHACKATHON: 3,
  PREMIUM_WEBINAR: 4,
  OPEN_WEBINAR: 5,
};

const EVENT_APPLICATION_STATUSES_KEY = 'EventApplicationStatuses';

const MOCKS = {
  events: [
    {
      id: '67abb5e7-c471-46d9-9f9a-574eff8b2878',
      title: 'International Pandemic Discussion MeetUp',
      description:
        '<h3>Pretium Aenean Pharetra</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus integer. Mauris in aliquam sem fringilla. Tristique senectus et netus et malesuada fames. Metus aliquam eleifend mi in nulla posuere sollicitudin. Odio eu feugiat pretium nibh. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Gravida cum sociis natoque penatibus et magnis dis parturient. Purus ut faucibus pulvinar elementum integer enim neque. Purus faucibus ornare suspendisse sed nisi lacus sed. Pellentesque dignissim enim sit amet venenatis urna cursus. Vitae ultricies leo integer malesuada nunc. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.',
      date: '2020-08-18T18:00:00',
      type: EVENT_TYPES.MEETUP,
      location: 'Online',
      locationLink: 'https://www.youtube.com/watch?v=IXLnoqQV5wE',
      locationLinkText: 'Meetup Community',
    },
    {
      id: 'a2a7fb57-1ad1-4bdf-83e6-2e79f97f0701',
      title: '2020 Annual VanHackathon',
      description:
        '<h3>Pretium Aenean Pharetra</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus integer. Mauris in aliquam sem fringilla. Tristique senectus et netus et malesuada fames. Metus aliquam eleifend mi in nulla posuere sollicitudin. Odio eu feugiat pretium nibh. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Gravida cum sociis natoque penatibus et magnis dis parturient. Purus ut faucibus pulvinar elementum integer enim neque. Purus faucibus ornare suspendisse sed nisi lacus sed. Pellentesque dignissim enim sit amet venenatis urna cursus. Vitae ultricies leo integer malesuada nunc. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.',
      date: '2020-02-11T18:00:00',
      type: EVENT_TYPES.VANHACKATHON,
      location: 'Online',
      locationLink: 'https://www.youtube.com/watch?v=IXLnoqQV5wE',
      locationLinkText: 'Register here',
      landscapeImage:
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80',
    },
    {
      id: 'a3b5ed70-1624-471e-bf69-91337d0bf79b',
      title: 'Toronto Developer Conference 2020',
      description:
        '<h3>Volutpat Maecenas</h3>Eu non diam phasellus vestibulum lorem sed. Viverra aliquet eget sit amet tellus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Purus in mollis nunc sed id. Odio ut enim blandit volutpat maecenas volutpat blandit. Nunc mattis enim ut tellus elementum sagittis. Nibh ipsum consequat nisl vel pretium lectus quam id. Consequat mauris nunc congue nisi vitae suscipit. Elementum integer enim neque volutpat ac tincidunt vitae. Turpis in eu mi bibendum neque. Ut morbi tincidunt augue interdum velit euismod in pellentesque.</br></br>At varius vel pharetra vel turpis. Mi in nulla posuere sollicitudin. Sed vulputate odio ut enim blandit volutpat maecenas. Risus sed vulputate odio ut enim blandit. Senectus et netus et malesuada fames ac turpis. Arcu non sodales neque sodales ut etiam sit amet nisl. Dis parturient montes nascetur ridiculus mus mauris. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Magna fringilla urna porttitor rhoncus dolor purus non enim. Condimentum id venenatis a condimentum vitae. Sagittis id consectetur purus ut. Eget egestas purus viverra accumsan in nisl. In nisl nisi scelerisque eu.',
      date: '2020-08-24T19:30:00',
      type: EVENT_TYPES.LEAP,
      location: 'Online',
      locationLink: 'https://www.youtube.com/watch?v=IXLnoqQV5wE',
      locationLinkText: 'Event program',
    },
    {
      id: 'bcfb97e0-1f00-4c60-b0e2-9f9091ec2d70',
      title: 'Hiring for the 2021 Spring',
      description:
        'Magna fringilla urna porttitor rhoncus. Dictum non consectetur a erat nam at. Aliquam purus sit amet luctus venenatis lectus. Phasellus faucibus scelerisque eleifend donec. Tortor vitae purus faucibus ornare suspendisse.',
      date: '2020-11-06T17:30:00',
      type: EVENT_TYPES.PREMIUM_WEBINAR,
      location: 'Ontario, Canada',
      locationLink: 'https://goo.gl/maps/KqbqrcFpSw2ctrZM7',
      locationLinkText: 'View on map',
      video: '//player.vimeo.com/video/399003581?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1;loop=1;controls=0',
      heroImage:
        'https://images.unsplash.com/photo-1555421689-43cad7100750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
    {
      id: '2c4ed3c0-8945-466e-89fd-d0e2333b5855',
      title: "Thomas' Hiring Success Story",
      description:
        'Mauris augue neque gravida in. Quis vel eros donec ac odio tempor orci. Vitae semper quis lectus nulla at volutpat diam. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Cras sed felis eget velit aliquet sagittis id consectetur purus. Nullam eget felis eget nunc lobortis mattis. Eget sit amet tellus cras adipiscing enim eu turpis egestas.',
      date: '2020-03-18T18:00:00',
      type: EVENT_TYPES.RECRUITING_MISSION,
      location: 'Online',
      locationLink: 'https://www.youtube.com/watch?v=IXLnoqQV5wE',
      locationLinkText: 'Video',
      heroImage:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
    },
    {
      id: 'a08e0268-1c47-4737-ad31-794012512164',
      title: 'How does VanHack work under the hood?',
      description:
        'Lacinia at quis risus sed vulputate odio ut enim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Dolor morbi non arcu risus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Orci ac auctor augue mauris augue neque.',
      date: '2020-07-21T17:00:00',
      type: EVENT_TYPES.OPEN_WEBINAR,
      location: 'Online',
      locationLink: 'https://www.youtube.com/watch?v=IXLnoqQV5wE',
      locationLinkText: 'Video',
      landscapeImage:
        'https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
    },
  ],
};

document.addEventListener('DOMContentLoaded', async () => {
  PageConfiguration.fetchProfileImage();
  const events = await PageConfiguration.getEvents();

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

  static getEvents = async () => {
    Loader.set();
    const events = await Fetcher.fetchMockEvents();
    Loader.clear();
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
      const delay = Random.positiveInteger(2000, 600);
      setTimeout(() => resolve(MOCKS.events), delay);
    });
  };

  static sendMockApplication = () => {
    return new Promise((resolve) => {
      const timeoutDuration = Random.positiveInteger(2000, 800);
      setTimeout(() => resolve(), timeoutDuration);
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

    return `${month}${delimiter}${this.normalizeNumber(day)},${delimiter}${year}`;
  };

  toTime = (delimiter = ':') => {
    const hours = this.date.getHours();
    const minutes = this.date.getMinutes();

    return `${this.normalizeNumber(hours)}${delimiter}${this.normalizeNumber(minutes)}`;
  };

  normalizeNumber = (number) => {
    if (number < 10) {
      return '0' + number;
    } else {
      return number;
    }
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

class Loader {
  static set = () => {
    const eventList = document.querySelector('.event-list');
    const loader = document.querySelector('.content__loader');
    loader.classList.add('content__loader--enabled');
    eventList.classList.add('event-list--loading');
  };

  static clear = () => {
    const eventList = document.querySelector('.event-list');
    const loader = document.querySelector('.content__loader');
    loader.classList.remove('content__loader--enabled');
    eventList.classList.remove('event-list--loading');
  };
}

class ToastHelper {
  static show = ({ message, type = 'regular' }, buttonMessage, buttonLink, duration = 2250) => {
    const toast = document.querySelector('.events__toast');
    const toastMessage = toast.querySelector('.toast__message');

    toast.classList.add('events__toast--shown');
    toast.classList.add(`events__toast--${type}`);
    toastMessage.textContent = message;

    if (buttonMessage) {
      let button;
      if (buttonLink) {
        toast.classList.add('events__toast--with-link');
        button = toast.querySelector('.toast__link');
        button.setAttribute('href', buttonLink);
      } else {
        button = toast.querySelector('.toast__button');
      }
      button.textContent = buttonMessage;
    }

    setTimeout(() => {
      toast.classList.remove('events__toast--shown');
      toast.classList.remove('events__toast--with-link');
      toastMessage.textContent = '';
      button.textContent = '';
    }, duration);
  };
}

// Models

class Event {
  constructor({
    title,
    description,
    date,
    type,
    location,
    locationLink,
    locationLinkText,
    id,
    heroImage,
    landscapeImage,
    video,
    twitterButton,
  }) {
    this.title = title;
    this.description = description;
    this.date = new Date(date);
    this.type = type;
    this.location = location;
    this.locationLink = locationLink;
    this.locationLinkText = locationLinkText;
    this.id = id;
    this.heroImage = heroImage;
    this.landscapeImage = landscapeImage;
    this.video = video;
    this.twitterButton = twitterButton;

    this.eventPhotos = [];
    this.eventCard = null;
    this.applicationForm = null;
    this.disableToggledCard = null;
    this.isToggled = false;
    this.applicationInProgress = false;

    this.applied = JSON.parse(localStorage.getItem(EVENT_APPLICATION_STATUSES_KEY) || '{}')[this.id];

    this.configureEventPhotos();
  }

  configureEventPhotos = async () => {
    new Array(Random.positiveInteger(10, 5)).fill(0).forEach(async (item, index) => {
      const seed = Random.positiveInteger(1000, -1000);

      const imageUrl = `https://picsum.photos/320/180?random=${seed + index}`;
      this.eventPhotos.push(imageUrl);
    });
  };

  configureApplicationStatus = () => {
    if (this.applied) {
      this.eventCard.classList.add('event-card--applied');
    }
  };

  createEventCard = () => {
    const eventCardTemplate = document.querySelector('[event-card-template]');
    this.eventCard = eventCardTemplate.cloneNode(true);
    this.eventCard.removeAttribute('event-card-template');
    this.eventCard.setAttribute('data-id', this.id);

    this.setCardType();
    this.setCardHeader();
    this.setCardTwitterButton();
    this.setCardDescription();
    this.setCardDate();
    this.setCardLocation();
    this.setCardEventPhotos();
    this.setCardHeroImage();
    this.setCardLandscapeImage();
    this.setCardVideo();

    this.addToggleClickListener();
    this.addApplyClickListener();
    this.addCancelClickListener();

    this.configureApplicationStatus();

    return this.eventCard;
  };

  setCardType = () => {
    switch (this.type) {
      case EVENT_TYPES.MEETUP:
        this.eventCard.classList.add('event-card--meetup');
        break;
      case EVENT_TYPES.LEAP:
        this.eventCard.classList.add('event-card--leap');
        this.eventCard.classList.add('event-card--distinctive');
        break;
      case EVENT_TYPES.RECRUITING_MISSION:
        this.eventCard.classList.add('event-card--recruiting-mission');
        this.eventCard.classList.add('event-card--distinctive');
        break;
      case EVENT_TYPES.VANHACKATHON:
        this.eventCard.classList.add('event-card--vanhackathon');
        this.eventCard.classList.add('event-card--distinctive');
        break;
      case EVENT_TYPES.PREMIUM_WEBINAR:
        this.eventCard.classList.add('event-card--premium-webinar');
        break;
      case EVENT_TYPES.OPEN_WEBINAR:
        this.eventCard.classList.add('event-card--open-webinar');
        break;
    }

    if (this.heroImage) {
      this.eventCard.classList.add('event-card--with-hero-image');
    }

    if (this.landscapeImage) {
      this.eventCard.classList.add('event-card--with-landscape-image');
    }
  };

  setCardHeader = () => {
    const cardTitle = this.eventCard.querySelector('.card-header__title');
    const cardSubtitle = this.eventCard.querySelector('.card-header__subtitle');

    cardTitle.textContent = this.title;
    cardSubtitle.textContent = new EventTypeHelper(this.type).toText();
  };

  setCardTwitterButton = () => {
    const twitterButton = this.eventCard.querySelector('.event-card__twitter-button');
    const shareURL = new URL(
      `http://twitter.com/share?text=Check "${this.title}" event on VanHack! ${
        this.locationLink ? this.locationLink : ''
      }`
    );
    twitterButton.setAttribute('href', shareURL.toString());
  };

  setCardDescription = () => {
    const cardDescription = this.eventCard.querySelector('.event-card__description');
    cardDescription.innerHTML = this.description;
  };

  setCardDate = () => {
    const cardDate = this.eventCard.querySelector('.event-card__date');
    const cardDateTime = this.eventCard.querySelector('.event-card__date-time');
    cardDate.textContent = new DateHelper(this.date).toHumanReadable();
    cardDateTime.textContent = new DateHelper(this.date).toTime();
  };

  setCardLocation = () => {
    const cardLocationContainer = this.eventCard.querySelector('.event-card__location-container');
    const cardLocation = cardLocationContainer.querySelector('.event-card__location');
    const cardLocationLink = cardLocationContainer.querySelector('.event-card__location-link');
    cardLocation.textContent = this.location;

    if (this.location.toLowerCase() === 'online') {
      cardLocationContainer.classList.add('event-card__location--online');
    } else {
      cardLocationContainer.classList.add('event-card__location--physical');
    }

    cardLocationLink.setAttribute('href', this.locationLink);
    cardLocationLink.textContent = this.locationLinkText;
  };

  setCardEventPhotos = () => {
    const cardImages = this.eventCard.querySelector('.event-card__event-photos');

    this.eventPhotos.forEach((eventPhoto) => {
      const imageElement = document.createElement('img');
      imageElement.setAttribute('src', eventPhoto);
      imageElement.setAttribute('alt', `Event photo for the ${this.title} event.`);
      imageElement.classList.add('event-photos__image');

      cardImages.append(imageElement);
    });
  };

  setCardHeroImage = () => {
    const cardHeroImageWrapper = this.eventCard.querySelector('.event-card__hero-image-wrapper');
    const cardHeroImage = this.eventCard.querySelector('.event-card__hero-image');
    if (this.heroImage) {
      cardHeroImage.setAttribute('src', this.heroImage);
    } else {
      cardHeroImageWrapper.remove();
    }
  };

  setCardLandscapeImage = () => {
    const cardLandscapeImageWrapper = this.eventCard.querySelector('.event-card__landscape-image-wrapper');
    const cardLandscapeImage = this.eventCard.querySelector('.event-card__landscape-image');
    if (this.landscapeImage) {
      cardLandscapeImage.setAttribute('src', this.landscapeImage);
    } else {
      cardLandscapeImageWrapper.remove();
    }
  };

  setCardVideo = () => {
    const videoContainer = this.eventCard.querySelector('.event-card__video-container');
    const iframeWrapper = this.eventCard.querySelector('.event-card__iframe-wrapper');
    if (this.video) {
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', this.video);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('loading', 'lazy');

      iframeWrapper.append(iframe);
    } else {
      videoContainer.remove();
    }
  };

  addToggleClickListener = () => {
    this.eventCard.addEventListener('click', (event) => {
      if (!this.isToggled) {
        event.preventDefault();
        this.disableToggledCard();
        setTimeout(() => {
          this.eventCard.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }

      this.eventCard.classList.add('event-card--toggled');
      this.isToggled = true;
    });
  };

  addApplyClickListener = () => {
    this.applicationForm = this.eventCard.querySelector('.event-card__application-form');
    const applyButton = this.eventCard.querySelector('.event-card__apply-button');
    if (!this.applied) {
      applyButton.addEventListener('click', (event) => {
        event.stopPropagation();

        if (this.type === EVENT_TYPES.PREMIUM_WEBINAR) {
          this.cancelApplication();
          ToastHelper.show(
            { message: 'Cannot apply to a premium webinar.', type: 'danger' },
            'Join premium today!',
            'https://vanhack.com/premium/',
            8000
          );
        } else {
          if (this.applicationInProgress) {
            this.sendApplication();
          } else {
            this.applicationInProgress = true;
            this.resetForm();
            this.eventCard.classList.add('event-card--applying');
            this.applicationForm.querySelector('input').focus();
          }
        }
      });
    }
  };

  addCancelClickListener = () => {
    const applyButton = this.eventCard.querySelector('.event-card__cancel-button');
    applyButton.addEventListener('click', (event) => {
      event.preventDefault();

      this.cancelApplication();
    });
  };

  cancelApplication = () => {
    this.applicationInProgress = false;
    this.resetForm();
    this.eventCard.classList.remove('event-card--applying');
  };

  resetForm = () => {
    this.applicationForm.querySelectorAll('.application-form__input').forEach((input) => {
      input.value = null;
      input.parentElement.classList.remove('application-form__input-wrapper--invalid');
    });
  };

  sendApplication = async () => {
    const applicationModel = {
      name: null,
      surname: null,
      email: null,
      areaOfInterest: null,
    };
    let isFormFilled = true;
    ['name', 'surname', 'email', 'areaOfInterest'].forEach((inputName) => {
      const input = this.applicationForm.querySelector(`[name=${inputName}]`);
      input.parentElement.classList.remove('application-form__input-wrapper--invalid');

      if (isFormFilled) {
        isFormFilled = Boolean(input.value);
      }

      if (!input.value) {
        input.parentElement.classList.add('application-form__input-wrapper--invalid');
      } else {
        applicationModel[inputName] = input.value;
      }
    });
    if (isFormFilled) {
      this.eventCard.classList.add('event-card--outgoing-application');
      await Fetcher.sendMockApplication(applicationModel);

      this.eventCard.classList.add('event-card--applied');
      this.eventCard.classList.remove('event-card--outgoing-application');

      this.cancelApplication();
      this.setApplicationStatusToLocalStorage();
      ToastHelper.show({ message: 'Application sent!' });
    }
  };

  setApplicationStatusToLocalStorage = () => {
    const applicationStatuses = JSON.parse(localStorage.getItem(EVENT_APPLICATION_STATUSES_KEY) || '{}');
    applicationStatuses[this.id] = true;
    localStorage.setItem(EVENT_APPLICATION_STATUSES_KEY, JSON.stringify(applicationStatuses));
  };
}

class Events {
  constructor(events) {
    this.events = events
      .sort((eventA, eventB) => {
        if (eventA.date < eventB.date) {
          return -1;
        } else if (eventB.date < eventA.date) {
          return 1;
        } else {
          return 0;
        }
      })
      .map((event) => {
        event.disableToggledCard = this.handleEventCardToggle;
        return event;
      });
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

  handleEventCardToggle = () => {
    this.events.forEach((event) => {
      if (event.isToggled) {
        event.isToggled = false;
        event.eventCard.classList.remove('event-card--toggled');
        event.cancelApplication();
      }
    });
  };
}
