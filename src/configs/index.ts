import { CONTENT_API_TOKEN } from "./enviromental";

const HOST = 'https://tv.sbt.com.br'

export const defaultHeader = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${CONTENT_API_TOKEN}`,
  Origin: HOST,
  Referer: HOST
}
