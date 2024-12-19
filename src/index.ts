import axios from "axios";

type WeatherFormat = {
  request: {
    type: string;
    query: string;
    language: string;
    unit: string;
  };
  location: {
    name: string;
    country: string;
    region: string;
    lat: string;
    lon: string;
    timezone_id: string;
    localtime: string;
    localtime_epoch: number;
    utc_offset: string;
  };
  current: {
    observation_time: string;
    temperature: number;
    weather_code: number;
    weather_icons: string[];
    weather_descriptions: string[];
    wind_speed: number;
    wind_degree: number;
    wind_dir: string;
    pressure: number;
    precip: number;
    humidity: number;
    cloudcover: number;
    feelslike: number;
    uv_index: number;
    visibility: number;
    is_day: string;
  };
};


export default class Weather {
  constructor(private _accessKey: string, private query: string) {}

  set accessKey(newAccessKey: string) {
    this._accessKey = newAccessKey;
  }

  get weatherQuery(): string {
    return this.query;
  }

  set weatherQuery(newQuery: string) {
    this.query = newQuery;
  }

  async getWeather() {
    const response = await axios.get<WeatherFormat>(
      `https://api.weatherstack.com/current?access_key=${this._accessKey}&query=${this.query}`
    );
    return response.data;
  }
}
