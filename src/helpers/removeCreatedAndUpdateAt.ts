export function removeCreatedAndUpdatedeAt (data: any) {
  const { created_at, updated_at, ...rest } = data
  return rest
}
