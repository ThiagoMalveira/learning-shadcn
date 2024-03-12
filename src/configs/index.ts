const HOST = 'https://tv.sbt.com.br'
const CONTENT_API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRpZ2l0YWwtc2J0IiwiZW5kcG9pbnRzIjpbIioiXSwiaG9zdHMiOlsiKiJdLCJzZXJ2aWNlcyI6WyIqIl0sImlhdCI6MTY4MzkwOTkyOX0.RpQCLWNz9jib1K4rzx3fefxBp5H69NrpJ-3qFXiNCio'

export const defaultHeader = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${CONTENT_API_TOKEN}`,
  Origin: HOST,
  Referer: HOST
}
