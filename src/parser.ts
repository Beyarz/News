interface Option {
  host: string;
}

export interface Result {
  title: string,
  description: string,
  date: string,
  error: string
}

const options: Option = require('./assets/config.json')
const axios = require('axios').default

/**
 * @returns {Promise}
 */
export function getNews (): Promise<any> {
  return axios({
    method: 'GET',
    url: options.host,
    headers: {
      'Content-Type': 'text/plain'
    }
  })
    .then(function (response: any): Result {
      // const title = response.data.current.temp
      // const description = response.data.current.weather[0].description
      // const date = response.data.current.weather[0].description
      const title: string = null
      const description: string = null
      const date: string = null

      const result: Result = {
        title: title,
        description: description,
        date: date,
        error: null
      }
      return result
    })
    .catch(function (error: string): Result {
      const result: Result = {
        title: null,
        description: null,
        date: null,
        error
      }

      console.log(error)
      return result
    })
}
