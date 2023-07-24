export interface ICalendar {
  id: number;
  name: string;
  color: string;
}

export interface IEvent {
  id: number;
  date: string;
  time?: string;
  desc: string;
  calendarId: number;
}

export function getCalendarsEndpoint(): Promise<ICalendar[]> {
  return fetch('https://localhost:8080/calendars').then(resp => {
    return resp.json()
  })
}

export function getEventEndpoint(): Promise<IEvent[]> {
  return fetch('https://localhost:8080/events').then(resp => {
    return resp.json()
  })
}


