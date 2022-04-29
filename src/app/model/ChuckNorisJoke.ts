export interface ChuckNorisJoke {
  id: string,
  value: string
  icon_url: string,
  created_at: string,
  updated_at: string,
  url: string,
  categories?: string[],
}

export interface ChuckNorisSearchJokes {
  total: number,
  result: ChuckNorisJoke[]
}
