export interface FormSearchProps {
  handleChange: (event: any) => void, 
  handleSubmit: (event: any) => void, 
  handleSort: () => void, 
  sort: boolean, 
  error: string
  search?: any,
}