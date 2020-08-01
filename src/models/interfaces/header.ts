export interface HeaderState {
  header: ContentHeader
}

export interface ContentHeader {
  'access-token': string,
  'cache-control': string,
  client: string,
  'content-type': string,
  expiry: string,
  'token-type': string,
  uid: string,
}