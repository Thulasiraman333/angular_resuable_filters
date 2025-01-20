export interface Users {
  userName: string,
  password: string,
  isActive: string,
  role: string,
  gender: string,
  city: string
}

export interface Column {
  fieldName: string,
  header: string,
  inputType: string,
  options?: string[]
}